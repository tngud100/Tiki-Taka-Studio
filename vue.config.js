const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
});

const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src/"));
  },

  pluginOptions: {
    vuetify: {}
  }
};
