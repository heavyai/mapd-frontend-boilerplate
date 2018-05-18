/* eslint-env node */

// Configuration common to both development and production

const { resolve } = require( 'path' )

const HtmlWebpackPlugin = require( 'html-webpack-plugin' )


module.exports = {

  output: {
    filename: 'main.js'
  },

  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
    modules: [ resolve( './src' ), 'node_modules' ],
    alias: {
      '~': resolve( __dirname, 'src/' )
    }
  },

  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/i,
        exclude: /node_modules/,
        include: resolve( __dirname, 'src/' ),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: '.babel-cache'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin( {
      template: './src/index.html',
      hash: true,
      inject: 'body'
    } )
  ]

}
