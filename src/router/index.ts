import { createRouter, createWebHistory } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import Layout from '@/layout/index.vue'
import login from '@/views/login.vue'

export const constantRoutes: any = qiankunWindow.__POWERED_BY_QIANKUN__
  ? [
    {
      path: '/login',
      name: 'login',
      component: login,
      hidden: true,
      meta: {
        rootPage: true,
        noCache: true
      }
    },
    {
      path: '/redirect',
      component: Layout,
      hidden: true,
      children: [
        {
          path: '/redirect/:path(.*)',
          component: () => import('@/views/redirect.vue')
        }
      ]
    },
    {
      path: '',
      component: Layout,
      redirect: 'index',
      hidden: true,
      children: [
        {
          path: '/index',
          component: () => import('@/views/index.vue'),
          name: 'index',
          hidden: true,
          meta: { title: '首页', icon: 'monitor', noCache: true, affix: true }
        }
      ]
    }
  ]
  : [
    {
      path: '/redirect',
      component: Layout,
      hidden: true,
      children: [
        {
          path: '/redirect/:path(.*)',
          component: () => import('@/views/redirect.vue')
        }
      ]
    },
    {
      path: '/login',
      component: login,
      hidden: true,
      meta: {
        noCache: true
      }
    },
    {
      path: '/404',
      component: () => import('@/views/error/404.vue'),
      hidden: true
    },
    {
      path: '/401',
      component: () => import('@/views/error/401.vue'),
      hidden: true
    },
    {
      path: '',
      component: Layout,
      redirect: 'index',
      hidden: true,
      children: [
        {
          path: '/index',
          component: () => import('@/views/index.vue'),
          name: 'index',
          hidden: true,
          meta: { title: '首页', icon: 'monitor', noCache: true, affix: true }
        }
      ]
    }
  ]

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/' : '/wocwin-admin/'),
  routes: constantRoutes,
})
export default router
