const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
    mode:'development',
    module:{
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },{
          test:/\.css$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin({
      template:'./public/index.html',
      filename:'index.html',
      inject:'body',
      minify:true,
    })],
  };