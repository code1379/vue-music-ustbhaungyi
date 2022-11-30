import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'

// 引入样式文件
import "@/assets/scss/index.scss"

const app = createApp(App)
app.use(router).use(pinia).mount('#app')
