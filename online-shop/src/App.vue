<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import axios from 'axios'
import Header from './components/Header.vue'
import ProductItem from './components/ProductItem.vue'
import Drawer from './components/Drawer.vue'
import { useFilterStore } from './stores/FilterStore'

const count = ref(1)

const filtersStore = useFilterStore()

const onChangeSelect = (event) => {
  filtersStore.setSort(event.target.value)
}

watch(filtersStore.filters, async () => {
  try {
    const { data } = await axios.get(
      'https://547a75eee9d7e8e9.mokky.dev/items?sortBy=' + filtersStore.filters.sortBy
    )
    items.value = data
  } catch (e) {}
})
</script>

<template>
  <Header />

  <!-- <Drawer :count="count" /> -->
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
