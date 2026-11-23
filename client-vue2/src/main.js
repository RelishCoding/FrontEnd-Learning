import Vue from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'

// import MyApp1 from './views/ExampleView1.vue'
import MyApp2 from './views/ExampleView2.vue'

Vue.config.productionTip = false

/* new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') */

new Vue({
  router,
  store,
  render: h => h(MyApp2)
}).$mount('#app')