var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [ path.resolve(__dirname, 'src') ],
        loader: 'babel-loader',
      },
    ],
  },
  externals: {
    'react': true,
    'react-dom': true,
  }
};
