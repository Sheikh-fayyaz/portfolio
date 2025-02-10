import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import purgecss from '@fullhuman/postcss-purgecss';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Ensure it's correct for GitHub Pages deployment
  build: {
    minify: 'esbuild', // Faster minification
    assetsDir: 'assets', // Store static assets in 'assets' directory
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]', // Append hash to assets
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        purgecss({
          content: ['./index.html', './src/**/*.jsx', './src/**/*.js'],
          safelist: ['show', 'fade'], // Keep Bootstrap utility classes if needed
        }),
      ],
    },
  },
});
