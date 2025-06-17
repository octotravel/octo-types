import { writeFile } from 'node:fs/promises';
import path from 'node:path';

async function fetchAndSaveYaml() {
  const url =
    'https://raw.githubusercontent.com/octotravel/typespec/refs/heads/feat/lib/tsp-output/%40typespec/openapi3/openapi.yaml';

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
  }

  const yamlText = await response.text();

  // Save to src folder
  const outputPath = path.join('src', 'openapi.yaml');
  await writeFile(outputPath, yamlText, 'utf-8');
  console.log(`OpenAPI YAML saved to ${outputPath}`);
}

fetchAndSaveYaml().catch((e) => console.error(e));
