const tsLoader = { loader: 'ts-loader' };
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
const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
  },
};
const sassLoader = { loader: 'sass-loader' };
const styleLoader = { loader: 'style-loader' };

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: [babelLoaderModern, tsLoader],
      },
      {
        test: /antd\.css$/,
        use: [styleLoader, 'css-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: [styleLoader, cssLoader, sassLoader],
      },
    ],
  },
};
