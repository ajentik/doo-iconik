#!/usr/bin/env node

/**
 * Reads ../../icon-data-raw.json and writes a simplified version to
 * ../data/icon-data.json, stripping the "category" field to keep the
 * gem payload lightweight.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const RAW_PATH = resolve(__dirname, '..', '..', '..', 'icon-data-raw.json');
const OUT_DIR = resolve(__dirname, '..', 'data');
const OUT_PATH = resolve(OUT_DIR, 'icon-data.json');

const KEEP_KEYS = ['viewBox', 'paths', 'circles', 'lines', 'stroke'];

const raw = JSON.parse(readFileSync(RAW_PATH, 'utf-8'));
const slim = {};

for (const [name, icon] of Object.entries(raw)) {
  const entry = {};
  for (const key of KEEP_KEYS) {
    if (icon[key] !== undefined) {
      entry[key] = icon[key];
    }
  }
  slim[name] = entry;
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_PATH, JSON.stringify(slim, null, 2) + '\n', 'utf-8');

const count = Object.keys(slim).length;
console.log(`Synced ${count} icons to ${OUT_PATH}`);
