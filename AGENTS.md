# Project Instructions

An unofficial icon library for the Japanese Digital Agency design system, published to npm as four packages, plus a Next.js docs site deployed on Vercel.

| Path              | What it is                                                                | Published as                                |
| ----------------- | ------------------------------------------------------------------------- | ------------------------------------------- |
| `packages/core`   | The source SVGs (`src/icons/*.svg`) and the icon data generated from them | `@imaimai17468/digital-agency-icons-core`   |
| `packages/react`  | React components generated from core's SVGs                               | `@imaimai17468/digital-agency-icons-react`  |
| `packages/vue`    | Vue 3 SFCs generated from core's SVGs                                     | `@imaimai17468/digital-agency-icons-vue`    |
| `packages/svelte` | Svelte components generated from core's SVGs, for Svelte 4 and Svelte 5   | `@imaimai17468/digital-agency-icons-svelte` |
| `apps/docs`       | The docs site (Next.js 16 App Router, Tailwind CSS 4, next-international) | not published; deployed by Vercel           |

## Toolchain

`mise.toml` pins Node, pnpm, actionlint and shellcheck, and CI installs from it, so a version change goes there and nowhere else. Node stays on the major Vercel deploys the docs site with (24 today), and `@types/node` stays on that same major; `.github/dependabot.yml` holds `@types/node` there, so a Node major upgrade changes `mise.toml`, every `engines` and `@types/node` together once Vercel offers it. Run commands through `mise exec --` where mise is not on the shell's PATH.

- **pnpm 12** workspaces. `pnpm-workspace.yaml` refuses a version published less than 7 days ago (`minimumReleaseAge`), fails on a provenance downgrade (`trustPolicy`), and runs no install script that `allowBuilds` does not name. Do not loosen these to make an install pass; pick an older version instead. `pnpm add` saves exact versions.
- **TypeScript 7 alongside TypeScript 6.** `@typescript/native` is TypeScript 7 and provides the `tsc` every script runs. `typescript` is an alias of `@typescript/typescript6`, because TypeScript 7 ships no compiler API and vue-tsc, vite-plugin-dts, svelte-check and Next's type check load that API from `typescript`. svelte-check runs with `--tsgo`, which type-checks through TypeScript 7. Keep the two together until TypeScript 7 ships an API those tools adopt.
- **Vite+ (`vp`)** at the root runs Oxfmt, Oxlint and the type-aware checks from the one root `vite.config.ts`. Its local docs are in `node_modules/vite-plus/docs/`. Each package still builds with its own `vite.config.ts` and upstream Vite.
- **Next.js 16** ships version-matched docs in `apps/docs/node_modules/next/dist/docs/`. Read them before changing the docs app, because Next 16 differs from older training data (`proxy.ts` replaces `middleware.ts`, request APIs are async, `next lint` is gone).

## Commands

| Command               | What it does                                                                    |
| --------------------- | ------------------------------------------------------------------------------- |
| `pnpm build:packages` | Regenerate and build the four packages in dependency order                      |
| `pnpm build`          | The above plus the docs site                                                    |
| `pnpm check`          | Format check, lint and type check (`vp check`) plus each package's `type-check` |
| `pnpm check:fix`      | Apply the formatter and lint autofixes                                          |
| `pnpm test`           | Build the packages, then run the tests                                          |
| `pnpm test:only`      | Run the tests against the existing `dist` (CI and the hooks build first)        |
| `pnpm lint:packages`  | Check each package's publish metadata and type resolution (publint, attw)       |
| `pnpm dev`            | Start the docs site                                                             |

`pnpm check` type-checks packages against each other's `dist`, so run `pnpm build:packages` first in a fresh clone.

## Generated Code

Everything under `packages/*/src/components/`, each framework package's `src/index.*`, and `packages/core/src/generated/` is written by the generator in that package's `scripts/`. Change the generator and run `pnpm build:packages`; never edit the output by hand, because the next build overwrites it. The output is committed so a reviewer sees what a generator change does to every icon. Format and lint skip these paths.

Adding an icon means adding `<name>_fill.svg` and `<name>_line.svg` to `packages/core/src/icons/`, then registering its metadata in `apps/docs/src/lib/icons.ts` so the docs site lists it.

## Public API

The four packages are used by other people's code, so their shape is a contract.

- The props are the same across frameworks: `size`, `color`, `class`/`className`, `style`, `title` and an accessible label (`aria-label`; Vue declares it as `ariaLabel`, which templates still write as `aria-label`). A change to one framework's props is made to all four generators.
- `exports` lists `types` before `default`, and every relative import in emitted `.d.ts` carries an extension, so types resolve under `bundler` and `node16`/`nodenext`. `pnpm lint:packages` fails when either breaks.
- The Svelte package supports Svelte 4 and Svelte 5 (`peerDependencies: ^4.0.0 || ^5.0.0`). It ships the `.svelte` sources, not compiled output, so the consumer's own compiler builds them against its own runtime. The generator therefore writes plain JavaScript in legacy (non-runes) syntax, which both versions compile; runes, `lang="ts"` and other Svelte 5-only syntax break Svelte 4 users. The test suite compiles every component with both compilers (`svelte` and the `svelte4` alias).
- Removing or renaming an export, a prop, or a peer dependency range is a breaking change. Say so in the commit (`feat!:` or a `BREAKING CHANGE:` footer) so release-please bumps the version accordingly.

## Testing

`packages/*/test/` holds contract tests that import each package's built `dist` and render it with its own framework (React and Vue through SSR, Svelte by mounting its source under jsdom). They check what consumers receive, so a change to a generator gets a test that renders the changed output and fails without the change.

## Verification

The Stop hook in `.claude/settings.json` runs `pnpm build:packages`, `pnpm check` and `pnpm test:only` whenever the working tree holds a change outside Markdown, and blocks the turn until they pass. CI additionally runs `pnpm audit`, actionlint, `pnpm lint:packages` and the docs build. Where a change alters what the docs site renders, start it with `pnpm dev` and look at the page in a browser, in both the light and dark theme. Report a step you could not run as not run, never as passed.

## Code Practices

- **Never escape the type system to move on.** No `any`, no `as` assertion, no non-null `!`, no `@ts-ignore`, and no lint-disable comment. Narrow with a type guard instead (`isLocale` and `getIconComponent` in the docs app are the pattern).
- **Comments explain the code directly below them.** No narration, no restating the code, and no pointer to an issue, a PR or another file.
- **Search before writing a version, a flag or an API from memory.** Read the pinned version's own docs or source where the repository has them (the two `docs/` directories above), and the official documentation otherwise.

## Commits & Pull Requests

- `main` takes changes only through a pull request; on `main`, create a branch before the first commit.
- One commit is one purpose, and a drive-by fix is its own commit. Stage explicit paths, never `git add -A` or `git add .`.
- Conventional Commits prefixes (`feat` / `fix` / `refactor` / `test` / `docs` / `chore` / `ci` / `style`), because release-please reads them to choose the next version and write the changelog. The subject states what improves; the body is in Japanese, and a `fix` or `refactor` body says why.
- Releases are cut by merging the release-please PR. Publishing runs in CI through npm Trusted Publishing; never publish from a local machine.
