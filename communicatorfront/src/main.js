import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Inicial from './components/Inicial.vue'
import NuevoJuego from './components/NuevoJuego.vue'

const routes = [
  { path: '/', component: Inicial },
  { path: '/newgame', component: NuevoJuego },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')