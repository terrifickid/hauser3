<template>
  <div ref="lotEntry"></div><!-- -->
</template>

<script>
export default {
  name: 'Lottie',
  props: {
    url: String
  },
  mounted: function(){
    console.log(this.url);
    console.log(this.$refs.lotEntry);
    window.lottie.loadAnimation({
      container: this.$refs.lotEntry,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: this.url
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
