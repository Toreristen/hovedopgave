import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CasesView from '../views/CasesView.vue'
import ContactView from '../views/ContactView.vue'
import FaggrupperView from '../views/FaggrupperView.vue'
import YdelserView from '../views/YdelserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/om',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: ContactView
    },
    {
      path: '/cases',
      name: 'cases',
      component: CasesView
    },
    {
      path:'/faggrupper',
      name: 'faggrupper',
      component: FaggrupperView
    },
    {
      path: '/ydelser',
      name: 'ydelser',
      component: YdelserView
    }
     
  ]
})

export default router
