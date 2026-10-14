import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig, type Plugin } from 'vite';

const emitDeclarations = (): Plugin => ({
  name: 'emit-declarations',
  async generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'index.d.ts',
      source: await readFile(
        resolve(import.meta.dirname, 'types/index.d.ts'),
        'utf-8'
      ),
    });
  },
});

export default defineConfig({
  plugins: [svelte(), emitDeclarations()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rolldownOptions: {
      external: [/^svelte($|\/)/],
    },
  },
});
