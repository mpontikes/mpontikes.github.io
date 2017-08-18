var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/bundles');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: {
    index: APP_DIR + '/Home/Index.jsx',
    slowagram: APP_DIR + '/Slowagram/Slowagram.jsx',
    pevents: APP_DIR + '/PEvents/PEvents.jsx',
    test: APP_DIR + '/Testing/Test.jsx',
    countdown: APP_DIR + '/Countdown/Countdown.jsx',
    mycountdown: APP_DIR + '/Countdown/MyCountdown.jsx',
    film: APP_DIR + '/Film/Film.jsx',
    finance: APP_DIR + '/MyFinance/MyFinance.jsx',
    utls: APP_DIR + '/UTLS/UTLS.jsx'
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