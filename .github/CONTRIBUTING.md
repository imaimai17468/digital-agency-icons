# Contributing to Digital Agency Icons

このプロジェクトへの貢献に興味を持っていただきありがとうございます！

## ブランチ戦略

このプロジェクトはGitFlowブランチ戦略を採用しています：

```
main (本番・安定版)
  ↑
develop (開発ブランチ)
  ↑
feature/xxx (機能ブランチ)
```

### ブランチの役割

- **main**: 本番環境にデプロイされる安定版。npmへの公開もこのブランチから行います。
- **develop**: 開発中の機能が統合されるブランチ。次のリリースの準備を行います。
- **feature/xxx**: 新機能や修正を開発するための一時的なブランチ。

## 開発環境のセットアップ

### 必要な環境

- Node.js 24.11 以上
- pnpm 12.10 以上

バージョンは `mise.toml` で固定しています。[mise](https://mise.jdx.dev/) を使う場合は `mise install` で揃います。

### セットアップ手順

```bash
# リポジトリのクローン
git clone https://github.com/imaimai17468/digital-agency-icons.git
cd digital-agency-icons

# 依存関係のインストール
pnpm install

# パッケージのビルド
pnpm build:packages

# 開発サーバーの起動
pnpm dev
```

## CI/CDについて

### CI（継続的インテグレーション）

すべての PR と main / develop へのプッシュで `.github/workflows/ci.yml` が実行されます：

- lockfile どおりのインストール（7日未満の新しい版・provenance の後退を拒否）
- `pnpm audit` による脆弱性チェック
- actionlint によるワークフローの検査
- `pnpm check`（フォーマット・リント・型チェック）
- テスト
- publint / arethetypeswrong による公開メタデータと型解決の検査
- 紹介サイトのビルド

ローカルでは lefthook が pre-commit でフォーマットとリント、pre-push で上記の主要チェックを実行します。

### CD（継続的デプロイ）

#### npm公開

main へのマージで release-please がリリース PR を作成・更新します。リリース PR をマージすると、バージョンが上がったパッケージだけが GitHub Actions から npm に公開されます。

公開は npm の [Trusted Publishing](https://docs.npmjs.com/trusted-publishers)（OIDC）で行うため、`NPM_TOKEN` は不要です。ローカルから `npm publish` はしないでください。

#### Vercelデプロイ

GitHubとVercelを連携することで、mainブランチへのプッシュで自動デプロイされます。

## 開発フロー

### 新機能を追加する場合

1. **developブランチから機能ブランチを作成**

   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **変更を加える**

   ```bash
   # コードを編集
   pnpm build:packages
   pnpm check
   pnpm test:only
   ```

3. **変更をコミット**

   ```bash
   git add <変更したファイル>
   git commit -m "feat: add new feature"
   ```

   コミットメッセージは [Conventional Commits](https://www.conventionalcommits.org/) に従ってください：
   - `feat:` 新機能
   - `fix:` バグ修正
   - `docs:` ドキュメント変更
   - `chore:` ビルドやツールの変更
   - `refactor:` リファクタリング
   - `ci:` CI/CD関連の変更

4. **プッシュとPR作成**

   ```bash
   git push origin feature/your-feature-name

   # GitHub CLIを使う場合
   gh pr create --base develop --head feature/your-feature-name
   ```

5. **CIの成功を確認**
   PRを作成すると CI が自動的に実行されます

6. **レビューとマージ**
   - CIが通過したら、レビューを待ちます
   - 承認されたら `develop` ブランチにマージされます

### リリースする場合

1. **develop → main へPR作成**

   ```bash
   git checkout develop
   gh pr create --base main --head develop --title "Release vX.X.X"
   ```

2. **リリース準備**
   - CHANGELOG を確認
   - バージョン番号を決定

3. **マージ後、npm公開**
   - release-please が作成するリリース PR をマージすると自動で公開されます

## パッケージ構造

```
digital-agency-icons/
├── packages/
│   ├── core/           # SVGデータとコア機能
│   ├── react/          # Reactコンポーネント
│   ├── vue/            # Vue 3コンポーネント
│   └── svelte/         # Svelteコンポーネント
├── apps/
│   └── docs/           # 紹介サイト
└── .github/
    └── workflows/      # GitHub Actions設定
```

## トラブルシューティング

### Next.js開発サーバーでモジュールエラーが出る

**症状**: `Cannot find module './XXX.js'` というエラーが出る

**原因**: Next.jsのビルドキャッシュが古くなっている

**解決方法**:

```bash
# 開発サーバーを停止
pkill -f "next dev"

# キャッシュを削除
rm -rf apps/docs/.next

# 開発サーバーを再起動
pnpm dev
```

### ビルドエラーが出る

**症状**: `pnpm build` が失敗する

**解決方法**:

```bash
# node_modulesを削除して再インストール
rm -rf node_modules
pnpm install

# ビルドを再実行
pnpm build
```

## 質問や問題

IssueやDiscussionでお気軽にお問い合わせください！
