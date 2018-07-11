var path = require('path');
var webpack = require('webpack');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.ts',
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // 让tsc将vue文件当成一个TypeScript模块去处理，已解决module not found的问题，tsc本身不会处理.vue结尾的文件
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ]
}
