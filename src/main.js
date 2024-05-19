import Vue from 'vue'
import App from './App.vue'
// import {createRouter, createWebHasHistory} from 'vue-router'
// import MainComponent from './components/MainComponent.vue';
// import AcercaDe from './components/AcercaDe.vue';
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
