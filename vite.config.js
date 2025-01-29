import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [react(), WindiCSS()],
  base: '/portfolio/', // Use your GitHub repo name
});