import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const raw = JSON.parse(readFileSync(join(__dirname, '../../../icon-data-raw.json'), 'utf-8'));
const slim = {};
for (const [name, data] of Object.entries(raw)) {
  slim[name] = { viewBox: data.viewBox, paths: data.paths };
  if (data.circles?.length) slim[name].circles = data.circles;
  if (data.lines?.length) slim[name].lines = data.lines;
  if (data.stroke) slim[name].stroke = data.stroke;
}
mkdirSync(join(__dirname, '../data'), { recursive: true });
writeFileSync(join(__dirname, '../data/icon-data.json'), JSON.stringify(slim, null, 2));
console.log(`Synced ${Object.keys(slim).length} icons to data/icon-data.json`);
