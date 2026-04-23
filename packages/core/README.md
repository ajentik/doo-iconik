# @ajentik/doo-iconik

[![npm version](https://img.shields.io/npm/v/@ajentik/doo-iconik.svg)](https://www.npmjs.com/package/@ajentik/doo-iconik)

Framework-agnostic shared icon data and utilities: 595 hand-drawn doodle-style SVG icons.

Part of [doo-iconik](https://github.com/ajentik/doo-iconik).

## Install

```bash
npm i @ajentik/doo-iconik
```

## Usage

```js
import { getIcon, getAllIconNames } from '@ajentik/doo-iconik';

// Get a single icon's SVG data
const heart = getIcon('heart');
console.log(heart.svg); // raw SVG string

// List all available icon names
const names = getAllIconNames();
```

## API

| Export | Description |
| --- | --- |
| `getIcon(name)` | Returns the SVG data for a given icon name |
| `getAllIconNames()` | Returns an array of all 595 icon names |
| `iconData` | The full icon dataset |

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
| `variant` | `DooIconikVariant` | `undefined` | Visual style variant |
| `animation` | `DooIconikAnimation` | `undefined` | Animation preset |
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

### Accessibility

By default, icons are decorative (`aria-hidden="true"`). Set `ariaLabel` to make an icon meaningful to screen readers.

## Tree-Shaking

Import individual icons for smaller bundles:

```typescript
// Only bundles the heart icon (~200 bytes)
import { heart } from '@ajentik/doo-iconik/icons/heart';

// All icons (~212KB)
import { iconData } from '@ajentik/doo-iconik';
```

## Browse Icons

Explore all 595 icons at [ajentik.github.io/doo-iconik](https://ajentik.github.io/doo-iconik/).

## License

MIT
