// Svelte 4 declares its subpaths as ambient modules named `svelte/*`, which
// do not apply under the `svelte4` alias, so the part the test calls is
// declared here.
export function compile(
  source: string,
  options?: { filename?: string }
): { warnings: readonly unknown[] };
