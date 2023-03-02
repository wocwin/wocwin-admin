import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 所有业务api接口
import api from './api'
/**
 * element-plus
 */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 因element-plus默认是英文，我们指定一下默认中文
import locale from 'element-plus/lib/locale/lang/zh-cn'
// 图标并进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// pinia代替vuex
import pinia from './store'
// 权限控制(全局路由守卫)
import './permission'
/**
 * 样式
 */
// 公共样式
import '@/assets/styles/index.scss'
// 初始化样式
import 'normalize.css'

// 统一注册 baseComponents
// import baseComponentsInstall from '@/components/baseComponents/install'
import TuiPlus from '@wocwin/t-ui-plus'
import '@wocwin/t-ui-plus/lib/style.css'
// svg渲染
import SvgIcon from '@/components/SvgIcon/index.vue'

/**
 * 配置qiankun
 */
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
let instance: any = null
function render(props: any = {}) {
  const { container } = props
  instance = createApp(App)
  instance.use(router)
  instance.use(pinia)
  // 注册全局api方法
  instance.config.globalProperties.$api = api
  // 注册所有图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    instance.component(key, component)
  }
  // 注册ElementPlus
  instance.use(ElementPlus, {
    locale // 语言设置
    // size: Cookies.get('size') || 'medium' // 尺寸设置
  })
  // 自动注册全部本地组件
  // instance.use(baseComponentsInstall)
  instance.use(TuiPlus)
  // 全局组件祖册
  instance.component(
    'SvgIcon',
    // 如果这个组件选项是通过 `export default` 导出的，那么就会优先使用 `.default`，否则回退到使用模块的根
    SvgIcon.default || SvgIcon
  )
  instance?.mount(container ? container.querySelector('#app') : '#app')
  console.log('开始加载相关内容')
}
renderWithQiankun({
  mount(props: any) {
    render(props)
  },
  bootstrap() {
    console.log('%c', 'color:green;', ' ChildOne bootstrap')
  },
  update() {
    console.log('%c', 'color:green;', ' ChildOne update')
  },
  unmount(props: any) {
    console.log('unmount', props)
    instance.unmount()
    instance._container.innerHTML = ''
    instance = null
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log('并不是qiankun渲染')
  render()
}
