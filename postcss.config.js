import purgecss from '@fullhuman/postcss-purgecss';
import autoprefixer from 'autoprefixer';

const purgeCSSConfig = purgecss({
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Ensure correct paths
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

export default {
  plugins: [
    autoprefixer(), // Ensure autoprefixer is included
    ...(process.env.NODE_ENV === 'production' ? [purgeCSSConfig] : []),
  ],
};
