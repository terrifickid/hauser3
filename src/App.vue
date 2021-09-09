<template>
  <div id="app">
    <div v-if="!loaded" class="row d-flex align-items-center" style="height: 100vh;">
      <Loader></Loader>
    </div>
    <router-view v-if="loaded"/>
    <div id="gdpr" v-if="gdpr" style="position: fixed; width: 100%; bottom:0; background: white; padding: 2rem 0;">
      <div class="container-fluid">
        <div class="row d-flex align-items-center">
          <div class="col-8">By navigating, you accept the placement and use of cookies as described in our Privacy policy.</div>
          <div class="col text-right"><a class="bnt btn-md" @click="closeGDPR()">Close</a></div>
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
#gdpr a, #gdpr a:hover{color: black !important;}
</style>
