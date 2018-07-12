import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import WordList from '../components/WordList.vue'
import Word from '../components/Word.vue'
import LatWord from '../components/Latest.vue'
import LatWord from '../components/Latest.vue'

Vue.component('Home', Home)
Vue.component('WordList', WordList)
Vue.component('Word', Word)
Vue.component('LatWord', LatWord)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/words',
      name: 'WordList',
      component: WordList
    },
    {
      path: '/words/word/:id',
      name: 'Word',
      component: Word
    },
    {
      path: '/LatWord',
      name: 'LatWord',
      component: LatWord
    }
  ]
})
