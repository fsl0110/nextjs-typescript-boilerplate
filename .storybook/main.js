const path = require('path');

module.exports = {
  stories: [
    '../src/app/stories/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-notes/register',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  babel: async (options) => ({
    ...options,
    plugins: [
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
  }),
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@components': path.resolve(__dirname, '../src/components'),
      '@features': path.resolve(__dirname, '../src/features'),
      '@store': path.resolve(__dirname, '../src/app/store/store'),
      '@test': path.resolve(__dirname, '../src/app/utils/test/testUtils'),
    };
    return config;
  },
};
