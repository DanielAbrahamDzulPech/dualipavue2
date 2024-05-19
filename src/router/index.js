import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GaleriaView from '../views/GaleriaView.vue'
import InicioView from '../views/InicioView.vue'
// import MainComponent from '../components/MainComponent.vue';
import AcercaDe from '../components/AcercaDe.vue';
import Pagina from '../components/Pagina.vue';
import ErrorComponent from '@/components/ErrorComponent.vue'
import Canciones from '@/components/Canciones.vue'
// import { component } from 'vue/types/umd'
// import { component } from 'vue/types/umd';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/home',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/pagina/:id',
    // opcional parametros
    // path: '/pagina/:id?',
    name: 'pagina',
    component: Pagina,
  },
  {
    path: '/canciones',
    name: 'canciones',
    component: Canciones,
  },
  {
    path: '/acercade',
    name: 'acercade',
    component: AcercaDe
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: GaleriaView
  },
  {
    path: '*',
    name: 'notFound',
    component: ErrorComponent
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
