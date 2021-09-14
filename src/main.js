import Vue from 'vue'
import App from './App.vue'
import vuePluginTemplate from '../lib'

Vue.use(vuePluginTemplate)

new Vue({
  el: '#app',
  render: h => h(App)
})
