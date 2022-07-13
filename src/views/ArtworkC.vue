<template>
  <div id="Artwork" class="">
    <Header ref="heady" :mode="0" :below="10"></Header>
    <div v-if="artwork">
      <div
        style="background: #E9E9E9; height: 100vh; margin-bottom: 3rem;"
        class=" relative"
      >
        <div
          :style="{
            backgroundImage:
              'url(' + artwork.acf.hero_image.sizes['large'] + ')'
          }"
          style="position: absolute; background-position: center center; background-size: cover; top: 0; left:0; right:0; bottom:0; right:0; z-index:2; color: white;"
          class="d-flex align-items-center justify-content-center"
        >
          <div>
            <h2
              v-if="artwork.artist.name"
              style="font-size: 16px; text-align: center; "
              class="fnormal mb-3"
              v-html="artwork.artist.name"
            ></h2>
            <h1
              v-if="artwork.title.rendered"
              style="font-size: 56px; margin-bottom: 0.5rem; text-align: center;"
              v-html="artwork.title.rendered"
            ></h1>
          </div>
        </div>
      </div>

      <div class="container" style="margin-bottom: 3rem;">
        <div class="row d-flex align-items-center">
          <div class="col-12 col-lg-4">
            <div style="padding: 2rem 0;">
              <h3 class="mb-1" v-html="artwork.title.rendered"></h3>
              <p>
                <template v-if="artwork.acf.price == 0"
                  >Price upon inquiry</template
                >
                <template v-if="artwork.acf.price > 0">{{
                  artwork.acf.price | toCurrency
                }}</template>
              </p>
              <p v-html="artwork.acf.hero_description"></p>

              <p class="mt-4">
                <a
                  v-if="master.toggle_live_chat"
                  target="_blank"
                  href="https://wa.me/442072872300?text=Hello+Hauser+%26+Wirth"
                  class="btn btn-block btn-md btn-outline-dark"
                  ><img class="btniconfix" src="../assets/whatsapp.svg" /> Live
                  Chat</a
                >
                <a
                  @click="emailModal = !emailModal"
                  class="btn btn-md btn-outline-dark"
                  >Inquire</a
                >
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <carousel
              v-if="artwork.acf.artwork_images.length > 0"
              :nav="false"
              :dots="false"
              :stagePadding="0"
              :margin="0"
              :responsive="{
                0: { items: 1 },
                576: { items: 1 }
              }"
            >
              <div
                v-for="(artwork, index) in artwork.acf.artwork_images"
                :key="index"
                style="height: 75vh; cursor: pointer; background-size: contain; background-color: #efefef; background-position: center center; background-repeat: no-repeat;"
                :style="{
                  backgroundImage: 'url(' + artwork.sizes['large'] + ')'
                }"
              ></div>
            </carousel>
          </div>
        </div>
      </div>

      <div
        v-for="(panel, index) in artwork.acf.content_panels"
        :key="index"
        :class="{ [panel.acf_fc_layout]: true }"
      >
        <template v-if="panel.acf_fc_layout == 'left_image'">
          <div
            v-if="panel.image"
            class="d-md-none"
            style="height: 20rem; background-size: cover; background-position: center center;"
            v-bind:style="{
              'background-image': 'url(' + panel.image + ')'
            }"
          ></div>
          <div class="container-fluid">
            <div class="row d-flex align-items-center sizer ">
              <div
                class="d-none d-md-block col-6 col-lg-8 sizer"
                style="position: relative; overflow: hidden;"
              >
                <div
                  v-ani="{ class: 'kenburns-top', delay: 0 }"
                  style="position: absolute; top: 0; left: 0; right:0; bottom:0; background-size: cover; background-position: center center;"
                  v-bind:style="{
                    'background-image': 'url(' + panel.image + ')'
                  }"
                ></div>
              </div>
              <div class="col">
                <div class="mt-5 mb-5 col-10 offset-1 ">
                  <div v-html="panel.description"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-md-block" style="height: 3rem;"></div>
        </template>
        <template v-if="panel.acf_fc_layout == 'right_image'">
          <div
            v-if="panel.image"
            class="d-md-none"
            style="height: 20rem;  background-size: cover; background-position: center center;"
            v-bind:style="{
              'background-image': 'url(' + panel.image + ')'
            }"
          ></div>
          <div class="container-fluid">
            <div class="row d-flex align-items-center sizer ">
              <div class="col">
                <div class="mt-5 mb-5 col-10 offset-1">
                  <div v-html="panel.description"></div>
                </div>
              </div>
              <div
                class="d-none d-md-block col-6 col-lg-8 sizer"
                style="overflow: hidden;"
              >
                <div
                  v-ani="{ class: 'kenburns-top', delay: 0 }"
                  style="position: absolute; top: 0; left: 0; right:0; bottom:0; background-size: cover; background-position: center center;"
                  v-bind:style="{
                    'background-image': 'url(' + panel.image + ')'
                  }"
                ></div>
              </div>
            </div>
          </div>
          <div class="d-none d-md-block" style="height: 3rem;"></div>
        </template>
        <template v-if="panel.acf_fc_layout == 'right_text'">
          <div
            v-if="panel.image"
            class="d-md-none"
            style="height: 20rem;  background-size: cover; background-position: center center;"
            v-bind:style="{
              'background-image': 'url(' + panel.image + ')'
            }"
          ></div>
          <div class="container-fluid">
            <div class="row d-flex align-items-center sizer ">
              <div class="col">
                <div class="mt-5 mb-5 col-10 offset-1">
                  <h4>{{ panel.title }}</h4>
                  <div class="mb-3" v-html="panel.description"></div>
                  <p style="font-weight: bold;" v-if="panel.button_link">
                    <a :href="panel.button_link"
                      >{{ panel.button_text }}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style="width: 1rem; height: 1rem;"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        /></svg
                    ></a>
                  </p>
                </div>
              </div>
              <div
                class="d-none d-md-block col-6 col-lg-8 sizer"
                style="overflow: hidden;"
              >
                <div
                  v-ani="{ class: 'kenburns-top', delay: 0 }"
                  style="position: absolute; top: 0; left: 0; right:0; bottom:0; background-size: cover; background-position: center center;"
                  v-bind:style="{
                    'background-image': 'url(' + panel.image + ')'
                  }"
                ></div>
              </div>
            </div>
          </div>
          <div class="d-none d-md-block" style="height: 3rem;"></div>
        </template>
        <template v-if="panel.acf_fc_layout == 'left_text'">
          <div
            v-if="panel.image"
            class="d-md-none"
            style="height: 20rem;  background-size: cover; background-position: center center;"
            v-bind:style="{
              'background-image': 'url(' + panel.image + ')'
            }"
          ></div>
          <div class="container-fluid">
            <div class="row d-flex align-items-center sizer ">
              <div
                class="d-none d-md-block col-6 col-lg-8 sizer"
                style="overflow: hidden;"
              >
                <div
                  v-ani="{ class: 'kenburns-top', delay: 0 }"
                  style="position: absolute; top: 0; left: 0; right:0; bottom:0; background-size: cover; background-position: center center;"
                  v-bind:style="{
                    'background-image': 'url(' + panel.image + ')'
                  }"
                ></div>
              </div>
              <div class="col">
                <div class="mt-5 mb-5 col-10 offset-1">
                  <h4>{{ panel.title }}</h4>
                  <div class="mb-3" v-html="panel.description"></div>
                  <p style="font-weight: bold;" v-if="panel.button_link">
                    <a :href="panel.button_link"
                      >{{ panel.button_text }}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style="width: 1rem; height: 1rem;"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        /></svg
                    ></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-md-block" style="height: 3rem;"></div>
        </template>
        <template v-if="panel.acf_fc_layout == 'right_video'">
          <div class="container-fluid">
            <div class="row d-flex align-items-center sizer ">
              <div class="col-12 d-md-none" style="overflow: hidden;">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    :src="panel.video"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div class="col">
                <div class="mt-5 mb-5 col-10 offset-1">
                  <h4>{{ panel.title }}</h4>
                  <div v-html="panel.description" class="mb-2"></div>
                  <p style="font-weight: bold;" v-if="panel.button_link">
                    <a :href="panel.button_link"
                      >{{ panel.button_text }}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style="width: 1rem; height: 1rem;"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        /></svg
                    ></a>
                  </p>
                </div>
              </div>
              <div
                class="d-none d-md-block col-6 col-lg-8 sizer"
                style="overflow: hidden;"
              >
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    :src="panel.video"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-md-block" style="height: 3rem;"></div>
        </template>
        <template v-if="panel.acf_fc_layout == 'left_video'">
          <div class="container-fluid">
            <div class="row d-flex align-items-center sizer ">
              <div class="col-12 d-md-none" style="overflow: hidden;">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    :src="panel.video"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div
                class="col-8 d-none d-md-block sizer"
                style="overflow: hidden;"
              >
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    :src="panel.video"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div class="col">
                <div class="mt-5 mb-5 col-10 offset-1">
                  <h4>{{ panel.title }}</h4>
                  <div v-html="panel.description" class="mb-2"></div>
                  <p style="font-weight: bold;" v-if="panel.button_link">
                    <a :href="panel.button_link"
                      >{{ panel.button_text }}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style="width: 1rem; height: 1rem;"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        /></svg
                    ></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-md-block" style="height: 3rem;"></div>
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
        <template v-if="panel.acf_fc_layout == 'small_print'"> </template>
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

    <Footer></Footer>
    <div v-bind:class="{ active: zoomModal }" class="fullscreen-modal">
      <div
        @click="zoomModal = false"
        style="height: 100vh; overflow: scroll; text-align: center; cursor: alias; font-size: 2rem;"
      >
        <b-icon style="position: absolute; top:1rem; right: 1rem;" icon="x" />
        <img :src="galleryImg" />
      </div>
    </div>
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

//import axios from 'axios';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ShareModal from "@/components/ShareModal.vue";
import ExploreArtworkItem from "@/components/ExploreArtworkItem.vue";

import carousel from "vue-owl-carousel";
export default {
  components: {
    Header,
    Footer,
    Loader,
    ShareModal,

    ExploreArtworkItem,
    carousel
  },
  methods: {
    swipeHandler() {
      console.log("swipe!");
    },
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

    clickAudio() {
      this.playAudio = !this.playAudio;
      if (this.playAudio) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
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
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      this.slug = this.$route.params.slug;
      this.id = this.$route.params.id;
    }
  },
  computed: {
    scrollWidth() {
      return 115 * (this.artwork.acf.artwork_images.length + 1);
    },
    galleryImg() {
      if (!this.artwork) return "";
      if (!this.gallerySrc) return this.artwork.acf.hero_image.sizes["large"];
      if (this.gallerySrc) return this.gallerySrc;
      return "";
    },
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
      zoomModal: false,
      gallerySrc: "",
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
