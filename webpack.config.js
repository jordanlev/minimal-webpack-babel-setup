const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'main.js',
  },
  plugins: [
    new CopyWebpackPlugin(['index.html']),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
