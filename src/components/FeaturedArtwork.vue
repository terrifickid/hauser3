<template>
  <div  style="padding: 16rem 0">
    <h1 v-ani="{class:'fade-in-bottom', delay: 0}" class="text-center" ><span>Featured artworks</span></h1>
  </div><!-- -->
</template>

<script>
export default {
  name: 'FeaturedArtwork',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// Medium devices (tablets, 768px and up)
  .mobile{transform: scale(0.8);}
@media (min-width: 768px) {
  .mobile{transform: scale(1);}
  .pad{padding-top: 4rem;}
   }

</style>
