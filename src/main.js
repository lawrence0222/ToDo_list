import { createApp } from 'vue'
//import App from './App.vue'
import router from './router'
import store from './store'
import TODO from './TODO.vue'

createApp(TODO).use(store).use(router).mount('#app')
