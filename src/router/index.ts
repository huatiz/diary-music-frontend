import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/events',
      name: 'events',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/events/:id',
      name: 'event',
      component: () => import('../views/EventView.vue'),
      props: true
    },
    {
      path: '/genres',
      name: 'genres',
      component: () => import('../views/GenresView.vue')
    },
    {
      path: '/new-releases',
      name: 'new-releases',
      component: () => import('../views/NewReleasesView.vue')
    },
    {
      path: '/search/:category/:query',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
      props: true
    }
  ]
})

export default router
