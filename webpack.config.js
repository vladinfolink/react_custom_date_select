const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
         test: /.(css|scss)$/,
         use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
       },
       {
         test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
         use: [
           {
             loader: "file-loader",
             options: {
               name: "[path][name]-[hash:8].[ext]"
             }
           }
         ]
       }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}