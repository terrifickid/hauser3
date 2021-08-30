import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import axios from 'axios';
export default new Vuex.Store({
  state: {
    artworks: [],
    master: {},
    favorites:[],
  },
  getters:{
    artworks: state => {
      return state.artworks;
    },
    master: state => {
      return state.master;
    },
    favorites: state => {
      return state.favorites;
    }
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem('favorites')) {
        state.favorites = JSON.parse(localStorage.getItem('favorites'));
      }
    },
    setArtworks (state, artworks) {
      state.artworks = artworks
    },
    setMaster (state, master) {
      state.master = master
    },
    toggleFavorite (state, id) {
      var i = state.favorites.indexOf(id);
      if (i === -1){
        state.favorites.push(id);
      }else{
        state.favorites.splice(i,1);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }
  },
  actions: {
    async loadArtworks({ commit }) {
      //Load Artworks
      try {
            const res = await axios.get(process.env.VUE_APP_URI+'wp-json/wp/v2/hauser_artworks/');
            commit('setArtworks', res.data)
            console.log(res.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    },
    async loadMaster({ commit }) {
      //Load Master
      try {
            const res = await axios.get(process.env.VUE_APP_URI+'wp-json/hauser/v1/master');
            commit('setMaster', res.data)
            console.log(res.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }

    }
  },
  modules: {
  }
})
