<template>
  <div id="app">
    <div v-if="!loaded" class="row d-flex align-items-center" style="height: 100vh;">
      <Loader></Loader>
    </div>
  <router-view v-if="loaded"/>
  </div>
</template>
<script>
import Loader from '@/components/Loader.vue';
export default{
  components:{
    Loader
  },
  computed:{
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
