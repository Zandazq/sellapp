import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
      path: '/goods/:id',
      name: 'Goods',
      component: () => import('../views/Goods.vue')
    },
    {
      path: '/evaluate/:id',
      name: 'Evaluate',
      component: () => import('../views/Evaluate.vue')
    },
    {
      path: '/merchant/:id',
      name: 'Merchant',
      component: () => import('../views/Merchant.vue')
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
