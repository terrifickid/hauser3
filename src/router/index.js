import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: function () {
      return import(/* webpackChunkName: "Wishlist" */ '../views/Favorites.vue')
    }
  },
  {
    path: '/favorites/share/:list',
    name: 'Share',
    component: function () {
      return import(/* webpackChunkName: "Wishlist" */ '../views/Share.vue')
    }
  },
  {
    path: '/artwork/:slug',
    name: 'Artwork',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "Artwork" */ '../views/Artwork.vue')
    }
  },
  {
    path: '/preview/:id',
    name: 'Preview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "Artwork" */ '../views/Artwork.vue')
    }
  },
  {
    path: '/page/:id',
    name: 'Page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
})

export default router
