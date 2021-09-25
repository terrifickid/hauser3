<template>
  <div style="min-height: 35rem;" class="row d-flex align-items-center">
    <div class="col-12 order-last order-md-first col-md-4  d-md-block">
      <div v-ani="{class:'slide-in-left', delay: 600}">
        <div style="height: 2rem;" class="d-md-none"></div>
      <h4 class="mb-4">{{artwork.artist.name}}</h4>
      <div class="row"><div class="col"><p v-html="artwork.title.rendered"></p></div><div class="col d-md-none text-right"><div class="mr-4"><router-link style="color: black;" :to="{path:'artwork/'+artwork.slug}">Explore <b-icon class="ml-2" icon="arrow-right"/></router-link></div></div></div>
      <p class="d-none d-md-block" v-html="artwork.acf.hero_description"></p>
      <router-link  v-slot="{navigate}" :to="{ path: 'artwork/'+artwork.slug}">
        <a @click="navigate" class="d-none d-md-block btn btn-md btn-outline-dark btn-block">View details</a>
      </router-link>
      </div>

    </div>
    <div style="min-height: 35rem;" class="col d-flex align-items-center text-center">
      <Loader v-show="!show"></Loader>
      <div v-ani="{class:'blur-in-center', delay: 0}" v-show="show">
        <div  ref="lottie"></div>
      </div>
    </div>
    <div class="col-12" style="height: 1px;" ref="toggler" ></div>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue';
export default {
  name: 'FeaturedArtWorkItem',
  components:{
    Loader
  },
  props: {
    artwork: {},

  },
  data: function(){
    return{
      show: false
    }
  },
  methods:{
    reveal(){
      this.show = true;
    },
    hide(){
      this.show = false;
    },
    playCheck(){
      var toggle = this.$refs.toggler.getBoundingClientRect().y - window.innerHeight;
      if(toggle < 0){
          this.show = true;
          this.lot.play();
      }
    }
  },
  mounted: function(){
    var lot = window.lottie.loadAnimation({
      container: this.$refs.lottie, // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: this.artwork.acf.hero_3d_// the path to the animation json
    });

    lot.addEventListener('DOMLoaded', () => {
      console.log('DomLoaded!');
      this.playCheck();
      document.addEventListener('scroll', () => { this.playCheck(); });
    });
    this.lot = lot;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
