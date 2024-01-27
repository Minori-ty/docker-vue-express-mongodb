<template>
  <RouterView />
</template>
<script setup lang="ts">
import axios from 'axios'

async function getBaidu() {
  const { data } = await axios.get('/api/baidu')
  console.log(data)
}
getBaidu()
</script>

<style scoped>
:global(#app) {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
