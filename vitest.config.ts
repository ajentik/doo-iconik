import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      'packages/core/vitest.config.ts',
      'packages/react/vitest.config.ts',
      'packages/vue/vitest.config.ts',
      'packages/svelte/vitest.config.ts',
      'packages/solid/vitest.config.ts',
      'packages/preact/vitest.config.ts',
      'packages/lit/vitest.config.ts',
      'packages/vanilla/vitest.config.ts',
      'packages/alpine/vitest.config.ts',
      'packages/cli/vitest.config.ts',
    ],
  },
});
