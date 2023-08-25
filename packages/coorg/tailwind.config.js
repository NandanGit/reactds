const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // '!./src/**/stories/*', // Comment while developing, uncomment while building
  ],
  theme: {
    extend: {
      colors: {
        glass: colors.neutral[500],
        primary: colors.lime,
        secondary: colors.sky,
        success: colors.emerald,
        danger: colors.red,
        info: colors.teal,
        warning: colors.yellow,
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
