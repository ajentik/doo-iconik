import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const raw = JSON.parse(readFileSync(join(__dirname, '../../../icon-data-raw.json'), 'utf-8'));
const names = Object.keys(raw).sort();

let dart = `/// Auto-generated icon data — do not edit manually.

class DooIconikData {
  final String viewBox;
  final List<String> paths;
  final List<Map<String, double>>? circles;
  final List<Map<String, double>>? lines;
  final bool stroke;

  const DooIconikData({
    required this.viewBox,
    required this.paths,
    this.circles,
    this.lines,
    this.stroke = false,
  });

  double get width => double.parse(viewBox.split(' ')[2]);
  double get height => double.parse(viewBox.split(' ')[3]);
}

/// All available icon names.
typedef DooIconikName = String;

/// List of all available icon names.
final List<String> dooIconikNames = iconData.keys.toList();

/// Icon data map.
const Map<String, DooIconikData> iconData = {\n`;

for (const name of names) {
  const icon = raw[name];
  const paths = icon.paths.map(p => `      '${p.replace(/'/g, "\\'")}'`).join(',\n');
  let entry = `  '${name}': DooIconikData(\n    viewBox: '${icon.viewBox}',\n    paths: [\n${paths},\n    ],\n`;
  if (icon.circles?.length) {
    const circles = icon.circles.map(c => `      {'cx': ${c.cx}, 'cy': ${c.cy}, 'r': ${c.r}}`).join(',\n');
    entry += `    circles: [\n${circles},\n    ],\n`;
  }
  if (icon.lines?.length) {
    const lines = icon.lines.map(l => `      {'x1': ${l.x1}, 'y1': ${l.y1}, 'x2': ${l.x2}, 'y2': ${l.y2}}`).join(',\n');
    entry += `    lines: [\n${lines},\n    ],\n`;
  }
  if (icon.stroke) entry += `    stroke: true,\n`;
  entry += `  ),\n`;
  dart += entry;
}

dart += '};\n';

mkdirSync(join(__dirname, '../lib/src'), { recursive: true });
writeFileSync(join(__dirname, '../lib/src/icon_data.dart'), dart);
console.log(`Generated icon_data.dart with ${names.length} icons`);
