<script setup>
defineProps({
  count: Number
})
</script>
<template>
  <div v-if="count == 0">
    <h1 class="font-medium text-center text-5xl mt-40">Корзина пуста</h1>
  </div>
  <div v-if="count > 0" class="flex px-9">
    <div class="w-4/5 mt-40 border border-gray-400 rounded-2xl p-8 mr-10">
      <h2 class="font-medium mb-5">Корзина</h2>
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
    </div>
    <div class="w-1/5 mt-40 border border-gray-400 rounded-2xl p-8">
      <div class="flex justify-between"><span>Общая стоимость:</span> <span>1200$</span></div>
      <div class="flex justify-between my-5">
        <span>Количество товаров:</span> <span>{{ count }}</span>
      </div>
      <input
        type="text"
        placeholder="Введите промокод"
        class="border border-gray-400 rounded-2xl p-3"
      />
      <button
        class="w-full mt-7 bg-blue-600 text-white transition ease-in-out delay-150 hover:bg-blue-800 hover:text-white text-gray-800 py-4 px-4 border border-gray-400 rounded-xl"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>
