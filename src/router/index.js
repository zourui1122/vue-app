import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Tv from '../views/Tv.vue'


Vue.use(VueRouter)

const routes = [
{path: '/',name: 'Tv', component: Tv },
{path: '/music',name: 'Music', component: ()=> import('../views/Music.vue')},
{path: '/book',name: 'Book', component: ()=> import('../views/Book.vue') },
{path: '/talk',name: 'Talk', component: ()=> import('../views/Talk.vue') },
{ path: '/tvDetail/:id', component: () => import('../views/TvDetail.vue') },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
