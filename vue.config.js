module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/calculator_front/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/_reset.scss";
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
          @import "@/styles/_base.scss";
          `,
      },
    },
  },
}
