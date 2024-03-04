<script setup>
import Header from './components/Header.vue'
import ProductItem from './components/ProductItem.vue'
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
      <p>Найдено 26 товаров</p>
      <div class="flex">
        <div class="relative mr-5">
          <input
            type="text"
            placeholder="Найти товар"
            class="border border-gray-400 rounded pl-3 py-2 w-80"
          />
          <img src="/img/search.svg" alt="search" class="absolute top-4 right-3" />
        </div>
        <div class="flex items-center">
          <span class="mr-3">Отсортировать:</span>
          <select class="text-blue-600">
            <option class="text-black">по цене</option>
            <option class="text-black">по названию</option>
          </select>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="w-1/5"></div>
      <div class="product-items w-4/5">
        <ProductItem />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
