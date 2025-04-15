import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PracticeView from '../views/practice/PracticeView.vue'
import MatchGameView from '../views/matchgame/MatchGameView.vue'
import CalendarView from '../views/calendar/CalendarView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/practice',
    name: 'practice',
    component: PracticeView
  },
  {
    path: '/matchgame',
    name: 'matchgame',
    component: MatchGameView
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router