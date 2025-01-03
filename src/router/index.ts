import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import { RouteType } from '@/utils/enum'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteType.LOGIN,
      component: LoginView,
    },
    {
      path: '/main',
      name: RouteType.MAIN,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '/admin',
          name: RouteType.ADMIN,
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../components/AdminView.vue'),
        },
        {
          path: '/projects',
          name: RouteType.PROJECTS,
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../components/ProjectsView.vue'),
        },
        {
          path: '/vendors',
          name: RouteType.VENDORS,
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../components/VendorsView.vue'),
        },
        {
          path: '/users',
          name: RouteType.USERS,
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../components/UsersView.vue'),
        },
        {
          path: '/permissions',
          name: RouteType.PERMISSIONS,
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../components/PermissionsView.vue'),
        },
      ],
    },
  ],
})

export default router
