import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import './app.scss';

import VueSticky  from 'vue-sticky'; // Es6 module


new Vue({
  router,
  store,
  directives: {
  'sticky': VueSticky,
},
  render: function (h) { return h(App) }
}).$mount('#app')
