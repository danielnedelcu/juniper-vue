import { createRouter, createWebHistory } from 'vue-router'

import ProductList from "../views/ProductList.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: '/',
    name: 'products',
    component: ProductList
  },
  {
    path: '/product/:id',
    name: 'product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
