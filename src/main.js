import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
