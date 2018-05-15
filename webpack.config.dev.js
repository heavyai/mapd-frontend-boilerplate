/* eslint-env node */

// Configuration for local development

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
  }

} )
