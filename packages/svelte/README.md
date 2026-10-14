# @imaimai17468/digital-agency-icons-svelte

[デジタル庁デザインシステム](https://www.digital.go.jp/policies/servicedesign/designsystem/Illustration_Icons)のアイコンを Svelte 4 / 5 で使うための非公式コンポーネント集です。

アイコン一覧・検索: https://digital-agency-icons-docs.vercel.app

## インストール

```bash
pnpm add @imaimai17468/digital-agency-icons-svelte
```

## 使い方

```svelte
<script>
  import { AddFill, ArrowRightFill, SearchLine } from '@imaimai17468/digital-agency-icons-svelte';
</script>

<AddFill />
<SearchLine size={32} color="#1A1A1C" />
<ArrowRightFill aria-label="次へ" title="次へ進む" />
```

このパッケージはコンパイル前の `.svelte` を配布し、利用側の Svelte でビルドされます。SvelteKit や `@sveltejs/vite-plugin-svelte` を使う通常の構成なら追加の設定は不要です。

## Props

| Prop         | 型                 | デフォルト       | 説明                                      |
| ------------ | ------------------ | ---------------- | ----------------------------------------- |
| `size`       | `number \| string` | `24`             | 幅と高さ（px）                            |
| `color`      | `string`           | `'currentColor'` | 塗りの色                                  |
| `title`      | `string`           | -                | `<title>` を出力し、`role="img"` を付ける |
| `aria-label` | `string`           | -                | スクリーンリーダー向けのラベル            |
| `class`      | `string`           | -                | CSS クラス                                |
| `style`      | `string`           | -                | `vertical-align: middle` に追加される     |

コンポーネント名はアイコン名の PascalCase にバリアント（`Fill` / `Line`）を付けたものです（例: `ArrowRightFill`）。

## ライセンス

コードは MIT です。アイコンのデザインはデジタル庁が公開しているもので、利用条件は[デジタル庁デザインシステムのページ](https://www.digital.go.jp/policies/servicedesign/designsystem/Illustration_Icons)に従います。本パッケージはデジタル庁とは関係のない非公式のものです。
