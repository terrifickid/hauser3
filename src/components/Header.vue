<template>
  <div>
    <div
      v-bind:class="{ active: menuModal }"
      class="fullscreen-modal menu-modal"
    >
      <div class="container">
        <div v-bind:class="{ wbg: belowFold }" class="row mobile-pad">
          <div class="col">
            <a href="/"
              ><img
                style="filter: brightness(0%);"
                class="img-fluid"
                src="../assets/hauser-logo.svg"
            /></a>
          </div>
          <!-- end col -->
          <div class="col text-right">
            <a @click="menuModal = !menuModal">Close</a>
          </div>
        </div>
        <div class="row">
          <div class="col" style="position: relative;">
            <ul style="position: absolute; top: 25vh;">
              <li v-for="(link, index) in master.links" :key="index">
                <router-link
                  :to="{ path: '/' + link.link_url }"
                  @click.native="navigate(link.link_url)"
                >
                  <span class="fbold">{{ link.title }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div style="position: fixed; z-index: 2000; width: 100%;">
      <div
        v-bind:class="{ invert: mode || belowFold, wbg: belowFold }"
        id="hauser_header"
      >
        <div v-ani="{ class: 'fade-in-top', delay: 0 }" class="container">
          <div class="row">
            <div class="col">
              <router-link :to="{ path: '/' }"
                ><img
                  id="hlogo"
                  class="img-fluid"
                  src="../assets/hauser-logo.svg"
              /></router-link>
            </div>
            <!-- end col -->
            <div class="d-none d-xl-block col-6 text-center">
              <ul id="desktopMenu">
                <li v-for="(link, index) in master.links" :key="index">
                  <router-link
                    :to="{ path: '/' + link.link_url }"
                    @click.native="navigate(link.link_url)"
                  >
                    <span>{{ link.title }}</span>
                  </router-link>
                </li>
              </ul>
            </div>
            <!-- end col -->
            <div class="col icons text-right no-translate">
              <button
                v-if="lang == 'fr'"
                @click="english()"
                class="no-translate"
              >
                English
              </button>
              <button
                v-if="lang == 'en'"
                @click="french()"
                class="no-translate"
              >
                Français
              </button>
              <a @click="menuModal = !menuModal"
                ><img src="../assets/menu.svg"
              /></a>
            </div>

            <!-- end col -->
          </div>
          <!-- end row -->
        </div>
        <!-- end containr -->
      </div>
      <!-- end hauser_header -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    mode: Number,
    below: Number
  },
  data: function() {
    return {
      lang: "en",
      menuModal: false,
      oldScrollY: 0,
      showHeader: true,
      belowFold: false
    };
  },
  methods: {
    english() {
      this.lang = "en";
      document.getElementById("weglot-language-en").click();
    },
    french() {
      this.lang = "fr";
      document.getElementById("weglot-language-fr").click();
    },
    headerResize(obj = window.scrollY) {
      console.log("resize!");
      if (obj > this.below) {
        this.belowFold = true;
      } else {
        this.belowFold = false;
      }
      //console.log(window.scrollY, height, this.belowFold)
    },
    headerScroll() {
      var mod = 0;
      var scrollY = window.scrollY;
      if (scrollY > this.oldScrollY) mod = 1;
      if (scrollY < this.oldScrollY) mod = -1;
      this.oldScrollY = scrollY;
      if (mod > 0) this.hide();
      if (mod < 0) this.reveal();
    },
    hide() {
      this.showHeader = false;
    },
    reveal() {
      this.showHeader = true;
    },
    navigate(t) {
      console.log("headernavigate");
      if (this.currentRouteName == "Home") {
        this.menuModal = false;
        document.querySelector(t).scrollIntoView({
          behavior: "smooth"
        });
      } else {
        console.log(t);
        this.$router.push({ path: t });
      }
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    master() {
      return this.$store.state.master;
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.headerResize();
    });

    if (document.getElementById("scrollerCheck")) {
      document.getElementById("scrollerCheck").addEventListener("wheel", () => {
        this.headerResize(document.getElementById("scrollerCheck").scrollTop);
      });
      document
        .getElementById("scrollerCheck")
        .addEventListener("touchmove", () => {
          this.headerResize(document.getElementById("scrollerCheck").scrollTop);
        });
    }

    document.addEventListener("scroll", () => {
      this.headerResize();
    });

    this.headerResize();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only #hauser_header{position: fixed; width: 100%; z-index: 3000;} s-->
<style scoped lang="scss">
#hauser_header {
  transition: 1s all ease;
  background-color: transparent;
  position: relative;
  z-index: 2000;
  padding: 3rem 0 2.5rem 0;
}
.mobile-pad {
  padding: 3rem 0 2.5rem 0;
}
.wbg {
  background: white !important;
  padding: 2rem 0 1.5rem 0 !important;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 2rem;
}
a {
  color: white;
}
.icons img {
  padding-left: 1rem;
}

.menu-modal {
  color: black;
}
.menu-modal ul {
}
.menu-modal ul a {
  color: black;
}
.menu-modal ul li {
  display: block;
  margin: 1rem 0;
  font-size: 2rem;
}
#desktopMenu a {
  color: white;
}
#desktopMenu a:hover {
  color: white;
}

.icons button {
  color: white;
  border: 0;
  background: none;
  outline: none;
}
.invert #hlogo,
.invert #desktopMenu a,
.invert .icons a,
.invert .icons button {
  filter: brightness(0%);
}
#hauser_header.fade-in-top {
  visibility: visible;
}
</style>
