import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        hmr: false,
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@ajentik/doo-iconik',
        replacement: path.resolve(__dirname, '../core/src/index.ts'),
      },
    ],
    conditions: ['browser'],
  },
  test: {
    include: ['src/__tests__/**/*.test.ts'],
    environment: 'jsdom',
  },
});
