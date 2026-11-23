import Vue from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'

import MyApp1 from './views/ExampleView1.vue'

Vue.config.productionTip = false

/* new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') */

new Vue({
  router,
  store,
  render: h => h(MyApp1)
}).$mount('#app')