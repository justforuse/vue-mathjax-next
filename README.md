# vue-mathjax-next

vue mathjax for vue3

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
