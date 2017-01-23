const webpack = require("webpack");

module.exports = {
  entry: "./js-build/index.js",
  output: {
    path: "../../javascript-canon/public/js/react",
    filename: "react-bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ["babel-loader"],
        query: {
          presets: ["latest", "stage-0", "react"]
        }
      }
    ]
  }
}