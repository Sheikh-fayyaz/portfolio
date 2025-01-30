import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [react(), WindiCSS()], // Removed PurgeCSS
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
