<template>
  <div class="share">
    <Header :mode="1"></Header>
    <div style="height: 6rem"></div>
    <div class="container">
      <div class="row">
        <div class="col-10 offset-1">
          <div class="row mb-5">
            <div class="col">
              <h3>Shared Favorites ({{favorites.length}})</h3>
            </div>

          </div><!-- end row -->
          <div class="row">
            <div v-if="!favorites.length" class="col-12">Nothing Found</div>
            <div v-for="artwork in shareList" :key="artwork.id" class="col-6 col-md-4   col-xl-3">
              <a class="artwork" :href="'/artwork/'+artwork.slug">
              <img class="img-fluid mb-4" :src="artwork.acf.hero_image.url">
              <p class="fbold">{{artwork.artist.name}}</p>
              <p>{{artwork.title.rendered}}<br>

                {{artwork.acf.price | toCurrency}}</p>

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
  name: 'Share',
  components:{
    Header,
    Footer
  },
  methods:{
    toggleFavorite(id){
      this.$store.commit('toggleFavorite', id);
    }
  },
  data: function(){
    return {
      list: []
    }
  },
  computed:{
    shareList (){
      return this.artworks.filter((artwork) => {
        if(this.list.includes(artwork.slug)) return true;
        return false;
      });
    },
    artworks () {
      return this.$store.state.artworks;
    },
    favorites () {
      return this.$store.state.favorites;
    },
  },
  mounted(){
    this.list = String(this.$route.params.list).split(',');

  }
}
</script>
<style>
.ico{position: relative; top: -1px;}
a, a:hover{color: black; text-decoration: none;}
</style>
