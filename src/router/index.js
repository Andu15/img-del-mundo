import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
  }
]

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

export default router
