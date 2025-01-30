import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue,svelte}', // Added more file types
    './public/**/*.html',
  ],
  safelist: 'prose prose-sm m-auto text-left', // Prevent purging important styles
});
