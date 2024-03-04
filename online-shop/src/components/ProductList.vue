<script setup>
import ProductItem from './ProductItem.vue'

defineProps({
  items: Array
})
</script>
<template>
  <section class="w-full m-auto mt-20 px-9">
    <div class="nav flex justify-between items-center mb-5">
      <button
        class="transition ease-in-out delay-150 bg-white hover:bg-blue-600 hover:text-white text-gray-800 py-2 px-4 border border-gray-400 rounded"
      >
        Сбросить фильтры
      </button>
      <p>Найдено 26 товаров</p>
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
          <select class="text-blue-600 outline-none">
            <option class="text-black">сначала дорогие</option>
            <option class="text-black">сначала дешевые</option>
            <option class="text-black">по названию</option>
          </select>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="w-2/12"></div>
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
</template>
