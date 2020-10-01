'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const webTitle = '桃飽ハーレム - Taobao • Harem'

const port = process.env.port || process.env.npm_config_port || 9527

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : process.env.VUE_APP_PATH,
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    host: '127.0.0.1',
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/variables.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@a': resolve('src/assets'),
        '@c': resolve('src/components'),
        '@v': resolve('src/views')
      }
    }
  },
  chainWebpack(config) {
    config.plugin('html').tap(options => {
      options[0].title = webTitle
      return options
    })

    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config.when(process.env.NODE_ENV !== 'development', config => {
      config.optimization.minimizer('terser').tap(options => {
        options[0].terserOptions.compress.drop_console = true
        return options
      })

      config
        .plugin('script-ext-html-webpack-plugin')
        .after('html')
        .use(require('script-ext-html-webpack-plugin'), [
          {
          // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }])
        .end()

      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
      config.optimization.runtimeChunk('single')
    })
  }
}
