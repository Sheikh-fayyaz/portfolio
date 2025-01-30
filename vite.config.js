import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Removed WindiCSS & PurgeCSS
  base: '/portfolio/', // Ensure it's your GitHub repo name
  build: {
    minify: 'esbuild',
    cssCodeSplit: true, // Splits CSS into smaller files
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
