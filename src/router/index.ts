import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/index.vue'
import Login from '@/views/login.vue'
const constantRoutes: any = [
    {
        path: '/',
        name: 'Home页面',
        component: Home
    },
    {
        path: '/login',
        component: Login,
        hidden: true,
        meta: {
          noCache: true
        }
      },
]
const router = createRouter({
    history: createWebHistory(),
    routes:constantRoutes
})

export default router