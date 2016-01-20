// Gets called when running npm start

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

console.log('Starting server...\n');

new WebpackDevServer(webpack(config), { // Start a server
  // publicPath: config.output.publicPath,
  hot: true, // With hot reloading
  stats: {
    colors: true
  },
  // dev  tool: 'eval',
  progress: true,
  contentBase: 'http://localhost:8080/',
  publicPath: config.output.publicPath,
  inline: true,
  historyApiFallback: true,
  quiet: true // Without logging
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server started');
    console.log('Listening at localhost:8080');
  }
});
