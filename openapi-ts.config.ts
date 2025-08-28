// openapi-ts.config.ts
import { defineConfig } from '@hey-api/openapi-ts';
import * as path from "node:path";

export default defineConfig({
	input: path.resolve(process.cwd(), 'src/openapi.yaml'), // or the correct path you found
	output: {
		format: 'prettier',
		lint: 'eslint',
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
