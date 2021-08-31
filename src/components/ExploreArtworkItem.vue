<template>
  <div v-if="artwork" >
      <a class="artwork" :href="'/artwork/'+artwork.slug">
     <img class="img-fluid mb-4" :src="artwork.acf.hero_image.url">
     <h6 class="fbold">{{artwork.artist.name}}</h6>
     <p>{{artwork.title.rendered}}</p>
     </a>
    </div><!-- -->
</template>

<script>
export default {
  name: 'ExploreArtworkItem',
  props:{
    id: Number
  },
  computed:{
    artworks () {
      return this.$store.state.artworks;
    },
    artwork (){
      var filtered = this.artworks.filter((artwork) => {
        if(artwork.id == this.id) return true;
        return false;
      });
      return filtered[0];
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h5{font-size:32px;}
h6{font-size: 24px;}
a, a:hover{color: black; text-decoration: none;}
</style>
