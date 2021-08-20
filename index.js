import VueMathjax from "./src/index.vue";
VueMathjax.install = function(Vue) {
  Vue.component(VueMathjax.name, VueMathjax);
};

export default VueMathjax;