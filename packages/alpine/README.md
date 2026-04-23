# @ajentik/doo-iconik-alpine

[![npm version](https://img.shields.io/npm/v/@ajentik/doo-iconik-alpine.svg)](https://www.npmjs.com/package/@ajentik/doo-iconik-alpine)

Alpine.js plugin: 595 hand-drawn doodle-style SVG icons for Alpine.js 3.

Part of [doo-iconik](https://github.com/ajentik/doo-iconik).

## Install

```bash
npm i @ajentik/doo-iconik-alpine
```

## Usage

```js
import Alpine from 'alpinejs';
import { dooIconikPlugin } from '@ajentik/doo-iconik-alpine';

Alpine.plugin(dooIconikPlugin);
Alpine.start();
```

```html
<div x-data>
  <i x-doo-iconik="'heart'" data-size="lg"></i>
  <i x-doo-iconik="'star'" data-size="md" data-spin></i>
  <i x-doo-iconik="'arrow-right'" data-flip-horizontal></i>
</div>
```

## Props

Pass options via the directive expression or `data-*` attributes:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `name` | `string` | required | Icon name (e.g. `'heart'`, `'arrow-right'`) |
| `size` | `string \| number` | `'md'` | Icon size (preset or pixel value) |
| `spin` | `boolean` | `false` | Continuous rotation animation |
| `pulse` | `boolean` | `false` | Fade in/out animation |
| `bounce` | `boolean` | `false` | Bounce animation |
| `flipHorizontal` | `boolean` | `false` | Mirror horizontally |
| `flipVertical` | `boolean` | `false` | Mirror vertically |
| `variant` | `string` | `undefined` | Visual style variant |
| `animation` | `string` | `undefined` | Animation preset |
| `ariaLabel` | `string` | `undefined` | Accessible label |

### Size Presets

| Preset | Pixels |
|--------|--------|
| `xs` | 12px |
| `sm` | 16px |
| `md` | 24px |
| `lg` | 32px |
| `xl` | 48px |
| `2xl` | 64px |

### Style Variants

| Variant | Effect |
|---------|--------|
| `default` | No effect |
| `glow` | Soft glow using current color |
| `neon` | Intense neon sign effect |
| `shadow` | Drop shadow for depth |
| `embossed` | Light + dark opposing shadows |
| `glass` | Semi-transparent with subtle shadow |
| `outline` | Forces stroke-only rendering |
| `retro` | Sepia-toned vintage look |

```html
<div x-data x-doo-iconik="{ name: 'heart', variant: 'glow' }"></div>
<div x-data x-doo-iconik="{ name: 'star', variant: 'neon' }"></div>
```

### Animations

| Animation | Effect |
|-----------|--------|
| `spin` | Continuous 360° rotation |
| `pulse` | Fade in/out |
| `bounce` | Vertical bounce |
| `wiggle` | Gentle rotation wiggle |
| `shake` | Horizontal shake |
| `float` | Smooth floating motion |
| `heartbeat` | Double-beat scaling |
| `tada` | Attention-grabbing entrance |
| `rubber` | Rubber band stretch |
| `swing` | Pendulum swing from top |
| `jello` | Jelly-like skew |

```html
<div x-data x-doo-iconik="{ name: 'heart', animation: 'heartbeat' }"></div>
<div x-data x-doo-iconik="{ name: 'star', variant: 'neon', animation: 'tada' }"></div>
```

### Accessibility

By default, icons are decorative (`aria-hidden="true"`). Set `ariaLabel` to make an icon meaningful:

```html
<div x-data x-doo-iconik="{ name: 'heart' }"></div>                            <!-- decorative -->
<div x-data x-doo-iconik="{ name: 'heart', ariaLabel: 'Favorite' }"></div>      <!-- announced -->
```

## Browse Icons

Explore all 595 icons at [ajentik.github.io/doo-iconik](https://ajentik.github.io/doo-iconik/).

## License

MIT
