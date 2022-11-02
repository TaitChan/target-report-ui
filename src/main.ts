import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import components from './components'
import * as echarts from 'echarts'
import VueGridLayout from 'vue-grid-layout'
import './icons/index.js'
import 'element-plus/dist/index.css'
import 'gridstack/dist/gridstack.min.css'
import 'gridstack/dist/h5/gridstack-dd-native'
import './styles/index.scss'

const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.$echarts = echarts
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(VueGridLayout)
app.use(components)

app.mount('#app')
