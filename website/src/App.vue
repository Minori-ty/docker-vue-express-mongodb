<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
let message = ref('')
;(async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/user')
    message.value = data
})()
</script>

<template>
    <h1>8000</h1>
    <h2>{{ message }}</h2>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
