module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_breakpoint.scss";
          @import "@/assets/scss/_icon.scss";
        `
      }
    }
  },
  publicPath: '/portfolio/'
}
