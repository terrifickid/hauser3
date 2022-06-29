<template>
  <div class="guide">
    <Header :mode="1" :below="-1"></Header>
    <div style="background: black; height: 100vh;" class=" relative">
      <video
        style="width: 100vw; height: 100vh; margin:0; padding:0;  object-fit: cover;"
        autoplay
        loop
        muted
        playsinline
      >
        <source src="zurich.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="container text-center">
      <div class="col-md-10 offset-md-1" style="padding: 6rem 0">
        <h1 v-html="master.zurich.section_one_heading"></h1>
        <p
          v-html="master.zurich.section_one_description"
          class="norm fminion coff p-4"
        ></p>
      </div>
    </div>

    <div>
      <div class="row no-gutters">
        <div class="col">
          <div>
            <img src="3_1.jpg" style="width: 100%; margin-top: 19vw;" />
          </div>
        </div>
        <div class="col-7">
          <img src="3_2.jpg" style="width: 100%" />
          <p class="size1 fminion p-4" v-html="master.zurich.bowling_caption">
            {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="margin-top:6rem; margin-bottom: 6rem;">
      <h1 class="text-center fminion size0">
        Frank Bowling<br /><i> Penumbral Light</i>
      </h1>
      <p class="text-center size2">
        Zurich, Limmatstrasse
      </p>
    </div>

    <div class="container" style="padding: 0 10vw;">
      <div class="row no-gutters">
        <div class="col-7">
          <img src="3_3.jpg" style="width: 100%; margin-top: 7vw;" />
          <p
            class="size1 fminion"
            style="padding: 0.5rem 0"
            v-html="master.zurich.whitten_caption"
          >
            &copy;2022 Jack Whitten, Jack Whitten Estate, Hauser & Wirth, Jeff
            McLane, John Berens
          </p>
        </div>
        <div class="col"><img src="3_4.jpg" style="width: 100%" /></div>
      </div>
    </div>

    <div class="container" style="margin-top:6rem; margin-bottom: 0rem;">
      <h1 class="text-center fminion size0">
        Jack Whitten
      </h1>
      <p class="text-center size2">
        Zurich, Limmatstrasse
      </p>
    </div>

    <div class="container d-none d-lg-block">
      <div class="row">
        <div class="col d-flex justify-content-center">
          <div class="max">
            <p class="cblue size1 mb-1">01.</p>
            <p v-html="master.zurich.b_one_caption" class="size1 fminion mb-2">
              {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Commodo orci aliquam turpis tristique et risus. Fames dignissim
              elementum.
            </p>
            <img src="4_1.jpg" class="img-fluid" style="margin-top: 1rem;" />
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div style="padding: 16vw 0 0 0">
            <img src="4_2.jpg" class="img-fluid" style="margin-bottom: 1rem;" />
            <div style="padding-left: 10vw">
              <p class="cblue size1 mb-1">02.</p>
              <p
                v-html="master.zurich.b_two_caption"
                class="size1 fminion mb-2"
              >
                {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Commodo orci aliquam turpis tristique et risus. Fames
                dignissim elementum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid d-none d-lg-block">
      <div
        class="row no-gutters"
        style="border-top: 1px solid #E9E9E9; border-bottom: 1px solid #E9E9E9"
      >
        <div class="col-7" style="border-right: 1px solid #E9E9E9">
          <div class="max">
            <p class="cblue size1 mb-1">03.</p>
            <p
              v-html="master.zurich.b_three_caption"
              class="size1 fminion mb-4"
            >
              {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Commodo orci aliquam turpis tristique et risus. Fames dignissim
              elementum.
            </p>
            <img src="4_3.jpg" style="width: 100%; margin-bottom: 2rem;" />
            <!--
            <img src="up-icon.svg" class="mr-2" />
            Scroll to Top -->
          </div>
        </div>
        <div class="col d-flex align-items-center">
          <div class="max">
            <img src="4_4.jpg" style="width: 100%; padding-top: 3rem;" />

            <div style="padding: 1rem 0 0rem 0vw;">
              <p class="cblue size1 mb-1 mt-2">04.</p>
              <p v-html="master.zurich.b_four_caption" class="size1 fminion">
                {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Commodo orci aliquam turpis tristique et risus. Fames
                dignissim elementum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <carousel
      class="d-lg-none mt-5"
      :nav="false"
      :dots="false"
      :stagePadding="100"
      :margin="24"
      :responsive="{
        0: { items: 1 },
        576: { items: 2 }
      }"
    >
      <div>
        <img src="4_1.jpg" class="mb-2" />
        <p class="cblue size1 mb-1">01.</p>
        <p v-html="master.zurich.b_one_caption" class="size1 fminion mb-2">
          {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Commodo orci aliquam turpis tristique et risus. Fames dignissim
          elementum.
        </p>
      </div>
      <div>
        <img src="4_2.jpg" class="mb-2" />
        <p class="cblue size1 mb-1">02.</p>
        <p v-html="master.zurich.b_two_caption" class="size1 fminion mb-2">
          {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Commodo orci aliquam turpis tristique et risus. Fames dignissim
          elementum.
        </p>
      </div>
      <div>
        <img src="4_3.jpg" class="mb-2" />
        <p class="cblue size1 mb-1">03.</p>
        <p v-html="master.zurich.b_three_caption" class="size1 fminion mb-2">
          {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Commodo orci aliquam turpis tristique et risus. Fames dignissim
          elementum.
        </p>
      </div>
      <div>
        <img src="4_4.jpg" class="mb-2" />
        <p class="cblue size1 mb-1">04.</p>
        <p v-html="master.zurich.b_four_caption" class="size1 fminion mb-4">
          {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Commodo orci aliquam turpis tristique et risus. Fames dignissim
          elementum.
        </p>
      </div>
    </carousel>

    <div style="margin: 6rem 0;">
      <div class="container text-center">
        <div class="col-lg-10 offset-lg-1">
          <h1 v-html="master.zurich.footer_header">Art Basel</h1>
          <p
            v-html="master.zurich.footer_description"
            class="norm fminion coff"
          >
            In celebration of Hauser & Wirth’s 30th anniversary, the gallery’s
            booth will feature one of the most iconic art works of the
            20th-century, Louise Bourgeois’ ‘Spider’ (1996). The booth has been
            radically redesigned to house ‘Spider,’ which will be the
            centrepiece of the presentation. The sculpture will be shown
            alongside an outstanding selection of modern and contemporary
            masterpieces by artists including Philip Guston, Mark Bradford,
            Avery Singer, Christina Quarles, Eduardo Chillida, George Condo,
            Frank Bowling, Rashid Johnson, Gerhard Richter, Glenn Ligon, Sophie
            Taeuber-Arp and Maria Lassnig.
          </p>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import carousel from "vue-owl-carousel";

export default {
  components: {
    Header,
    Footer,
    carousel
  },
  data: function() {
    return {
      selVid: 0
    };
  },
  computed: {
    master() {
      return this.$store.state.master;
    }
  }
};
</script>
<style>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#bg {
  color: white;
  background: black;
  background-size: cover;
  height: 100vh;
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

#links a:hover {
  text-decoration: none;
}

.map ul {
  margin: 0;
  padding: 0;
}
.map li {
  display: inline-block;
}
.caption {
  font-size: 13px;
  padding: 0.5rem 0rem;
}

.max {
  padding: 6vw;
}

.bgblue {
  background: #0995ae;
}

.rounded {
  border-radius: 2000px !important;
}

.text-white {
  color: white;
}

.num1 span {
  position: relative;
  top: 1px;
}

.bbutton {
  border: 2px solid black;
  border-radius: 0.25rem;
  padding: 1rem 5rem;

  text-transform: uppercase;
  color: black;
  font-size: 14px;
}
.bbutton:hover {
  color: white;
  background: black;
  text-decoration: none;
}

.cblue {
  color: #0995ae;
}
.coff {
  color: #4e4e4e;
}

p {
  margin: 0;
}

h1 {
  font-size: 31px;
  margin-bottom: 1rem;
}
p.norm {
  font-size: 18px;
  line-height: 26px;
}

.size1 {
  font-size: 12px;
}

.size2 {
  font-size: 16px;
}

.num1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
}

.size5 {
  font-size: 20px;
}

.size0 {
  font-size: 39px;
}
@media (min-width: 576px) {
}
@media (min-width: 768px) {
}
@media (min-width: 992px) {
  h1 {
    font-size: 48px;
    margin-bottom: 1rem;
  }
  p.norm {
    font-size: 31px;
    line-height: 48px;
  }
  .size0 {
    font-size: 61px;
  }
  .size1 {
    font-size: 18px;
  }

  .size2 {
    font-size: 20px;
  }

  .size3 {
    font-size: 48px;
  }

  .size4,
  .size5 {
    font-size: 25px;
  }

  .num1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }
}
@media (min-width: 1200px) {
}
</style>
