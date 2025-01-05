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
          path: '/projects/:project',
          name: RouteType.PROJECTS,
          props: true,
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../components/ProjectsView.vue'),
        },
        {
          path: '/vendors/:vendor',
          name: RouteType.VENDORS,
          props: true,
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../components/VendorsView.vue'),
        },
        {
          path: '/roles/:role',
          name: RouteType.ROLES,
          props: true,
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../components/RoleView.vue'),
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
          path: '/logs',
          name: RouteType.LOGS,
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../components/LogsView.vue'),
        },
      ],
    },
  ],
})

export default router
