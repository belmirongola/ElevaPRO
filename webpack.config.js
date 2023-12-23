const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const json5 = require('json5');

module.exports = {
    entry: {
        app: './app/views/App.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'app/means/dist'),
        publicPath: '/public/',
        filename: '[name].[contenthash].bundle.js'
    },
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    node: {
        __dirname: false,
        __filename: false
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }, {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }, {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource'
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        }, {
            test: /\.(csv|tsv)$/i,
            use: ['csv-loader'],
        }, {
            test: /\.xml$/i,
            use: ['xml-loader'],
        }, {
            test: /\.json5$/i,
            type: 'json',
            parser: {
                pase: json5.parse
            }
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                 options: { minimize: true }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/views/index.ejs', 
            filename: './app.html', // Change to .ejs on production mode
            inject: true
        }), 
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name][id].css'
        })
    ]
}