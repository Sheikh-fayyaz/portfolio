import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import PurgeCSS from 'vite-plugin-purgecss';

export default defineConfig({
  plugins: [react(), WindiCSS(), PurgeCSS()],
  base: '/portfolio/', // Ensure it's your GitHub repo name
  build: {
    minify: 'esbuild',
    cssCodeSplit: true, // Splits CSS into smaller files
  },
});
