<template>
  <div style="min-height: 35rem;" class="row d-flex align-items-center">
    <div class="col-4 d-none d-md-block">
      <div v-ani="{class:'slide-in-left', delay: 600}" class="pad-right">

      <h3 class="mb-5">{{artwork.artist.name}}</h3>
      <p>{{artwork.title.rendered}}</p>
      <p>{{artwork.acf.hero_description}}</p>
        <a :href="'artwork/'+artwork.id" class="btn btn-md btn-outline-dark btn-block">View details</a>
      </div>
    </div>
    <div  v-ani="{class:'blur-in-center', delay: 0}" class="col">
      <div v-show="show">
        <div  ref="lottie"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'FeaturedArtWorkItem',
  components:{
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
  },
  mounted: function(){
    var lot = window.lottie.loadAnimation({
      container: this.$refs.lottie, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: this.artwork.acf.hero_3d_// the path to the animation json
    });

    lot.addEventListener('DOMLoaded', () => {
      this.show = true;
      this.duration = lot.getDuration(true);
    });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
