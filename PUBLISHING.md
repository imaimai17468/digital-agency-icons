# Publishing

npm への公開は GitHub Actions（`.github/workflows/release-please.yml` の `publish` ジョブ）だけが行います。認証は [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers)（OIDC）で、トークンは使いません。ローカルからの `npm publish` は行わないでください。

## リリースの流れ

1. `feat:` / `fix:` などのコミットを含む PR が `main` にマージされる
2. release-please がリリース PR（バージョン更新と CHANGELOG）を作成・更新する
3. リリース PR の内容（バージョンと CHANGELOG）を確認してマージする
4. GitHub Release が作成され、`publish` ジョブがまだ npm に無いバージョンのパッケージだけを公開する
   - `workspace:^` の依存は `pnpm pack` で実際のバージョンに書き換わる
   - provenance は自動で付く（公開リポジトリのため）
5. npm に反映されるまで数分かかる。`npm view <パッケージ>@<バージョン>` で確認する

`publish` ジョブが途中で失敗しても、そのまま再実行すれば公開済みのパッケージは飛ばされます。

## Trusted Publisher の設定

4 パッケージとも設定済みです。パッケージを追加したとき、またはワークフローのファイル名や environment を変えたときは、npmjs.com のパッケージページの **Settings → Trusted Publisher** で次のように設定し直してください。

| 項目                 | 値                     |
| -------------------- | ---------------------- |
| Organization or user | `imaimai17468`         |
| Repository           | `digital-agency-icons` |
| Workflow filename    | `release-please.yml`   |
| Environment name     | `npm`                  |
| Allowed actions      | `npm publish`          |

CLI で設定する場合（2FA の認証を求められます）:

```bash
npm trust github @imaimai17468/digital-agency-icons-<name> \
  --repo imaimai17468/digital-agency-icons \
  --file release-please.yml --env npm --allow-publish -y
```

GitHub 側では `npm` environment が `publish` ジョブに割り当てられています（**Settings → Environments**）。

## 公開前の確認

CI と同じ検査をローカルで実行できます。

```bash
pnpm build:packages
pnpm check
pnpm test:only
pnpm lint:packages
```
