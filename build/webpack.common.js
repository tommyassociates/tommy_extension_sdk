const path = require('path')
const helpers = require('../scripts/helpers')

const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolvePath(dir) {
  return path.join(__dirname, '..', dir)
}

const coreSymLinkExists = (() => {
  try {
    return require('fs').statSync(resolvePath('node_modules/@tommyassociates/tommy-core')).isSymbolicLink()
  } catch(e) {
    return false
  }
})

module.exports = {
  output: {
    filename: '[name].js',
    publicPath: '/',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolvePath('src'),
      '@addon': resolvePath('../tommy-sdk-private/addons'),
      'tommy-core': '@tommyassociates/tommy-core'
    },
    modules: [
      resolvePath('src'),
      resolvePath('node_modules'),
      resolvePath('node_modules/@tommyassociates/tommy-core/node_modules')
      // TODO: investigate how this performs when using a npm published tommy-core
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[path][name].[ext]',
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new DefinePlugin(helpers.getSdkVariables()),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      inject: true
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: resolvePath('static'),
        to: resolvePath('www/static'),
      }]
    })
  ]
}