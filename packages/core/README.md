# @imaimai17468/digital-agency-icons-core

[デジタル庁デザインシステム](https://www.digital.go.jp/policies/servicedesign/designsystem/Illustration_Icons)のアイコンの SVG データです（非公式）。React / Vue / Svelte で使う場合は、それぞれ `@imaimai17468/digital-agency-icons-react` / `-vue` / `-svelte` を使ってください。

アイコン一覧・検索: https://digital-agency-icons-docs.vercel.app

## インストール

```bash
pnpm add @imaimai17468/digital-agency-icons-core
```

## 使い方

```ts
import {
  getIconBaseName,
  getIconVariant,
  iconData,
  iconNames,
} from '@imaimai17468/digital-agency-icons-core';

iconNames; // ['add_fill', 'add_line', ...]（IconName 型）

const icon = iconData.arrow_right_fill;
icon.svg; // SVG 文字列
icon.path; // <path> の d 属性
icon.viewBox; // '0 0 24 24'

getIconBaseName('arrow_right_fill'); // 'arrow_right'
getIconVariant('arrow_right_fill'); // 'fill'
```

| export                                   | 内容                                                       |
| ---------------------------------------- | ---------------------------------------------------------- |
| `iconData`                               | アイコン名 → `IconData`（`svg` / `path` / `viewBox` など） |
| `iconNames` / `IconName`                 | 全アイコン名とその型                                       |
| `toPascalCase` / `toCamelCase`           | `arrow_right_fill` → `ArrowRightFill` / `arrowRightFill`   |
| `getIconBaseName` / `getIconVariant`     | バリアントを除いた名前 / `'fill'` か `'line'`              |
| `IconData` / `IconProps` / `IconVariant` | 型定義                                                     |

## ライセンス

コードは MIT です。アイコンのデザインはデジタル庁が公開しているもので、利用条件は[デジタル庁デザインシステムのページ](https://www.digital.go.jp/policies/servicedesign/designsystem/Illustration_Icons)に従います。本パッケージはデジタル庁とは関係のない非公式のものです。
