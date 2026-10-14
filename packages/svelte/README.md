# @imaimai17468/digital-agency-icons-svelte

Svelte components for Digital Agency Icons

## Installation

```bash
# pnpm
pnpm add @imaimai17468/digital-agency-icons-svelte

# npm
npm install @imaimai17468/digital-agency-icons-svelte

# yarn
yarn add @imaimai17468/digital-agency-icons-svelte
```

## Usage

```svelte
<script lang="ts">
  import { AddFill, SearchLine, ArrowRightFill } from '@imaimai17468/digital-agency-icons-svelte';
</script>

<!-- Default: 24px, currentColor -->
<AddFill />

<!-- Custom size and color -->
<SearchLine size={32} color="#1A1A1C" />

<!-- Accessibility support -->
<ArrowRightFill
  size={24}
  color="currentColor"
  aria-label="次へ"
  title="次へ進む"
/>
```

## Props

All icon components support the following props:

| Prop         | Type               | Default          | Description         |
| ------------ | ------------------ | ---------------- | ------------------- |
| `size`       | `number \| string` | `24`             | Icon size (px)      |
| `color`      | `string`           | `'currentColor'` | Icon color          |
| `class`      | `string`           | -                | CSS class           |
| `style`      | `string`           | -                | Inline styles       |
| `aria-label` | `string`           | -                | Accessibility label |
| `title`      | `string`           | -                | Tooltip title       |

## Available Icons

Icons are available in two variants:

- **Fill**: Filled style (e.g., `AddFill`, `SearchFill`)
- **Line**: Outline style (e.g., `AddLine`, `SearchLine`)

See the [documentation site](https://github.com/imaimai17468/digital-agency-icons) for a full list of available icons.

## License

MIT
