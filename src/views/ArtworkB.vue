<template>
  <div id="Artwork" class="">
    <Header ref="heady" :mode="1"></Header>

    <div v-if="artwork">
      <div
        id="subtle"
        class="bg-subtle-grey page"
        style="position: relative;"
        v-bind:class="{ scrollHeight: artwork.acf.hero_3d_ }"
      >
        <div class="container">
          <div class="row" style="min-height: 100vh;">
            <div class="d-none d-lg-flex col-lg-2 align-items-center">
              <div>
                <div
                  class="py-2 px-4"
                  v-for="artwork in artwork.acf.artwork_images"
                  :key="artwork.ID"
                >
                  <img :src="artwork.sizes['large']" class="img-fluid" />
                </div>
              </div>
            </div>
            <div
              class="col-10 offset-1 col-lg-7 offset-lg-0  d-flex align-items-center"
            >
              <div
                v-if="artwork.acf.hero_image"
                style="padding: 0 1rem 0rem 1rem; margin: auto;"
              >
                <inner-image-zoom
                  :hasSpacer="false"
                  :src="artwork.acf.hero_image.sizes['large']"
                  :zoomSrc="artwork.acf.hero_image.sizes['large']"
                  style="max-height: 70vh; margin: auto;"
                  :zoomScale="1"
                  :hideHint="true"
                />
              </div>
            </div>
            <!-- enffd col -->
            <div class="d-none d-lg-block col-lg-3">
              <div
                style="height: 100vh;"
                v-ani="{ class: 'fade-in-bottom', delay: 300 }"
                v-if="masterOn"
                class="d-flex align-items-center"
              >
                <div>
                  <h4>{{ artwork.artist.name }}</h4>
                  <p v-html="artwork.title.rendered"></p>
                  <p v-html="artwork.acf.hero_description"></p>
                  <p>
                    <template v-if="artwork.acf.price_upon_inquiry"
                      >Price upon inquiry</template
                    >
                    <template v-if="!artwork.acf.price_upon_inquiry">{{
                      artwork.acf.price | toCurrency
                    }}</template>
                  </p>
                  <p class="mt-4">
                    <a
                      v-if="master.toggle_live_chat"
                      target="_blank"
                      href="https://wa.me/442072872300?text=Hello+Hauser+%26+Wirth"
                      class="btn btn-block btn-md btn-outline-dark"
                      ><img class="btniconfix" src="../assets/whatsapp.svg" />
                      Live Chat</a
                    >
                    <a
                      @click="emailModal = !emailModal"
                      class="btn btn-block btn-md btn-outline-dark"
                      >Email Inquiry</a
                    >
                  </p>
                  <div style="padding-top: 0rem;">
                    <a
                      @click="toggleFavorite(artwork.id)"
                      class="mr-1 clink bg-subtle-grey"
                      ><img
                        v-show="!favorites.includes(artwork.id)"
                        src="../assets/favoriteIcon.svg"/><img
                        v-show="favorites.includes(artwork.id)"
                        src="../assets/favoriteIconSel.svg"/></a
                    ><a class="mr-3 clink bg-subtle-grey" @click="toggleShare()"
                      ><img src="../assets/share.svg"
                    /></a>
                  </div>
                  <p class="mt-5 mb-3">
                    <a href="#details"
                      >Details & features
                      <b-icon class="ml-2" icon="arrow-right"
                    /></a>
                  </p>

                  <p class="mb-3">
                    <a href="#abouttheartist"
                      >About the artist <b-icon class="ml-2" icon="arrow-right"
                    /></a>
                  </p>
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
        <!-- end container -->
      </div>
      <!-- end grey -->

      <!-- Mobile Text -->
      <div
        style="position: fixed; padding: 1rem 0 0 0; background: white; bottom:0rem; z-index: 1000; width: 100%;"
        class="d-lg-none "
      >
        <div class="container">
          <div class="row ">
            <div class="col-6">
              <p class="fbold mb-1">{{ artwork.artist.name }}</p>
            </div>
            <div class="col-6 text-right">
              <p class="mb-1">
                <template v-if="artwork.acf.price_upon_inquiry"
                  >Price upon inquiry</template
                >
                <template v-if="!artwork.acf.price_upon_inquiry">{{
                  artwork.acf.price | toCurrency
                }}</template>
              </p>
            </div>
            <div class="col-12">
              <p class="mt-0 mb-0" v-html="artwork.title.rendered"></p>
              <p class="mt-0" v-html="artwork.acf.hero_description"></p>
            </div>
          </div>
        </div>
        <div class="row" style="border-top: 1px solid black; padding: 1rem 0">
          <div
            v-if="master.toggle_live_chat"
            class="col text-center"
            style="border-right: 1px solid black;"
          >
            <a
              href="https://wa.me/442072872300?text=Hello+Hauser+%26+Wirth"
              class=""
              ><img class="btniconfix" src="../assets/whatsapp.svg" /> Live
              Chat</a
            >
          </div>
          <div class="col text-center">
            <a @click="emailModal = !emailModal" class="">Email Inquiry</a>
          </div>
        </div>
      </div>

      <div
        id="details"
        v-if="
          artwork.acf.about_the_artwork_description ||
            artwork.acf.details.length
        "
        class="container"
      >
        <div class="row py-5">
          <!--<div class="d-none d-md-block col-1" style="border-right: 1px solid black;"></div>-->
          <div
            class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0 offset-xl-3"
          >
            <div style="padding: 3rem 0">
              <h3 v-if="artwork.acf.details.length" class="mb-4">
                Details & features
              </h3>
              <div
                class="row mb-2"
                v-for="detail in artwork.acf.details"
                :key="detail.title"
              >
                <div class="col-12 col-md-3">{{ detail.title }}:</div>
                <div class="col" v-html="detail.description"></div>
              </div>
              <!-- end row -->
              <div v-if="artwork.acf.short_description && 0">
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

      <div style="border: 1px solid transparent;" ref="contentPoint"></div>
      <div style="height: 4rem;"></div>
      <div
        id="panels"
        v-for="(panel, index) in artwork.acf.panels"
        :key="index"
      >
        <a
          v-if="index + 1 == artwork.acf.panels.length"
          name="abouttheartist"
        ></a>
        <template v-if="panel.acf_fc_layout == 'left_image'">
          <div
            class="d-md-none"
            style="height: 20rem; background-size: cover; background-position: center center;"
            v-bind:style="{
              'background-image': 'url(' + panel.image.sizes['large'] + ')'
            }"
          ></div>
          <div class="container-fluid">
            <div class="row d-flex align-items-center sizer ">
              <div
                class="col-6 d-none d-md-block sizer"
                style="position: relative; overflow: hidden;"
              >
                <div
                  v-ani="{ class: 'kenburns-top', delay: 0 }"
                  style="position: absolute; top: 0; left: 0; right:0; bottom:0; background-size: cover; background-position: center center;"
                  v-bind:style="{
                    'background-image': 'url(' + panel.image.url + ')'
                  }"
                ></div>
              </div>
              <div class="col">
                <div class="mt-5 mb-5 col-10 offset-1 ">
                  <h3>{{ panel.title }}</h3>
                  <div v-html="panel.description"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-md-block" style="height: 8rem;"></div>
        </template>
        <template v-if="panel.acf_fc_layout == 'right_image'">
          <div
            class="d-md-none"
            style="height: 20rem;  background-size: cover; background-position: center center;"
            v-bind:style="{
              'background-image': 'url(' + panel.image.sizes['large'] + ')'
            }"
          ></div>
          <div class="container-fluid">
            <div class="row d-flex align-items-center sizer ">
              <div class="col">
                <div class="mt-5 mb-5 col-10 offset-1">
                  <h3>{{ panel.title }}</h3>
                  <div v-html="panel.description"></div>
                </div>
              </div>
              <div
                class="col-6 d-none d-md-block sizer"
                style="overflow: hidden;"
              >
                <div
                  v-ani="{ class: 'kenburns-top', delay: 0 }"
                  style="position: absolute; top: 0; left: 0; right:0; bottom:0; background-size: cover; background-position: center center;"
                  v-bind:style="{
                    'background-image': 'url(' + panel.image.url + ')'
                  }"
                ></div>
              </div>
            </div>
          </div>
          <div class="d-none d-md-block" style="height: 8rem;"></div>
        </template>
        <template v-if="panel.acf_fc_layout == 'quote'">
          <div class="col">
            <div
              v-bind:style="{ 'background-color': panel.background_color }"
              style="padding: 4rem 4rem 3rem 4rem;  color: white;"
            >
              <h3 v-html="panel.description"></h3>
              <p v-if="panel.author">
                <b-icon class="ml-2" icon="dash" /> {{ panel.author }}
              </p>
            </div>
          </div>
          <div style="height: 8rem;"></div>
        </template>
        <template v-if="panel.acf_fc_layout == 'small_print'">
          <div class="container">
            <div class="col">
              <small>{{ panel.small_print }}</small>
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
              <div
                v-for="(artwork, index) in artwork.acf.other_artworks"
                v-ani="{ class: 'fade-in-bottom', delay: index * 300 }"
                :key="artwork.ID"
                class="col-6 col-md-4 mb-5 "
              >
                <ExploreArtworkItem :id="artwork.ID"></ExploreArtworkItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 6rem"></div>
    <Footer></Footer>
    <ShareModal v-if="artwork" ref="shareModal" :artwork="artwork"></ShareModal>
    <div v-bind:class="{ active: emailModal }" class="fullscreen-modal">
      <div class="container">
        <div
          class="row d-flex align-items-center text-left"
          style="position: relative; height: 100vh"
        >
          <div style="position: absolute; right:0; top:2rem;">
            <div class="col">
              <a @click="emailModal = !emailModal">Close</a>
            </div>
          </div>
          <div v-if="sending" class="col-12"><Loader></Loader></div>
          <div
            class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center"
            v-if="sent"
          >
            <h2 class="mb-4">Thanks for contacting us!</h2>
            <p class="mb-4">We will get in touch with you shortly.</p>
            <button
              @click="emailModal = false"
              class="mt-4 mb-5 btn btn-md btn-outline-dark"
            >
              Done
            </button>
          </div>
          <div
            v-if="!sending && !sent"
            class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3"
            style="position: relative;"
          >
            <h4 class="mb-4">Contact us for inquiries</h4>
            <div class="row">
              <form @submit="sendEmail">
                <div class="col-12">
                  <input
                    type="text"
                    required
                    v-model="form.firstName"
                    placeholder="First Name"
                    class="form-control mb-4"
                  />
                </div>
                <!-- end col -->
                <div class="col-12">
                  <input
                    type="text"
                    required
                    v-model="form.lastName"
                    placeholder="Last Name"
                    class="form-control mb-4"
                  />
                </div>
                <!-- end col -->
                <div class="col-12">
                  <input
                    type="text"
                    required
                    v-model="form.emailAddress"
                    placeholder="Email address"
                    class="form-control mb-4"
                  />
                </div>
                <!-- end col -->
                <div class="col-12">
                  <input
                    type="text"
                    required
                    v-model="form.note"
                    placeholder="I am interested in learning about this piece."
                    class="form-control mb-4"
                  />
                </div>
                <!-- end col -->
                <div class="col-12">
                  <button
                    type="submit"
                    class="mt-4 mb-5 btn btn-md btn-outline-dark btn-block"
                  >
                    Submit
                  </button>
                </div>
                <div class="col-12">
                  <p>
                    <small
                      >*By submitting your email address, you consent to receive
                      our Newsletter. Your consent is revocable at any time by
                      clicking the unsubscribe link in our Newsletter. The
                      Newsletter is sent in accordance with our Privacy Policy
                      and to advertise products and services of Hauser & Wirth
                      Ltd. and its affiliated companies.</small
                    >
                  </p>
                </div>
              </form>
            </div>
            <!-- end row -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Loader from "@/components/Loader.vue";
import InnerImageZoom from "vue-inner-image-zoom";
//import axios from 'axios';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ShareModal from "@/components/ShareModal.vue";
import ExploreArtworkItem from "@/components/ExploreArtworkItem.vue";
//import ArtworkVideo from "@/components/ArtworkVideo.vue";
export default {
  components: {
    Header,
    Footer,
    Loader,
    ShareModal,
    //  ArtworkVideo,
    ExploreArtworkItem,
    "inner-image-zoom": InnerImageZoom
  },
  methods: {
    async sendEmail(e) {
      e.preventDefault();
      console.log("ran!");
      this.sending = true;
      var q = new URLSearchParams({
        set: 1,
        title: this.artwork.title.rendered,
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        emailAddress: this.form.emailAddress,
        note: this.form.note,
        url: window.location.href
      }).toString();
      var res = await axios.get(window.location.href + "?" + q);
      console.log(res.data);
      if (res.data) {
        this.sent = true;
        this.sending = false;
      }
    },
    scrollTo(t) {
      this.manualTurnOff();
      document.querySelector(t).scrollIntoView({
        behavior: "smooth"
      });
    },
    manualTurnOff() {
      this.$refs.lottie.hide();
      this.masterOn = false;
    },
    clickAudio() {
      this.playAudio = !this.playAudio;
      if (this.playAudio) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    },
    reCalc() {
      //console.log('fixMarker',this.$refs.fixMarker.getBoundingClientRect());
      var toggleLottie =
        this.$refs.breakPoint.getBoundingClientRect().y - window.innerHeight;
      //if(toggleLottie < 0 && this.$refs.lottie)this.$refs.lottie.unfix();
      //if(toggleLottie > 0 && this.$refs.lottie)this.$refs.lottie.fix();
      if (toggleLottie < 0) this.$refs.heady.belowX(true);
      if (toggleLottie > 0) this.$refs.heady.belowX(false);
      console.log(toggleLottie);
      var toggleContent =
        this.$refs.contentPoint.getBoundingClientRect().y - window.innerHeight;
      if (toggleContent < 0) this.masterOn = false;
      if (toggleContent > 0) this.masterOn = true;
    },
    toggleShare() {
      this.$refs.shareModal.toggle();
    },
    toggleFavorite(id) {
      this.$store.commit("toggleFavorite", id);
    }
  },
  mounted: async function() {
    this.slug = this.$route.params.slug;
    this.id = this.$route.params.id;
    if (this.id) {
      var res = await axios.get(
        process.env.VUE_APP_URI +
          "wp-json/wp/v2/hauser_artworks?include[]=" +
          this.id +
          "&post_status=any"
      );
      this.preview = res.data[0];
    }
    console.log(this.slug);
    console.log(this.id, this.preview);
    document.addEventListener("scroll", () => {
      this.reCalc();
    });
    document.addEventListener("fullscreenchange", () => {
      this.reCalc();
    });
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      this.slug = this.$route.params.slug;
      this.id = this.$route.params.id;
    }
  },
  computed: {
    master() {
      return this.$store.state.master;
    },
    favorites() {
      return this.$store.state.favorites;
    },
    audio() {
      return new Audio(this.artwork.acf.hero_audio.url);
    },
    artworks() {
      return this.$store.state.artworks;
    },
    artwork() {
      if (this.preview) return this.preview;
      if (!this.artworks) return {};
      var filtered = this.artworks.filter(artwork => {
        if (artwork.id == this.id) return true;
        if (artwork.slug == this.slug) return true;
        return false;
      });
      return filtered[0];
    }
  },
  data: function() {
    return {
      slug: false,
      lotShow: true,
      oldScrollY: 0,
      scrollY: 0,
      sending: false,
      sent: false,
      masterOn: true,
      playAudio: false,
      emailModal: false,
      offOverride: false,
      preview: false,
      form: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        note: ""
      }
    };
  }
};
</script>
<style scoped lang="scss">
a,
a:hover {
  color: black;
}
.fixed {
  position: static;
  max-width: 30rem;
}
#positioner {
  border: 1px solid blue;
  position: fixed;
  left: 0;
}
.artwork {
  margin-bottom: 6rem;
}
.artwork_images {
  margin: 4rem 0;
}
.avatar {
  display: inline-block;
  width: 40px;
  height: 40px;
  overflow: hidden;
  background-size: cover;
  border-radius: 10rem;
}

.iiz,
.iiz * {
  cursor: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_b)'%3E%3Crect width='40' height='40' rx='20' fill='%23222222'/%3E%3C/g%3E%3Cpath d='M12 20L28.9706 20' stroke='white' stroke-linejoin='round'/%3E%3Cpath d='M20.4854 11.5148L20.4854 28.4853' stroke='white' stroke-linejoin='round'/%3E%3Cdefs%3E%3Cfilter id='filter0_b' x='-4' y='-4' width='48' height='48' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeGaussianBlur in='BackgroundImage' stdDeviation='2'/%3E%3CfeComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A")
      32 32,
    pointer !important;
}

.masterHeight {
  position: relative;
  min-height: 100vh;
}
.scrollHeight {
  min-height: 2900px !important;
}
.clink {
  padding: 0.5rem 0rem;
  text-align: center;
  width: 2.5rem;
  display: inline-block;
  border-radius: 100px;
}

.playBox {
  opacity: 1;
  width: 60px;
  height: 60px;
  position: relative;
  left: -10px;
  top: -10px;
  background-color: #e0e0e0;
  border-radius: 100px;
}
.playBox.playBoxShow {
  background-color: transparent;
}
.playBox:hover {
  background: rgba(0, 0, 0, 1);
}
.playBox.playBoxShow:hover {
  background: none !important;
}
.avatar:hover .playBox,
.playBoxShow {
  opacity: 1;
}
.playIcon {
  position: absolute;
  top: 17px;
  left: 19px;
  width: 25px;
  height: 25px;
  color: white;
}
.rightCol {
}
.sizer {
  min-height: 75vh;
}
// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .hidden {
    height: 0px !important;
    overflow: hidden;
  }
  .fixed {
    position: fixed !important;
    max-width: inherit !important;
  }
  .fixed.rightCol {
    width: 16rem;
    top: 0;
    height: 100vh;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
}
</style>
