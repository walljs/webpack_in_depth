var path = require('path');
var MiniCssExractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',

  output: {
    filename: '[name]_[hash:8].js',
    path: path.resolve(__dirname, './dist')
  },

  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': './src/components'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './template.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    hot: true,
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8080
  }
}
