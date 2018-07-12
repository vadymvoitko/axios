import Vue from 'vue'
import App from './App'
import Router from './router'
import Home from '@/components/Home'
import WordList from '@/components/WordList'
import Word from '@/components/Word'
import LatWord from '@/components/Latest'
import store from './store'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router: Router,
  components: { App },
  template: '<App/>'
})


