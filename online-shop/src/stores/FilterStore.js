import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useFilterStore = defineStore('filterStore', () => {
  const filters = ref({
    sortBy: '',
    searchQuery: ''
  })

  const setSort = (id) => {
    filters.value.sortBy = id
  }

  const setInput = (value) => {
    filters.value.searchQuery = value
  }
  return { filters, setSort, setInput }
})
