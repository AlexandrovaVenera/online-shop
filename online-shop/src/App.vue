<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Header from './components/Header.vue'
import ProductList from './components/ProductList.vue'

const items = ref([])
onMounted(async () => {
  try {
    const { data } = await axios.get('https://547a75eee9d7e8e9.mokky.dev/items')
    items.value = data
    console.log(data)
  } catch (e) {}
})
</script>

<template>
  <Header />
  <ProductList :items="items" />
</template>

<style scoped></style>
