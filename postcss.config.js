module.exports = {
    plugins: [
      require('@fullhuman/postcss-purgecss')({
        content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      }),
    ],
  };
  