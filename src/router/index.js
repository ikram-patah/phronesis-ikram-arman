import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/project-19',
      name: 'project-19',
      component: () => import('../views/projects/Project-19-view.vue')
    },
    {
      path: '/project-17',
      name: 'project-17',
      component: () => import('../views/projects/Project-17-view.vue')
    },
    {
      path: '/debriefs',
      name: 'debriefs',
      component: () => import('../views/DebriefView.vue')
    }
  ]
})

export default router
