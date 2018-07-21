var path = require('path');
const webpack = require('webpack')


module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'bundle.js'
  },
  
  module: {

    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015','react']
        }

      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader",

      },      
    ]
  }
};