# @ajentik/doo-iconik-lit

[![npm version](https://img.shields.io/npm/v/@ajentik/doo-iconik-lit.svg)](https://www.npmjs.com/package/@ajentik/doo-iconik-lit)

Lit web component: 595 hand-drawn doodle-style SVG icons for Lit 3.

Part of [doo-iconik](https://github.com/ajentik/doo-iconik).

## Install

```bash
npm i @ajentik/doo-iconik-lit
```

## Usage

```js
import '@ajentik/doo-iconik-lit';
```

```html
<doo-iconik-lit name="heart" size="lg"></doo-iconik-lit>
<doo-iconik-lit name="star" size="md" spin></doo-iconik-lit>
<doo-iconik-lit name="arrow-right" flipHorizontal></doo-iconik-lit>
```

## Props (Attributes)

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | `string` | required | Icon name (e.g. `'heart'`, `'arrow-right'`) |
| `size` | `string \| number` | `'md'` | Icon size (preset or pixel value) |
| `spin` | `boolean` | `false` | Continuous rotation animation |
| `pulse` | `boolean` | `false` | Fade in/out animation |
| `bounce` | `boolean` | `false` | Bounce animation |
| `flipHorizontal` | `boolean` | `false` | Mirror horizontally |
| `flipVertical` | `boolean` | `false` | Mirror vertically |
| `variant` | `string` | `undefined` | Visual style variant |
| `animation` | `string` | `undefined` | Animation preset |
| `aria-label` | `string` | `undefined` | Accessible label |

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
<doo-iconik-lit name="heart" variant="glow"></doo-iconik-lit>
<doo-iconik-lit name="star" variant="neon"></doo-iconik-lit>
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
<doo-iconik-lit name="heart" animation="heartbeat"></doo-iconik-lit>
<doo-iconik-lit name="bell" animation="swing"></doo-iconik-lit>
<doo-iconik-lit name="star" variant="neon" animation="tada"></doo-iconik-lit>
```

### Accessibility

By default, icons are decorative (`aria-hidden="true"`). Set `aria-label` to make an icon meaningful:

```html
<doo-iconik-lit name="heart"></doo-iconik-lit>                       <!-- decorative -->
<doo-iconik-lit name="heart" aria-label="Favorite"></doo-iconik-lit>  <!-- announced -->
```

## Browse Icons

Explore all 595 icons at [ajentik.github.io/doo-iconik](https://ajentik.github.io/doo-iconik/).

## License

MIT
