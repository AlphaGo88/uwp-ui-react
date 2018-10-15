const path = require('path');

module.exports = {
  entry: './docs/index',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'main.bundle.js'
  },
  devServer: {
    contentBase: __dirname
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-2', 'react']
        }
      }
    }, {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'less-loader'
      ]
    }]
  }
};