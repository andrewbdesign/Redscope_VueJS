// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Nav from './components/shared/Nav'
import Footer from './components/shared/Footer'
import Cta from './components/shared/CtaButton'
import Showreel from './components/showreel/Showreel'
import InstagramFeed from './components/shared/InstagramFeed'
import HeroSection from './components/HeroSection'
import Preloader from './components/shared/PreloaderScreen'

Vue.config.productionTip = false
Vue.component('app-nav', Nav)
Vue.component('app-footer', Footer)
Vue.component('app-showreel', Showreel)
Vue.component('app-cta', Cta)
Vue.component('app-instagramfeed', InstagramFeed)
Vue.component('app-herosection', HeroSection)
Vue.component('app-preloader', Preloader)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
