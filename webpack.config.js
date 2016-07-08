var BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin')
var WebpackNotifierPlugin    = require('webpack-notifier')
var webpack                  = require('webpack')



module.exports = {

  entry: {
    'index.browser' : './index.browser',
    'tests.browser' : './tests.browser',
  },

  output: {
    path     : __dirname,
    filename : '[name].js',
  },

  devtool: 'inline-source-map',

  resolve: {
    alias: {
      fs: 'file.js'
    },
    extensions: ['', '.js'],
    modulesDirectories: ['', 'node_modules'],
  },

  module: {
    loaders: [
      {
        test   : /\.json$/,
        loader : 'json',
      },
      {
        test    : /\.js$/,
        loader  : 'babel?cacheDirectory=.babel',
        exclude : /^\.\/(node_modules\/)/,
      },
      {
        test   : /\.(html|svg)$/,
        loader : 'raw',
      },
      {
        test   : /\.css$/,
        loader : 'style!css!autoprefixer?{browsers:["iOS >= 6", "last 2 Chrome versions"]}',
      },
    ],
  },

  plugins: [
    new BellOnBundlerErrorPlugin(),
    new WebpackNotifierPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.EnvironmentPlugin(['DEBUG']),
  ],

}