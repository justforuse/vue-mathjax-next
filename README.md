# vue-mathjax-next

[![npm](https://img.shields.io/npm/v/vue-mathjax-next.svg) ![npm](https://img.shields.io/npm/dm/vue-mathjax-next.svg)](https://www.npmjs.com/package/vue-mathjax-next)
[![vue3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://vuejs.org/)

vue mathjax for vue3

[Demo](https://codesandbox.io/s/vue3-mathjax-demo-cz683m)

If you use vue 2, please check [vue-mathjax](https://github.com/justforuse/vue-mathjax)

## How to use

```
npm i vue-mathjax-next
```

In your main.js:
```js
import { createApp } from 'vue'
import VueMathjax from 'vue-mathjax-next';
import App from './App.vue'

const app = createApp(App)
app.use(VueMathjax)

app.mount('#app')
```

More options please check [vue-mathjax](https://github.com/justforuse/vue-mathjax), these have same options.
