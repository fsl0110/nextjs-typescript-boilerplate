const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  'mode': 'jit',
  'purge': ['./src/**/*.{js,ts,jsx,tsx}'],
  'darkMode': false, // or 'media' or 'class'
  'theme': {
    extend: {
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  'variants': {
    extend: {},
  },
  'plugins': [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  'headwind.runOnSave': true,
};
