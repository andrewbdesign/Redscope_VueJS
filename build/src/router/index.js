import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import NotFoundComponent from '@/components/NotFoundComponent'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      title: 'Redscope | Home'
    },
    {
      path: '/about',
      component: About,
      title: 'Redscope | About'
    },
    {
      path: '/contact',
      component: Contact,
      title: 'Redscope | Contact'
    },
    { path: '*',
      component: NotFoundComponent
    }
  ],
  scrollBehavior(to, from, savedPosition) {
      if(savedPosition) {
          return savedPosition;
      }
      return {x:0, y:0}
  }
  // mode: 'history'
})
