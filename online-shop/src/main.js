import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Drawer from './components/Drawer.vue'
import ProductItemPage from './pages/ProductItemPage.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/drawer', name: 'Drawer', component: Drawer },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(createPinia())

app.use(router)
app.mount('#app')
