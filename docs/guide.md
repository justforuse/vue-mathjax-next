# Quick start

## Install

```sh
npm i vue-mathjax-next
```

## Usage

In your main.js:
```js
import { createApp } from 'vue'
import VueMathjax from 'vue-mathjax-next';
import App from './App.vue'

const app = createApp(App)
app.use(VueMathjax)

app.mount('#app')
```

## Options
More options please check [vue-mathjax](https://github.com/justforuse/vue-mathjax), these have same options.

## Demo

::: preview
demo-preview=./demos/demo1.vue
:::