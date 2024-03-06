<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import axios from 'axios'
import Header from './components/Header.vue'
import ProductItem from './components/ProductItem.vue'
import Drawer from './components/Drawer.vue'
import { useFilterStore } from './stores/FilterStore'

const items = ref([])
const count = ref(1)
onMounted(async () => {
  try {
    const { data } = await axios.get('https://547a75eee9d7e8e9.mokky.dev/items')
    items.value = data
  } catch (e) {}
})

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
  <section class="w-full m-auto mt-20 px-9">
    <div class="nav flex justify-between items-center mb-5">
      <button
        class="transition ease-in-out delay-150 bg-white hover:bg-blue-600 hover:text-white text-gray-800 py-2 px-4 border border-gray-400 rounded"
      >
        Сбросить фильтры
      </button>
      <p>Найдено {{ items.length }} товаров</p>
      <div class="flex">
        <div class="relative mr-5">
          <input
            type="text"
            placeholder="Найти товар"
            class="border border-gray-400 rounded pl-3 py-2 w-80 outline-none"
          />
          <img src="/img/search.svg" alt="search" class="absolute top-4 right-3" />
        </div>
        <div class="flex items-center">
          <span class="mr-3">Отсортировать:</span>
          <select @change="onChangeSelect" class="text-blue-600 outline-none">
            <option class="text-black" value="-price">сначала дорогие</option>
            <option class="text-black" value="price">сначала дешевые</option>
            <option class="text-black" value="title">по названию</option>
          </select>
        </div>
      </div>
    </div>
    <div class="flex items-start">
      <div class="w-2/12 border border-gray-400 rounded-2xl mr-8 p-3.5 pb-10">
        <h2 class="font-medium mb-4">Категория</h2>
        <div class="flex items-center mb-2">
          <input type="checkbox" id="smartphone" name="category" class="mr-4" /><label
            for="smartphone"
            >Смартфоны</label
          >
        </div>
        <div class="flex items-center mb-2">
          <input type="checkbox" id="laptop" name="category" class="mr-4" /><label for="laptop"
            >Ноутбуки</label
          >
        </div>
        <div class="flex items-center mb-2">
          <input type="checkbox" id="tablet" name="category" class="mr-4" /><label for="tablet"
            >Планшеты</label
          >
        </div>
        <div class="flex items-center mb-2">
          <input type="checkbox" id="monitor" name="category" class="mr-4" /><label for="monitor"
            >Мониторы</label
          >
        </div>
        <div class="flex items-center mb-2">
          <input type="checkbox" class="mr-4" id="category" name="accessories" /><label
            for="accessories"
            >Гарнитура и аксессуары</label
          >
        </div>
        <h2 class="font-medium mb-4 mt-8">Брeнд товаров</h2>
        <div class="flex items-center mb-2">
          <input type="checkbox" id="apple" name="brand" class="mr-4" /><label for="apple"
            >Apple</label
          >
        </div>
        <div class="flex items-center mb-2">
          <input type="checkbox" id="samsung" name="brand" class="mr-4" /><label for="samsung"
            >Samsung</label
          >
        </div>
        <div class="flex items-center mb-2">
          <input type="checkbox" id="xiaomi" name="brand" class="mr-4" /><label for="xiaomi"
            >Xiaomi</label
          >
        </div>
        <div class="flex items-center mb-2">
          <input type="checkbox" id="asus" name="brand" class="mr-4" /><label for="asus"
            >Asus</label
          >
        </div>
        <div class="flex items-center mb-2">
          <input type="checkbox" id="logitech" name="brand" class="mr-4" /><label for="logitech"
            >Logitech</label
          >
        </div>
        <h2 class="font-medium mb-4 mt-8">Цена</h2>
        <div class="flex justify-between">
          <input
            type="number"
            placeholder="От"
            min="0"
            class="p-2 border border-gray-400 rounded-xl outline-none w-36"
          />
          <input
            type="number"
            placeholder="До"
            min="0"
            class="p-2 border border-gray-400 rounded-xl outline-none w-36"
          />
        </div>
        <button
          class="mt-7 transition ease-in-out delay-150 bg-white hover:bg-blue-600 hover:text-white text-gray-800 py-2 px-4 border border-gray-400 rounded-xl"
        >
          Показать
        </button>
      </div>
      <div class="product-items w-10/12 flex flex-wrap gap-8 justify-between">
        <ProductItem
          v-for="item in items"
          :key="item.id"
          :title="item.title"
          :price="item.price"
          :imgMain="item.imgMain"
        />
      </div>
    </div>
  </section>
  <!-- <Drawer :count="count" /> -->
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
