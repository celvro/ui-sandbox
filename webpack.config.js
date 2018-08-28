const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const defaultWebpackConfig = require('terra-toolkit/config/webpack/webpack.config');

const customConfig = () => ({
  entry: {
    index: path.resolve(path.join(__dirname, 'src', 'index.jsx')),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'UI Sandbox',
      template: path.join(__dirname, 'public', 'index.html'),
      lang: 'en',
      dir: 'ltr',
    }),
  ],
});

const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), customConfig())
);

module.exports = mergedConfig;
