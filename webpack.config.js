const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "MagentoStorefrontEventCollector",
      type: "umd",
      export: "default",
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    hot: true,
  },
};

module.exports = config
