import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import ProblemList from '@/components/problem/ProblemList'
import SignIn from '@/components/user/SignIn'
import Register from '@/components/user/Register'
import User from '@/components/user/User'

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
      name: 'problemList',
      component: ProblemList
    },
    {
      path: '/user/',
      component: User,
      children: [
        {
          path: 'signin',
          name: 'signIn',
          component: SignIn
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        }
      ]
    }
  ]
})
