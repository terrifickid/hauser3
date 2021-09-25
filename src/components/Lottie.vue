<template>
  <div id="heroArtwork" class="text-center d-flex align-items-center" style=" width: 100%;">
    <Loader v-if="!loaded"></Loader>
    <div v-bind:class="{showIt: show, fixed: fixed, finalPos: !fixed}" class="lot" ref="lottie"></div>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue';
export default {
  name: 'Lottie',
  components:{
  Loader
  },
  props: {
    url: String,

  },
  data: function(){
    return{
      loaded: false,
      scroll: null,
      fixed: true,
      lottie: null,
      show: false,
      frame: 1,
      duration: 0,
      oldScrollY: 0,
      scrollY: 0,
      toggle: true,
    }
  },
  methods:{
    reveal(){
      this.show = true;
    },
    hide(){
      this.show = false;
    },
    fix(){
      this.fixed = true;
      this.toggle = true;
      this.resize();
    },
    unfix(){
      if(this.toggle){
      this.fixed = false;
      this.$refs.lottie.style.left = 0;
      var tpos = (window.scrollY + (window.innerHeight / 2) - (this.$refs.lottie.offsetHeight/2));
      this.$refs.lottie.style.top = tpos+'px';
      this.toggle = false;
      }

    },
    nextFrame(){
      if(this.frame < 2){
        this.frame = 2;
      }else if(this.frame > this.duration-1){
        this.frame = this.duration-1;
        this.unfix();
      }else{
        this.lottie.goToAndStop(this.frame, true);
        this.fix();
      }
    },
    resize(){
      console.log('resize');
      var tpos = ((window.innerHeight / 2) - (this.$refs.lottie.offsetHeight/2));
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
      this.loaded = true;
      this.show = true;
      document.addEventListener('scroll', () => {
        //console.log(this.fixed);
        this.scrollY = window.scrollY;
        this.frame = Math.round(this.scrollY/15,0);
        this.nextFrame();
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.showIt{opacity: 1 !important; filter: blur(0.25);}
.fixed{position: fixed;}
.lot{
  opacity: 0;
  filter: blur(0rem);
   transition: opacity 0.1;


 }
 .finalPos{position: absolute; top: 2500px;}
</style>
