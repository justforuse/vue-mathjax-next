import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mathjax for Vue 3",
  description: "Vue 3 Mathjax doc",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML' }]
  ],
  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/justforuse/vue-mathjax-next' }
    ],

    sidebar: [
      {
        text: 'Get started',
        items: [
          { text: 'Guide', link: '/guide' }
        ]
      }
    ]
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  }
})
