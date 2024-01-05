import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/all-knights',
    name: 'AllKnights',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AllKnightsView.vue')
  },
  {
    path: '/create-knight',
    name: 'CreateKnight',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/CreateKnightView.vue')
  },
  {
    path: '/edit-knight/:id',
    name: 'EditKnight',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/EditKnightView.vue')
  },
  {
    path: '/delete-knight/:id',
    name: 'DeleteKnight',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/DeleteKnightView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
