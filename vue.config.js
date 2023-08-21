const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",


  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },

  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src/"));

    config.module
       .rule('hwpx')
       .test(/\.hwpx$/)
       .use('file-loader')
       .loader('file-loader')
       .end();
  },

  devServer: {
    historyApiFallback: true,
    headers: {
      "Permissions-Policy": "",
    },
  },

  pluginOptions: {
    vuetify: {},
  },
});
