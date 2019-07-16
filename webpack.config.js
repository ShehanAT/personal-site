//  webpack.config.js
// Every time you edit this file you must restart the server

/*
to pass environment specifc configurations, we need a utility
package called webpack-merge. If you are familiar with 
ES6 Object.assign() method, webpack-merge works the same
way. 

Defining generic configurations are used to avoid code 
repetition, which is good practice. Now add the specific
configurations to the generic config. To concat both 
generic and specific configurations, webpack-merge will 
be used.  




*/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const modeConfiguration = (env) => require(`./build-utils/webpack.${env}`)(env);
//modeConfiguration loads the config that matches the mode we're in.
// then webpackMerge adds the specific config to the generic config

module.exports = ({ mode } = { mode: "production" }) => {
  console.log(`mode is: ${mode}`);

  return webpackMerge(
    {
      mode, // mode = "production" ?
      entry: "./src/index.js",
      output: {
        publicPath: "/",
        path: path.resolve(__dirname, "docs"),
        filename: "bundled.js"
      },
      module: {
        rules: [
          {
            test: /\.(jpg|png)$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 10000
                }
              }
            ]
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          },
          // {
          //   test: /.scss$/,
          //   use: [
          //     "style-loader", // creates style nodes from JS strings
          //     "css-loader", // translates CSS into CommonJS
          //     "sass-loader" // compiles Sass to CSS, using Node Sass by default
          //   ]
          // },
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
        new webpack.HotModuleReplacementPlugin() //allow modules to be updates without need a full refresh of the page
        /* HMR plugin is an array of plugins, which enable hot-module-reloading of our application   */
      ],
      devServer: {
        hot: true,
        /* if hot true = webpack enables HMR(HotModuleReplacementPlugin())    */
        open: true
      }
    },
    modeConfiguration(mode)
  );
};

/* if you fail to pass an env to let Webpack know which mode to work with, it defaults to production */
