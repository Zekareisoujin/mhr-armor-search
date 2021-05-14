const { OUTPUT_PATH, PUBLIC_PATH } = require('./constant');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
};
