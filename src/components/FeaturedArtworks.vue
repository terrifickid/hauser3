<template>
  <div>
<div >

</div>

  <div style="padding: 4rem 0 2rem 0" id="featured" class="bg-subtle-grey">
    <div class="container">

      <div style="min-height: 35rem;" class="row d-flex align-items-center">

        <div style="min-height: 35rem;" class="col-12 col-lg-9">
          <template v-for="artwork in featuredArtworks" >
            <FeaturedArtworkItem v-if="checkShow(artwork.id)" :key="artwork.id" :artwork="artwork"></FeaturedArtworkItem>
          </template>
        </div>

        <div v-ani="{class:'fade-in-bottom', delay: 600}" class="col-12 col-lg-3 d-lg-block thumb">
          <ul >
          <li v-for="artwork in featuredArtworks" :ref="'l'+artwork.id" :key="artwork.id"><a @click="selId = artwork.id" ><img v-bind:class="{'selected': selId == artwork.id}" :src="artwork.acf.hero_image.sizes.thumbnail" width="64"></a></li>
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






// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap
.thumb{overflow: scroll; text-align: left; margin-top: 2rem;}
.thumb ul{max-height: 10rem; width: 100rem; overflow: scroll;}
.thumb li{display: inline-block; margin-right: 1rem;}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {   }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {   }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .thumb{margin-top: 0 !important;}
  .thumb ul{max-height: 29rem; width: 94px; float: right; text-align: right;}
  .thumb li{display: black;}
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

}


</style>
