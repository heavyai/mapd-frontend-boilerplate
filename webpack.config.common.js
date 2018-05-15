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
            loader: 'babel-loader'
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
