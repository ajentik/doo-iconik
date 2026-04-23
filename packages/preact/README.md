# @ajentik/doo-iconik-preact

[![npm version](https://img.shields.io/npm/v/@ajentik/doo-iconik-preact.svg)](https://www.npmjs.com/package/@ajentik/doo-iconik-preact)

Preact component library: 595 hand-drawn doodle-style SVG icons for Preact 10.

Part of [doo-iconik](https://github.com/ajentik/doo-iconik).

## Install

```bash
npm i @ajentik/doo-iconik-preact
```

## Usage

```jsx
import { DooIconik } from '@ajentik/doo-iconik-preact';

function App() {
  return (
    <div>
      <DooIconik name="heart" size="lg" />
      <DooIconik name="star" size="md" spin />
      <DooIconik name="arrow-right" flipHorizontal />
    </div>
  );
}
```

## Props

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

```jsx
<DooIconik name="heart" variant="glow" />
<DooIconik name="star" variant="neon" />
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

```jsx
<DooIconik name="heart" animation="heartbeat" />
<DooIconik name="bell" animation="swing" />
<DooIconik name="star" variant="neon" animation="tada" />
```

### Accessibility

By default, icons are decorative (`aria-hidden="true"`). Set `ariaLabel` to make an icon meaningful:

```jsx
<DooIconik name="heart" />                       {/* decorative */}
<DooIconik name="heart" ariaLabel="Favorite" />   {/* announced */}
```

## Tree-Shaking

Import individual icons for smaller bundles:

```typescript
import { heart } from '@ajentik/doo-iconik/icons/heart';
```

## Browse Icons

Explore all 595 icons at [ajentik.github.io/doo-iconik](https://ajentik.github.io/doo-iconik/).

## License

MIT
