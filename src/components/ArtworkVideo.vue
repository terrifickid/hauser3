<template>
  <div class=" artwork col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0 offset-xl-3">
    <a @click="show = !show" style="color: black; position: relative; display: block;" class="embed-responsive embed-responsive-16by9">

      <div v-if="!show" v-bind:style="{'background-image': 'url('+video.video_thumbnail.url+')'}" class="videoPrompt d-flex align-items-center">
        <div class="d-flex align-items-center text-center" style="background: white; border-radius: 2px; width: 4rem; height: 3rem; margin: auto;">
          <b-icon  style="margin: auto; font-size: 1.25rem;" icon="play-fill"/>
        </div>
      </div>
      <iframe allow=autoplay v-if="show" class="embed-responsive-item" :src="video.video_url+'?autoplay=1&mute=1'"></iframe>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ArtworkVideo',
  data: function(){
    return{
      show: false
    }
  },
  props:{
    video:{}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.videoPrompt{
  position: absolute; z-index: 100; top: 0; right:0; left:0; bottom:0;
  background-size: cover;
  background-position: center center;
}
</style>
