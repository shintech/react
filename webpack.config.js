const webpack = require('webpack')
const path = require('path')

const environment = process.env['NODE_ENV'] || 'development'
const target = process.env['TARGET'] || 'http://localhost:8000/'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: '!!pug-loader!' + path.join(__dirname, 'views', 'template.pug')
})

const paths = {
  ENTRY: path.join(__dirname, 'src', 'frontend', 'index.jsx'),
  OUTPUT_FILENAME: 'bundle.js',
  OUTPUT: path.join(__dirname, 'public', 'js'),
  APP: path.join(__dirname, 'src', 'frontend')
}

const config = {
  entry: [
    paths.ENTRY
  ],

  mode: environment,

  resolve: {
    extensions: ['.js'],
    modules: ['src/frontend', 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        enforce: 'pre',
        include: paths.APP,
        exclude: [/node_modules/, path.join(__dirname, 'dist'), paths.OUTPUT],
        use: ['babel-loader', 'standard-loader']
      },

      {
        test: /\.less$/i,
        include: path.join(__dirname, 'public', 'less'),
        use: ['style-loader', 'css-loader', 'less-loader']
      },

      { test: /\.pug$/,
        include: path.join(__dirname, 'views'),
        use: [
          { loader: 'pug-loader',
            options: {
              pretty: true
            }
          }
        ]
      }
    ]
  },

  output: {
    filename: paths.OUTPUT_FILENAME,
    path: paths.OUTPUT,
    chunkFilename: '[id].js'
  },

  devtool: 'source-map',

  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    inline: true,
    hot: true,
    port: 8081,
    proxy: {
      '/api': {
        target: target,
        secure: false
      },
      '/public': {
        target: target,
        secure: false
      },
      '/users': {
        target: target,
        secure: false
      },
      '/files': {
        target: target,
        secure: false
      },
      '/devices': {
        target: target,
        secure: false
      }
    }
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash',
      React: 'react'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        babel: {
          babelrc: true
        }
      }
    })
  ]
}

if (environment === 'development') {
  config.plugins.push(HtmlWebpackPluginConfig)
  config.plugins.push(new webpack.NamedModulesPlugin())
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
