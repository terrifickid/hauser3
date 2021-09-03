<template>
  <div class="favorites">
    <Header :mode="1"></Header>
    <div style="height: 6rem"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <div class="row mb-5">
            <div class="col">
              <h4>Favorites ({{favorites.length}})</h4>
            </div>

          </div><!-- end row -->
          <div class="row">
            <div v-if="!favorites.length" class="col-12">Nothing Found</div>
            <div v-for="artwork in favoriteArtworks" :key="artwork.id" class="col-6 col-md-4   col-xl-3">
              <a class="artwork" :href="'/artwork/'+artwork.slug">
              <img class="img-fluid mb-4" :src="artwork.acf.hero_image.url">
              <p class="fbold">{{artwork.artist.name}}</p>
              <p>{{artwork.title.rendered}}<br>
                {{artwork.acf.price | toCurrency}}</p>

              </a>

              <p><a :href="artwork.acf.pdf_download.url"><img class="ico" src="../assets/pdficon.svg"></a><a @click="toggleFavorite(artwork.id)"><img v-show="!favorites.includes(artwork.id)" src="../assets/favoriteIcon.svg"><img v-show="favorites.includes(artwork.id)" src="../assets/favoriteIconSel.svg"></a></p>
            </div>
          </div><!-- end row -->
          <div class="row " style="height: 4rem;"></div>
          <div class="row share">
            <div class="col-12 col-lg-6">
              <h5 class="p-0 m-0">Share Favorites</h5><br>
              <input ref="shareLink" type="text" class="form-control" readonly v-model="shareLink"><br>
              <a @click="copy()"><img class="ico" src="../assets/shareicon.svg"> Click here to copy share link</a>
            </div>
          </div>
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
    copy(){
        this.$refs.shareLink.select();
         var copy = document.execCommand('copy');
         console.log(copy);
    },
    toggleFavorite(id){
      this.$store.commit('toggleFavorite', id);
    }
  },
  computed:{
    shareLink(){
      var string = this.favoriteArtworks.map((artwork) => {return artwork.slug}).toString();
      return window.location.href+'/share/'+string;
    },
    favoriteArtworks(){
      return this.artworks.filter((artwork) => {
        if(this.favorites.includes(artwork.id)) return true;
        return false;
      });
    },
    artworks() {
      return this.$store.state.artworks;
    },
    favorites() {
      return this.$store.state.favorites;
    },
  }
}
</script>
<style>
.ico{position: relative; top: -1px;}
a, a:hover{color: black; text-decoration: none;}
.share a:hover{text-decoration: underline;}
</style>
