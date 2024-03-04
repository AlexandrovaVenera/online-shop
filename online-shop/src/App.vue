<script setup>
import { onMounted, reactive, ref } from 'vue'
import axios from 'axios'
import Header from './components/Header.vue'
import ProductList from './components/ProductList.vue'
</script>

<template>
  <Header />
  <ProductList />
</template>

<style scoped></style>
