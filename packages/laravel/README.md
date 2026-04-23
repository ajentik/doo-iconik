# ajentik/doo-iconik-laravel

[![Packagist Version](https://img.shields.io/packagist/v/ajentik/doo-iconik-laravel.svg)](https://packagist.org/packages/ajentik/doo-iconik-laravel)

Laravel Blade component: 595 hand-drawn doodle-style SVG icons for Laravel 10/11/12.

Part of [doo-iconik](https://github.com/ajentik/doo-iconik).

## Install

```bash
composer require ajentik/doo-iconik-laravel
```

## Usage

### Blade Component

```blade
<x-doo-iconik name="heart" />
<x-doo-iconik name="heart" size="lg" />
<x-doo-iconik name="star" size="md" spin />
<x-doo-iconik name="arrow-right" flip-horizontal />
```

### Blade Directive

```blade
@dooIconik('heart', ['size' => 'lg'])
```

## Publishing Config

```bash
php artisan vendor:publish --tag=doo-iconik-config
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | required | Icon name (e.g. `'heart'`, `'arrow-right'`) |
| `size` | `string \| int` | `'md'` | Icon size (preset or pixel value) |
| `spin` | `bool` | `false` | Continuous rotation animation |
| `pulse` | `bool` | `false` | Fade in/out animation |
| `bounce` | `bool` | `false` | Bounce animation |
| `flip-horizontal` | `bool` | `false` | Mirror horizontally |
| `flip-vertical` | `bool` | `false` | Mirror vertically |
| `variant` | `string` | `null` | Visual style variant |
| `animation` | `string` | `null` | Animation preset |
| `aria-label` | `string` | `null` | Accessible label |

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

```blade
<x-doo-iconik name="heart" variant="glow" />
<x-doo-iconik name="star" variant="neon" />
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

```blade
<x-doo-iconik name="heart" animation="heartbeat" />
<x-doo-iconik name="bell" animation="swing" />
<x-doo-iconik name="star" variant="neon" animation="tada" />
```

### Accessibility

By default, icons are decorative (`aria-hidden="true"`). Set `aria-label` to make an icon meaningful:

```blade
<x-doo-iconik name="heart" />                        {{-- decorative --}}
<x-doo-iconik name="heart" aria-label="Favorite" />   {{-- announced --}}
```

## Browse Icons

Explore all 595 icons at [ajentik.github.io/doo-iconik](https://ajentik.github.io/doo-iconik/).

## License

MIT
