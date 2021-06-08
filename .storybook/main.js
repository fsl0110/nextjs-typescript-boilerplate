const path = require('path');

module.exports = {
  stories: [
    '../src/app/stories/**/*.stories.mdx',
    '../src/app/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
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
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ];
    return config;
  },
};
/*Though the "loose" option was set to "false" in your @babel/preset-env config, 

 it will not be used for  since the "loose" mode option was set to "true" for @babel/plugin-proposal-private-methods.
The "loose" option must be the same for @babel/plugin-proposal-class-properties, @babel/plugin-proposal-private-methods and @babel/plugin-proposal-private-property-in-object (when they are enabled): you can silence this warning by explicitly adding
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
to the "plugins" section of your Babel config.

@babel/plugin-proposal-private-property-in-object
@babel/plugin-proposal-private-methods
@babel/plugin-proposal-class-properties */
