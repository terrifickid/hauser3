import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//Bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

//Image Zooom
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";

//Masonry
import { VueMasonryPlugin } from "vue-masonry";
Vue.use(VueMasonryPlugin);

//Custom CSS
import "./app.scss";

//Currency Filter
Vue.filter("toCurrency", function(value) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });
  return formatter.format(value);
});

//Animation directive
Vue.directive("ani", {
  // When the bound element is inserted into the DOM...
  inserted: function(el, binding) {
    el.style.visibility = "hidden";

    let isInViewPort = function() {
      // Get the bounding client rectangle position in the viewport
      var bounding = el.getBoundingClientRect();

      if (
        (bounding.bottom > -10 && bounding.top < window.innerHeight - 100) ||
        bounding.bottom < 0
      ) {
        //console.log('In the viewport! :)');
        setTimeout(() => {
          el.classList.add(binding.value.class);
          el.style.visibility = "visible";
        }, binding.value.delay);

        return true;
      } else {
        //console.log('Not in the viewport. :(');
        //el.classList.remove(binding.value.class);
        //el.style.visibility = 'hidden';
        return false;
      }
    };
    window.addEventListener("scroll", isInViewPort);
      setInterval(isInViewPort, 100);
  
  }
});

//Loap APP
new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
