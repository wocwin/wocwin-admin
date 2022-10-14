import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/index.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home页面',
        component: Home
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router