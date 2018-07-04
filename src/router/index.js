import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import ProblemList from '@/components/problem/ProblemList'
import SignIn from '@/components/user/SignIn'
import Register from '@/components/user/Register'
import User from '@/components/user/User'
import Profile from '@/components/user/Profile'
import Problem from '@/components/problem/Problem'
import Status from '@/components/status/Status'
import Submission from '@/components/status/Submission'
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
