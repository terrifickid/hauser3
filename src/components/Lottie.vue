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
      console.log('ran!');
      this.show = true;
    },
    hide(){
      this.show = false;
    },
    nextFrame(mod){
      this.frame = this.frame + mod;
      if(this.frame >= this.duration) this.frame = 1;
      if(this.frame <= 0) this.frame = this.duration;
      this.lottie.goToAndStop(this.frame, true);

    },
    resize(){
      console.log('resize');
      var tpos = (window.innerHeight/2) - (this.$refs.lottie.offsetHeight/2);
      //console.log(this.$refs.heroCont.offsetWidth);
      this.$refs.lottie.style.left = document.getElementById('heroCont').getBoundingClientRect().x+'px';
      console.log(this.$refs.lottie.style.left);
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
      loop: true,
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
        var mod = 0;
        this.scrollY = window.scrollY;
        if(this.scrollY > this.oldScrollY) mod = 1;
        if(this.scrollY < this.oldScrollY) mod = -1;
        this.oldScrollY = this.scrollY;
        this.nextFrame(mod);
      });
    });





  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.showIt{visibility: visible !important;}
.lot{visibility: hidden;}
</style>
