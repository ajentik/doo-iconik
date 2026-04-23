# @ajentik/doo-iconik-cli

CLI tool for searching and listing [doo-iconik](https://github.com/ajentik/doo-iconik) icons.

## Install

```bash
npm install -g @ajentik/doo-iconik-cli
```

Or run directly with npx:

```bash
npx @ajentik/doo-iconik-cli search heart
```

## Usage

```bash
# Search icons by name
doo-iconik search heart

# List all icons
doo-iconik list

# List icons in a category
doo-iconik list health

# List all categories
doo-iconik categories

# Show metadata for a specific icon
doo-iconik info arrow
```

## Commands

| Command | Description |
|---|---|
| `search <query>` | Search icons by name (case-insensitive substring match) |
| `list` | List all 595 icon names |
| `list <category>` | List icons in a specific category |
| `categories` | List all 19 categories |
| `info <name>` | Show icon metadata (viewBox, paths, type) |
| `--help` | Show help text |

## License

MIT
