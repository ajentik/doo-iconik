import { defineConfig } from 'vitest/config';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';

export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: [
      {
        find: '@ajentik/doo-iconik',
        replacement: path.resolve(__dirname, '../core/src/index.ts'),
      },
    ],
    conditions: ['browser', 'solid'],
  },
  test: {
    include: ['src/__tests__/**/*.test.tsx'],
    environment: 'jsdom',
    globals: true,
  },
});
