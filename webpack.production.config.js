var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/app.js'),
    vendors: ['react']
  },
  resolve: {
    alias: {
      'react': pathToReact
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        query: {
          presets:['react', 'es2015']
        },
        exclude: [node_modules]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
      }
    ],
    noParse: [pathToReact]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};
