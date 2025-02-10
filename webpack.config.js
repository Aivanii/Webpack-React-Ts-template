const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./app/main.tsx", // Entry point for TypeScript
  mode: "development",
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }, // Add rule for .ts and .tsx files
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Resolve these extensions
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html", // Specify your HTML template if needed
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./app/favicon.ico", to: path.resolve(__dirname, "dist") },
      ],
    }),
  ],
};
