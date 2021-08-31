<template>
  <div id="Artwork" class="">
    <div v-bind:class="{ 'active': emailModal }" class="fullscreen-modal">
      <div class="container">
        <div class="row d-flex align-items-center text-left" style="position: relative; height: 100vh">
          <div style="position: absolute; right:0; top:2rem;">
            <div class="col"><a  @click="emailModal = !emailModal">Close</a></div>
          </div>
          <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3" style="position: relative;">
            <h4 class="mb-4">Contact us for inquiries</h4>
            <div class="row">
              <div class="col-12"><input type="text" placeholder="First Name" class="form-control mb-4"></div><!-- end col -->
              <div class="col-12"><input type="text" placeholder="Last Name" class="form-control mb-4"></div><!-- end col -->
              <div class="col-12"><input type="text" placeholder="Email address" class="form-control mb-4"></div><!-- end col -->
              <div class="col-12"><input type="text" placeholder="I am interested in learning about this peice." class="form-control mb-4"></div><!-- end col -->
              <div class="col-12"><a class="mt-4 mb-5 btn btn-md btn-outline-dark btn-block">Submit</a></div>
              <div class="col-12">
                <p><small>*By submitting your email address, you consent to receive our Newsletter. Your consent is revocable at any time by clicking the unsubscribe link in our Newsletter. The Newsletter is sent in accordance with our Privacy Policy and to advertise products and services of Hauser & Wirth Ltd. and its affiliated companies.</small></p>
              </div>
            </div><!-- end row -->
          </div>
        </div>
      </div>
    </div>

      <div v-if="artwork">

      <div class="bg-subtle-grey page masterHeight" v-bind:class="{scrollHeight: artwork.acf.hero_3d_}">
        <Header :mode="1"></Header>
        <div  class="container pb-5 pt-5">
            <div class="row">
                <div  class="d-none col-xl-2 d-xl-block ">
                  <div  style="bottom: 3rem;" class="fixed">
                  <div v-bind:class="{'fade-in-bottom': masterOn}"  v-if="masterOn" class="row d-flex align-items-center ">
                    <div class="col-2">
                      <a @click="clickAudio()" v-bind:class="{heartbeat: playAudio}" class="avatar bg-subtle-grey" v-bind:style="{'background-image': 'url('+artwork.acf.hero_audio_avatar.url+')'}"></a>
                    </div>
                    <div class="col"><div class="ml-2">{{artwork.artist.name}} on {{artwork.title.rendered}}</div></div>
                  </div>
                  </div>
                </div><!-- end col -->
                <div id="heroCont" class="col-10 offset-1 col-lg-6 offset-lg-0 col-xl-6 offset-xl-1">
                  <div v-if="!artwork.acf.hero_3d_"  style="padding: 0 1rem 1rem 1rem;"><img :src="artwork.acf.hero_image.url" class="img-fluid"></div>
                    <Lottie ref="lottie" v-show="artwork.acf.hero_3d_" :url="artwork.acf.hero_3d_"></Lottie>
                </div><!-- end col -->
                <div class="d-none d-lg-block col-lg-3 offset-lg-1 offset-xl-0">
                  <div class="fixed rightCol">
                    <div  v-ani="{class:'fade-in-bottom', delay: 0}"  v-if="masterOn" class="pt-4"  >

                    <h4>{{artwork.artist.name}}</h4>
                    <p>{{artwork.title.rendered}}</p>
                    <p v-html="artwork.acf.hero_description"></p>
                    <p>${{artwork.acf.price}}</p>
                    <p class="mt-4"><a href="https://wa.me/+447384525201" class="btn btn-block btn-md btn-outline-dark"><img class="btniconfix" src="../assets/whatsapp.svg"> Live Chat</a>
                    <a @click="emailModal = !emailModal" class="btn btn-block btn-md btn-outline-dark">Email Enquiry</a></p>

                    <p class="mt-5"><a @click="scrollTo('#details')">Details & Features <b-icon class="ml-2" icon="arrow-right"/></a></p>
                    <p><a @click="scrollTo('#details')">About the artwork <b-icon class="ml-2" icon="arrow-right"/></a></p>
                    <p><a @click="scrollTo('#details')" href="#">About the artist <b-icon class="ml-2" icon="arrow-right"/></a></p>

                    <div style="padding-top: 2rem;">
                      <a class="mr-3"><img src="../assets/artworkheart.svg"></a><a><img src="../assets/artworkshare.svg"></a>
                    </div>
                  </div>
                </div>
            </div><!-- end row -->
        </div>
      </div><!-- end container -->
    </div><!-- end grey -->
    <div style="border: 0px solid red; position: relative; top: -10rem;" ref="breakPoint"></div>

    <div class="container d-lg-none ">
      <div style="padding: 1rem 2rem;">
    <div class="row pt-4 ">
      <div class="col-6">
        <p class="fbold">{{artwork.artist.name}}</p>
      </div>
      <div class="col-6 text-right">
        <p>${{artwork.acf.price}}</p>
      </div>
      <div class="col-12">
        <p>{{artwork.title.rendered}}</p>
        <p v-html="artwork.acf.hero_description"></p>

        <p class="mt-4"><a href="https://wa.me/+447384525201" class="btn btn-block btn-md btn-outline-dark"><img class="btniconfix" src="../assets/whatsapp.svg"> Live Chat</a>
        <a @click="emailModal = !emailModal" class="btn btn-block btn-md btn-outline-dark">Email Enquiry</a></p>

        <p class="mt-5"><a @click="scrollTo('#details')">Details & Features <b-icon class="ml-2" icon="arrow-right"/></a></p>
        <p><a @click="scrollTo('#details')">About the artwork <b-icon class="ml-2" icon="arrow-right"/></a></p>
        <p><a @click="scrollTo('#details')" href="#">About the artist <b-icon class="ml-2" icon="arrow-right"/></a></p>

        <div style="padding-top: 2rem;">
          <a class="mr-3"><img src="../assets/artworkheart.svg"></a><a><img src="../assets/artworkshare.svg"></a>
        </div>
      </div>
    </div>
  </div>
  </div>

<div class="artwork_images">
  <div class="container">
    <div class=" artwork col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0 offset-xl-3" v-for="artwork in artwork.acf.artwork_images" :key="artwork.ID">
        <inner-image-zoom
          :hasSpacer="false"
          :src="artwork.url"
          :zoomSrc="artwork.url"
          :zoomScale="1"
          :hideHint="true"
        />
      </div>
    </div>
  </div><!-- en dcontainer -->
<div style="border: 1px solid transparent;" ref="contentPoint"></div>

<div id="details" v-if="artwork.acf.about_the_artwork_description || artwork.acf.details.length" class="container">
  <div class="row pb-5" >
    <div class="d-none d-md-block col-1" style="border-right: 1px solid black;"></div>
    <div class="col-md-8 offset-md-1" >
      <div style="padding: 3rem 0">
      <h3 v-if="artwork.acf.details.length" class="mb-4">Details & features</h3>
      <div class="row mb-2" v-for="detail in artwork.acf.details" :key="detail.title">
        <div class="col-3">{{detail.title}}:</div><div class="col">{{detail.description}}</div>
      </div><!-- end row -->
      <div v-if="artwork.acf.short_description" >
      <h3 class="mb-4 mt-5">About the artwork</h3>
        <p v-html="artwork.acf.short_description"></p>
        <p><a v-b-toggle.readmore>Read More +</a></p>
          <b-collapse id="readmore"   class="mt-2">
          <p v-html="artwork.acf.read_more_description"></p>
        </b-collapse>
      </div>
    </div>
    </div>
  </div>
</div>


<div style="height: 4rem;"></div>


    <div v-for="panel in artwork.acf.panels" :key="panel.title">

      <template v-if="panel.acf_fc_layout == 'left_image'">
        <div  class="d-md-none" style="height: 20rem; background-size: cover; background-position: center center;" v-bind:style="{'background-image': 'url('+panel.image.url+')'}"></div>
        <div class="container-fluid">
          <div class="row">
          <div  class="col-6 d-none d-md-block" style="overflow: hidden;"><div v-ani="{class:'kenburns-top', delay: 0}"  style="position: absolute; top: 0; left: 0; right:0; bottom:0; background-size: cover; background-position: center center;" v-bind:style="{'background-image': 'url('+panel.image.url+')'}"></div></div>
            <div class="col">
              <div style="padding: 8rem 4rem">
                <h3>{{panel.title}}</h3>
                {{panel.description}}
              </div>
            </div>
        </div>
        </div>
        <div class="d-none d-md-block" style="height: 8rem;"></div>
      </template>

      <template v-if="panel.acf_fc_layout == 'right_image'">
          <div class="d-md-none" style="height: 20rem;  background-size: cover; background-position: center center;" v-bind:style="{'background-image': 'url('+panel.image.url+')'}"></div>
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div style="padding: 8rem 4rem">
                <h3>{{panel.title}}</h3>
                {{panel.description}}
              </div>
            </div>
              <div  class="col-6 d-none d-md-block" style="overflow: hidden;"><div v-ani="{class:'kenburns-top', delay: 0}"  style="position: absolute; top: 0; left: 0; right:0; bottom:0; background-size: cover; background-position: center center;" v-bind:style="{'background-image': 'url('+panel.image.url+')'}"></div></div>
          </div>
        </div>
          <div class="d-none d-md-block" style="height: 8rem;"></div>
      </template>

      <template v-if="panel.acf_fc_layout == 'quote'">
        <div class="col">
          <div v-bind:style="{'background-color': panel.background_color}" style="padding: 4rem 4rem 3rem 4rem;  color: white;" >
            <h3>{{panel.description}}</h3>
            <p><b-icon class="ml-2" icon="dash"/> {{panel.author}}</p>
          </div>
        </div>
          <div  style="height: 8rem;"></div>
      </template>

      <template v-if="panel.acf_fc_layout == 'small_print'">
        <div class="container">
          <div class="col">
        <small>  {{panel.small_print}}</small>
      </div>
      </div>
        <div style="height: 8rem;"></div>
      </template>






</div>

<div v-if="artwork.acf.other_artworks.length" class="container">
  <div class="row">
    <div class="col">
      <h2 class="mb-5">Explore Other Artworks</h2>
      <div class="row">
        <div v-for="(artwork, index) in artwork.acf.other_artworks" v-ani="{class:'fade-in-bottom', delay: index*300}" :key="artwork.ID" class="col-6 col-md-4">
              <ExploreArtworkItem :id="artwork.ID"></ExploreArtworkItem>
        </div>
      </div>

    </div>
  </div>
</div>
</div>
<div style="height: 6rem"></div>
<Footer></Footer>

  </div>

</template>
<script>
import InnerImageZoom from 'vue-inner-image-zoom';
//import axios from 'axios';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Lottie from '@/components/Lottie.vue';
import ExploreArtworkItem from '@/components/ExploreArtworkItem.vue';
export default{
  components: {
    Header,
    Footer,
    Lottie,
    ExploreArtworkItem,
    'inner-image-zoom': InnerImageZoom
  },
  methods:{
    scrollTo(t){
      document.querySelector(t).scrollIntoView({
        behavior: 'smooth'
      });
    },
    clickAudio(){
      this.playAudio = !this.playAudio;
      if(this.playAudio){
        this.audio.play();
      }else{
        this.audio.pause();
      }
    },
    reCalc(){
      var toggleLottie = this.$refs.breakPoint.getBoundingClientRect().y - window.innerHeight;
        if(toggleLottie < 0)this.$refs.lottie.hide();
        if(toggleLottie > 0)this.$refs.lottie.reveal();

      var toggleContent = this.$refs.contentPoint.getBoundingClientRect().y - window.innerHeight;
      console.log(toggleContent);
        if(toggleContent < 0)this.masterOn = false;
        if(toggleContent > 0)this.masterOn= true;

    }
  },
  mounted: async function() {
    this.slug = this.$route.params.slug;
    document.addEventListener('scroll', () => { this.reCalc(); });
    document.addEventListener('fullscreenchange', () => { this.reCalc();  });
  },
  computed:{
    audio(){
        return new Audio(this.artwork.acf.hero_audio.url);
    },
    artworks() {
      return this.$store.state.artworks;
    },
    artwork (){
    var filtered = this.artworks.filter((artwork) => {
      if(artwork.slug == this.$route.params.slug) return true;
      return false;
    });
    return filtered[0];
    }
  },
  data: function() {
    return {
      slug:  false,
      lotShow: true,
      oldScrollY: 0,
      scrollY: 0,
      masterOn: true,
      playAudio: false,
      emailModal: false
    }
  }
}
</script>
<style scoped lang="scss">

a, a:hover{color: black}
.fixed{position: static; max-width:30rem;}
#positioner{border: 1px solid blue; position: fixed; left: 0;}
.artwork{margin-bottom: 6rem;}
.artwork_images{margin: 4rem 0;}
.avatar{width: 40px; height: 40px; display: inline-block; background-size: cover; border-radius: 10rem;}

.masterHeight{position: relative;  min-height: 100vh;}
.scrollHeight{min-height: 1200vh !important;}

// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {   }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {   }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .hidden{height:0px !important; overflow: hidden;}
  .fixed{position: fixed !important; max-width:inherit !important;}
  .fixed.rightCol{width: 16rem;}
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

}

</style>
