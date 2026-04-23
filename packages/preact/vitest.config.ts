import { defineConfig } from 'vitest/config';
import preact from '@prefresh/vite';
import path from 'path';

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: [
      {
        find: '@ajentik/doo-iconik',
        replacement: path.resolve(__dirname, '../core/src/index.ts'),
      },
    ],
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`,
  },
  test: {
    include: ['src/__tests__/**/*.test.tsx'],
    environment: 'jsdom',
  },
});
