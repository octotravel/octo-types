import { defineConfig } from '@hey-api/openapi-ts';
import * as path from 'node:path';

export default defineConfig({
  input: path.resolve(process.cwd(), 'src/openapi.yaml'),
  output: {
    format: 'biome',
    lint: 'biome',
    path: './src/models',
  },
  plugins: [
    {
      name: '@hey-api/typescript',
      enums: 'typescript',
    },
    {
      name: 'zod',
      compatibilityVersion: 3,
    },
  ],
});
