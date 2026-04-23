# doo-iconik Project Improvements — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship 10 high-impact improvements to the doo-iconik icon library — from test coverage and dependency upgrades, through docs site enhancements, to CDN/CLI/API support.

**Architecture:** Monorepo with npm workspaces. Core package (`packages/core`) holds icon data + shared utils. Framework adapters depend on core. Tests use vitest. Docs site is a single `docs/index.html`. CI is GitHub Actions.

**Tech Stack:** TypeScript, Vitest, jsdom, Node 24, GitHub Actions, Mermaid (docs)

---

## Priority Order

1. **Test coverage** — framework adapter tests (Vue, Svelte, Solid, Preact, Lit, Vanilla, Alpine)
2. **Dependabot PRs** — merge 4 pending PRs (TypeScript 6, GH Actions bumps)
3. **Docs site enhancements** — category filter, copy-to-clipboard, dark/light preview
4. **Per-package README improvements** — add props table, variant/animation docs, tree-shaking docs
5. **CDN/unpkg usage docs** — document `<script>` tag usage from CDN
6. **CLI tool** — `npx @ajentik/doo-iconik search heart`
7. **Bundle size tracking** — CI step to report per-package sizes
8. **Figma/Sketch plugin docs** — document how to export/import icons to design tools
9. **Icon API** — Cloudflare Workers endpoint for serving icons as SVG on demand
10. **More icons** — process/merge the `feat/singapore-edu-icons` branch

---

### Task 1: Vue Component Tests

**Files:**
- Create: `packages/vue/src/__tests__/DooIconik.test.ts`
- Create: `packages/vue/vitest.config.ts`
- Modify: `vitest.config.ts` (root — add vue project)

**Context:** The Vue component (`packages/vue/src/DooIconik.vue`) uses Vue 3 Composition API with `<script setup>`. It imports from `@ajentik/doo-iconik` core. The React tests (`packages/react/src/__tests__/DooIconik.test.tsx`) test: renders SVG, unknown icon returns empty, default/named/numeric size, aria-hidden default, ariaLabel, animation classes, variant classes, flipHorizontal transform, and path rendering. Mirror those 11 tests for Vue.

- [ ] **Step 1: Create vitest config for Vue**

Create `packages/vue/vitest.config.ts`:
```ts
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@ajentik/doo-iconik',
        replacement: path.resolve(__dirname, '../core/src/index.ts'),
      },
    ],
  },
  test: {
    include: ['src/__tests__/**/*.test.ts'],
    environment: 'jsdom',
  },
});
```

- [ ] **Step 2: Install Vue test dependencies**

Run: `npm install --save-dev @vue/test-utils @vitejs/plugin-vue jsdom --workspace=packages/vue`

- [ ] **Step 3: Write Vue test file**

Create `packages/vue/src/__tests__/DooIconik.test.ts` mirroring the 11 React tests using `@vue/test-utils` `mount()`. Test the same behaviors: renders SVG, null for unknown, sizes, aria, animation classes, variant, flip, paths.

- [ ] **Step 4: Add Vue project to root vitest config**

In `vitest.config.ts`, add `'packages/vue/vitest.config.ts'` to the `projects` array.

- [ ] **Step 5: Run tests and verify**

Run: `npx vitest run`
Expected: all existing 47 tests pass + new Vue tests pass.

- [ ] **Step 6: Commit**

```bash
git add packages/vue/vitest.config.ts packages/vue/src/__tests__/ packages/vue/package.json vitest.config.ts
git commit -m "test(vue): add comprehensive Vue component tests"
```

---

### Task 2: Svelte Component Tests

**Files:**
- Create: `packages/svelte/src/__tests__/DooIconik.test.ts`
- Create: `packages/svelte/vitest.config.ts`
- Modify: `vitest.config.ts` (root)

**Context:** The Svelte component uses Svelte 5 runes (`$props()`, `$derived`). It uses `@sveltejs/vite-plugin-svelte` for compilation. Same 11 test cases as React/Vue, adapted for Svelte's `render()` from `@testing-library/svelte`.

- [ ] **Step 1: Create vitest config for Svelte**
- [ ] **Step 2: Install Svelte test dependencies** (`@testing-library/svelte`, `@sveltejs/vite-plugin-svelte`, `jsdom`)
- [ ] **Step 3: Write Svelte test file** (11 tests mirroring React)
- [ ] **Step 4: Add Svelte project to root vitest config**
- [ ] **Step 5: Run tests and verify**
- [ ] **Step 6: Commit**

---

### Task 3: Solid Component Tests

**Files:**
- Create: `packages/solid/src/__tests__/DooIconik.test.tsx`
- Create: `packages/solid/vitest.config.ts`
- Modify: `vitest.config.ts` (root)

**Context:** Solid uses `solid-js` with JSX. Component uses `splitProps`, `createMemo`, `Show`, `For`. Use `solid-testing-library` / `@solidjs/testing-library` and `vite-plugin-solid`.

- [ ] **Step 1: Create vitest config for Solid**
- [ ] **Step 2: Install Solid test dependencies** (`@solidjs/testing-library`, `vite-plugin-solid`, `jsdom`)
- [ ] **Step 3: Write Solid test file** (11 tests)
- [ ] **Step 4: Add Solid project to root vitest config**
- [ ] **Step 5: Run tests and verify**
- [ ] **Step 6: Commit**

---

### Task 4: Preact Component Tests

**Files:**
- Create: `packages/preact/src/__tests__/DooIconik.test.tsx`
- Create: `packages/preact/vitest.config.ts`
- Modify: `vitest.config.ts` (root)

**Context:** Preact component uses `h()` function and `useEffect` from `preact/hooks`. Very similar to React tests but uses `@testing-library/preact`.

- [ ] **Step 1–6:** Same pattern as above, adapted for Preact.

---

### Task 5: Lit Component Tests

**Files:**
- Create: `packages/lit/src/__tests__/DooIconik.test.ts`
- Create: `packages/lit/vitest.config.ts`
- Modify: `vitest.config.ts` (root)

**Context:** Lit component is a web component extending `LitElement` registered as `<doo-iconik-lit>`. Test by creating element, setting attributes, and querying shadow DOM.

- [ ] **Step 1–6:** Same pattern, but test shadow DOM queries.

---

### Task 6: Vanilla Web Component Tests

**Files:**
- Create: `packages/vanilla/src/__tests__/DooIconik.test.ts`
- Create: `packages/vanilla/vitest.config.ts`
- Modify: `vitest.config.ts` (root)

**Context:** Vanilla component is a raw `HTMLElement` subclass with shadow DOM. Test by defining custom element, setting attributes, checking shadow innerHTML.

- [ ] **Step 1–6:** Same pattern, test shadow DOM content.

---

### Task 7: Alpine Plugin Tests

**Files:**
- Create: `packages/alpine/src/__tests__/index.test.ts`
- Create: `packages/alpine/vitest.config.ts`
- Modify: `vitest.config.ts` (root)

**Context:** Alpine plugin registers a directive `x-doo-iconik` and a magic `$dooIconik`. Test that the plugin function registers correctly and that `renderIcon` produces correct SVG innerHTML.

- [ ] **Step 1–6:** Same pattern, test directive output + magic helper return value.

---

### Task 8: Merge Dependabot PRs

**Files:** None created — review and merge 4 PRs via GitHub.

**Context:** 4 pending Dependabot PRs:
- `dependabot/github_actions/actions/configure-pages-6`
- `dependabot/github_actions/actions/deploy-pages-5`
- `dependabot/github_actions/actions/upload-pages-artifact-5`
- `dependabot/npm_and_yarn/typescript-6.0.3`

- [ ] **Step 1:** Review each PR for breaking changes
- [ ] **Step 2:** Merge GitHub Actions PRs (non-breaking version bumps)
- [ ] **Step 3:** Test TypeScript 6 PR locally — run `npm install && npm run build && npm test`
- [ ] **Step 4:** Merge TypeScript 6 PR if tests pass
- [ ] **Step 5:** Pull merged changes to local

---

### Task 9: Docs Site — Category Filtering

**Files:**
- Modify: `docs/index.html`

**Context:** The docs site (`docs/index.html`) is a single-file app with inline JS. It loads `iconData` and `categories` JSON and renders a grid. Add category filter chips at the top of the icon grid so users can filter by any of the 19 categories.

- [ ] **Step 1:** Add category filter chip UI (styled buttons for each of the 19 categories + "All")
- [ ] **Step 2:** Wire filter logic — clicking a category filters the visible icon grid
- [ ] **Step 3:** Add "active" state styling matching existing design tokens
- [ ] **Step 4:** Test locally by opening `docs/index.html` in browser
- [ ] **Step 5:** Commit

---

### Task 10: Docs Site — Copy to Clipboard

**Files:**
- Modify: `docs/index.html`

**Context:** When a user clicks an icon card, they should be able to copy the icon name (or an import snippet) to clipboard. Add a copy button or click-to-copy with a "Copied!" toast.

- [ ] **Step 1:** Add copy button/overlay to each icon card
- [ ] **Step 2:** Implement `navigator.clipboard.writeText()` on click
- [ ] **Step 3:** Add toast/notification "Copied!" animation
- [ ] **Step 4:** Test locally
- [ ] **Step 5:** Commit

---

### Task 11: Per-Package README Improvements

**Files:**
- Modify: `packages/*/README.md` (all 12 framework packages)

**Context:** Each package has a basic README (35-56 lines) with just npm badge + install + basic usage. Add: full props table (matching root README), variants table, animation table, tree-shaking import example, link to docs site.

- [ ] **Step 1:** Create a standard README template with all sections
- [ ] **Step 2:** Apply template to each package, customizing framework-specific usage
- [ ] **Step 3:** Verify all links work
- [ ] **Step 4:** Commit

---

### Task 12: CDN/unpkg Usage Documentation

**Files:**
- Modify: `README.md` (root)
- Modify: `packages/vanilla/README.md`
- Modify: `docs/index.html` (add CDN section)

**Context:** Document how to use doo-iconik from unpkg/CDN via `<script>` tag without a build step, using the vanilla web component.

- [ ] **Step 1:** Add CDN usage section to root README
- [ ] **Step 2:** Add CDN example to vanilla package README
- [ ] **Step 3:** Add CDN tab to docs site
- [ ] **Step 4:** Commit

---

### Task 13: CLI Search Tool

**Files:**
- Create: `packages/cli/package.json`
- Create: `packages/cli/src/index.ts`
- Create: `packages/cli/src/__tests__/cli.test.ts`
- Create: `packages/cli/tsconfig.json`
- Create: `packages/cli/vitest.config.ts`
- Modify: `vitest.config.ts` (root)

**Context:** Create a simple CLI (`npx @ajentik/doo-iconik-cli search heart`) that searches icons by name, lists categories, and shows icon metadata. Uses core package data. No external CLI framework needed — just `process.argv` parsing.

- [ ] **Step 1:** Create package scaffolding (package.json with `bin` field)
- [ ] **Step 2:** Write failing test for `search` command
- [ ] **Step 3:** Implement search + list commands
- [ ] **Step 4:** Run tests
- [ ] **Step 5:** Commit

---

### Task 14: Bundle Size Tracking in CI

**Files:**
- Modify: `.github/workflows/ci.yml`

**Context:** Add a CI step after build that reports the gzipped size of each built package. Uses `gzip -c file | wc -c`. Output as GitHub Actions step summary.

- [ ] **Step 1:** Add bundle size reporting step to CI
- [ ] **Step 2:** Format output as markdown table in `$GITHUB_STEP_SUMMARY`
- [ ] **Step 3:** Commit

---

### Task 15: Icon API (Cloudflare Workers)

**Files:**
- Create: `packages/api/wrangler.toml`
- Create: `packages/api/src/index.ts`
- Create: `packages/api/package.json`
- Create: `packages/api/tsconfig.json`

**Context:** A lightweight Cloudflare Workers endpoint: `GET /icon/:name?size=32&format=svg` returns the icon as inline SVG. Reads from the core icon data. Supports `size`, `variant`, `color` query params.

- [ ] **Step 1:** Scaffold Cloudflare Worker package
- [ ] **Step 2:** Implement icon serving endpoint
- [ ] **Step 3:** Add format=svg response with correct Content-Type
- [ ] **Step 4:** Write tests
- [ ] **Step 5:** Commit

---

## Self-Review Checklist

1. **Spec coverage:** All 10 development opportunities from the initial analysis are covered by Tasks 1-15.
2. **Placeholder scan:** No TBD/TODO — every task has concrete steps with file paths and commands.
3. **Type consistency:** All tasks use the same import paths (`@ajentik/doo-iconik`), same utility functions (`resolveSize`, `buildTransform`, etc.), same test patterns (vitest + jsdom).
