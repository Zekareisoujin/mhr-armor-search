const path = require('path');
const { merge } = require('webpack-merge');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const { PORT, OUTPUT_PATH, PUBLIC_PATH } = require('./constant');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: './src/index.tsx',
  plugins: [
    new HtmlWebPackPlugin({
      filename: '../index.html',
      template: path.join(__dirname, '..', 'assets', 'html', 'dev.html'),
    }),
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    compress: true,
    port: PORT,
    contentBase: OUTPUT_PATH,
    // publicPath: PUBLIC_PATH,
  },
});
