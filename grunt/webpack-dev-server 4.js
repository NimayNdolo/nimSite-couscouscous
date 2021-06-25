'use strict'

const webpack = require('webpack')
const clone = require('clone')

const webpackConfig = clone(require('./webpack').options)
const path = require('path')
const WebpackOnBuildPlugin = require('on-build-webpack')
const opn = require('opn')
let firstBuild = true
const port = 2000
webpackConfig.module.rules.push({
  test: require.resolve('jquery'),
  use: [{
    loader: 'expose-loader',
    options: 'jQuery'
  }, {
    loader: 'expose-loader',
    options: '$'
  }]
})

module.exports = {
  options: {
    port,
    inline: true,
    webpack: webpackConfig,
    publicPath: '/public/',
    contentBase: [ path.join(__dirname, '/../') ],
    watchContentBase: true
  },

  start: {
    webpack: {
      devtool: 'source-map',
      plugins: [
        new webpack.LoaderOptionsPlugin({
          debug: true
        }),
        new WebpackOnBuildPlugin(function () {
          if (firstBuild) {
            opn('http://localhost:' + port)
          }
          firstBuild = false
        })
      ]
    }
  }
}
