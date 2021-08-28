<template>
  <div id="heroArtwork">
    <div ref="lottie"></div>
<div style="position: fixed: top: 0">D{{scroll}}</div>
</div>
</template>

<script>
//import LottiePlayer from "@lottiefiles/lottie-player";
//import { create } from '@lottiefiles/lottie-interactivity';
export default {
  name: 'Lottie',
  components:{
    //LottiePlayer
  },
  props: {
    url: String
  },
  data: function(){
    return{
      scroll: null,
      loaded: false
    }
  },
  methods:{
    handleScroll(){
        console.log('scroll');
    },
    play(lot){
      lot.play();
    }
  },
  mounted: function(){

    var lot = window.lottie.loadAnimation({
      container: this.$refs.lottie, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: this.url// the path to the animation json
    });

  lot.addEventListener('data_ready', function () {
    console.log('loaded');
    var frame = 1;
    var duration = lot.getDuration(true);
    var oldScrollY = window.scrollY;
    var mod = 0;
    document.addEventListener('scroll', function() {
      if(window.scrollY > oldScrollY) mod = 1;
      if(window.scrollY < oldScrollY) mod = -1;
      oldScrollY = window.scrollY;
      console.log( duration );
      lot.goToAndStop(frame, true);
      frame = frame + mod;
      if(frame == duration) frame = 0;
      if(frame == 0) frame = duration;
    });
  });



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
