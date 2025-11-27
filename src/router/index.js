import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Gekz2 from '../views/Gekz2View.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/gekz2', component: Gekz2 },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
