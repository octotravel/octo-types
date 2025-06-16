import { promises as fs } from 'node:fs';
import * as path from 'node:path';
import * as glob from 'glob';
import { generate } from 'ts-to-zod';

type ZanySchema = {
  fullMatch: string;
  schemaName: string;
};

type ValidationRule = {
  message: string;
  condition: string;
};

type ModelConfig = {
  name: string;
  path?: string;
  validation?: {
    rules?: ValidationRule[];
    raw?: string;
  };
};

const CONFIG = {
  ignorePatterns: ['**/*.spec.ts', '**/*.test.ts', '**/*.d.ts'],
  relativePaths: {
    models: 'models',
    schemas: 'schemas',
  },
  specificModels: [
    {
      name: 'Availability',
      validation: {
        rules: [
          {
            message: 'cannot use localDate/localDateStart  in the same request',
            condition: 'localDateTimeStart && localDateTimeEnd',
          },
        ],
        raw: '',
      },
    },
  ] as ModelConfig[],
};

async function generateSchemas() {
  const { modelsDir, schemasDir } = setupDirectories();

  try {
    await ensureDirectoryExists(schemasDir);

    const files =
      CONFIG.specificModels.length > 0
        ? await findSpecificModelFiles(modelsDir, CONFIG.specificModels)
        : await findTypeScriptFiles(modelsDir);

    console.log(`Found ${files.length} TypeScript files to process`);

    await Promise.all(files.map((file) => processFile(file, { modelsDir, schemasDir })));

    console.log('Finished generating Zod schemas');
  } catch (err) {
    console.error('Unhandled error:', err);
    process.exit(1);
  }
}

function setupDirectories() {
  return {
    modelsDir: path.resolve(__dirname, CONFIG.relativePaths.models),
    schemasDir: path.resolve(__dirname, CONFIG.relativePaths.schemas),
  };
}

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (err) {
    console.error(`Error creating directory: ${err}`);
  }
}

async function findTypeScriptFiles(dir: string): Promise<string[]> {
  return glob.sync('**/*.ts', {
    cwd: dir,
    ignore: CONFIG.ignorePatterns,
  });
}

async function findSpecificModelFiles(dir: string, modelConfigs: ModelConfig[]): Promise<string[]> {
  const result: string[] = [];

  for (const config of modelConfigs) {
    if (config.path) {
      const filePath = config.path.endsWith('.ts') ? config.path : `${config.path}.ts`;
      result.push(filePath);
      continue;
    }

    const fileName = `${config.name}.ts`;
    const fullPath = path.join(dir, fileName);

    try {
      const stat = await fs.stat(fullPath);
      if (stat.isFile()) {
        result.push(fileName);
        continue;
      }
    } catch (e) {
      console.log(e);
    }

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

    const modelConfig = CONFIG.specificModels.find(
      (config) => config.name === fileName || (config.path && config.path.replace(/\.ts$/, '') === fileName),
    );

    if (hasValidation(modelConfig?.validation)) {
      zodSchemasText = applyCustomValidation(zodSchemasText, fileName, modelConfig!.validation!);
    }

    await fs.writeFile(outputPath, zodSchemasText);
    console.log(`Created schema file: ${outputPath}`);
  } catch (err) {
    console.error(`Error processing ${file}:`, err);
  }
}

function hasValidation(validation?: ModelConfig['validation']): boolean {
  return Boolean(validation?.rules?.length || validation?.raw);
}

function generateSchema(sourceText: string) {
  return generate({
    sourceText,
    nameFilter: () => true,
    jsDocTagFilter: () => true,
    getSchemaName: (name) => `${name.charAt(0).toLowerCase()}${name.slice(1)}Schema`,
    keepComments: false,
    skipParseJSDoc: false,
  });
}

function applyCustomValidation(schemaContent: string, fileName: string, validation: ModelConfig['validation']): string {
  if (!hasValidation(validation)) return schemaContent;

  const schemaRegex = /export const ([a-zA-Z0-9_]+) = (z\.[^;]+)(;)/g;
  const superRefineCode = generateSuperRefineCode(validation!);

  return schemaContent.replace(schemaRegex, (match, schemaName, schemaDefinition, semicolon) => {
    const baseName = schemaName.replace(/Schema$/, '');
    if (baseName.toLowerCase() === fileName.toLowerCase()) {
      return `export const ${schemaName} = ${schemaDefinition}${superRefineCode}${semicolon}`;
    }
    return match;
  });
}

function generateSuperRefineCode(validation: ModelConfig['validation']): string {
  if (!validation) return '';
  let code = '.superRefine((data, ctx) => {';

  if (validation.rules?.length) {
    const properties = new Set<string>();
    validation.rules.forEach((rule) => {
      (rule.condition.match(/\b[a-zA-Z0-9_]+\b/g) || []).forEach((match) => {
        if (!['if', 'const', 'let', 'var', 'new', 'Date', 'true', 'false', 'null', 'undefined'].includes(match)) {
          properties.add(match);
        }
      });
    });
    if (properties.size > 0) {
      code += `\n    const { ${[...properties].join(', ')} } = data;`;
    }
  }

  if (validation.rules?.length) {
    code += '\n';
    validation.rules.forEach((rule) => {
      code += `
    if (${rule.condition}) {
      ctx.addIssue({
        message: '${rule.message.replace(/'/g, "\\'")}',
        code: z.ZodIssueCode.custom,
      });
    }`;
    });
  }

  if (validation.raw) code += `\n${validation.raw}`;

  code += '\n  })';
  return code;
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

generateSchemas().catch((err) => {
  console.error('Failed to generate schemas:', err);
  process.exit(1);
});
