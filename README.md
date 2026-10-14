# Digital Agency Icons

[![CI](https://github.com/imaimai17468/digital-agency-icons/actions/workflows/ci.yml/badge.svg)](https://github.com/imaimai17468/digital-agency-icons/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@imaimai17468/digital-agency-icons-react)](https://www.npmjs.com/package/@imaimai17468/digital-agency-icons-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

[デジタル庁デザインシステム](https://www.digital.go.jp/policies/servicedesign/designsystem/Illustration_Icons)のアイコンを React / Vue / Svelte のコンポーネントとして使える**非公式**ライブラリです。

**アイコン一覧・検索:** https://digital-agency-icons-docs.vercel.app

- 60 種類 × 2 バリアント（Fill / Line）の計 120 アイコン
- React / Vue 3 / Svelte 4・5 対応
- TypeScript の型定義つき、Tree-shaking 対応
- `title` / `aria-label` によるアクセシビリティ対応

## パッケージ

| パッケージ                                                                                                             | 対象                               |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`@imaimai17468/digital-agency-icons-react`](https://www.npmjs.com/package/@imaimai17468/digital-agency-icons-react)   | React 18 / 19                      |
| [`@imaimai17468/digital-agency-icons-vue`](https://www.npmjs.com/package/@imaimai17468/digital-agency-icons-vue)       | Vue 3                              |
| [`@imaimai17468/digital-agency-icons-svelte`](https://www.npmjs.com/package/@imaimai17468/digital-agency-icons-svelte) | Svelte 4 / 5                       |
| [`@imaimai17468/digital-agency-icons-core`](https://www.npmjs.com/package/@imaimai17468/digital-agency-icons-core)     | SVG データ（フレームワーク非依存） |

## 使い方

使うフレームワークのパッケージを 1 つインストールします（npm / yarn でも同様です）。

```bash
pnpm add @imaimai17468/digital-agency-icons-react
```

### React

```tsx
import {
  AddFill,
  ArrowRightFill,
  SearchLine,
} from '@imaimai17468/digital-agency-icons-react';

export function Example() {
  return (
    <>
      <AddFill />
      <SearchLine size={32} color="#1A1A1C" />
      <ArrowRightFill aria-label="次へ" title="次へ進む" />
    </>
  );
}
```

### Vue 3

```vue
<script setup lang="ts">
import {
  AddFill,
  ArrowRightFill,
  SearchLine,
} from '@imaimai17468/digital-agency-icons-vue';
</script>

<template>
  <AddFill />
  <SearchLine :size="32" color="#1A1A1C" />
  <ArrowRightFill aria-label="次へ" title="次へ進む" />
</template>
```

### Svelte

```svelte
<script>
  import { AddFill, ArrowRightFill, SearchLine } from '@imaimai17468/digital-agency-icons-svelte';
</script>

<AddFill />
<SearchLine size={32} color="#1A1A1C" />
<ArrowRightFill aria-label="次へ" title="次へ進む" />
```

Svelte パッケージはコンパイル前の `.svelte` を配布し、利用側の Svelte でビルドされます。SvelteKit や `@sveltejs/vite-plugin-svelte` を使う通常の構成なら追加の設定は不要です。

## Props

すべてのアイコンが同じ props を受け取ります。

| Prop         | 型                 | デフォルト       | 説明                                          |
| ------------ | ------------------ | ---------------- | --------------------------------------------- |
| `size`       | `number \| string` | `24`             | 幅と高さ（px）                                |
| `color`      | `string`           | `'currentColor'` | 塗りの色                                      |
| `title`      | `string`           | -                | `<title>` を出力し、`role="img"` を付ける     |
| `aria-label` | `string`           | -                | スクリーンリーダー向けのラベル                |
| クラス       | `string`           | -                | React は `className`、Vue / Svelte は `class` |
| `style`      | 下記               | -                | `vertical-align: middle` に追加される         |

`style` の型は React が `CSSProperties`、Vue が `StyleValue`（文字列・オブジェクト・配列）、Svelte が `string` です。

コンポーネント名はアイコン名の PascalCase にバリアントを付けたものです（`arrow_right` の Fill 版 → `ArrowRightFill`）。全アイコンの名前は[アイコン一覧](https://digital-agency-icons-docs.vercel.app/icons)で検索・コピーできます。

## core パッケージ

フレームワークを使わずに SVG を扱う場合は core を使います。

```ts
import { iconData, iconNames } from '@imaimai17468/digital-agency-icons-core';

iconNames; // ['add_fill', 'add_line', ...]
iconData.add_fill.svg; // SVG 文字列
iconData.add_fill.path; // <path> の d 属性
```

## 開発に参加する

開発環境のセットアップ、コマンド、アイコンの追加方法は [CONTRIBUTING.md](.github/CONTRIBUTING.md) を参照してください。

## ライセンス

コードは [MIT](./LICENSE) です。アイコンのデザインはデジタル庁が公開しているもので、利用条件は[デジタル庁デザインシステムのページ](https://www.digital.go.jp/policies/servicedesign/designsystem/Illustration_Icons)に従います。本ライブラリはデジタル庁とは関係のない非公式のものです。
