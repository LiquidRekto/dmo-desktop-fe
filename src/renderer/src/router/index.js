import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Setting from '../views/Setting.vue'
import HumanResources from '../views/HumanResources.vue'
import Management from '../views/Management.vue'
import History from '../views/History.vue'

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
      path: '/management',
      name: 'management',
      component: Management
    },
    {
      path: '/history',
      name: 'hist',
      component: History
    },
  ]
})

export default router
