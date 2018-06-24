/* eslint-env node */

// Configuration for production

const { dirname, join, resolve } = require( 'path' )

const glob = require( 'glob' )

const { DefinePlugin } = require( 'webpack' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const merge = require( 'webpack-merge' )

const common = require( './webpack.config.common.js' )

module.exports = merge( common, {
  mode: 'production',

  entry: [
    // The entry point of our app
    'index.tsx'
  ],

  output: {
    path: resolve( __dirname, 'dist/' )
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ]
      },

      {
        test: /\.sass$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },

      {
        test: /index\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader',
            options: {
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
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    // Tell Webpack and React to use production mode
    new DefinePlugin( {
      'process.env': {
        NODE_ENV: '"production"'
      }
    } ),

    new MiniCssExtractPlugin( {
      filename: '[name].css',
      chunkFilename: '[id].css'
    } )
  ]
} )
