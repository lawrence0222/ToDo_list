import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ToDo from './views/ToDo.vue'

createApp(ToDo).use(store).use(router).mount('#app')
