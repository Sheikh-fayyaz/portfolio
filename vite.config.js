import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Explicitly point to PostCSS config
  },
  base: '/portfolio/', // Ensure it's your GitHub repo name
});
