import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

let vueRoute = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


export default vueRoute

