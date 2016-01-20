var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.js');
module.exports = function(options) {
  var entry, plugins;
  if(options.dev) {
    entry = [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'src/app.js')
    ];
    plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin("bundle.css"),
      new HtmlWebpackPlugin({
        template: 'index.html',
        inject: true
      })
    ];
  } else {
    entry = {
      app: path.resolve(__dirname, 'src/app.js'),
      vendors: ['react']
    };
    plugins = [
      new ExtractTextPlugin("bundle.css"),
      new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
      new HtmlWebpackPlugin({
        template: 'index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        },
        inject: true
      })
    ];
  }
  return {
    entry: entry,
    resolve: {
      alias: {
        // 'react': pathToReact,
        'components': path.join(__dirname, 'src/components'),
        'models': path.join(__dirname, 'src/models'),
        'actions': path.join(__dirname, 'src/actions')
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
    plugins: plugins
  };
};
