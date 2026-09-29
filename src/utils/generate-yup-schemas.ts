import { existsSync, promises } from 'node:fs';
import * as path from 'node:path';
import * as glob from 'glob';
import ts from 'typescript';

const MODELS_DIR = path.resolve(process.cwd(), 'src/models');
const YUP_DIR = path.resolve(process.cwd(), 'src/yup');
const INDEX_PATH = path.resolve(process.cwd(), 'src/index.ts');
const YUP_SECTION = '\n\n// Yup Schemas';

const LEGACY_ALIASES: Record<string, string> = {
  availabilityCheckBodyYupSchema: 'availabilityBodySchema',
  bookingCancellationBodyYupSchema: 'cancelBookingBodySchema',
  bookingCancellationPathParamsYupSchema: 'cancelBookingPathParamsSchema',
  bookingConfirmationBodyYupSchema: 'confirmBookingBodySchema',
  bookingConfirmationPathParamsYupSchema: 'confirmBookingPathParamsSchema',
  bookingReservationBodyYupSchema: 'createBookingBodySchema',
  bookingUpdateBodyYupSchema: 'updateBookingBodySchema',
  bookingUpdatePathParamsYupSchema: 'updateBookingPathParamsSchema',
  extendReservationBodyYupSchema: 'extendBookingBodySchema',
  extendReservationPathParamsYupSchema: 'extendBookingPathParamsSchema',
  getSupplierPathParamsYupSchema: 'getSupplierPathParamsSchema',
};

const EXTRA_TESTS: Record<string, string> = {
  AvailabilityCheckBody: `
    .test(
      '',
      'cannot use localDate/localDateStart/localDateEnd and availabilityIds in the same request',
      (value: Record<string, unknown>) =>
        !Boolean(value.availabilityIds && (value.localDateStart || value.localDate || value.localDateEnd)).valueOf(),
    )
    .test(
      '',
      'cannot use localDate and localDateStart/localDateEnd in the same request',
      (value: Record<string, unknown>) => !Boolean((value.localDateStart || value.localDateEnd) && value.localDate).valueOf(),
    )
    .test(
      '',
      'either localDate, localDateStart/localDateEnd or availabilityIds is required',
      (value: Record<string, unknown>) =>
        !Boolean(!((value.localDateStart && value.localDateEnd) || value.localDate || value.availabilityIds)).valueOf(),
    )
    .test('', 'cannot request more than 100 availability objects at a time', (value: Record<string, unknown>) => {
      if (Array.isArray(value.availabilityIds)) {
        return !Boolean(value.availabilityIds.length > 100).valueOf();
      }
      return true;
    })
    .test('', 'cannot request more than 1 year of availability', (value: Record<string, unknown>) => {
      if (typeof value.localDateStart === 'string' && typeof value.localDateEnd === 'string') {
        const start = new Date(value.localDateStart);
        return !Boolean(
          new Date(start.getFullYear() + 1, start.getMonth(), start.getDate()) < new Date(value.localDateEnd),
        ).valueOf();
      }
      return true;
    })`,
  AvailabilityCalendarBody: `
    .test('', 'cannot request more than 1 year of availability', (value: Record<string, unknown>) => {
      if (typeof value.localDateStart === 'string' && typeof value.localDateEnd === 'string') {
        const start = new Date(value.localDateStart);
        return !Boolean(
          new Date(start.getFullYear() + 1, start.getMonth(), start.getDate()) < new Date(value.localDateEnd),
        ).valueOf();
      }
      return true;
    })`,
};

type ParsedType = {
  kind: 'string' | 'number' | 'boolean' | 'any' | 'record' | 'array' | 'ref';
  nullable: boolean;
  typeName?: string;
  element?: ParsedType;
};

type Field = {
  name: string;
  optional: boolean;
  type: ParsedType;
};

type Model = {
  name: string;
  fileName: string;
  kind: 'enum' | 'object' | 'alias' | 'primitive' | 'record';
  fields: Field[];
  alias?: string;
  primitive?: 'string' | 'number' | 'boolean';
  references: string[];
};

async function generateYupSchemas(): Promise<void> {
  const modelFiles = glob.sync('**/*.ts', { cwd: MODELS_DIR, ignore: ['**/*.d.ts'] }).sort();
  const models = modelFiles.map((fileName) => parseModel(fileName));
  const cyclic = findCyclicModels(models);
  console.log(`Generating Yup schemas for ${models.length} models`);

  await promises.rm(YUP_DIR, { recursive: true, force: true });
  await promises.mkdir(YUP_DIR, { recursive: true });

  await Promise.all(models.map((model) => promises.writeFile(yupPath(model.fileName), renderModel(model, cyclic))));
  await promises.writeFile(path.join(YUP_DIR, 'GetSupplierPathParams.ts'), renderSupplierPathParams());
  await writeIndexExports(models);

  console.log(`Wrote ${models.length + 1} Yup schema files to src/yup`);
}

function parseModel(fileName: string): Model {
  const filePath = path.join(MODELS_DIR, fileName);
  const source = ts.createSourceFile(filePath, ts.sys.readFile(filePath) ?? '', ts.ScriptTarget.Latest, true);
  const declaration = source.statements.find(
    (statement): statement is ts.TypeAliasDeclaration | ts.EnumDeclaration =>
      (ts.isTypeAliasDeclaration(statement) || ts.isEnumDeclaration(statement)) &&
      Boolean(statement.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword)),
  );

  const name = declaration?.name.text ?? fileName.replace(/\.ts$/, '');
  const model: Model = { name, fileName, kind: 'record', fields: [], references: [] };

  if (!declaration) return model;

  if (ts.isEnumDeclaration(declaration)) {
    model.kind = 'enum';
    return model;
  }

  const type = declaration.type;
  if (ts.isTypeLiteralNode(type)) {
    model.kind = 'object';
    model.fields = parseFields(type);
  } else if (ts.isIntersectionTypeNode(type)) {
    model.kind = 'object';
    const alias = type.types.find((part): part is ts.TypeReferenceNode => ts.isTypeReferenceNode(part));
    const literal = type.types.find((part): part is ts.TypeLiteralNode => ts.isTypeLiteralNode(part));
    model.alias = alias ? typeReferenceName(alias) : undefined;
    model.fields = literal ? parseFields(literal) : [];
  } else if (ts.isTypeReferenceNode(type) && typeReferenceName(type) === 'Record') {
    model.kind = 'record';
  } else if (ts.isTypeReferenceNode(type)) {
    model.kind = 'alias';
    model.alias = typeReferenceName(type);
  } else if (type.kind === ts.SyntaxKind.StringKeyword) {
    model.kind = 'primitive';
    model.primitive = 'string';
  } else if (type.kind === ts.SyntaxKind.NumberKeyword) {
    model.kind = 'primitive';
    model.primitive = 'number';
  } else if (type.kind === ts.SyntaxKind.BooleanKeyword) {
    model.kind = 'primitive';
    model.primitive = 'boolean';
  }

  model.references = collectReferences(model);
  return model;
}

function parseFields(type: ts.TypeLiteralNode): Field[] {
  return type.members.flatMap((member) => {
    if (!ts.isPropertySignature(member) || !member.type || !member.name) return [];

    return [
      {
        name: member.name.getText().replace(/['"]/g, ''),
        optional: Boolean(member.questionToken),
        type: parseType(member.type),
      },
    ];
  });
}

function parseType(node: ts.TypeNode): ParsedType {
  if (ts.isUnionTypeNode(node)) {
    const nonNull = node.types.filter((part) => !isNullType(part));
    const nullable = nonNull.length !== node.types.length;
    if (nonNull.length === 1) {
      const parsed = parseType(nonNull[0]);
      parsed.nullable = parsed.nullable || nullable;
      return parsed;
    }

    return { kind: 'any', nullable };
  }

  if (ts.isParenthesizedTypeNode(node)) return parseType(node.type);
  if (ts.isArrayTypeNode(node)) return { kind: 'array', nullable: false, element: parseType(node.elementType) };
  if (node.kind === ts.SyntaxKind.StringKeyword) return { kind: 'string', nullable: false };
  if (node.kind === ts.SyntaxKind.NumberKeyword) return { kind: 'number', nullable: false };
  if (node.kind === ts.SyntaxKind.BooleanKeyword) return { kind: 'boolean', nullable: false };
  if (node.kind === ts.SyntaxKind.AnyKeyword) return { kind: 'any', nullable: false };

  if (ts.isTypeReferenceNode(node)) {
    const typeName = typeReferenceName(node);
    if (typeName === 'Array' && node.typeArguments?.[0]) {
      return { kind: 'array', nullable: false, element: parseType(node.typeArguments[0]) };
    }
    if (typeName === 'Record') return { kind: 'record', nullable: false };

    return { kind: 'ref', nullable: false, typeName };
  }

  return { kind: 'any', nullable: false };
}

function isNullType(node: ts.TypeNode): boolean {
  return (
    node.kind === ts.SyntaxKind.NullKeyword ||
    (ts.isLiteralTypeNode(node) && node.literal.kind === ts.SyntaxKind.NullKeyword)
  );
}

function typeReferenceName(node: ts.TypeReferenceNode): string {
  return node.typeName.getText();
}

function collectReferences(model: Model): string[] {
  const references = new Set<string>();
  if (model.alias) references.add(model.alias);

  const visit = (type: ParsedType): void => {
    if (type.kind === 'ref' && type.typeName) references.add(type.typeName);
    if (type.element) visit(type.element);
  };

  for (const field of model.fields) visit(field.type);
  return Array.from(references);
}

function findCyclicModels(models: Model[]): Set<string> {
  const dependencies = new Map(models.map((model) => [model.name, new Set(model.references)]));
  const cyclic = new Set<string>();
  const visited = new Set<string>();
  const stack: string[] = [];

  const visit = (name: string): void => {
    const cycleStart = stack.indexOf(name);
    if (cycleStart !== -1) {
      for (const cyclicName of stack.slice(cycleStart)) cyclic.add(cyclicName);
      return;
    }
    if (visited.has(name)) return;

    visited.add(name);
    stack.push(name);
    for (const dependency of dependencies.get(name) ?? []) visit(dependency);
    stack.pop();
  };

  for (const name of dependencies.keys()) visit(name);
  return cyclic;
}

function renderModel(model: Model, cyclic: Set<string>): string {
  const schemaName = toYupSchemaName(model.name);
  const imports = new Set<string>();
  let expression = 'mixed()';

  if (model.kind === 'enum') {
    expression = `string().oneOf(Object.values(${model.name})).required()`;
  } else if (model.kind === 'primitive') {
    expression = `${yupBuilder(model.primitive ?? 'string')}().required()`;
  } else if (model.kind === 'record') {
    expression = 'object()';
  } else if (model.kind === 'alias' && model.alias) {
    imports.add(model.alias);
    expression = toYupSchemaName(model.alias);
  } else if (model.kind === 'object') {
    const fields = model.fields.map(
      (field) => `    ${fieldKey(field.name)}: ${emitField(field, model.name, cyclic, imports)},`,
    );
    const shape = `object().shape({\n${fields.join('\n')}\n  })`;
    expression = model.alias ? `${toYupSchemaName(model.alias)}.concat(\n    ${shape},\n  )` : shape;
    if (model.alias) imports.add(model.alias);
    expression += EXTRA_TESTS[model.name] ?? '';
  }

  const yupImports = yupFunctions(expression);
  const importLines = [
    ...(yupImports.size === 0 ? [] : [`import { ${Array.from(yupImports).sort().join(', ')} } from 'yup';`]),
    `import type { SchemaOf } from 'yup';`,
    model.kind === 'enum'
      ? `import { ${model.name} } from '../models/${moduleName(model.fileName)}';`
      : `import type { ${model.name} } from '../models/${moduleName(model.fileName)}';`,
    ...Array.from(imports)
      .sort()
      .map((typeName) => `import { ${toYupSchemaName(typeName)} } from './${typeName}';`),
  ];

  return `${importLines.join('\n')}\n\nexport const ${schemaName} = ${expression} as SchemaOf<${model.name}>;\n`;
}

function renderSupplierPathParams(): string {
  return `import { object, string } from 'yup';
import type { SchemaOf } from 'yup';

export interface GetSupplierPathParamsSchema {
  id: string;
}

export const getSupplierPathParamsYupSchema = object().shape({
  id: string().required(),
}) as SchemaOf<GetSupplierPathParamsSchema>;
`;
}

function emitField(field: Field, owner: string, cyclic: Set<string>, imports: Set<string>): string {
  const expression = emitType(field.type, field.optional, owner, cyclic, imports);
  if (field.name !== 'expirationMinutes' || field.type.kind !== 'number') return expression;

  return expression.replace('number()', 'number().integer()');
}

function emitType(
  type: ParsedType,
  optional: boolean,
  owner: string,
  cyclic: Set<string>,
  imports: Set<string>,
): string {
  if (type.kind === 'array' && type.element) {
    const element = emitType(type.element, false, owner, cyclic, imports).replace(/\.required\(\)$/, '');
    return applyPresence(`array().of(${element})`, type.nullable, optional);
  }

  if (type.kind === 'ref' && type.typeName) {
    imports.add(type.typeName);
    const schemaName = toYupSchemaName(type.typeName);
    const reference = cyclic.has(owner) && cyclic.has(type.typeName) ? `lazy(() => ${schemaName})` : schemaName;
    return applyPresence(reference, type.nullable, optional);
  }

  if (type.kind === 'record') return applyPresence('object()', type.nullable, optional);
  if (type.kind === 'any') return applyPresence('mixed()', type.nullable, optional);

  const builder = type.kind === 'number' ? 'number' : type.kind === 'boolean' ? 'bool' : 'string';
  return applyPresence(`${builder}()`, type.nullable, optional);
}

function applyPresence(expression: string, nullable: boolean, optional: boolean): string {
  if (nullable) expression += '.nullable()';
  return optional ? `${expression}.notRequired()` : `${expression}.required()`;
}

function yupFunctions(expression: string): Set<string> {
  const names = ['array', 'bool', 'lazy', 'mixed', 'number', 'object', 'string'].filter((name) =>
    new RegExp(`\\b${name}\\(`).test(expression),
  );

  return new Set(names);
}

async function writeIndexExports(models: Model[]): Promise<void> {
  const indexText = await promises.readFile(INDEX_PATH, 'utf-8');
  const yupSectionIndex = indexText.indexOf(YUP_SECTION);
  const head = (yupSectionIndex === -1 ? indexText : indexText.slice(0, yupSectionIndex)).trimEnd();
  const taken = new Set(
    Array.from(head.matchAll(/export\s+\{([^}]+)\}/g), ([, names]) =>
      names.split(',').map(
        (name) =>
          name
            .trim()
            .split(/\s+as\s+/)
            .pop() ?? '',
      ),
    ).flat(),
  );

  const lines = models.map((model) => {
    const schemaName = toYupSchemaName(model.name);
    const alias = LEGACY_ALIASES[schemaName];
    const aliasExport = alias && !taken.has(alias) ? `, ${schemaName} as ${alias}` : '';
    return `export { ${schemaName}${aliasExport} } from './yup/${moduleName(model.fileName)}';`;
  });

  const supplierAlias = taken.has('getSupplierPathParamsSchema')
    ? ''
    : ', getSupplierPathParamsYupSchema as getSupplierPathParamsSchema';
  lines.push(`export { getSupplierPathParamsYupSchema${supplierAlias} } from './yup/GetSupplierPathParams';`);

  await promises.writeFile(INDEX_PATH, `${head}${YUP_SECTION}\n${lines.join('\n')}\n`);
}

function yupPath(fileName: string): string {
  return path.join(YUP_DIR, fileName);
}

function moduleName(fileName: string): string {
  return fileName.replace(/\.ts$/, '');
}

function toYupSchemaName(typeName: string): string {
  return `${typeName.charAt(0).toLowerCase()}${typeName.slice(1)}YupSchema`;
}

function yupBuilder(primitive: 'string' | 'number' | 'boolean'): string {
  return primitive === 'boolean' ? 'bool' : primitive;
}

function fieldKey(name: string): string {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) ? name : `'${name}'`;
}

if (!existsSync(MODELS_DIR)) {
  console.error(`Models directory not found: ${MODELS_DIR}`);
  process.exit(1);
}

generateYupSchemas().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
