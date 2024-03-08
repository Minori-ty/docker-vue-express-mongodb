<template>
  <el-button type="primary" @click="home">home</el-button>
  <el-button type="primary" @click="about">about</el-button>
  <p>可访问后端添加数据 <a href="http://127.0.0.1:8000/add">http://127.0.0.1:8000/add</a></p>
  <RouterView />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function home() {
  router.push('/home')
}
function about() {
  router.push('/about')
}
</script>
