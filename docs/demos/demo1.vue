<template>
  <div>
    <textarea v-model="formula" cols="30" rows="10" />
    <vue-mathjax :formula="formula" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const formula = ref('$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$')
</script>

<style scoped>
textarea {
  width: 200px;
  height: 100px;
  resize: auto;
  border: 1px solid #ddd;
}
</style>
