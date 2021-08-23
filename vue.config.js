module.exports = {
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
