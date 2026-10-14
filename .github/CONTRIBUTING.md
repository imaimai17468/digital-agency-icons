# Contributing

## セットアップ

Node.js 24 と pnpm 12 を使います。バージョンは `mise.toml` で固定しており、[mise](https://mise.jdx.dev/) を使う場合は `mise install` で揃います。

```bash
git clone https://github.com/imaimai17468/digital-agency-icons.git
cd digital-agency-icons
pnpm install          # lefthook の Git フックも入る
pnpm build:packages
pnpm dev              # 紹介サイト（http://localhost:3000）
```

`pnpm install` は公開から 7 日未満のバージョンや、provenance が以前より弱くなったバージョンを拒否します（`pnpm-workspace.yaml`）。インストールが止まったら、設定を緩めずに古いバージョンを選んでください。

## 構成

```
packages/
  core/     元の SVG（src/icons）と、そこから生成したアイコンデータ
  react/    React コンポーネント（生成）
  vue/      Vue 3 コンポーネント（生成）
  svelte/   Svelte 4 / 5 コンポーネント（生成、.svelte のまま配布）
apps/
  docs/     紹介サイト（Next.js 16、Vercel にデプロイ）
```

各パッケージの `scripts/` にある生成スクリプトが core の SVG からコンポーネントを出力します。`src/components/` などの生成物は手で編集せず、生成スクリプトを変更して `pnpm build:packages` を実行してください。

## コマンド

| コマンド              | 内容                                                         |
| --------------------- | ------------------------------------------------------------ |
| `pnpm build:packages` | 4 パッケージを依存順に生成・ビルド                           |
| `pnpm build`          | 上記と紹介サイトのビルド                                     |
| `pnpm check`          | フォーマット・リント・型チェック                             |
| `pnpm check:fix`      | フォーマットとリントの自動修正                               |
| `pnpm test`           | パッケージをビルドしてテスト（各フレームワークで実際に描画） |
| `pnpm test:only`      | ビルド済みの `dist` に対してテストだけ実行                   |
| `pnpm lint:packages`  | 公開メタデータと型解決の検査（publint / arethetypeswrong）   |

`pnpm check` はパッケージ同士の `dist` を参照して型チェックするため、新しく clone したら先に `pnpm build:packages` を実行してください。

## アイコンを追加する

1. `packages/core/src/icons/` に `<name>_fill.svg` と `<name>_line.svg` を追加する
2. `apps/docs/src/lib/icons.ts` の `iconMetadata` に名前・カテゴリ・検索タグを追加する
3. `pnpm build:packages && pnpm test:only` を実行し、生成されたコンポーネントもコミットする

## 変更の流れ

`main` から作業ブランチを切り、`main` への Pull Request で取り込みます。`main` への直接 push はしません。

```bash
git switch -c fix/some-issue
# 変更する
pnpm build:packages && pnpm check && pnpm test:only
git add <変更したファイル>
git commit -m "fix: 〇〇が表示されない問題を直す"
gh pr create --base main
```

lefthook が pre-commit でフォーマットとリント、pre-push で `pnpm check` とテストを実行します。PR では CI（`.github/workflows/ci.yml`）が依存の監査、actionlint、`pnpm check`、テスト、publint / attw、紹介サイトのビルドを実行し、Vercel がプレビューをデプロイします。

### コミットメッセージ

[Conventional Commits](https://www.conventionalcommits.org/) に従ってください。release-please がこれを読んで次のバージョンと CHANGELOG を決めます。

| prefix                                              | 用途                                   | バージョン（0.x の間） |
| --------------------------------------------------- | -------------------------------------- | ---------------------- |
| `feat:`                                             | 機能追加（アイコン追加など）           | patch                  |
| `fix:`                                              | 不具合修正                             | patch                  |
| `feat!:` / `BREAKING CHANGE:`                       | export・props・peer の範囲の削除や変更 | minor                  |
| `docs:` `chore:` `ci:` `test:` `refactor:` `style:` | それ以外                               | 上がらない             |

PR は **merge commit** でマージしてください。squash するとコミットが 1 つにまとまり、release-please が個々の `feat:` / `fix:` を拾えません。

## リリース

`main` へのマージで release-please がリリース PR を作成・更新します。リリース PR をマージすると、バージョンが上がったパッケージが GitHub Actions から npm に公開されます。詳細は [PUBLISHING.md](../PUBLISHING.md) を参照してください。

紹介サイトは `main` へのマージで Vercel が本番にデプロイします。

## トラブルシューティング

### 紹介サイトで `Cannot find module './XXX.js'` が出る

Next.js のキャッシュが古くなっています。開発サーバーを止めて `apps/docs/.next` を削除し、`pnpm dev` を再実行してください。

### `pnpm check` で他パッケージの型が見つからない

パッケージの `dist` がありません。`pnpm build:packages` を実行してください。
