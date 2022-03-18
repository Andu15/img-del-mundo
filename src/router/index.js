import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "main" */ '../views/Main.vue')
  },
  {
    path: '/positions',
    name: 'Positions',
    component: () => import(/* webpackChunkName: "positions" */ '../views/Positions.vue')
  },
  {
    // path: '/invoice/:seller',
    path: '/invoice',
    name: 'Invoice',
    component: () => import(/* webpackChunkName: "invoice" */ '../views/Invoice.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error404',
    component: () => import(/* webpackChunkName: "/:pathMatch(.*)*" */ '../views/Error404.vue')
  }
]

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router
