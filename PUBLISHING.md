# Publishing Guide

npm への公開は GitHub Actions（`.github/workflows/release-please.yml`）から [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers) で行います。`NPM_TOKEN` は使いません。ローカルからの `npm publish` は行わないでください。

## リリースの流れ

1. Conventional Commits 形式のコミットが main にマージされる
2. release-please がリリース PR（バージョン更新と CHANGELOG）を作成・更新する
3. リリース PR をマージすると GitHub Release が作成され、`publish` ジョブがバージョンの上がったパッケージだけを公開する
   - `workspace:^` は `pnpm pack` で実際のバージョンに書き換わる
   - provenance は自動で付与される（公開リポジトリのため）

## 初回セットアップ（npmjs.com で一度だけ）

4 パッケージそれぞれで設定します。

- `@imaimai17468/digital-agency-icons-core`
- `@imaimai17468/digital-agency-icons-react`
- `@imaimai17468/digital-agency-icons-vue`
- `@imaimai17468/digital-agency-icons-svelte`

1. npmjs.com のパッケージページ → **Settings** → **Trusted Publisher** で **GitHub Actions** を選ぶ
2. 次のとおり入力して保存する

   | 項目                 | 値                     |
   | -------------------- | ---------------------- |
   | Organization or user | `imaimai17468`         |
   | Repository           | `digital-agency-icons` |
   | Workflow filename    | `release-please.yml`   |
   | Environment name     | `npm`                  |

3. GitHub リポジトリの **Settings → Environments** に `npm` 環境を作成する（必要なら承認者を設定）
4. 動作を確認したら、各パッケージの **Settings → Publishing access** で「Require two-factor authentication and disallow tokens」を選び、トークンでの公開を禁止する
5. GitHub の Secrets に残っている `NPM_TOKEN` を削除する

npm は保存時に設定を検証しないため、誤りは初回公開時に失敗として表れます。

## 公開前の確認

CI と同じ検査をローカルで実行できます。

```bash
pnpm build:packages
pnpm check
pnpm test:only
pnpm lint:packages   # publint / arethetypeswrong
```
