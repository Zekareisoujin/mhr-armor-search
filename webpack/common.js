const tsLoader = 'ts-loader';
const babelLoaderModern = {
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: { esmodules: true },
          bugfixes: true,
        },
      ],
      '@babel/preset-react',
    ],
  },
};

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: [tsLoader, babelLoaderModern],
      },
    ],
  },
};
