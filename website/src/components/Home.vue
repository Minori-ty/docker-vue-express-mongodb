<template>
    <h1>3000</h1>
    <h2>{{ message }}</h2>
    <router-view />
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
let message = ref('')
;(async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/user')
    message.value = data
})()
</script>
