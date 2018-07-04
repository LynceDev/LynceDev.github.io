import Vue from 'vue'
import Router from 'vue-router'

// components
import Home from '@/components/home/Home'
import Projects from '@/components/projects/Projects'
import Members from '@/components/members/Members'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/heroes',
      name: 'Members',
      component: Members
    }
  ]
})
