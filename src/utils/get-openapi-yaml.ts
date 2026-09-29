import { writeFile } from 'node:fs/promises';
import * as path from 'node:path';

const url =
	'https://raw.githubusercontent.com/octotravel/typespec/refs/heads/main/tsp-output/%40typespec/openapi3/openapi.yaml';
const outputFile = path.join('src', 'openapi.yaml');

async function fetchAndSaveYaml() {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
	}

	const yamlText = await response.text();

	await writeFile(outputFile, yamlText, 'utf-8');
	console.log(`OpenAPI YAML saved to ${outputFile}`);
}

fetchAndSaveYaml().catch((e) => console.error(e));
