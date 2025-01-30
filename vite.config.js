import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Ensure Vite uses PostCSS correctly
  },
  base: '/portfolio/', // Ensure it's correct for GitHub Pages deployment
  build: {
    minify: 'esbuild', // Faster minification than Terser
  },
});
