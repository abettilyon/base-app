// webpack dev server implimentation

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {

}).listen(6666, 'localhost', function(err, result) {
  if(err){
    return console.log("WEBPACK ERROR: " + err);
  }

  console.log('Webpack server is running on http://localhost:6666');
});
