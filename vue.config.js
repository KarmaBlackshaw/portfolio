module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = process.env.VUE_APP_TITLE
        return args
      })
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/scss/mixins/_@index.scss";
          @import "~@/assets/scss/variables/_@index.scss";
        `
      }
    }
  }
}
