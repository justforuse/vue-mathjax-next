const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  title: 'Vue Mathjax Next',
  theme: defaultTheme({
    // Public 文件路径
    logo: '/logo.png',
    repo: 'justforuse/vue-mathjax-next',
    editLink: false
  }),
}