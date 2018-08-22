const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './doc/doc',
    output: {
        path: path.resolve(__dirname, 'doc'),
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
            exclude: path.resolve(__dirname, 'node_modules'),
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
                'less-loader',
            ],
        }]
    }
};