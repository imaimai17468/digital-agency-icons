# @digital-agency-icons/react

デジタル庁公式アイコンのReactコンポーネントライブラリ

## インストール

```bash
pnpm add @digital-agency-icons/react
# or
npm install @digital-agency-icons/react
# or
yarn add @digital-agency-icons/react
```

## 使い方

```tsx
import {
  AddFill,
  SearchLine,
  ArrowRightFill,
} from '@digital-agency-icons/react';

function App() {
  return (
    <div>
      <AddFill />
      <SearchLine size={32} color="#1A1A1C" />
      <ArrowRightFill size={24} aria-label="次へ" />
    </div>
  );
}
```

## Props

| Prop         | Type                  | Default          | Description            |
| ------------ | --------------------- | ---------------- | ---------------------- |
| `size`       | `number \| string`    | `24`             | アイコンのサイズ（px） |
| `color`      | `string`              | `'currentColor'` | アイコンの色           |
| `className`  | `string`              | -                | CSSクラス              |
| `style`      | `React.CSSProperties` | -                | インラインスタイル     |
| `aria-label` | `string`              | -                | アクセシビリティラベル |
| `title`      | `string`              | -                | ツールチップタイトル   |

## Features

- ✅ TypeScript完全対応
- ✅ Tree-shaking対応
- ✅ 120個のアイコン（Fill/Line）
- ✅ アクセシビリティ対応
- ✅ React 18/19対応

## ライセンス

MIT
