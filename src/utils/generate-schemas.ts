import { existsSync, promises } from 'node:fs';
import * as path from 'node:path';
import * as glob from 'glob';
import { generate } from 'ts-to-zod';

const CONFIG = {
	ignorePatterns: ['**/*.spec.ts', '**/*.test.ts', '**/*.d.ts'],
	relativePaths: {
		models: 'src/models',
		schemas: 'src/schemas',
		rules: 'src/rules',
		index: 'src/index.ts',
	},
	specificModels: [] as string[],
};

const SCHEMA_SECTION_HEADER = '\n\n// Zod Schemas';
const EXPORTED_SCHEMA = /export\s+const\s+(\w+Schema)\b/g;
const EXPORTED_MODEL_TYPE = /export\s+(?:type|interface|enum)\s+(\w+)\b/g;
const MODEL_TYPE_IMPORT = /import\s+type\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]/g;
const SIBLING_SCHEMA_IMPORT = /import\s+\{\s*(\w+Schema)\s*\}\s+from\s+['"]\.\/(\w+)['"]/g;
const PLACEHOLDER_SCHEMA = /const\s+(\w+Schema)\s*=\s*z\.any\(\);\n?/g;

type SchemaExport = {
	schemaName: string;
	typeName?: string;
};

type GeneratedSchema = {
	relativePath: string;
	modelImportPath: string;
	exports: SchemaExport[];
	text: string;
};

async function generateSchemas(): Promise<void> {
	const modelsDir = path.resolve(process.cwd(), CONFIG.relativePaths.models);
	const schemasDir = path.resolve(process.cwd(), CONFIG.relativePaths.schemas);

	await normalizeUuidModel(modelsDir);

	const modelFiles = await findModelFiles(modelsDir);
	console.log(`Generating Zod schemas for ${modelFiles.length} models`);

	const schemas = await Promise.all(modelFiles.map((modelFile) => buildSchema(modelFile, modelsDir, schemasDir)));

	console.log(`Typed ${typeRequiredAnySchemas(schemas)} schemas that use required z.any()`);
	console.log(`Wrapped ${typeRecursiveSchemas(schemas)} recursive schemas in z.lazy()`);
	assertSchemasAreComplete(schemas);

	await writeSchemas(schemas, schemasDir);
	await writeIndexExports(schemasDir);
}

async function normalizeUuidModel(modelsDir: string): Promise<void> {
	const uuidPath = path.join(modelsDir, 'UUID.ts');
	const uuidText = await promises.readFile(uuidPath, 'utf-8');

	if (!uuidText.includes('export type UUID = uuid;')) {
		await promises.writeFile(uuidPath, `${uuidText.trimEnd()}\nexport type UUID = uuid;\n`);
	}

	const modelFiles = await promises.readdir(modelsDir);
	await Promise.all(
		modelFiles
			.filter((modelFile) => modelFile.endsWith('.ts') && modelFile !== 'UUID.ts')
			.map(async (modelFile) => {
				const modelPath = path.join(modelsDir, modelFile);
				const modelText = await promises.readFile(modelPath, 'utf-8');
				await promises.writeFile(modelPath, modelText.replaceAll("from './uuid'", "from './UUID'"));
			}),
	);

	const indexPath = path.resolve(process.cwd(), CONFIG.relativePaths.index);
	const indexText = await promises.readFile(indexPath, 'utf-8');
	await promises.writeFile(
		indexPath,
		indexText.replace(
			"export type { UUID } from './models/UUID';\nexport type { uuid } from './models/uuid';",
			"export type { UUID, uuid } from './models/UUID';",
		),
	);
}

async function findModelFiles(modelsDir: string): Promise<string[]> {
	if (CONFIG.specificModels.length === 0) {
		return glob.sync('**/*.ts', { cwd: modelsDir, ignore: CONFIG.ignorePatterns }).sort();
	}

	const matches = CONFIG.specificModels.map((spec) => {
		const modelFile = spec.endsWith('.ts') ? spec : `${spec}.ts`;
		if (existsSync(path.join(modelsDir, modelFile))) return [modelFile];

		return glob.sync(`**/${path.basename(modelFile)}`, { cwd: modelsDir, ignore: CONFIG.ignorePatterns });
	});

	return Array.from(new Set(matches.flat())).sort();
}

async function buildSchema(modelFile: string, modelsDir: string, schemasDir: string): Promise<GeneratedSchema> {
	const modelPath = path.join(modelsDir, modelFile);
	const schemaPath = path.join(schemasDir, modelFile);
	const modelImportPath = toModuleSpecifier(path.relative(path.dirname(schemaPath), modelPath));
	const modelText = await promises.readFile(modelPath, 'utf-8');

	const generated = generate({ sourceText: modelText, getSchemaName: toSchemaName });
	if (generated.errors.length > 0) {
		console.warn(`ts-to-zod reported errors for ${modelFile}:`, generated.errors);
	}

	let text = generated.getZodSchemasFile(modelImportPath);
	text = importPlaceholderSchemas(text, modelText);
	text = applyRules(text, path.basename(modelFile, '.ts'));
	text = dropUnusedZodImport(text);
	text = tidyBlankLines(text);

	return {
		relativePath: modelFile,
		modelImportPath,
		exports: findSchemaExports(text, modelText),
		text,
	};
}

function importPlaceholderSchemas(schemaText: string, modelText: string): string {
	const placeholders = Array.from(schemaText.matchAll(PLACEHOLDER_SCHEMA));
	if (placeholders.length === 0) return schemaText;

	const modelFileNames = importedModelFileNames(modelText);
	const imports: string[] = [];
	let text = schemaText;

	for (const [statement, schemaName] of placeholders) {
		const fileName = modelFileNames.get(schemaName) ?? toPascalCase(schemaName.replace(/Schema$/, ''));
		imports.push(`import { ${schemaName} } from './${fileName}';`);
		text = text.replace(statement, '');
	}

	return appendImports(text, imports);
}

function importedModelFileNames(modelText: string): Map<string, string> {
	const fileNames = new Map<string, string>();

	for (const [, importedTypes, modulePath] of modelText.matchAll(MODEL_TYPE_IMPORT)) {
		const fileName = path.basename(modulePath.replace(/\.ts$/, ''));
		for (const importedType of importedTypes.split(',')) {
			const typeName = importedType
				.trim()
				.split(/\s+as\s+/)
				.pop()
				?.trim();
			if (typeName) fileNames.set(toSchemaName(typeName), fileName);
		}
	}

	return fileNames;
}

function applyRules(schemaText: string, modelName: string): string {
	const rulesPath = path.resolve(process.cwd(), CONFIG.relativePaths.rules, `${modelName}.ts`);
	if (!existsSync(rulesPath)) return schemaText;

	const ruleName = `${modelName.charAt(0).toLowerCase()}${modelName.slice(1)}Rule`;

	return `import { ${ruleName} } from '../rules/${modelName}';\n${schemaText.replace(/(}\))\s*;/g, `$1.superRefine(${ruleName}());`)}`;
}

function dropUnusedZodImport(schemaText: string): string {
	if (schemaText.includes('z.')) return schemaText;

	return schemaText.replace(/import\s*\{\s*z\s*\}\s*from\s*["']zod["'];\s*\n?/g, '');
}

function findSchemaExports(schemaText: string, modelText: string): SchemaExport[] {
	const typeNames = new Map(
		Array.from(modelText.matchAll(EXPORTED_MODEL_TYPE), ([, typeName]) => [toSchemaName(typeName), typeName]),
	);

	return findExportedSchemaNames(schemaText).map((schemaName) => ({
		schemaName,
		typeName: typeNames.get(schemaName),
	}));
}

function typeRequiredAnySchemas(schemas: GeneratedSchema[]): number {
	let typed = 0;

	for (const schema of schemas) {
		if (!/:\s*z\.any\(\)(?!\.optional)/.test(schema.text)) continue;

		for (const { schemaName, typeName } of schema.exports) {
			if (!typeName) continue;

			schema.text = annotateSchema(schema.text, schemaName, typeName, schema.modelImportPath, { assert: true });
			typed += 1;
		}
	}

	return typed;
}

function typeRecursiveSchemas(schemas: GeneratedSchema[]): number {
	const cyclicModules = findCyclicModules(schemas);
	let typed = 0;

	for (const schema of schemas) {
		const inCycle = cyclicModules.has(toModuleName(schema.relativePath));

		for (const { schemaName, typeName } of schema.exports) {
			if (!typeName) continue;
			if (!inCycle && !isLazySchema(schema.text, schemaName)) continue;

			schema.text = annotateSchema(schema.text, schemaName, typeName, schema.modelImportPath, { wrapLazy: true });
			typed += 1;
		}
	}

	return typed;
}

function findCyclicModules(schemas: GeneratedSchema[]): Set<string> {
	const dependencies = new Map(
		schemas.map((schema) => [
			toModuleName(schema.relativePath),
			new Set(Array.from(schema.text.matchAll(SIBLING_SCHEMA_IMPORT), ([, , moduleName]) => moduleName)),
		]),
	);

	const cyclic = new Set<string>();
	const visited = new Set<string>();
	const stack: string[] = [];

	const visit = (moduleName: string): void => {
		const cycleStart = stack.indexOf(moduleName);
		if (cycleStart !== -1) {
			for (const cyclicModule of stack.slice(cycleStart)) {
				cyclic.add(cyclicModule);
			}
			return;
		}
		if (visited.has(moduleName)) return;

		visited.add(moduleName);
		stack.push(moduleName);
		for (const dependency of dependencies.get(moduleName) ?? []) {
			visit(dependency);
		}
		stack.pop();
	};

	for (const moduleName of dependencies.keys()) {
		visit(moduleName);
	}

	return cyclic;
}

function annotateSchema(
	schemaText: string,
	schemaName: string,
	typeName: string,
	modelImportPath: string,
	options: { wrapLazy?: boolean; assert?: boolean } = {},
): string {
	const declaration = new RegExp(`export\\s+const\\s+${schemaName}\\s*(?::[^=]+)?=\\s*`).exec(schemaText);
	if (!declaration) return schemaText;

	const valueStart = declaration.index + declaration[0].length;
	const valueEnd = findStatementEnd(schemaText, valueStart);
	if (valueEnd === -1) return schemaText;

	const annotation = `z.ZodType<${typeName}>`;
	let value = schemaText.slice(valueStart, valueEnd).trimEnd();

	if (options.wrapLazy && !value.startsWith('z.lazy(')) {
		value = `z.lazy(() => ${value})`;
	}

	if (options.assert && !value.endsWith(`as ${annotation}`)) {
		value = `${value} as ${annotation}`;
	}

	const typedSchema = `${schemaText.slice(0, declaration.index)}export const ${schemaName}: ${annotation} = ${value}${schemaText.slice(valueEnd)}`;

	return ensureModelTypeImport(typedSchema, typeName, modelImportPath);
}

function isLazySchema(schemaText: string, schemaName: string): boolean {
	return new RegExp(`export\\s+const\\s+${schemaName}\\s*(?::[^=]+)?=\\s*z\\.lazy\\(`).test(schemaText);
}

function ensureModelTypeImport(schemaText: string, typeName: string, modelImportPath: string): string {
	if (new RegExp(`import\\s+\\{\\s*type\\s+${typeName}\\s*\\}`).test(schemaText)) return schemaText;

	return appendImports(schemaText, [`import { type ${typeName} } from '${modelImportPath}';`]);
}

function findStatementEnd(text: string, startIndex: number): number {
	let depth = 0;

	for (let index = startIndex; index < text.length; index++) {
		const char = text[index];
		if (char === '(' || char === '{' || char === '[') {
			depth += 1;
		} else if (char === ')' || char === '}' || char === ']') {
			depth = Math.max(depth - 1, 0);
		} else if (char === ';' && depth === 0) {
			return index;
		}
	}

	return -1;
}

function assertSchemasAreComplete(schemas: GeneratedSchema[]): void {
	const exportsByModule = new Map(
		schemas.map((schema) => [
			toModuleName(schema.relativePath),
			new Set(schema.exports.map(({ schemaName }) => schemaName)),
		]),
	);

	const problems = schemas.flatMap((schema) => {
		if (schema.exports.length === 0) return `${schema.relativePath}: no exported schema`;

		const missing = Array.from(schema.text.matchAll(SIBLING_SCHEMA_IMPORT))
			.filter(([, schemaName, moduleName]) => !exportsByModule.get(moduleName)?.has(schemaName))
			.map(([, schemaName, moduleName]) => `${schemaName} from ./${moduleName}`);

		return missing.length === 0 ? [] : `${schema.relativePath}: missing ${missing.join(', ')}`;
	});

	if (problems.length > 0) {
		throw new Error(`Generated schemas are incomplete:\n${problems.join('\n')}`);
	}
}

async function writeSchemas(schemas: GeneratedSchema[], schemasDir: string): Promise<void> {
	if (CONFIG.specificModels.length === 0) {
		await promises.rm(schemasDir, { recursive: true, force: true });
	}

	await Promise.all(
		schemas.map(async (schema) => {
			const schemaPath = path.join(schemasDir, schema.relativePath);
			await promises.mkdir(path.dirname(schemaPath), { recursive: true });
			await promises.writeFile(schemaPath, schema.text);
		}),
	);

	console.log(`Wrote ${schemas.length} schema files to ${CONFIG.relativePaths.schemas}`);
}

async function writeIndexExports(schemasDir: string): Promise<void> {
	const indexPath = path.resolve(process.cwd(), CONFIG.relativePaths.index);
	const indexText = await promises.readFile(indexPath, 'utf-8');
	const schemaFiles = glob.sync('**/*.ts', { cwd: schemasDir }).sort().reverse();

	const exported = new Set<string>();
	const exportLines: string[] = [];

	for (const schemaFile of schemaFiles) {
		const moduleName = toModuleSpecifier(schemaFile).replace(/^\.\//, '');
		const schemaText = await promises.readFile(path.join(schemasDir, schemaFile), 'utf-8');

		for (const schemaName of findExportedSchemaNames(schemaText)) {
			if (exported.has(schemaName)) continue;

			exported.add(schemaName);
			exportLines.push(`export { ${schemaName} } from './schemas/${moduleName}';`);
		}
	}

	const modelExports = indexText.split(SCHEMA_SECTION_HEADER)[0].trimEnd();
	await promises.writeFile(indexPath, `${modelExports}${SCHEMA_SECTION_HEADER}\n${exportLines.join('\n')}\n`);

	console.log(`Updated ${CONFIG.relativePaths.index} with ${exportLines.length} schema exports`);
}

function findExportedSchemaNames(schemaText: string): string[] {
	return Array.from(new Set(Array.from(schemaText.matchAll(EXPORTED_SCHEMA), ([, schemaName]) => schemaName)));
}

function appendImports(text: string, imports: string[]): string {
	const lines = text.split('\n');
	const lastImport = lines.reduce((last, line, index) => (line.startsWith('import ') ? index : last), -1);
	lines.splice(lastImport + 1, 0, ...imports);

	return lines.join('\n');
}

function tidyBlankLines(text: string): string {
	const lines = text
		.split('\n')
		.map((line) => line.trimEnd())
		.filter((line, index, all) => line !== '' || (index > 0 && all[index - 1] !== ''));

	return `${lines.join('\n').trimEnd()}\n`;
}

function toSchemaName(typeName: string): string {
	return `${typeName.charAt(0).toLowerCase()}${typeName.slice(1)}Schema`;
}

function toPascalCase(name: string): string {
	return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

function toModuleName(relativePath: string): string {
	return path.basename(relativePath, '.ts');
}

function toModuleSpecifier(relativePath: string): string {
	const modulePath = relativePath.replace(/\.ts$/, '').split(path.sep).join('/');

	return modulePath.startsWith('.') ? modulePath : `./${modulePath}`;
}

generateSchemas().catch((err) => {
	console.error(err);
	process.exit(1);
});
