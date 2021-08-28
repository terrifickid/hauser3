
<template>
  <div class="home">
    <div id="hauser_home">

      <div id="bg">
      <Header></Header>

      <div class="hauser-hero mt-4">
        <div class="container">
          <div class="pad">
            <div class="col-12 col-md-10 offset-md-1">
            <h2 v-ani="{class:'fade-in-bottom', delay: 600}" class="fnormal mb-5">13 — 26 September, 2021</h2>
            <h1 v-ani="{class:'fade-in-bottom', delay: 700}">Hauser & Wirth<br>at Art Basel</h1>
            <h2 v-ani="{class:'fade-in-bottom', delay: 800}"><a href="#"><b-icon class="mr-1" icon="play-circle"/> Join us at Basel</a></h2>
          </div>
          </div>
        </div>
      </div><!-- end hauser-hero -->
    </div><!-- end bg -->


      <FeaturedArtwork></FeaturedArtwork>
      <FeaturedArtworks></FeaturedArtworks>
      <AllArtworks></AllArtworks>
      <AboutHauser></AboutHauser>

<Footer></Footer>
    </div><!-- end hauser_home -->


  </div>
</template>
<style lang="scss">

</style>
<script>
import Header from '@/components/Header.vue';
import FeaturedArtworks from '@/components/FeaturedArtworks.vue';
import FeaturedArtwork from '@/components/FeaturedArtwork.vue';
import AllArtworks from '@/components/AllArtworks.vue';
import AboutHauser from '@/components/AboutHauser.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'Home',
  components: {
    Header,
    FeaturedArtworks,
    FeaturedArtwork,
    AllArtworks,
    AboutHauser,
    Footer
  }
}
</script>
<style scoped lang="scss">
h2{font-size: 1.25rem;}
h1{font-size: 5rem;}
  #bg{
    color: white;
    background-image: url("../assets/home1.jpg");
    background-size: cover;
    min-height: 30vw;
  }
  a, a:hover{color: white;}
.pad{padding: 4rem 0 8rem 0;}
</style>
