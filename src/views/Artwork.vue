<template>
  <div id="Artwork" class="">
    <Header :mode="1"></Header>
    <ShareModal v-if="artwork" ref="shareModal" :artwork="artwork"></ShareModal>
    <div v-bind:class="{ 'active': emailModal }" class="fullscreen-modal">
      <div class="container">
        <div class="row d-flex align-items-center text-left" style="position: relative; height: 100vh">
          <div style="position: absolute; right:0; top:2rem;">
            <div class="col"><a  @click="emailModal = !emailModal">Close</a></div>
          </div>
          <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3" style="position: relative;">
            <h4 class="mb-4">Contact us for inquiries</h4>
            <div class="row">
              <form @submit="sendEmail">
              <div class="col-12"><input type="text" required v-model="form.firstName" placeholder="First Name" class="form-control mb-4"></div><!-- end col -->
              <div class="col-12"><input type="text" required v-model="form.lastName" placeholder="Last Name" class="form-control mb-4"></div><!-- end col -->
              <div class="col-12"><input type="text" required v-model="form.emailAddress" placeholder="Email address" class="form-control mb-4"></div><!-- end col -->
              <div class="col-12"><input type="text" required v-model="form.note"  placeholder="I am interested in learning about this peice." class="form-control mb-4"></div><!-- end col -->
              <div class="col-12"><button type="submit" class="mt-4 mb-5 btn btn-md btn-outline-dark btn-block">Submit</button></div>
              <div class="col-12">
                <p><small>*By submitting your email address, you consent to receive our Newsletter. Your consent is revocable at any time by clicking the unsubscribe link in our Newsletter. The Newsletter is sent in accordance with our Privacy Policy and to advertise products and services of Hauser & Wirth Ltd. and its affiliated companies.</small></p>
              </div>
              </form>
            </div><!-- end row -->
          </div>
        </div>
      </div>
    </div>

      <div v-if="artwork">

      <div class="bg-subtle-grey page" style="position: relative;" v-bind:class="{scrollHeight: artwork.acf.hero_3d_}">
        <div ref="fixMarker" style=" position: absolute; bottom: 50vh; width: 100%"></div>
        <div  class="container">
            <div class="row" style="min-height: 100vh;">
              <div class="d-none col-xl-2 d-xl-block ">

                  <div style="bottom: 3rem; " class="fixed">

                  <div v-bind:class="{'fade-in-bottom': masterOn}"  v-if="masterOn && artwork.acf.hero_audio.url" class="row d-flex align-items-center ">
                    <div style="width: 40px; float: left; margin-left: 14px;">
                      <a @click="clickAudio()" v-bind:class="{heartbeat: playAudio}" class="avatar" v-bind:style="{'background-image': 'url('+artwork.acf.hero_audio_avatar.url+')'}">
                        <div v-bind:class="{playBoxShow: playAudio}" class="playBox"><b-icon v-show="!playAudio" class="playIcon" icon="play-fill"/></div>
                      </a>
                    </div>
                    <div style="padding-left: 3px;" class="col"><div class="ml-2" v-html="artwork.acf.hero_audio_caption"></div></div>
                  </div>
                  </div>
                </div><!-- end col -->
                <div id="heroCont" class="col-10 offset-1 col-lg-6 offset-lg-0 col-xl-6 offset-xl-1 d-flex align-items-center">
                  <div v-if="!artwork.acf.hero_3d_"  style="padding: 0 1rem 0rem 1rem; margin: auto;"><img :src="artwork.acf.hero_image.url" style="max-height: 70vh; margin: auto;" class="img-fluid"></div>
                  <Lottie ref="lottie" v-if="artwork.acf.hero_3d_" :url="artwork.acf.hero_3d_"></Lottie>
                </div><!-- enffd col -->
                <div class="d-none d-lg-block col-lg-3 offset-lg-1 offset-xl-0">
                  <div class="fixed rightCol">
                    <div  v-ani="{class:'fade-in-bottom', delay: 0}"  v-if="masterOn" class="pt-4"  >

                    <h4>{{artwork.artist.name}}</h4>
                    <p v-html="artwork.title.rendered"></p>
                    <p v-html="artwork.acf.hero_description"></p>
                    <p>
                      <template v-if="artwork.acf.price_upon_inquiry">Price upon inquiry</template>
                      <template v-if="!artwork.acf.price_upon_inquiry">{{artwork.acf.price | toCurrency}}</template>
                    </p>
                    <p class="mt-4"><a href="https://wa.me/+447384525201" class="btn btn-block btn-md btn-outline-dark"><img class="btniconfix" src="../assets/whatsapp.svg"> Live Chat</a>
                    <a @click="emailModal = !emailModal" class="btn btn-block btn-md btn-outline-dark">Email Enquiry</a></p>

                    <p class="mt-5"><a href="#details">Details & Features <b-icon class="ml-2" icon="arrow-right"/></a></p>
                    <p><a href="#details">About the artwork <b-icon class="ml-2" icon="arrow-right"/></a></p>
                    <p><a href="#panels">About the artist <b-icon class="ml-2" icon="arrow-right"/></a></p>

                    <div style="padding-top: 2rem;">
                      <a @click="toggleFavorite(artwork.id)" class="mr-3 clink bg-subtle-grey"><img v-show="!favorites.includes(artwork.id)" src="../assets/favoriteIcon.svg"><img v-show="favorites.includes(artwork.id)" src="../assets/favoriteIconSel.svg"></a><a class="mr-3 clink bg-subtle-grey" @click="toggleShare()"><img src="../assets/share.svg"></a>
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
        <p v-html="artwork.title.rendered"></p>
        <p v-html="artwork.acf.hero_description"></p>

        <p class="mt-4"><a href="https://wa.me/+447384525201" class="btn btn-block btn-md btn-outline-dark"><img class="btniconfix" src="../assets/whatsapp.svg"> Live Chat</a>
        <a @click="emailModal = !emailModal" class="btn btn-block btn-md btn-outline-dark">Email Enquiry</a></p>

        <p class="mt-5"><a @click="scrollTo('#details')">Details & Features <b-icon class="ml-2" icon="arrow-right"/></a></p>
        <p><a @click="scrollTo('#details')">About the artwork <b-icon class="ml-2" icon="arrow-right"/></a></p>
        <p><a @click="scrollTo('#details')" href="#">About the artist <b-icon class="ml-2" icon="arrow-right"/></a></p>

        <div style="padding-top: 2rem;">
          <a @click="toggleFavorite(artwork.id)" class="mr-3 clink bg-subtle-grey"><img v-show="!favorites.includes(artwork.id)" src="../assets/favoriteIcon.svg"><img v-show="favorites.includes(artwork.id)" src="../assets/favoriteIconSel.svg"></a><a class="mr-3 clink bg-subtle-grey" @click="toggleShare()"><img src="../assets/share.svg"></a>
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
        <div class="col-12 col-md-3">{{detail.title}}:</div><div class="col" v-html="detail.description"></div>
      </div><!-- end row -->
      <div v-if="artwork.acf.short_description" >
      <h3 class="mb-4 mt-5">About the artwork</h3>
        <p v-html="artwork.acf.short_description"></p>
        <p><a v-b-toggle.readmore>Read More +</a></p>
          <b-collapse id="readmore" class="mt-2">
          <p v-html="artwork.acf.read_more_description"></p>
        </b-collapse>
      </div>
    </div>
    </div>
  </div>
</div>


<div style="height: 4rem;"></div>
    <div id="panels" v-for="panel in artwork.acf.panels" :key="panel.title">
      <template v-if="panel.acf_fc_layout == 'left_image'">
        <div  class="d-md-none" style="height: 20rem; background-size: cover; background-position: center center;" v-bind:style="{'background-image': 'url('+panel.image.url+')'}"></div>
        <div class="container-fluid">
          <div class="row d-flex align-items-center sizer ">
          <div  class="col-6 d-none d-md-block sizer" style="position: relative; overflow: hidden;"><div v-ani="{class:'kenburns-top', delay: 0}"  style="position: absolute; top: 0; left: 0; right:0; bottom:0; background-size: cover; background-position: center center;" v-bind:style="{'background-image': 'url('+panel.image.url+')'}"></div></div>
            <div class="col">
              <div class="mt-5 mb-5 col-10 offset-1 ">
                <h3>{{panel.title}}</h3>
                  <div v-html="panel.description"></div>
              </div>
            </div>
        </div>
        </div>
        <div class="d-none d-md-block" style="height: 8rem;"></div>
      </template>
      <template v-if="panel.acf_fc_layout == 'right_image'">
          <div class="d-md-none" style="height: 20rem;  background-size: cover; background-position: center center;" v-bind:style="{'background-image': 'url('+panel.image.url+')'}"></div>
        <div class="container-fluid">
            <div class="row d-flex align-items-center sizer ">
            <div class="col">
              <div class="mt-5 mb-5 col-10 offset-1">

                <h3>{{panel.title}}</h3>
                <div v-html="panel.description"></div>

              </div>
            </div>
              <div  class="col-6 d-none d-md-block sizer" style="overflow: hidden;"><div v-ani="{class:'kenburns-top', delay: 0}"  style="position: absolute; top: 0; left: 0; right:0; bottom:0; background-size: cover; background-position: center center;" v-bind:style="{'background-image': 'url('+panel.image.url+')'}"></div></div>
          </div>
        </div>
          <div class="d-none d-md-block" style="height: 8rem;"></div>
      </template>
      <template v-if="panel.acf_fc_layout == 'quote'">
        <div class="col">
          <div v-bind:style="{'background-color': panel.background_color}" style="padding: 4rem 4rem 3rem 4rem;  color: white;" >
            <h3 v-html="panel.description"></h3>
            <p v-if="panel.author"><b-icon class="ml-2" icon="dash"/> {{panel.author}}</p>
          </div>
        </div>
          <div  style="height: 8rem;"></div>
      </template>
      <template v-if="panel.acf_fc_layout == 'small_print'">
        <div class="container">
          <div class="col">
        <small>{{panel.small_print}}</small>
      </div>
      </div>
        <div style="height: 8rem;"></div>
      </template>
    </div>
  <div style="height: 6rem;"></div>
<div v-if="artwork.acf.other_artworks.length" class="container">
  <div class="row">
    <div class="col">
      <h3 class="mb-5">Explore Other Artworks</h3>
      <div class="row">
        <div v-for="(artwork, index) in artwork.acf.other_artworks" v-ani="{class:'fade-in-bottom', delay: index*300}" :key="artwork.ID" class="col-6 col-md-4 mb-5 ">
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
import axios from 'axios';
import InnerImageZoom from 'vue-inner-image-zoom';
//import axios from 'axios';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Lottie from '@/components/Lottie.vue';
import ShareModal from '@/components/ShareModal.vue';
import ExploreArtworkItem from '@/components/ExploreArtworkItem.vue';
export default{
  components: {
    Header,
    Footer,
    Lottie,
    ShareModal,
    ExploreArtworkItem,
    'inner-image-zoom': InnerImageZoom
  },
  methods:{
    async sendEmail(e){
      e.preventDefault();

      console.log('ran!');
      var res = axios.post(process.env.VUE_APP_URI+'?set=1', {
        attr: 'tk!'
      });

      console.log(res.data);
    },
    scrollTo(t){
      this.manualTurnOff();
      document.querySelector(t).scrollIntoView({
        behavior: 'smooth'
      });
    },
    manualTurnOff(){
      this.$refs.lottie.hide();
      this.masterOn = false;
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
        console.log('fixMarker',this.$refs.fixMarker.getBoundingClientRect());
      var toggleLottie = this.$refs.breakPoint.getBoundingClientRect().y - window.innerHeight;

        if(toggleLottie < 0 && this.$refs.lottie)this.$refs.lottie.unfix();
        if(toggleLottie > 0 && this.$refs.lottie)this.$refs.lottie.fix();
      var toggleContent = this.$refs.contentPoint.getBoundingClientRect().y - window.innerHeight;
        if(toggleContent < 0)this.masterOn = false;
        if(toggleContent > 0)this.masterOn= true;
    },
    toggleShare(){
      this.$refs.shareModal.toggle();
    },
    toggleFavorite(id){
      this.$store.commit('toggleFavorite', id);
    },
  },
  mounted: async function() {
    this.slug = this.$route.params.slug;
    document.addEventListener('scroll', () => { this.reCalc(); });
    document.addEventListener('fullscreenchange', () => { this.reCalc();  });
  },
  computed:{
    favorites () {
      return this.$store.state.favorites;
    },
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
      emailModal: false,
      offOverride: false,
      form:{
        firstName: '',
        lastName: '',
        emailAddress:'',
        note:''
      }
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
.avatar{display: inline-block; width: 40px; height: 40px; overflow: hidden; background-size: cover; border-radius: 10rem;}

.iiz, .iiz *{
  cursor: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_b)'%3E%3Crect width='40' height='40' rx='20' fill='%23222222'/%3E%3C/g%3E%3Cpath d='M12 20L28.9706 20' stroke='white' stroke-linejoin='round'/%3E%3Cpath d='M20.4854 11.5148L20.4854 28.4853' stroke='white' stroke-linejoin='round'/%3E%3Cdefs%3E%3Cfilter id='filter0_b' x='-4' y='-4' width='48' height='48' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeGaussianBlur in='BackgroundImage' stdDeviation='2'/%3E%3CfeComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A") 32 32, pointer !important;
}



.masterHeight{position: relative;  min-height: 100vh;}
.scrollHeight{min-height: 3200px !important;}
.clink{padding: 0.5rem 0rem; text-align: center; width: 2.5rem; display: inline-block; border-radius: 100px;}

.playBox{
  opacity: 1;
  width: 60px; height: 60px;
   position: relative; left: -10px; top: -10px;
   background-color: #e0e0e0;
   border-radius: 100px;
}
.playBox.playBoxShow{background-color: transparent;}
.playBox:hover{   background: rgba(0,0,0,1);}
.playBox.playBoxShow:hover{ background: none !important;}
.avatar:hover .playBox, .playBoxShow{opacity: 1;}
.playIcon{
  position: absolute; top: 17px; left: 19px; width: 25px; height: 25px; color: white;
}
.sizer{min-height: 75vh;}
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
  .fixed.rightCol{width: 16rem; top: 6rem;}
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

}

</style>
