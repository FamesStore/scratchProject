var path = require('path');


module.exports = {
  entry:'./client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'webpack-bundle.js'
  },

  module: {

    rules: [
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

      }
    ]
  }
};
