import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Page from '@/pages/Page'
import Single from '@/pages/Single'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    }
  ]
})
