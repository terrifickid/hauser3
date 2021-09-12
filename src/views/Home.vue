
<template>
  <div tabindex="0" @keydown.esc="videoModal = false" ref="home" class="home">
      <Header :mode="0"></Header>
    <div id="hauser_home">

      <div ref="videoModalRef"   @keydown.esc="videoModal = false" v-bind:class="{ 'active': videoModal }" class="fullscreen-modal menu-modal">
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

      <div v-ani="{class:'blur-in-center', delay: 0}" v-bind:style="[master.hero_image ? {'background-image': 'url('+master.hero_image.url+')'} : {}]" id="bg">
      <iframe style="filter: brightness(0.85);" v-if="master.hero_video" border=0 frameborder=0 :src="master.hero_video" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>
      <div style=" z-index: 200; position: relative;">
      <div class="hauser-hero">
        <div class="container">
          <div class="row d-flex align-items-center" style=" min-height: 100vh;">
            <div class="col-12 col-md-10 offset-md-1">
            <h2 v-ani="{class:'fade-in-bottom', delay: 1000}" class="fnormal mb-5">{{master.heading_1}}</h2>
            <h1 v-ani="{class:'fade-in-bottom', delay: 1200}">{{master.heading_2}}</h1>
            <h1 v-ani="{class:'fade-in-bottom', delay: 1400}">{{master.heading_3}}</h1>
            <h2 v-ani="{class:'fade-in-bottom', delay: 2000}">
              <a v-if="master.link_type == 'Video'" @click="videoModalOpen()"><b-icon class="mr-1" icon="play-circle"/> {{master.link_text}}</a>
              <a v-if="master.link_type == 'Anchor'" class="btn btn-md btn-outline-light" @click="scrollTo(master.link_url)">{{master.link_text}}</a>
            </h2>
          </div>
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
    videoModalOpen(){
      console.log('run!');
      this.videoModal = true;
      this.$refs.home.focus();

    },
    scrollTo(t){

        document.querySelector(t).scrollIntoView({
            behavior: 'smooth'
        });

      }
  },
  disableVideoModal(){
      console.log(this.videoModal);
  },
  computed:{
    master () {
      return this.$store.state.master;
    },
  },
  mounted: function(){


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

    background-color: white;
    background-size: cover;
    min-height: 100vh;
    position: relative;
    width: 100vw;
    border: 0;
    overflow: hidden;
  }
  #bg iframe{
    width: 100vw;
  height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: 100vh;
  min-width: 220vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }
  a, a:hover{color: white;}



.pad{padding-top: 2rem;}
.hauser-hero{transform: scale(0.8);}
// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .hauser-hero{transform: scale(1);}
  .pad{padding-top: 4rem;}
   }


</style>
