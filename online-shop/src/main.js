import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Drawer from './components/Drawer.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/drawer', name: 'Drawer', component: Drawer }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(createPinia()).mount('#app')

app.use(router)
