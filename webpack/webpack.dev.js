'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const rootDir = path.resolve(__dirname, '..');

module.exports = {
    devServer: {
        contentBase: path.resolve(rootDir, 'dist'),
        port: 9000
    },
    devtool: 'inline-source-map',
    entry: {
        app: [ path.resolve(rootDir, 'src', 'bootstrap') ],
        vendor: [ path.resolve(rootDir, 'src', 'vendor') ],
        sandbox: [ path.resolve(rootDir, 'sandbox', 'class_sandbox')]
    },
    module: {
        exprContextCritical: false,  // @Simon-Briggs https://github.com/AngularClass/angular2-webpack-starter/issues/993
        rules: [
            {
              test: /\.(css|html)$/,
              use: [
                {
                    loader: 'raw-loader'
                },
              ]
            },
            {
              enforce: 'pre',
              test: /\.tsx?$/,
              use: "source-map-loader"
            },
            {
              test: /\.ts$/,
              exclude: /node_modules/,
              loader: 'ts-loader',
              options: { transpileOnly: true }
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'dist')
    },
    plugins: [
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'index.html')
        })
    ],
    resolve: {
        extensions: [ '.js', '.ts' ]
    }
};
