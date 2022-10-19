const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: './js/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules | data)/,
        use: ['babel-loader'],
      },
      {
        test: /.css$/,
        use: ["css-loader", "sass-loader"],
      },
    ],
  }
  ,
  //  optimization: {
  //   minimizer: [
  //     // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
  //     // `...`,
  //     new CssMinimizerPlugin(),
  //   ],
  //   minimize: true,
  // },
  // plugins: [new MiniCssExtractPlugin()],
  output: {
    filename: '[name].js',
    path: __dirname + '/build',
    chunkFilename: '[id].[chunkhash].js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    compress: true,
    port: 8080,
  },
};
