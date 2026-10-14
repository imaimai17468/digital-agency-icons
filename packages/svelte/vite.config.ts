import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  plugins: [svelte()],
  // Svelte resolves its server build under Node, and the server build cannot
  // mount a client-compiled component.
  resolve: { conditions: ['browser'] },
  test: {
    name: 'svelte',
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
  },
});
