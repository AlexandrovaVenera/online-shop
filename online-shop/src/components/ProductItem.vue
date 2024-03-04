<script setup>
defineProps({
  id: Number,
  title: String,
  price: String,
  imgMain: String
})
</script>

<template>
  <div class="product border border-gray-400 rounded-2xl text-center p-5" :key="id">
    <div class="w-40 h-60 m-auto flex items-center">
      <img :src="imgMain" :alt="title" />
    </div>
    <p class="product__title font-medium mt-4 mb-2.5">{{ title }}</p>
    <p class="product__price mb-4">{{ price }}</p>
    <div class="product__btns flex justify-between">
      <button
        class="transition ease-in-out delay-150 bg-white hover:bg-blue-600 hover:text-white text-gray-800 py-2 px-4 border border-gray-400 rounded"
      >
        В корзину
      </button>
      <button
        class="transition ease-in-out delay-150 bg-white hover:bg-blue-600 hover:text-white text-gray-800 py-2 px-4 border border-gray-400 rounded"
      >
        Подробнее
      </button>
    </div>
  </div>
</template>

<style scoped>
.product {
  min-width: 270px;
}
</style>
