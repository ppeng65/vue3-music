import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: () => import('@/views/recommend')
  },
  {
    path: '/singer',
    component: () => import('@/views/singer'),
    children: [
      {
        path: ':id',
        component: () => import('@/views/singer-detail')
      }
    ]
  },
  {
    path: '/top-list',
    component: () => import('@/views/top-list')
  },
  {
    path: '/search',
    component: () => import('@/views/search')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
