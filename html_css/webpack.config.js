const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: './ts/index.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules | data)/,
        use: 'ts-loader'
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'index.min.css'
  })],
  output: {
    filename: 'index.min.js',
    path: __dirname + '/build',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    compress: true,
    port: 2077,
  },
};