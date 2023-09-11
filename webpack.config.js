const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode : "development",
    entry : {
        index : './src/index.js',
        main : './src/main.js'
    },
    devtool : 'inline-source-map',
    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname,'dist')
    },
    optimization : {
        runtimeChunk : 'single'
    },
    plugins :[
        new htmlWebpackPlugin({
            title : ' weather-app'
        })
    ],
    devServer : {
        static : './dist'
    },
  module : {
    rules : [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.(jpg|jpeg|png|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images/',
                },
              },
            ],
          },
          {
            test: /\.webp$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images/',
                },
            },
    ]
}]}
}