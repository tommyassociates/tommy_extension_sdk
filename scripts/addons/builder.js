const path = require('path')
const webpack = require('webpack')
const helpers = require('../helpers')

const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

function resolvePath(dir) {
  return path.join(__dirname, '..', '..', dir)
}

function resolveAddonPath(baseDir, ...dir) {
  return path.join(baseDir, ...dir)
}

const env = 'production' // process.env.NODE_ENV

const optimizationConfig = {}
if (env === 'production') {
  optimizationConfig.minimize = true
  optimizationConfig.minimizer = [
    new TerserPlugin({
      extractComments: false,
      minify: (file, sourceMap) => {
        const uglifyJsOptions = {
          compress: {
            inline: false
          }
        }

        if (sourceMap) uglifyJsOptions.sourceMap = { content: sourceMap }
        return require('uglify-js').minify(file, uglifyJsOptions)
      }
    }),
  ]
  optimizationConfig.splitChunks = {
    cacheGroups: {
      styles: {
        name: 'styles',
        type: 'css/mini-extract',
        chunks: 'all',
        enforce: true
      },
    },
  }
}

const getExternalLibs = (externalLibNames) => {
  const externalLibs = {}
  externalLibNames.forEach((externalLibName) => {
    externalLibs[externalLibName] = `externalLibs.${externalLibName}`
  })
  return externalLibs
}

function createConfig(pkg, version, localAddonFilePath) {
  return {
    mode: env,
    devtool: false, // env === 'development' ? 'eval-cheap-source-map' : 'source-map',
    optimization: optimizationConfig,
    entry: {
      addon: resolveAddonPath(localAddonFilePath, `addons/${pkg}/${version}/src/addon.js`),
    },
    output: {
      publicPath: '',
      filename: '[name].js',
      path: resolveAddonPath(localAddonFilePath, `addons/${pkg}/${version}/build`),
      libraryTarget: 'var',
      library: 'addon'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolveAddonPath(localAddonFilePath, `addons/${pkg}/${version}/src`),
        'tommy-core': '@tommyassociates/tommy-core'
      },
      modules: [
        resolvePath('node_modules'),
        resolvePath('node_modules/@tommyassociates/tommy-core/node_modules')
        // TODO: see if tommy-core needed
      ]
    },
    // set names of libs that need to be injected at runtime and therefore excluded from build
    externals: getExternalLibs(['vue', 'vuex']),
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
          ]
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
      new webpack.DefinePlugin(helpers.getSdkVariables()),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'addon.css',
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [resolveAddonPath(localAddonFilePath, `addons/${pkg}/${version}/build/*.*`)],
        dangerouslyAllowCleanPatternsOutsideProject: true,
        dry: false // should be ok
      })
    ]
  }
}

module.exports = function(pkg, version) {
  const localAddonFilePath = helpers.getLocalAddonFilePath('', '', '..') // ex. tommy-sdk-private

  return new Promise((resolve, reject) => {
    console.error('addon building', pkg, version, 'in', env)
    const config = createConfig(pkg, version, localAddonFilePath)
    const compiler = webpack(config)
    compiler.run((err, stats) => {
      if (err) {
        console.error('addon compile failed', pkg, version)
        console.error(err.stack || err)
        if (err.details) {
          console.error(err.details)
        }
        reject(err)
        return;
      }

      const info = stats.toJson()
      if (stats.hasErrors()) {
        console.error('addon compile error:', info.errors)
        reject(info.errors)
        return;
      }

      if (stats.hasWarnings()) {
        console.warn('addon compile warning:', info.warnings.map(x => x.message))
      }

      console.log('addon compiled', pkg, version)
      resolve(stats)
    })
  })
}