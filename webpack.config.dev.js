const path = require('path');

module.exports = {
  entry: './docs/index',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: __dirname
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          minChunks: 1,
          minSize: 0,
          priority: 100
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'docs'),
        path.resolve(__dirname, 'src/js')
      ],
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