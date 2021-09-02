<template>
  <div id="heroArtwork">

    <div v-bind:class="{showIt: show}" class="lot" style="position: fixed;" ref="lottie"></div>

  </div>
</template>

<script>
export default {
  name: 'Lottie',
  components:{
    //LottiePlayer
  },
  props: {
    url: String,

  },
  data: function(){
    return{
      scroll: null,
      loaded: false,
      lottie: null,
      show: false,
      frame: 1,
      duration: 0,
      oldScrollY: 0,
      scrollY: 0,
    }
  },
  methods:{
    reveal(){
      this.show = true;
    },
    hide(){
      this.show = false;
    },
    nextFrame(frame){
      if(frame >= this.duration) frame = this.duration-1;
      if(frame <= 1) frame = 1;
      console.log(frame, window.scrollY);
      this.lottie.goToAndStop(frame, true);

    },
    resize(){
      console.log('resize');
      var tpos = (window.innerHeight/2) - (this.$refs.lottie.offsetHeight/2);
      //console.log(this.$refs.heroCont.offsetWidth);
      this.$refs.lottie.style.left = document.getElementById('heroCont').getBoundingClientRect().x+'px';

      this.$refs.lottie.style.top = tpos+'px';
      this.$refs.lottie.style.width = document.getElementById('heroCont').clientWidth+'px';

    },
    play(){
      this.lottie.play();
    }
  },
  mounted: function(){

    window.addEventListener('resize', () => {
      this.resize();
    }, true);

    var lot = window.lottie.loadAnimation({
      container: this.$refs.lottie, // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: this.url// the path to the animation json
    });

    lot.addEventListener('DOMLoaded', () => {
      console.log('loaded');
      this.resize();
      this.resize();
      this.lottie = lot;
      this.duration = lot.getDuration(true);
      this.show = true;
      document.addEventListener('scroll', () => {
        this.scrollY = window.scrollY;
        var frame = Math.round(this.scrollY/15,0);
        this.nextFrame(frame);
      });
    });





  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.showIt{opacity: 1 !important; filter: blur(0.25);}
.lot{
  opacity: 0;
  filter: blur(0rem);
   transition: opacity 0.1s,
 }
</style>
