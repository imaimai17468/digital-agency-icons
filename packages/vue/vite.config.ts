import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.vue'],
      exclude: ['src/**/*.test.ts'],
      // `./X.vue` does not resolve under node16/nodenext, while `./X.vue.js`
      // resolves to the emitted `X.vue.d.ts`.
      beforeWriteFile: (filePath, content) => ({
        filePath,
        content: content.replace(/(from '\.\/[^']+\.vue)'/g, "$1.js'"),
      }),
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rolldownOptions: {
      external: ['vue'],
    },
  },
});
