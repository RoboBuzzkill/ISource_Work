import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'  
import notFound from '../views/notFound.vue'  
import AboutView from '../views/AboutView.vue'
import VueJobs from '../views/jobs/VueJobs.vue'
import jobDetails from '../views/jobs/jobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: VueJobs
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: jobDetails,
    props: true
  },

  {
    path: '/all-jobs',
    redirect: '/jobs'
  },

  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: notFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
