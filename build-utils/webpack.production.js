// production cofig, build_utils/webpack.production.js

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//MiniCssExtractPlugin extracts CSS into seperate files. It creates a CSS file per JS file which contains CSS. It supports on-demand-loading of CSS and SourceMaps

/* To optimize css use the optimize-css-assets-webpack-plugin and 
to minifize css use uglifyjs-webpack-plugin 
*/
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = () => ({
  devtool: "nosource-source-map", //adds the nosource-source-map plugin
  //nosource-source-map disables source-maps for dev-tools, con: it won't allow us to add meta info for the browser in our dev-tools for debugging
  //pro: faster build speed, in development: enable source-maps for dev-tools, slower build speeds are fine
  //in production: disable source-maps for dev-tools, faster build speeds are a must.
  output: {
    filename: "production.js"
  },
  optimization: {
    //making optimizations
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // this is set to true if you want JS source maps for CSS
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/, //using regex to load scss and css files
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        //webpack reads from right to left so: sass-loader -> css-loader -> MiniCssExtractPlugin.loader
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
});
