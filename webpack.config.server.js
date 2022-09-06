const nodeExternals = require("webpack-node-externals");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  name: "server",
  entry: {
    server: path.resolve(__dirname, "server/server.ts"),
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  externals: [nodeExternals()],
  target: "node",
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: [/node_modules/],
        options: {
          configFile: "tsconfig.server.json",
        },
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, '/src/'],
        use: ['css-loader']
        // use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ context: "server", from: "views", to: "views" }],
    }),
    // new MiniCssExtractPlugin(),
    // new HtmlWebpackPlugin(),
  ],
};
