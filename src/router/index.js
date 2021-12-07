import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "../views/Dashboard";
import Alerts from "../views/Alerts";
import Orders from "../views/Orders";
import Setting from "../views/Setting";
import Profile from "../views/Profile";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Orders.vue')
  // },
  {path: '/alerts', name: 'Alerts', component: Alerts},
  {path: '/orders', name: 'Orders', component: Orders},
  {path: '/products', name: 'Products', component: Orders},
  {path: '/setting', name: 'Setting', component: Setting},
  {path: '/profile', name: 'Profile', component: Profile},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
