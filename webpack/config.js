var path = require('path');
var util = require('util');
var autoprefixer = require('autoprefixer-core');

var loaders = require('./loaders');
var plugins = require('./plugins');

var DEBUG = process.env.NODE_ENV === 'development';

var entry = {
  index: ['./index.jsx']
};

if (DEBUG) {
  entry.index.push(
    util.format(
      'webpack-dev-server/client?http://%s:%d',
      'localhost',
      9000
    )
  );
  entry.index.push('webpack/hot/dev-server');
}

var config = {
  context: path.join(__dirname, './../src'),
  cache: DEBUG,
  debug: DEBUG,
  target: 'web',
  devtool: 'inline-source-map',
  entry: entry,
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: '[name].js',
    pathinfo: DEBUG
  },
  module: {
    loaders: loaders
  },
  postcss: [
    autoprefixer
  ],
  plugins: plugins,
  resolve: {
    alias: {
      'actions': path.join(__dirname, './../src/actions'),
      'reducers': path.join(__dirname, './../src/reducers'),
    },
    extensions: ['', '.js', '.json', '.jsx'],
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: path.join(__dirname, './../src'),
    hot: true,
    noInfo: false,
    inline: true,
    proxy: {
      '/api/*': 'http://localhost:9002'
    },
    stats: {
      colors: true
    }
  }
};

module.exports = config;
