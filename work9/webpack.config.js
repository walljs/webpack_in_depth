var path = require('path');
var MiniCssExtract = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'commonjs2'
  },

  externals: /^(react|babel-runtime)/,

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtract.loader,
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },

  plugins: [
    new MiniCssExtract({
      filename: 'index.css'
    })
  ]
}
