const path = require("path");

module.exports = {
  transpileDependencies: true,
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src/"));
  },
};
