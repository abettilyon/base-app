
//var webpack = require('webpack');


module.exports = {

  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './src/client'
  ],
  output: {
    path: './compiled_assets',
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [

      // REACT JSX FILES
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
        query: { presets: ['es2015', 'react'] }
      },

      // CSS LOADER (TODO-do some preprocessing magic here)
      { test: /\.css$/, loader: "style!css" },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:3000'
    },
    host: '127.0.0.1'
  }
};
