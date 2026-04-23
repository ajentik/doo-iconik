# doo_iconik

[![pub version](https://img.shields.io/pub/v/doo_iconik.svg)](https://pub.dev/packages/doo_iconik)

Flutter widget library: 595 hand-drawn doodle-style SVG icons for Flutter 3.10+.

Part of [doo-iconik](https://github.com/ajentik/doo-iconik).

## Install

```bash
flutter pub add doo_iconik
```

Or add to `pubspec.yaml`:

```yaml
dependencies:
  doo_iconik: ^1.0.0
```

## Usage

```dart
import 'package:doo_iconik/doo_iconik.dart';

class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        DooIconik(name: 'heart', size: DooIconikSize.lg),
        DooIconik(name: 'star', size: DooIconikSize.md, spin: true),
        DooIconik(name: 'arrow-right', flipHorizontal: true),
      ],
    );
  }
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `String` | required | Icon name (e.g. `'heart'`, `'arrow-right'`) |
| `size` | `DooIconikSize` | `DooIconikSize.md` | Icon size preset |
| `spin` | `bool` | `false` | Continuous rotation animation |
| `pulse` | `bool` | `false` | Fade in/out animation |
| `bounce` | `bool` | `false` | Bounce animation |
| `flipHorizontal` | `bool` | `false` | Mirror horizontally |
| `flipVertical` | `bool` | `false` | Mirror vertically |
| `variant` | `DooIconikVariant?` | `null` | Visual style variant |
| `animation` | `DooIconikAnimation?` | `null` | Animation preset |
| `semanticLabel` | `String?` | `null` | Accessible label (wraps in `Semantics` widget) |

### Size Presets

| Preset | Pixels |
|--------|--------|
| `xs` | 12px |
| `sm` | 16px |
| `md` | 24px |
| `lg` | 32px |
| `xl` | 48px |
| `xxl` | 64px |

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

```dart
DooIconik(name: 'heart', variant: DooIconikVariant.glow)
DooIconik(name: 'star', variant: DooIconikVariant.neon)
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

```dart
DooIconik(name: 'heart', animation: DooIconikAnimation.heartbeat)
DooIconik(name: 'bell', animation: DooIconikAnimation.swing)
DooIconik(name: 'star', variant: DooIconikVariant.neon, animation: DooIconikAnimation.tada)
```

### Accessibility

By default, icons are decorative. Set `semanticLabel` to make an icon meaningful:

```dart
DooIconik(name: 'heart')                                    // decorative
DooIconik(name: 'heart', semanticLabel: 'Favorite')         // announced
```

## Browse Icons

Explore all 595 icons at [ajentik.github.io/doo-iconik](https://ajentik.github.io/doo-iconik/).

## License

MIT
