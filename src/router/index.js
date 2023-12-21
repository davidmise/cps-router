import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import ProfilePage from '../views/ProfilePageView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: ProfilePage
    },

    
    
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/DashboardView.vue')
    // }
  ]
})

export default router
