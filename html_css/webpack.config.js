const path = require('path');

module.exports = {
  entry: './js/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules | data)/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
};
