//build config, build_utils/webpack.development.js

module.exports = () => ({
  module: {
    rules: [
      {
        test: /.scss$/, //defining loader for sccs files using regex
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
});
