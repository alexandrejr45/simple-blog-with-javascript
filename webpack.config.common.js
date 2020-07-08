const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, 'app', 'index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'cadastro.html',
      inject: true,
      template: path.resolve(__dirname, 'app', 'cadastro.html'),
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      inject: false,
      template: path.resolve(__dirname, 'app', '404.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|jpg|png)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
};
