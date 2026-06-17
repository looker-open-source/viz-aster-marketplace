var path = require("path");

const TerserPlugin = require('terser-webpack-plugin');

var webpackConfig = {
  mode: "production",
  entry: {
    aster_plot: "./src/aster_plot_src.js",
  },
  output: {
    hashFunction: 'sha256',
    filename: "bundle.js",
    path: path.join(path.resolve(__dirname), "/dist"),
    library: "[name]",
    libraryTarget: "umd",
  },
  plugins: [new TerserPlugin()],
};

module.exports = webpackConfig;
