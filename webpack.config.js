const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.ts",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
      },
      { test: /\.ts$/, loader: "ts-loader" },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
};
