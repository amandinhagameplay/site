import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import markdown from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    markdown()
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});