import { createApp } from 'vue'
import 'virtual:uno.css'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import './style/index.css'
import '@unocss/reset/normalize.css'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
