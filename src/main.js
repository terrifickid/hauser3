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



// Register a global custom directive called `v-focus`
Vue.directive('ani', {
  // When the bound element is inserted into the DOM...
  inserted: function (el,binding) {

  el.style.visibility = 'hidden';


      let isInViewPort = function() {

        // Get the bounding client rectangle position in the viewport
        var bounding = el.getBoundingClientRect();

        if (bounding.bottom > -10 && bounding.top < window.innerHeight - 100 || bounding.bottom < 0) {
            //console.log('In the viewport! :)');
            setTimeout(()=>{
              el.classList.add(binding.value.class);
              el.style.visibility = 'visible';
            }, binding.value.delay);

            return true;
        } else {
            //console.log('Not in the viewport. :(');
            //el.classList.remove(binding.value.class);
            //el.style.visibility = 'hidden';
            return false;
        }
      }
      window.addEventListener("scroll", isInViewPort);
      isInViewPort();
  }
})


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
