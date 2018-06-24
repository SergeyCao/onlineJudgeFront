import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import ProblemList from '@/components/problem/ProblemList'
import SignIn from '@/components/user/SignIn'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/problems',
      name: 'ProblemList',
      component: ProblemList
    },
    {
      path: '/user/signin',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
