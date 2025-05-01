import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig(({ mode }) => ({
  plugins: [svelte()],
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [], // ✅ 關鍵行：模擬 browser 環境
  },
  test: {
    globals: true,
    environment: 'jsdom', // ✅ onMount 就不會錯了
    setupFiles: ['./src/setupTests.ts'],
  },
}));