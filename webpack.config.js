const path = require('path');
const webpack = require('webpack');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
require('file-loader');

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    descriptionFiles: ['package.json']
  },
  context: __dirname + '/components',
  // context: __dirname + '/bower_components/bedrock-angular',
  entry: {
    app: './main.js',
    vendor: ['angular']
  },
  output: {
    path: __dirname + '/.cache',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        // fallback: 'style-loader',
        use: ['css-loader', 'less-loader']
      })
    }, {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=fonts/[name].[ext]'
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'index.css',
      disable: false,
      allChunks: true
    }),
    new ngAnnotatePlugin({add: true}),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor", filename: "vendor.bundle.js"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: 'jquery'
    })
  ]
};
