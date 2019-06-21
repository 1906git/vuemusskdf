import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Recommend from 'pages/recommend'
import Singer from 'pages/singer'

export default new Router({
  routes: [
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },

  ]
})
