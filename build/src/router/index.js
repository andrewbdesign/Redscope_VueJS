import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/about',
      name: 'About2034',
      component: About
    },
    {
      path: '/contact',
      name: 'Contactdlfksjdf',
      component: Contact
    },
  ],
  mode: 'history'
})
