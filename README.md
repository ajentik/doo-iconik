# doo-iconik

606+ hand-drawn doodle style SVG icons for any framework. Works with React, Vue, Svelte, vanilla JS, and Ruby on Rails.

## Packages

| Package | Framework | Install |
|---------|-----------|---------|
| `@doo-iconik/core` | None (shared data) | `npm i @doo-iconik/core` |
| `@doo-iconik/react` | React 18/19 | `npm i @doo-iconik/react` |
| `@doo-iconik/vue` | Vue 3 | `npm i @doo-iconik/vue` |
| `@doo-iconik/svelte` | Svelte 5 | `npm i @doo-iconik/svelte` |
| `@doo-iconik/vanilla` | Vanilla JS / Web Components | `npm i @doo-iconik/vanilla` |
| `doo_iconik` | Ruby on Rails | `gem 'doo_iconik'` |

## Usage

### React

```jsx
import { DooIconik } from '@doo-iconik/react';

function App() {
  return <DooIconik name="heart" size="lg" spin />;
}
```

### Vue

```vue
<script setup>
import { DooIconik } from '@doo-iconik/vue';
</script>

<template>
  <DooIconik name="heart" size="lg" spin />
</template>
```

### Svelte

```svelte
<script>
  import { DooIconik } from '@doo-iconik/svelte';
</script>

<DooIconik name="heart" size="lg" spin />
```

### Vanilla JS

```js
// Web Component
import { register } from '@doo-iconik/vanilla';
register();
```

```html
<doo-iconik name="heart" size="lg" spin></doo-iconik>
```

```js
// Or programmatic usage
import { createIcon } from '@doo-iconik/vanilla';
const svg = createIcon('heart', { size: 'lg', spin: true });
document.body.appendChild(svg);
```

### Ruby on Rails

```ruby
# Gemfile
gem 'doo_iconik'
```

```bash
rails generate doo_iconik:install
```

```erb
<%= doo_iconik 'heart', size: :lg, spin: true %>
```

## Props

All framework components share the same props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `DooIconikName` | required | Icon name (e.g. `'heart'`, `'arrow-right'`) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| number` | `'md'` | Icon size (preset or pixel value) |
| `spin` | `boolean` | `false` | Continuous rotation animation |
| `pulse` | `boolean` | `false` | Fade in/out animation |
| `bounce` | `boolean` | `false` | Bounce animation |
| `flipHorizontal` | `boolean` | `false` | Mirror horizontally |
| `flipVertical` | `boolean` | `false` | Mirror vertically |

### Size presets

| Preset | Pixels |
|--------|--------|
| `xs` | 12px |
| `sm` | 16px |
| `md` | 24px |
| `lg` | 32px |
| `xl` | 48px |
| `2xl` | 64px |

## Icon categories

Icons span 19 categories: arrow, currency, ecommerce, elderlycare, emojis, files, finance, food, gendersymbols, handgestures, health, healthcare, interfaces, logos, misc, objects, technology, userinterface, weather.

## Development

```bash
# Generate icon data from raw JSON
npm run generate

# Build all packages
npm run build
```

## License

MIT
