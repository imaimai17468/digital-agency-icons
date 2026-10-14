# Publishing Guide

## 初回公開手順

### 1. npmにログイン

```bash
npm login
```

### 2. パッケージのビルド

```bash
# Core パッケージのビルド
pnpm --filter @digital-agency-icons/core build

# React パッケージのビルド
pnpm --filter @digital-agency-icons/react build
```

### 3. パッケージの公開

**重要**: パッケージは依存関係の順に公開する必要があります

```bash
# 1. まず core パッケージを公開
cd packages/core
npm publish --access public

# 2. 次に react パッケージを公開（coreに依存）
cd ../react
npm publish --access public
```

### 4. 公開の確認

```bash
# Core パッケージ
npm view @digital-agency-icons/core

# React パッケージ
npm view @digital-agency-icons/react
```

## バージョンアップ手順

### 1. バージョンの更新

各パッケージの `package.json` でバージョンを更新:

```bash
# packages/core/package.json
"version": "0.0.2"

# packages/react/package.json
"version": "0.0.2"
```

Reactパッケージの依存関係も更新:

```json
"dependencies": {
  "@digital-agency-icons/core": "^0.0.2"
}
```

### 2. ビルドと公開

```bash
# ビルド
pnpm build

# Core を公開
cd packages/core && npm publish

# React を公開
cd ../react && npm publish
```

## Changesets を使った自動バージョニング（推奨）

現在は手動でバージョン管理していますが、将来的には changesets の導入を推奨します:

```bash
# Changesets のインストール
pnpm add -Dw @changesets/cli
pnpm changeset init

# バージョン変更の記録
pnpm changeset

# バージョンアップとCHANGELOG生成
pnpm changeset version

# 公開
pnpm changeset publish
```

## トラブルシューティング

### workspace:* の依存関係エラー

公開前に `workspace:*` を実際のバージョン番号に変更してください:

```json
// ❌ 間違い
"@digital-agency-icons/core": "workspace:*"

// ✅ 正しい
"@digital-agency-icons/core": "^0.0.1"
```

### 2要素認証（2FA）

npmで2FAを有効にしている場合、公開時にワンタイムパスワードが必要です:

```bash
npm publish --otp=123456
```

## 公開前チェックリスト

- [ ] すべてのテストが通過している
- [ ] ビルドが成功している（`pnpm build`）
- [ ] READMEが最新である
- [ ] package.jsonのバージョンが正しい
- [ ] workspace依存関係が実際のバージョン番号になっている
- [ ] CHANGELOGが更新されている（該当する場合）
- [ ] gitでタグ付けする予定がある場合は準備完了
