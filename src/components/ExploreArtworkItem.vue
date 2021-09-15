<template>
  <div v-if="artwork" >
    <a class="artwork" :href="'/artwork/'+artwork.slug">


        <div class="bgCover mb-4" v-bind:style="{'background-image': 'url('+artwork.acf.hero_image.url+')'}">
          <img style="width: 100%;" src="../assets/square.png">
        </div>
     <h4 class="fbold">{{artwork.artist.name}}</h4>
     <p v-html="artwork.title.rendered"></p>
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
a, a:hover{color: black; text-decoration: none;}
.bgCover{background-position: center center; background-size: cover;}
</style>
