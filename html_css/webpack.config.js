const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    dropdownmenu: './js/drop-down-menu.js',
    index: './js/index.js',
    mobilemenu: './js/mobile-menu.js',
    paginator: './js/paginator.js',
    slider: './js/slider.js',
    myslick: './js/libs/my-slick.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules | data)/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build',
    chunkFilename: '[id].[chunkhash].js'
  },
};
