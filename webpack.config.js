var webpack = require('webpack')

module.exports = {
  entry: './app/routing.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  //watch:true,

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime', "transform-decorators-legacy"],
          presets: ['es2015', 'stage-1', 'react']
        }
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
}
