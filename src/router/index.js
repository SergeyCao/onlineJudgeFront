import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import problem from '@/components/problem/problem'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/problem',
      name: 'problem',
      component: problem
    }
  ]
})
