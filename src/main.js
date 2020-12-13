// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCookies from 'vue-cookies'

Vue.use(BootstrapVue)
Vue.use(VueCookies)
Vue.config.productionTip = false

Vue.$cookies.config('7d')
Vue.$cookies.set('theme', 'default')
Vue.$cookies.set('hover-time', '1s')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
