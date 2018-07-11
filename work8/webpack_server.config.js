var path = require('path');
var nodeExternals = require('webpack-node-externals');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main_server.js',

  // 为了不讲node.js内置的模块打包进输出文件
  target: 'node',

  // 防止node_modules目录下的第三方模块打包进去，因为node会默认去node_modules下寻找和使用第三方模块
  externals: [nodeExternals()],

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': './src/components'
    }
  },

  output: {
    // 为了以CommonJS2规范导出渲染函数
    libraryTarget: 'commonjs2',
    filename: 'bundle_server.js',
    path: path.resolve(__dirname, './dist')
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        use: ['ignore-loader']
      }
    ]
  },

  devtool: 'source-map',

  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
}
