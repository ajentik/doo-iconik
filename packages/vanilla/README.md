# @ajentik/doo-iconik-vanilla

[![npm version](https://img.shields.io/npm/v/@ajentik/doo-iconik-vanilla.svg)](https://www.npmjs.com/package/@ajentik/doo-iconik-vanilla)

Vanilla JS / Web Components: 595 hand-drawn doodle-style SVG icons for Vanilla JS.

Part of [doo-iconik](https://github.com/ajentik/doo-iconik).

## Install

```bash
npm i @ajentik/doo-iconik-vanilla
```

## Usage

### Web Component

```js
import { register } from '@ajentik/doo-iconik-vanilla';

// Register the <doo-iconik> custom element
register();
```

```html
<doo-iconik name="heart" size="lg"></doo-iconik>
<doo-iconik name="star" size="md" spin></doo-iconik>
```

### Programmatic API

```js
import { createIcon } from '@ajentik/doo-iconik-vanilla';

const icon = createIcon('heart', { size: 'lg', spin: true });
document.body.appendChild(icon);
```

## CDN Usage (No Build Step)

Use doo-iconik directly in HTML without any build tools:

```html
<script src="https://unpkg.com/@ajentik/doo-iconik-vanilla/dist/index.global.js"></script>
<script>
  DooIconik.register();
</script>

<doo-iconik name="heart" size="lg"></doo-iconik>
<doo-iconik name="star" animation="heartbeat"></doo-iconik>
<doo-iconik name="bell" variant="neon" size="xl"></doo-iconik>
```

## Props (Attributes)

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | `string` | required | Icon name (e.g. `'heart'`, `'arrow-right'`) |
| `size` | `string \| number` | `'md'` | Icon size (preset or pixel value) |
| `spin` | `boolean` | `false` | Continuous rotation animation |
| `pulse` | `boolean` | `false` | Fade in/out animation |
| `bounce` | `boolean` | `false` | Bounce animation |
| `flip-horizontal` | `boolean` | `false` | Mirror horizontally |
| `flip-vertical` | `boolean` | `false` | Mirror vertically |
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
<doo-iconik name="heart" variant="glow"></doo-iconik>
<doo-iconik name="star" variant="neon"></doo-iconik>
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
<doo-iconik name="heart" animation="heartbeat"></doo-iconik>
<doo-iconik name="bell" animation="swing"></doo-iconik>
<doo-iconik name="star" variant="neon" animation="tada"></doo-iconik>
```

### Accessibility

By default, icons are decorative (`aria-hidden="true"`). Set `aria-label` to make an icon meaningful:

```html
<doo-iconik name="heart"></doo-iconik>                       <!-- decorative -->
<doo-iconik name="heart" aria-label="Favorite"></doo-iconik>  <!-- announced -->
```

## Browse Icons

Explore all 595 icons at [ajentik.github.io/doo-iconik](https://ajentik.github.io/doo-iconik/).

## License

MIT
