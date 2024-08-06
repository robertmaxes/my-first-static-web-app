const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
 //mode:'development',
  entry: {sunburst : './sunburst.js',1:"./1.js", index:"./index.js", table:"./table.js"},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'distw'),
  },
  //devtool:'inline-source-map',
  devServer: {
    contentBase: './distw',
  },
  module: {
    rules: [
       {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', 
      filename: 'index.html'
    })
  ]
};
