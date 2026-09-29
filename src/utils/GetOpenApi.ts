import * as fs from 'node:fs';
import * as https from 'node:https';
import * as path from 'node:path';

const url =
  'https://raw.githubusercontent.com/octotravel/typespec/refs/heads/main/tsp-output/%40typespec/openapi3/openapi.yaml';
const outputFile = path.join('src', 'openapi.yaml');

function downloadFile(url: string, outputPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);

    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download file: ${response.statusCode}`));
          return;
        }

        response.pipe(file);

        file.on('finish', () => {
          file.close();
          console.log(`File successfully downloaded to ${outputPath}`);
          resolve();
        });
      })
      .on('error', (err) => {
        fs.unlink(outputPath, () => {});
        reject(err);
      });
  });
}

downloadFile(url, outputFile).catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
