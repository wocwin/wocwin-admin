import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 所有业务api接口
import api from './api'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'// 因element-plus默认是英文，我们指定一下默认中文
// 图标并进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// pinia代替vuex
import pinia from './store'
// 权限控制(全局路由守卫)
import './permission'
// 公共样式
import '@/assets/styles/index.scss'
// 初始化样式
import 'normalize.css'


const app = createApp(App)

// 注册全局api方法
app.config.globalProperties.$api = api

// 注册ElementPlus
app.use(ElementPlus, {
  locale // 语言设置
  // size: Cookies.get('size') || 'medium' // 设置默认尺寸
})
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 注册路由
app.use(router)

app.use(pinia)

app.mount('#app')
