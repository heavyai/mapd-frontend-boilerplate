/* eslint-env node */

// Configuration for production

const { resolve } = require( 'path' )

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
        include: [
          resolve( __dirname, 'node_modules/material-components-web' ),
          resolve( __dirname, 'node_modules/@material' )
        ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ]
      },

      {
        test: /(\.css|\.s(a|c)ss)$/i,
        exclude: [
          resolve( __dirname, 'node_modules/material-components-web' ),
          resolve( __dirname, 'node_modules/@material' )
        ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          {
            loader: 'sass-loader'
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
