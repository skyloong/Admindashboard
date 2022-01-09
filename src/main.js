import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
