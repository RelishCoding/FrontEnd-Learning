import Vue from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'

// import MyApp1 from './views/ExampleView1.vue'
// import MyApp2 from './views/ExampleView2.vue'
// import MyApp3 from './views/ExampleView3.vue'
// import MyApp4 from './views/ExampleView4.vue'
// import MyApp5 from './views/ExampleView5.vue'
// import MyApp6 from './views/ExampleView6.vue'
// import MyApp6 from './views/ExampleView6-simplify.vue'
// import MyApp7 from './views/ExampleView7.vue'
import MyApp8 from './views/ExampleView8.vue'

Vue.config.productionTip = false

/* new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') */

new Vue({
  router,
  store,
  render: h => h(MyApp8)
}).$mount('#app')