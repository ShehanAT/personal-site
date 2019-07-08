//  webpack.config.js
// Every time you edit this file you must restart the server
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = ({ mode } = { mode: "production" }) => {
  console.log(`mode is: ${mode}`);

  return {
    mode,
    entry: "./src/index.js",
    output: {
      publicPath: "/",
      path: path.resolve(__dirname, "build"),
      filename: "bundled.js"
    },
    module: {
      rules: [
        {
          test: /\.jpe?g$|\.png$|\.ico$/,
          exclude: /node_modules/,
          loader: ["url-loader", "file-loader"]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        },
        {
          test: /\.svg$/,
          loader: "svg-inline-loader"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      }),
      new webpack.HotModuleReplacementPlugin()
      /* HMR plugin is an array of plugins, which enable hot-module-reloading of our application   */
    ],
    devServer: {
      hot: true,
      /* if hot true = webpack enables HMR(HotModuleReplacementPlugin())    */
      open: true
    }
  };
};

/* if you fail to pass an env to let Webpack know which mode to work with, it defaults to production */
