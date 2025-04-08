import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import './style.css'

import App from './App.vue'
import Index from './views/Index.vue'
import Form from './views/Form.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/form', component: Form }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

createApp(App).use(router).mount('#app')
