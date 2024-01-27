<template>
    <h1>页面不存在</h1>
    <button @click="home">返回home</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function home() {
    router.push('/home')
}
</script>
