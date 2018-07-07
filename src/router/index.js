import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/oj/Home'
import ProblemList from '@/components/oj/problem/ProblemList'
import SignIn from '@/components/oj/user/SignIn'
import Register from '@/components/oj/user/Register'
import User from '@/components/oj/user/User'
import Profile from '@/components/oj/user/Profile'
import Problem from '@/components/oj/problem/Problem'
import Status from '@/components/oj/status/Status'
import Submission from '@/components/oj/status/Submission'
import Admin from '@/components/admin/admin'
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
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/status',
      name: 'status',
      component: Status
    },
    {
      path: '/problems',
      name: 'problemList',
      component: ProblemList
    },
    {
      path: '/problem/:id',
      component: Problem,
      props: true
    },
    {
      path: '/submission/:id',
      component: Submission,
      props: true
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
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        }
      ]
    }
  ]
})
