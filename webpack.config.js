const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv')
const webpack = require('webpack')
dotenv.config();

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "/src/index.js",
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html",
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
   })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3,
                },
              ],
              ["@babel/preset-react", { "runtime": "automatic" }]
              
            ],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
