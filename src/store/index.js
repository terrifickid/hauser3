import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import axios from 'axios';
export default new Vuex.Store({
  state: {
    gdpr: true,
    artworks: false,
    master: false,
    favorites:[],
  },
  getters:{
    gdpr: state => {
      return state.gdpr;
    },
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
      if (localStorage.getItem('gdpr')) {
        state.gdpr = JSON.parse(localStorage.getItem('gdpr'));
      }
    },
    setGDPR (state, gdpr) {
      state.gdpr = gdpr;
      localStorage.setItem('gdpr', JSON.stringify(state.gdpr));
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
    async loadData({ commit }, { param }) {
      var masterURL = 'wp-json/hauser/v1/master';
      if(param.id) masterURL = '/wp-json/wp/v2/pages?include[]='+param.id;
      //Load data
          var res = await Promise.all([
            axios.get(process.env.VUE_APP_URI+'wp-json/wp/v2/hauser_artworks/?per_page=500'),
            axios.get(process.env.VUE_APP_URI+masterURL)
          ]);
          console.log('Loaded '+res[0].data.length+' Artworks!');
          commit('setArtworks', res[0].data.filter((artwork) => {
            if(artwork.status == 'publish') return true;
          }));
          console.log('Master Data Loaded!');

          var masterData = res[1].data;
          if(param.id) masterData = res[1].data[0];
          commit('setMaster', masterData);
          console.log(masterData);
    },
  },
  modules: {
  }
})
