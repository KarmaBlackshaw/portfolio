const path = require("path")

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/_breakpoints.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        scss: path.resolve(__dirname, "./src/assets/scss")
      }
    }
  }
}
