var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/bundles');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: {
    index: APP_DIR + '/Home/Index.jsx',
    slowagram: APP_DIR + '/Slowagram/Slowagram.jsx'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  },
  output: {
    path: BUILD_DIR,
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
  }
};

module.exports = config;