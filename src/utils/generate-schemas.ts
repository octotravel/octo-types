import { promises as fs, existsSync } from 'node:fs';
import * as path from 'node:path';
import * as glob from 'glob';
import { generate } from 'ts-to-zod';

type ZanySchema = {
  fullMatch: string;
  schemaName: string;
};

const CONFIG = {
  ignorePatterns: ['**/*.spec.ts', '**/*.test.ts', '**/*.d.ts'],
  relativePaths: {
    models: 'src/models',
    schemas: 'src/schemas',
  },
  specificModels: [],
};

async function generateSchemas() {
  const { modelsDir, schemasDir } = setupDirectories();

  console.log(modelsDir, schemasDir);

  try {
    await ensureDirectoryExists(schemasDir);

    const files =
      CONFIG.specificModels.length > 0
        ? await findSpecificModelFiles(modelsDir, CONFIG.specificModels)
        : findTypeScriptFiles(modelsDir);

    console.log(`Found ${files.length} TypeScript files to process`);

    await Promise.all(files.map((file) => processFile(file, { modelsDir, schemasDir })));

    console.log('Finished generating Zod schemas');
  } catch (err) {
    console.error('Unhandled error:', err);
    process.exit(1);
  }
}

function setupDirectories() {
  const projectRoot = process.cwd();

  return {
    modelsDir: path.resolve(projectRoot, CONFIG.relativePaths.models),
    schemasDir: path.resolve(projectRoot, CONFIG.relativePaths.schemas),
  };
}

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  try {
    await fs.mkdir(dirPath, { recursive: true });
    console.log(`Created directory at ${dirPath}`);
  } catch (err) {
    console.error(`Error creating directory: ${err}`);
    throw err;
  }
}

// This function finds all TypeScript files
function findTypeScriptFiles(dir: string): string[] {
  return glob.sync('**/*.ts', {
    cwd: dir,
    ignore: CONFIG.ignorePatterns,
  });
}

async function findSpecificModelFiles(dir: string, modelSpecs: string[]): Promise<string[]> {
  const result: string[] = [];

  for (const spec of modelSpecs) {
    const normalizedSpec = spec.endsWith('.ts') ? spec : `${spec}.ts`;

    if (await fs.stat(path.join(dir, normalizedSpec)).catch(() => null)) {
      result.push(normalizedSpec);
      continue;
    }

    const fileName = path.basename(normalizedSpec);
    const matches = glob.sync(`**/${fileName}`, {
      cwd: dir,
      ignore: CONFIG.ignorePatterns,
    });

    result.push(...matches);
  }

  return [...new Set(result)];
}

async function processFile(file: string, dirs: { modelsDir: string; schemasDir: string }): Promise<void> {
  const { modelsDir, schemasDir } = dirs;
  const inputPath = path.join(modelsDir, file);
  const relativePath = path.relative(modelsDir, inputPath);
  const outputDir = path.dirname(path.join(schemasDir, relativePath));
  const fileName = path.basename(relativePath, '.ts');
  const outputPath = path.join(outputDir, `${fileName}.ts`);

  try {
    await ensureDirectoryExists(outputDir);

    const sourceText = await fs.readFile(inputPath, 'utf-8');
    const result = generateSchema(sourceText);

    if (result.errors.length > 0) {
      console.warn(`Errors in ${file}:`, result.errors);
    }

    let zodSchemasText = result.getZodSchemasFile(`../models/${fileName}`);
    zodSchemasText = replaceZanySchemas(zodSchemasText);
    zodSchemasText = addRules(zodSchemasText, fileName);

    await fs.writeFile(outputPath, zodSchemasText);
    console.log(`Created schema file: ${outputPath}`);
  } catch (err) {
    console.error(`Error processing ${file}:`, err);
  }
}

function generateSchema(sourceText: string) {
  return generate({
    sourceText,
    getSchemaName: (name) => `${name.charAt(0).toLowerCase() + name.slice(1)}Schema`,
  });
}

function replaceZanySchemas(fileContent: string): string {
  const zanySchemas = findZanySchemas(fileContent);
  if (zanySchemas.length === 0) return fileContent;

  const importsToAdd: string[] = [];
  let modifiedContent = fileContent;

  for (const schema of zanySchemas) {
    const baseName = schema.schemaName.replace(/Schema$/, '');
    const fileName = baseName.charAt(0).toUpperCase() + baseName.slice(1);

    importsToAdd.push(`import { ${schema.schemaName} } from "./${fileName}";`);
    modifiedContent = modifiedContent.replace(schema.fullMatch, '');
  }

  return reorganizeImports(modifiedContent, importsToAdd);
}

function findZanySchemas(content: string): ZanySchema[] {
  const zanyRegex = /const\s+([a-zA-Z0-9_]+)\s+=\s+z\.any\(\);/g;
  const zanySchemas: ZanySchema[] = [];
  let match = zanyRegex.exec(content);

  while (match !== null) {
    zanySchemas.push({
      fullMatch: match[0],
      schemaName: match[1],
    });
    match = zanyRegex.exec(content);
  }

  return zanySchemas;
}

function reorganizeImports(content: string, newImports: string[]): string {
  if (newImports.length === 0) return content;

  const existingImportRegex = /^import .+ from .+;\n*/gm;
  const existingImports = content.match(existingImportRegex) || [];
  const endOfImportsIndex = existingImports.reduce((lastIndex, imp) => {
    const index = content.indexOf(imp);
    return index > lastIndex ? index + imp.length : lastIndex;
  }, 0);
  const cleanedContent = content.slice(endOfImportsIndex).replace(/^\s*\n+/g, '');

  return `${content.slice(0, endOfImportsIndex).trimEnd()}\n${newImports.join('\n')}\n\n${cleanedContent}`;
}

export function addRules(zodSchemasText: string, fileName: string): string {
  const rulesFilePath = path.resolve(process.cwd(), 'src/rules', `${fileName}.ts`);

  if (!existsSync(rulesFilePath)) {
    return zodSchemasText;
  }

  const ruleFunctionName = `${fileName.charAt(0).toLowerCase() + fileName.slice(1)}Rule`;
  const schemaRegex = /(}\))\s*;/g;
  const refineCall = `.superRefine(${ruleFunctionName}())`;

  const modifiedText = zodSchemasText.replace(schemaRegex, `$1${refineCall};`);
  const importLine = `import { ${ruleFunctionName} } from '../rules/${fileName}';\n`;

  return importLine + modifiedText;
}

generateSchemas().catch((err) => console.log(err));
