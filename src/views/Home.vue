<template>
  <div
    tabindex="0"
    @keydown.esc="videoModal = false"
    ref="home"
    class="home"
    id="top"
  >
    <Header ref="heady" :mode="0" :below="10"></Header>

    <div id="hauser_home">
      <div style="background: black; height: 100vh;" class=" relative">
        <div
          style="position: absolute; top: 0; left:0; right:0; bottom:0; right:0; z-index:2; color: white;"
          class="d-flex align-items-center justify-content-center"
        >
          <div>
            <h2
              v-if="master.heading_1"
              style="font-size: 16px; text-align: center; "
              class="fnormal mb-3"
              v-html="master.heading_1"
            ></h2>
            <h1
              v-if="master.heading_2"
              style="font-size: 56px; margin-bottom: 0.5rem; text-align: center;"
              v-html="master.heading_2"
            ></h1>
          </div>
        </div>
        <video
          style="width: 100vw; height: 100vh; margin:0; padding:0;  object-fit: cover; filter: brightness(0.75);"
          autoplay
          loop
          muted
          playsinline
        >
          <source src="seoul.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="container">
        <div
          style=" background: white; padding: 5rem 0"
          class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2"
          v-ani="{ class: 'fade-in-bottom', delay: 0 }"
        >
          <h3
            class="fnormal"
            style="font-size: 16px; line-height: 23px;  margin-bottom: 0rem;"
            v-if="master.heading_3"
            v-html="master.heading_3"
          ></h3>
          <!--
      <h2
        class="d-inline-block mr-3"
        v-for="(link, index) in master.hauser_links"
        :key="index"
        v-show="master.hauser_links.length"
      >
        <a v-if="link.type == 'Video'" @click="videoModalOpen()"
          ><b-icon class="mr-1" icon="play-circle" /> {{ link.title }}</a
        >
        <a
          v-if="link.type == 'Anchor'"
          class="btn btn-md btn-outline-light"
          @click="scrollTo(link.link)"
          >{{ link.title }}</a
        >
        <a
          v-if="link.type == 'Collection'"
          class="btn btn-md btn-outline-light"
          @click="scrollToCollection(link.link)"
          >{{ link.title }}</a
        >
      </h2>
    -->
        </div>
        <!-- end hauser-hero -->
      </div>

      <AllArtworks ref="alla"></AllArtworks>

      <div v-if="master.parallax_image">
        <div
          id="h_plax"
          style=" background-size: cover; background-position: center center;"
          :style="{
            'background-image': 'url(' + master.parallax_image.url + ')'
          }"
        ></div>
      </div>

      <AboutHauser></AboutHauser>

      <div class="container" v-if="master.interstitial_title">
        <div style="padding-bottom: 12rem;">
          <h2 style="font-size: 32px; margin-bottom: 1.5rem;">
            {{ master.interstitial_title }}
          </h2>
          <img :src="master.interstitial_image" class="img-fluid" />
          <p style="margin-top: 1.5rem;">
            {{ master.interstitial_description }}
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
    <!-- end hauser_home -->
  </div>
</template>
<style lang="scss"></style>
<script>
//import axios from 'axios';
import Header from "@/components/Header.vue";

import AllArtworks from "@/components/AllArtworksC.vue";
import AboutHauser from "@/components/AboutHauser.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Header,

    AllArtworks,
    AboutHauser,
    Footer
  },
  data: function() {
    return {
      videoModal: false,
      sliderKey: 0
    };
  },
  methods: {
    scrollToCollection(id) {
      this.$refs.alla.setCollection(id);
      this.scrollTo("#allartworks");
    },
    videoModalOpen() {
      console.log("run!");
      this.videoModal = true;
      this.$refs.home.focus();
    },
    scrollTo(t) {
      console.log(t);
      document.querySelector(t).scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  disableVideoModal() {},
  computed: {
    master() {
      return this.$store.state.master;
    },
    heroBgStyle() {
      if (this.master.hero_images.length) {
        return {
          "background-image":
            "url(" +
            this.master.hero_images[this.sliderKey].hero_image.url +
            ")"
        };
      } else {
        return {};
      }
    }
  },
  mounted: function() {
    setInterval(() => {
      this.sliderKey++;
      if (this.sliderKey > this.master.hero_images.length - 1)
        this.sliderKey = 0;
    }, 3500);

    /*
    document.addEventListener("scroll", () => {
      var toggle = this.$refs.breakPoint.getBoundingClientRect().y;

      if (toggle < 0) this.$refs.heady.belowX(true);
      if (toggle > 0) this.$refs.heady.belowX(false);
    });


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
};
</script>
<style scoped lang="scss">
.hauser-hero {
}
h2 {
  font-size: 1.25rem;
}
h1 {
  font-size: 5rem;
}
#bg {
  color: white;
  background: black;
  background-size: cover;

  position: relative;
  width: 100vw;
  border: 0;
  overflow: hidden;
}
#bg iframe {
  width: 120vw;
  height: 100vh; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: 100vh;
  min-width: 220vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  position: absolute;
  z-index: 100;

  left: 50%;
  transform: translate(-50%, 0);
}
a,
a:hover {
  color: white;
}

.pad {
  padding-top: 2rem;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .pad {
    padding-top: 4rem;
  }
}

#h_plax {
  height: 70vh;
}
// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  #h_plax {
  }
}
</style>
