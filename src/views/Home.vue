<template>
  <div
    tabindex="0"
    @keydown.esc="videoModal = false"
    ref="home"
    class="home"
    id="top"
  >
    <Header ref="heady" :mode="0"></Header>

    <div id="hauser_home">
      <div
        ref="videoModalRef"
        @keydown.esc="videoModal = false"
        v-bind:class="{ active: videoModal }"
        class="fullscreen-modal menu-modal"
      >
        <div class="container">
          <div
            class="row d-flex align-items-center text-center"
            style="position: relative; height: 100vh;"
          >
            <div style="position: absolute; right:0; top:2rem;">
              <div class="col">
                <a @click="videoModal = !videoModal">Close</a>
              </div>
            </div>
            <div
              class="col-12 col-md-10 offset-md-1"
              style="position: relative;"
            >
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  ref="frm"
                  v-if="videoModal"
                  class="embed-responsive-item"
                  :src="master.link_url + '&transparent=0'"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="bg" class="bg-subtle-grey">
        <div
          v-for="(image, index) in master.hero_images"
          :key="index"
          v-show="index == sliderKey"
          v-bind:style="{
            'background-image': 'url(' + image.hero_image.url + ')'
          }"
          style="position: absolute; top: 0; left: 0; right:0; bottom: 0; background-size: cover; background-position: center center;"
        ></div>

        <iframe
          style="filter: brightness(0.85);"
          v-if="master.hero_video"
          border="0"
          frameborder="0"
          :src="master.hero_video + '&transparent=0'"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen=""
        ></iframe>

        <div
          class="d-flex align-items-center"
          style="position: relative; z-index: 200; padding: 25vh 0 25vh 0; color: black; "
        >
          <div class="container">
            <div
              style=" background: white; padding: 40px 50px 40px 50px"
              class="col-12 col-lg-8 offset-lg-2"
              v-ani="{ class: 'fade-in-bottom', delay: 0 }"
            >
              <h2
                v-if="master.heading_1"
                style="font-size: 16px; text-align: center;"
                class="fnormal mb-3"
                v-html="master.heading_1"
              ></h2>
              <h1
                v-if="master.heading_2"
                style="font-size: 56px; margin-bottom: 0.5rem; text-align: center;"
                v-html="master.heading_2"
              ></h1>
              <h3
                class="fnormal"
                style="font-size: 16px; line-height: 23px;  margin-bottom: 2rem; text-align: center"
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
        </div>
      </div>
      <!-- end bg -->
      <div
        style="border: 0px solid red; position: relative; "
        ref="breakPoint"
      ></div>

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

      <Footer></Footer>
    </div>
    <!-- end hauser_home -->
  </div>
</template>
<style lang="scss"></style>
<script>
//import axios from 'axios';
import Header from "@/components/Header.vue";

import AllArtworks from "@/components/AllArtworksB.vue";
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
    background-attachment: fixed;
  }
}
</style>
