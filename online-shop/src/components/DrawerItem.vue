<script setup>
defineProps({})
</script>
<template>
  <div class="drawer-item flex justify-between">
    <div class="flex">
      <img src="/img/apple/iphone14-main.png" class="w-1/5 mr-10" />
      <div class="description">
        <h2>Iphone 14 Pro</h2>
      </div>
    </div>
    <div class="text-center">
      <span>Количество</span>
      <div class="btns mb-5">
        <button
          class="mt-7 transition ease-in-out delay-150 bg-white hover:bg-blue-600 hover:text-white text-gray-800 py-2 px-4 border border-gray-400 rounded-xl"
        >
          +
        </button>
        <span class="mx-5">1</span>
        <button
          class="mt-7 transition ease-in-out delay-150 bg-white hover:bg-blue-600 hover:text-white text-gray-800 py-2 px-4 border border-gray-400 rounded-xl"
        >
          -
        </button>
      </div>
      <span>1200$</span>
    </div>
  </div>
</template>
