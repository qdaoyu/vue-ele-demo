import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/HomePage'
import login from '@/components/Login'
import my from '@/components/My'
import dupNameJudge from '@/components/DupNameJudge'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'my',
      component: my
    },
    {
      path: '/dupNameJudge',
      name: 'dupNameJudge',
      component: dupNameJudge
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage
    },
  ],
  // mode:history

})
