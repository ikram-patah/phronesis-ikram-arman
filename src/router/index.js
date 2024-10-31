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
      path: '/project-13',
      name: 'project-13',
      component: () => import('../views/projects/Project-13-view.vue')
    },
    {
      path: '/debriefs',
      name: 'debriefs',
      component: () => import('../views/DebriefView.vue')
    },
  ]
})

export default router
