const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: './src/js/uwp-ui-react.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'uwp-ui-react.js',
        libraryTarget: 'umd'
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM'
        },
        'prop-types': {
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            amd: 'prop-types',
            root: 'PropTypes'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'uwp-ui-react.css'
        })
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: path.resolve(__dirname, 'src/js'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-2', 'react']
                }
            }
        }, {
            test: /\.less$/,
            include: path.resolve(__dirname, 'src/less'),
            use: [
                MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                },
                'postcss-loader',
                'less-loader'
            ]
        }]
    }
};