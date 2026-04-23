# doo_iconik

[![Gem Version](https://img.shields.io/gem/v/doo_iconik.svg)](https://rubygems.org/gems/doo_iconik)

Rails helper gem: 595 hand-drawn doodle-style SVG icons for Rails 6+.

Part of [doo-iconik](https://github.com/ajentik/doo-iconik).

## Install

Add to your `Gemfile`:

```ruby
gem 'doo_iconik'
```

Then run:

```bash
bundle install
```

## Usage

### View Helper

```erb
<%= doo_iconik 'heart' %>
<%= doo_iconik 'heart', size: 'lg' %>
<%= doo_iconik 'star', size: 'md', spin: true %>
<%= doo_iconik 'arrow-right', flip_horizontal: true %>
```

### With Additional HTML Attributes

```erb
<%= doo_iconik 'heart', size: 'lg', class: 'text-red-500', id: 'fav-icon' %>
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `name` | `String` | required | Icon name (e.g. `'heart'`, `'arrow-right'`) |
| `size` | `Symbol \| Integer` | `:md` | Icon size (preset or pixel value) |
| `spin` | `Boolean` | `false` | Continuous rotation animation |
| `pulse` | `Boolean` | `false` | Fade in/out animation |
| `bounce` | `Boolean` | `false` | Bounce animation |
| `flip_horizontal` | `Boolean` | `false` | Mirror horizontally |
| `flip_vertical` | `Boolean` | `false` | Mirror vertically |
| `variant` | `Symbol` | `nil` | Visual style variant |
| `animation` | `Symbol` | `nil` | Animation preset |
| `aria_label` | `String` | `nil` | Accessible label |

### Size Presets

| Preset | Pixels |
|--------|--------|
| `:xs` | 12px |
| `:sm` | 16px |
| `:md` | 24px |
| `:lg` | 32px |
| `:xl` | 48px |
| `:"2xl"` | 64px |

### Style Variants

| Variant | Effect |
|---------|--------|
| `:default` | No effect |
| `:glow` | Soft glow using current color |
| `:neon` | Intense neon sign effect |
| `:shadow` | Drop shadow for depth |
| `:embossed` | Light + dark opposing shadows |
| `:glass` | Semi-transparent with subtle shadow |
| `:outline` | Forces stroke-only rendering |
| `:retro` | Sepia-toned vintage look |

```erb
<%= doo_iconik 'heart', variant: :glow %>
<%= doo_iconik 'star', variant: :neon %>
```

### Animations

| Animation | Effect |
|-----------|--------|
| `:spin` | Continuous 360° rotation |
| `:pulse` | Fade in/out |
| `:bounce` | Vertical bounce |
| `:wiggle` | Gentle rotation wiggle |
| `:shake` | Horizontal shake |
| `:float` | Smooth floating motion |
| `:heartbeat` | Double-beat scaling |
| `:tada` | Attention-grabbing entrance |
| `:rubber` | Rubber band stretch |
| `:swing` | Pendulum swing from top |
| `:jello` | Jelly-like skew |

```erb
<%= doo_iconik 'heart', animation: :heartbeat %>
<%= doo_iconik 'bell', animation: :swing %>
<%= doo_iconik 'star', variant: :neon, animation: :tada %>
```

### Accessibility

By default, icons are decorative (`aria-hidden="true"`). Set `aria_label` to make an icon meaningful:

```erb
<%= doo_iconik 'heart' %>                              <%# decorative %>
<%= doo_iconik 'heart', aria_label: 'Favorite' %>      <%# announced %>
```

## Browse Icons

Explore all 595 icons at [ajentik.github.io/doo-iconik](https://ajentik.github.io/doo-iconik/).

## License

MIT
