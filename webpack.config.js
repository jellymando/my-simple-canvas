const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [resolve(__dirname, "src"), "node_modules"],
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
  },
  externals: ["react", "react-dom"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
      },
      { test: /\.(ts|tsx)$/, loader: "ts-loader" },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
};
