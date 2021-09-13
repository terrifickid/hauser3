<template>
  <div id="app">
    <div v-if="!loaded" class="row d-flex align-items-center" style="height: 100vh;">
      <Loader></Loader>
    </div>
    <router-view v-if="loaded"/>
    <div id="gdpr" v-if="0" style="position: fixed; width: 100%; bottom:0; background: white; padding: 2rem 0;">
      <div class="container-fluid">
        <div class="row d-flex align-items-center">
          <div class="col-8">This site uses cookies to improve user experience. By clicking 'Accept' or by continuing to use this site, you consent to our use of cookies. Click 'Learn more' for information on how we use cookies and how you can control them.</div>
          <div class="col text-right"><a class="btn btn-md btn-outline-dark " @click="closeGDPR()">Accept</a> <a class="btn btn-md btn-outline-dark " href="https://www.hauserwirth.com/terms-and-conditions" target="_blank">Learn More</a></div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loader from '@/components/Loader.vue';
export default{
  components:{
    Loader
  },
  data: function(){
    return{

    }
  },
  methods:{
    closeGDPR(){
      this.$store.commit('setGDPR',false);
    }
  },
  computed:{
    gdpr () {
      return this.$store.state.gdpr;
    },
    master () {
      return this.$store.state.master;
    },
    artworks () {
      return this.$store.state.artworks;
    },
    loaded(){
      if(this.master && this.artworks) return true;
      return false;
    }
  },
  mounted(){
    this.$store.dispatch('loadData');
  }
}
</script>
<style lang="scss">

</style>
