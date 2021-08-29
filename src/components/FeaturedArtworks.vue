<template>
  <div>
<div >

</div>

  <div style="padding: 4rem 0 2rem 0" id="featured" class="bg-subtle-grey">
    <div class="container">

      <div class="row d-flex align-items-center">
        <div style="height: 35rem;" class="col">
          <template v-for="artwork in featuredArtworks" >
            <FeaturedArtworkItem v-if="checkShow(artwork.id)" :key="artwork.id" :artwork="artwork"></FeaturedArtworkItem>
          </template>
        </div>
        <div v-ani="{class:'fade-in-bottom', delay: 600}" class="col-3 d-none d-lg-block text-right thumb">
          <ul>
          <li  v-for="artwork in featuredArtworks" :ref="'l'+artwork.id" :key="artwork.id"><a @click="selId = artwork.id" ><img v-bind:class="{'selected': selId == artwork.id}" :src="artwork.acf.hero_image.sizes.thumbnail" width="64"></a></li>
          </ul>
        </div>

      </div>

    </div>

  </div>

</div>
</template>

<script>
import FeaturedArtworkItem from '@/components/FeaturedArtworkItem.vue';
export default {
  name: 'FeaturedArtworks',
  components: {
    FeaturedArtworkItem
  },
  props:{
  
  },
  data: function(){
    return{
      selId: 0
    }
  },
  computed:{
    artworks () {
      return this.$store.state.artworks;
    },
    featuredArtworks(){
      if(this.artworks.length){
        return this.artworks.filter(function(artwork){
          if(artwork.acf.featured)   return true;
        });
      }
      return [];
    }
  },
  methods:{
    checkShow(id){
      if(!this.selId) this.selId = id;
      if(this.selId == id) return true;
      return false;

    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.selected{border: 1px solid black; }
a, a:hover{color: black;}
.thumb img{margin-bottom: 1rem;}
.mobilethumb img{margin-left: 1rem;}
ul{list-style: none; margin:0; padding:0;}
li{margin-bottom: 1rem;}
</style>
