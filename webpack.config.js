module.exports = {

  entry: './src/assets/entry.js',
  output: {
    path: './compiled_assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [

      // REACT JSX FILES
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: { presets: ['es2015', 'react']}
      },

      // CSS LOADER (TODO-do some preprocessing magic here)
      { test: /\.css$/, loader: "style!css" },

    ]
  }

}
