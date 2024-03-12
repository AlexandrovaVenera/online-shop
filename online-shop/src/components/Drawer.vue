<script setup>
import { ref } from 'vue'
import DrawerItemList from './DrawerItemList.vue'

const count = ref(1)
</script>
<template>
  <div v-if="count == 0">
    <h1 class="font-medium text-center text-5xl mt-40">Корзина пуста</h1>
  </div>
  <div v-else class="flex px-9">
    <div class="w-4/5 mt-40 border border-gray-400 rounded-2xl p-8 mr-10">
      <h2 class="font-medium mb-5">Корзина</h2>

      <DrawerItemList />
    </div>
  </div>
</template>
