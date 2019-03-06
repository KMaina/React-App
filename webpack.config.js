const webpack = require('webpack');
const HWP = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new HWP({ template: path.join(__dirname, "./src/index.html") })
    ],
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };
