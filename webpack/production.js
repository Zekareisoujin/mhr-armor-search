const path = require('path');
const { merge } = require('webpack-merge');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const { ASSET_OUTPUT_PATH, VENDOR_LISTS } = require('./constant');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: ASSET_OUTPUT_PATH,
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 100 * 1024, // 100KB
      cacheGroups: {
        defaultVendors: {
          test: new RegExp(
            `[\\/]node_modules[\\/](${VENDOR_LISTS.join('|')})[\\/].*`,
          ),
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: '../index.html',
      template: path.join(__dirname, '..', 'assets', 'html', 'dev.html'),
    }),
  ],
});
