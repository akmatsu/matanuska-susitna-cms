import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

const root = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(root, '../src/styles/global.css');
const outputPath = path.join(root, '../public/admin-global.css');

const css = await readFile(inputPath, 'utf8');
const result = await postcss([tailwindcss()]).process(css, {
  from: inputPath,
  to: outputPath,
});

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, result.css);
if (result.map) {
  await writeFile(`${outputPath}.map`, result.map.toString());
}

console.log(`Built ${outputPath}`);
