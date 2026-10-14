# @imaimai17468/digital-agency-icons-react

[デジタル庁デザインシステム](https://www.digital.go.jp/policies/servicedesign/designsystem/Illustration_Icons)のアイコンを React 18 / 19 で使うための非公式コンポーネント集です。

アイコン一覧・検索: https://digital-agency-icons-docs.vercel.app

## インストール

```bash
pnpm add @imaimai17468/digital-agency-icons-react
```

## 使い方

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

## Props

| Prop         | 型                 | デフォルト       | 説明                                      |
| ------------ | ------------------ | ---------------- | ----------------------------------------- |
| `size`       | `number \| string` | `24`             | 幅と高さ（px）                            |
| `color`      | `string`           | `'currentColor'` | 塗りの色                                  |
| `title`      | `string`           | -                | `<title>` を出力し、`role="img"` を付ける |
| `aria-label` | `string`           | -                | スクリーンリーダー向けのラベル            |
| `className`  | `string`           | -                | CSS クラス                                |
| `style`      | `CSSProperties`    | -                | `vertical-align: middle` に追加される     |

コンポーネント名はアイコン名の PascalCase にバリアント（`Fill` / `Line`）を付けたものです（例: `ArrowRightFill`）。

## ライセンス

コードは MIT です。アイコンのデザインはデジタル庁が公開しているもので、利用条件は[デジタル庁デザインシステムのページ](https://www.digital.go.jp/policies/servicedesign/designsystem/Illustration_Icons)に従います。本パッケージはデジタル庁とは関係のない非公式のものです。
