import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig(({ mode }) => ({
  plugins: [svelte()],
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [], 
  },
  test: {
    globals: true,
    environment: 'jsdom', 
    setupFiles: ['./src/setupTests.ts'],
  },
}));


// reference: https://github.com/sveltejs/svelte/issues/11394
