

import Cart from '@/views/Cart.vue'
import Home from '@/views/Home.vue'
import ProductsDetailsView from '@/views/ProductsDetailsView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/products/:id',
      name:'product',
      component:ProductsDetailsView
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    }
  ]
})

export default router

