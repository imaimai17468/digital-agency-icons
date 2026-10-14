# Digital Agency Icons

[![CI](https://github.com/imaimai17468/digital-agency-icons/actions/workflows/ci.yml/badge.svg)](https://github.com/imaimai17468/digital-agency-icons/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/@imaimai17468%2Fdigital-agency-icons-react.svg)](https://www.npmjs.com/package/@imaimai17468/digital-agency-icons-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

デジタル庁公式アイコンのReact/Vue/Svelteコンポーネントライブラリ

## 特徴

- 🎨 120個のアイコン（Fill/Line バリアント）
- ⚛️ React/Vue/Svelte対応
- 📦 Tree-shaking対応（個別インポート可能）
- 🔧 TypeScript完全対応
- ♿ アクセシビリティ対応
- 🎯 カスタマイズ可能なサイズ・カラー

## パッケージ

このモノレポには以下のパッケージが含まれています：

- `@imaimai17468/digital-agency-icons-core` - SVGデータとコアユーティリティ
- `@imaimai17468/digital-agency-icons-react` - Reactコンポーネント
- `@imaimai17468/digital-agency-icons-vue` - Vue 3コンポーネント
- `@imaimai17468/digital-agency-icons-svelte` - Svelteコンポーネント
- `@imaimai17468/digital-agency-icons-docs` - 紹介サイト（Next.js）

## インストール

### React

```bash
# pnpm
pnpm add @imaimai17468/digital-agency-icons-react

# npm
npm install @imaimai17468/digital-agency-icons-react

# yarn
yarn add @imaimai17468/digital-agency-icons-react
```

### Vue 3

```bash
# pnpm
pnpm add @imaimai17468/digital-agency-icons-vue

# npm
npm install @imaimai17468/digital-agency-icons-vue

# yarn
yarn add @imaimai17468/digital-agency-icons-vue
```

### Svelte

```bash
# pnpm
pnpm add @imaimai17468/digital-agency-icons-svelte

# npm
npm install @imaimai17468/digital-agency-icons-svelte

# yarn
yarn add @imaimai17468/digital-agency-icons-svelte
```

## 使い方

### React

```tsx
import {
  AddFill,
  SearchLine,
  ArrowRightFill,
} from '@imaimai17468/digital-agency-icons-react';

function App() {
  return (
    <div>
      {/* デフォルト: 24px, currentColor */}
      <AddFill />

      {/* サイズとカラーをカスタマイズ */}
      <SearchLine size={32} color="#1A1A1C" />

      {/* アクセシビリティ対応 */}
      <ArrowRightFill
        size={24}
        color="currentColor"
        aria-label="次へ"
        title="次へ進む"
      />
    </div>
  );
}
```

### Vue 3

```vue
<script setup lang="ts">
import {
  AddFill,
  SearchLine,
  ArrowRightFill,
} from '@imaimai17468/digital-agency-icons-vue';
</script>

<template>
  <div>
    <!-- デフォルト: 24px, currentColor -->
    <AddFill />

    <!-- サイズとカラーをカスタマイズ -->
    <SearchLine :size="32" color="#1A1A1C" />

    <!-- アクセシビリティ対応 -->
    <ArrowRightFill
      :size="24"
      color="currentColor"
      aria-label="次へ"
      title="次へ進む"
    />
  </div>
</template>
```

### Svelte

Svelte 4 と Svelte 5 の両方に対応しています。

```svelte
<script lang="ts">
  import { AddFill, SearchLine, ArrowRightFill } from '@imaimai17468/digital-agency-icons-svelte';
</script>

<!-- デフォルト: 24px, currentColor -->
<AddFill />

<!-- サイズとカラーをカスタマイズ -->
<SearchLine size={32} color="#1A1A1C" />

<!-- アクセシビリティ対応 -->
<ArrowRightFill
  size={24}
  color="currentColor"
  aria-label="次へ"
  title="次へ進む"
/>
```

### Props

全てのアイコンコンポーネントは以下のpropsをサポートしています：

| Prop         | Type                  | Default          | Description            |
| ------------ | --------------------- | ---------------- | ---------------------- |
| `size`       | `number \| string`    | `24`             | アイコンのサイズ（px） |
| `color`      | `string`              | `'currentColor'` | アイコンの色           |
| `className`  | `string`              | -                | CSSクラス              |
| `style`      | `React.CSSProperties` | -                | インラインスタイル     |
| `aria-label` | `string`              | -                | アクセシビリティラベル |
| `title`      | `string`              | -                | ツールチップタイトル   |

## 利用可能なアイコン

アイコンは **Fill** と **Line** の2つのバリアントで提供されています：

- **Fill**: 塗りつぶしスタイル（例: `AddFill`, `SearchFill`）
- **Line**: アウトラインスタイル（例: `AddLine`, `SearchLine`）

### アイコン一覧（一部）

- Add
- Application
- Arrival
- Arrow (Down, Left, Right, Up)
- Attention
- Authentication
- BankAccount
- Certification
- Child
- CodeReader
- Complete
- Copy
- Departure
- Documents
- Download
- EApplication
- Expenditure
- Family
- FastTrack
- FillableCard
- Health
- Help
- History
- House
- Immunization
- Inbox
- Income
- Information
- Invoice
- Itinerary
- Laws
- Luggage
- Mailing
- Me
- Medicine
- Menu
- Money
- MotherAndChild
- Municipality
- NewWindow
- Notification
- Password
- Pension
- PersonalComputer
- Printer
- PrivacyProtection
- PublicOffering
- SealCertificate
- Search
- Smartphone
- Specialist
- Stamp
- Tax
- Transactions
- Update
- Work

全アイコンの確認は紹介サイトをご覧ください。

## 開発

Node.js と pnpm のバージョンは `mise.toml` で固定しています。[mise](https://mise.jdx.dev/) を使う場合は `mise install` で揃います。

### セットアップ

```bash
pnpm install          # 依存関係のインストール（lefthook の Git フックも入る）
pnpm build:packages   # 4 パッケージのビルド
pnpm dev              # 紹介サイトの起動
```

### プロジェクト構成

```
digital-agency-icons/
├── packages/
│   ├── core/           # 元の SVG (src/icons) と生成データ
│   ├── react/          # React コンポーネント（生成）
│   ├── vue/            # Vue 3 コンポーネント（生成）
│   └── svelte/         # Svelte 4 / 5 コンポーネント（生成）
└── apps/
    └── docs/           # 紹介サイト（Next.js 16）
```

各フレームワークのコンポーネントは `packages/*/scripts/` の生成スクリプトが core の SVG から出力します。生成物は手で編集せず、スクリプトを変更して `pnpm build:packages` を実行してください。

### スクリプト

| コマンド             | 内容                                           |
| -------------------- | ---------------------------------------------- |
| `pnpm build`         | 全パッケージと紹介サイトのビルド               |
| `pnpm check`         | フォーマット・リント・型チェック（Vite+）      |
| `pnpm check:fix`     | フォーマットとリントの自動修正                 |
| `pnpm test`          | パッケージをビルドしてテストを実行             |
| `pnpm lint:packages` | 公開メタデータと型解決の検査（publint / attw） |

### リリースフロー

このプロジェクトは [release-please](https://github.com/googleapis/release-please) を使用した自動リリースを採用しています。npm への公開は GitHub Actions から [Trusted Publishing](https://docs.npmjs.com/trusted-publishers) で行い、provenance が付与されます。

#### 開発フロー（コントリビューター向け）

1. **developブランチからfeatureブランチを作成**

   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **変更をコミット（Conventional Commits形式）**

   ```bash
   git commit -m "feat: add new icon"
   git commit -m "fix: correct icon size"
   ```

3. **featureブランチをプッシュしてPR作成**

   ```bash
   git push origin feature/your-feature-name
   # feature/your-feature-name → develop へのPRを作成
   ```

4. **PRがdevelopにマージされた後、develop → main のPRが作成・マージされる**
   - マージ後、release-pleaseが自動的にリリースPRを作成

5. **リリースPRをマージ**
   - 自動的にGitHubリリースが作成される
   - 自動的にnpmに公開される

#### コミットメッセージの形式

[Conventional Commits](https://www.conventionalcommits.org/) に従ってください：

- `feat:` - 新機能（minor/patchバージョンアップ）
- `fix:` - バグ修正（patchバージョンアップ）
- `docs:` - ドキュメント変更
- `chore:` - ビルドやツールの変更
- `refactor:` - リファクタリング
- `ci:` - CI/CD関連の変更

詳細は [CONTRIBUTING.md](.github/CONTRIBUTING.md) を参照してください。

## ライセンス

MIT

## クレジット

アイコンデザイン: デジタル庁
