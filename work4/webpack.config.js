var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: {
    main: './src/main.js',
    main2: './src/main2.js',
  },
  module: {
    // 配置模块解析规则
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    // 别名
    alias: {
      '@': resolve('./src/components'),
    },
    // 配置省略文件后缀
    extensions: ['.js', '.jsx', '.json'],
    // 配置webpack到哪个目录下寻找第三方模块，默认只到node_modules下寻找
    modules: ['./src/components', 'node_modules'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    // 热替换
    hot: true,
    // 开启HTML 5的HISTORY API
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8080
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ]
};
