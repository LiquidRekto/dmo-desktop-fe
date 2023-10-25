import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Setting from '../views/Setting.vue'
import HumanResources from '../views/HumanResources.vue'
import SkillsManagement from '../views/SkillsManagement.vue'
import LineManagement from '../views/LineManagement.vue'
import Schedule from '../views/Schedule.vue'
import History from '../views/History.vue'
import UserDetails from '../views/UserDetails.vue'
import ScheduleView from '../views/ScheduleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/hr',
      name: 'hr',
      component: HumanResources
    },
    {
      path: '/hr/:userId',
      name: 'hr-detail',
      component: UserDetails,
    },
    {
      path: '/mng/skills',
      name: 'skill-management',
      component: SkillsManagement
    },
    {
      path: '/mng/line',
      name: 'line-management',
      component: LineManagement
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule,
    },
    {
      path: '/history',
      name: 'hist',
      component: History
    },
    {
      path: '/history/:scheduleId',
      name: 'hist-view',
      component: ScheduleView,
    },
  ]
})

export default router
