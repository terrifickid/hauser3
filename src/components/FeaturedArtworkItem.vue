<template>
  <div>
    <div v-show="show" ref="lottie"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'FeaturedArtWorkItem',
  components:{
  },
  props: {
    url: String,

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
      path: this.url// the path to the animation json
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
