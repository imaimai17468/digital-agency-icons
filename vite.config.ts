import { defineConfig } from 'vite-plus';

// Written by the generators under packages/*/scripts; regenerate rather than edit.
const GENERATED = [
  'packages/core/src/generated/**',
  'packages/react/src/components/**',
  'packages/react/src/index.ts',
  'packages/vue/src/components/**',
  'packages/vue/src/index.ts',
  'packages/svelte/src/components/**',
  'packages/svelte/src/index.ts',
  'packages/svelte/types/**',
];

const BUILD_OUTPUT = ['**/dist/**', '**/.next/**', 'apps/docs/next-env.d.ts'];

export default defineConfig({
  test: {
    // Each suite imports its package's dist, so `pnpm build:packages` runs first.
    projects: [
      {
        test: {
          name: 'node',
          include: ['packages/{core,react,vue}/test/**/*.test.ts'],
        },
      },
      {
        // Svelte resolves its server build under Node, and the server build
        // cannot mount a client-compiled component.
        resolve: { conditions: ['browser'] },
        test: {
          name: 'svelte',
          include: ['packages/svelte/test/**/*.test.ts'],
          environment: 'jsdom',
        },
      },
    ],
  },
  fmt: {
    singleQuote: true,
    semi: true,
    trailingComma: 'es5',
    printWidth: 80,
    ignorePatterns: [
      ...GENERATED,
      ...BUILD_OUTPUT,
      'pnpm-lock.yaml',
      '**/CHANGELOG.md',
    ],
  },
  lint: {
    ignorePatterns: [...GENERATED, ...BUILD_OUTPUT],
    options: { typeAware: true, typeCheck: true },
    plugins: ['typescript', 'unicorn', 'oxc', 'import', 'node'],
    categories: {
      correctness: 'error',
      suspicious: 'error',
      perf: 'error',
    },
    rules: {
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-var': 'error',
      'prefer-const': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      'import/no-cycle': 'error',
      'import/no-unassigned-import': ['error', { allow: ['**/*.css'] }],
    },
    overrides: [
      {
        files: ['apps/docs/**'],
        plugins: ['react', 'jsx-a11y', 'nextjs'],
        rules: {
          'react/react-in-jsx-scope': 'off',
          'react/rules-of-hooks': 'error',
          'react/exhaustive-deps': 'error',
          'react/jsx-key': 'error',
          'react/button-has-type': 'error',
          'react/jsx-no-target-blank': 'error',
        },
      },
      {
        files: ['packages/*/scripts/**'],
        rules: { 'no-console': 'off', 'no-await-in-loop': 'off' },
      },
    ],
  },
});
