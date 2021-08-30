<template>
  <div class="favorites">
    <Header :mode="1"></Header>
    <div style="height: 6rem"></div>
    <div class="container">
      <div class="row">
        <div class="col-10 offset-1">
          <div class="row mb-5">
            <div class="col">

              <h3>Favorites ({{favorites.length}})</h3>
            </div>
            <div class="col text-right">
              <a><img class="ico" src="../assets/pdficon.svg"> Download</a> <a><img class="ico ml-5" src="../assets/shareicon.svg"> Share</a>
            </div>
          </div><!-- end row -->
          <div class="row">
            <div v-if="!favorites.length" class="col-12">Nothing Found</div>
            <div v-for="artwork in favoriteArtworks" :key="artwork.id" class="col-6 col-md-4   col-xl-3">
              <a class="artwork" :href="'/artwork/'+artwork.id">
              <img class="img-fluid mb-4" :src="artwork.acf.hero_image.url">
              <p class="fbold">{{artwork.artist.name}}</p>
              <p>{{artwork.title.rendered}}<br>

                ${{artwork.acf.price}}</p>

              </a>

              <p><a @click="toggleFavorite(artwork.id)"><img v-show="!favorites.includes(artwork.id)" src="../assets/favoriteIcon.svg"><img v-show="favorites.includes(artwork.id)" src="../assets/favoriteIconSel.svg"></a></p>
            </div>
          </div><!-- end row -->
        </div>
      </div>
    </div>

    <div style="height: 6rem;"></div>
    <Footer></Footer>

  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default{
  name: 'Favorites',
  components:{
    Header,
    Footer
  },
  methods:{
    toggleFavorite(id){
      this.$store.commit('toggleFavorite', id);
    }
  },
  computed:{
    favoriteArtworks (){
      return this.artworks.filter((artwork) => {

        if(this.favorites.includes(artwork.id)) return true;
        return false;
      });
    },
    artworks () {
      return this.$store.state.artworks;
    },
    favorites () {
      return this.$store.state.favorites;
    },
  }
}
</script>
<style>
.ico{position: relative; top: -1px;}
a, a:hover{color: black; text-decoration: none;}
</style>
