
<template>
  <div class="home">
    <div id="hauser_home">

      <div v-bind:class="{ 'active': videoModal }" class="fullscreen-modal menu-modal">
        <div class="container">
          <div class="row d-flex align-items-center text-center" style="position: relative; height: 100vh;" >
            <div style="position: absolute; right:0; top:2rem;">
              <div class="col"><a  @click="videoModal = !videoModal">Close</a></div>
            </div>
            <div class="col-12 col-md-10 offset-md-1" style="position: relative;">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe v-if="videoModal" class="embed-responsive-item" :src="master.link_url" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-ani="{class:'blur-in-center', delay: 0}"  id="bg">
      <Header></Header>


      <iframe style="position: absolute;
    top: 0;
    left: -25%;
    width: 150%;
    height: 100%;
    background: black;
    border:0;
    " border=0 frameborder=0 src="https://player.vimeo.com/video/569446269?dnt=1&amp;app_id=122963&amp;h=5cd36b5e4f&amp;controls=0&amp;hd=1&amp;fs=1&amp;rel=0&amp;modestbranding=1&amp;autoplay=1&amp;muted=1&amp;autopause=0&amp;loop=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>

      <div class="hauser-hero mt-4">
        <div class="container">
          <div class="pad">
            <div class="col-12 col-md-10 offset-md-1">

            <h2 v-ani="{class:'fade-in-bottom', delay: 1000}" class="fnormal mb-5">{{master.heading_1}}</h2>
            <h1 v-ani="{class:'fade-in-bottom', delay: 1200}">{{master.heading_2}}</h1>
            <h1 v-ani="{class:'fade-in-bottom', delay: 1400}">{{master.heading_3}}</h1>
            <h2 v-ani="{class:'fade-in-bottom', delay: 2000}">
              <a v-if="master.link_type == 'Video'" @click="videoModal = !videoModal"><b-icon class="mr-1" icon="play-circle"/> {{master.link_text}}</a>
              <a v-if="master.link_type == 'Anchor'" @click="scrollTo(master.link_url)">{{master.link_text}}</a>
            </h2>
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
//import axios from 'axios';
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
  },
  data: function(){
    return{
      videoModal: false,
    }
  },
  methods:{
    scrollTo(t){

        document.querySelector(t).scrollIntoView({
            behavior: 'smooth'
        });

      }
  },
  computed:{
    master () {
      return this.$store.state.master;
    },
  },
  mounted: async function(){
    /*
    //Load Artworks
    try {
          const res = await axios.get(process.env.VUE_APP_URI+'wp-json/wp/v2/hauser_artworks/');
          this.artworks = res.data;
          console.log(this.artworks);
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }

    //Load Master
    try {
          const res = await axios.get(process.env.VUE_APP_URI+'wp-json/hauser/v1/master');
          this.master = res.data;
          console.log(this.master);
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }
      */





  }
}
</script>
<style scoped lang="scss">
.hauser-hero{}
h2{font-size: 1.25rem;}
h1{font-size: 5rem;}
  #bg{
    color: white;
    background-image: url("../assets/home1.jpg");
    background-color: black;
    background-size: cover;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  a, a:hover{color: white;}
.pad{padding: 4rem 0 8rem 0;}
</style>
