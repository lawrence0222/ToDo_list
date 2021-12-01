import { createRouter, createWebHistory } from 'vue-router'
import ToDo from '../TODO.vue'

const routes = [
  {
    path: '/',
    name: 'ToDO',
    component: ToDo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
