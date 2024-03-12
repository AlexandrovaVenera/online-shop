<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <router-view></router-view>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
