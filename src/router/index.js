import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Page from '@/pages/Page'
import Single from '@/pages/Single'
import Exp from '@/pages/Exp'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    },
    {
      path: '/single',
      name: 'Single',
      component: Single
    },
    {
      path: '/experiences',
      name: 'Exp',
      component: Exp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
