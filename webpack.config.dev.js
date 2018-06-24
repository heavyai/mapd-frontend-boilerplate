/* eslint-env node */

// Configuration for local development

const glob = require( 'glob' )
const { dirname, join, resolve } = require( 'path' )

const merge = require( 'webpack-merge' )
const serveWaitPage = require( 'webpack-serve-waitpage' )

const common = require( './webpack.config.common.js' )

module.exports = merge( common, {
  mode: 'development',

  entry: [
    // Activate HMR for React
    'react-hot-loader/patch',

    // The entry point of our app
    './src/index.tsx'
  ],

  devtool: 'cheap-module-eval-source-map',

  serve: {
    add: ( app, middleware, options ) => {
      app.use( serveWaitPage( options, { theme: 'dark' } ) )
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },

      {
        test: /\.sass$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },

      {
        test: /index\.scss$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: glob
                .sync( join( __dirname, '**/node_modules/@material' ) )
                .map( ( dir ) => dirname( dir ) )
            }
          }
        ]
      },

      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: '.babel-cache'
            }
          },
          {
            loader: 'react-svg-loader'
          }
        ]
      }
    ]
  }
} )
