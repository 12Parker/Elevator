// webpack.config.js
'use strict';
const webpack = require('webpack');
const path = require('path');
const APPDIR = './';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, APPDIR, 'index.html'),
    filename: 'index.html',
    inject: 'body'
});

const config = {
  context: path.resolve(__dirname, 'src/js'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }]
    }]
  },
  plugins: [HTMLWebpackPluginConfig]
};

module.exports = config