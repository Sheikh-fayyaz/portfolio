import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
});
