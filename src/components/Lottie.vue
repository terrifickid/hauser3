<template>
  <div id="heroArtwork">
  <lottie-player
  autoplay
  loop
  mode="normal"
  v-bind:src="url"
  id="testp"
  ref="lottiePlayer"
></lottie-player>

</div>
</template>

<script>
import LottiePlayer from "@lottiefiles/lottie-player";
import { create } from '@lottiefiles/lottie-interactivity';
export default {
  name: 'Lottie',
  components:{
    LottiePlayer
  },
  props: {
    url: String
  },
  mounted: function(){

    this.$refs.lottiePlayer.addEventListener('load', function () {
    console.log('loaded!');

    create({
      mode: 'scroll',
      player: '#testp',
      actions: [
        {
          visibility: [0, 1],
          type: 'seek',
          frames: [0, 100],
        },
      ],
    });


    });




  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
