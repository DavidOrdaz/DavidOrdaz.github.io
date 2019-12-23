const path = require('path'); // Node.js path module.
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Plugin that simplifies creation of HTML files to serve your bundles
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
    output: {
      path: path.resolve(__dirname, './'),
      filename: 'main.js',
    },
    module: {
      // configuration for modules
      rules: [
        // configure loaders, parser options
        {test: /\.scss/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']},
        {test: /\.html$/, use: ['html-loader']},
        {
         test: /\.(jpe?g|png)$/i,
         use: [{loader: 'file-loader', options: {outputPath: 'img/', publicPath: 'img/'}}]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['./', './img']),
      new MiniCssExtractPlugin({
        filename: "style.css"
      }),
      new HtmlWebpackPlugin({
        template: "src/index.html",
        favicon: 'src/img/favicon.ico'
      })/*,
      new BundleAnalyzerPlugin()
    */]
};
