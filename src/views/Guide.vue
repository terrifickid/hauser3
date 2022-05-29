<template>
  <div class="guide">
    <Header :mode="1" :below="-1"></Header>
    <div id="bg" class="bg-subtle-grey">
      <iframe
        style="filter: brightness(0.85);"
        v-if="master.hero_video"
        border="0"
        frameborder="0"
        :src="master.hero_video + '&transparent=0'"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen=""
      ></iframe>
    </div>

    <div class="container text-center">
      <div class="col-md-10 offset-md-1" style="padding: 6rem 0">
        <h1>Your Guide to Zürich Exhibitions</h1>
        <p class="norm fminion coff">
          'Just a short trip from Basel is the city of Zurich, the place where
          our earliest steps into the art world took place 30 years ago.
          Experience an exceptional range of exhibitions in our three Zurich
          galleries: from contemporary painters Sir Frank Bowling and Jack
          Whitten at Limmatstrasse to Alberto Giacometti and Pablo Picasso, two
          of the greatest masters of modern art, at Bahnhofstrasse.
        </p>
      </div>
    </div>

    <div class="container">
      <div style="padding: 0 0 4rem 0">
        <img src="Map.png" class="img-fluid d-none d-lg-block" />
        <img
          src="map-tablet.jpg"
          class="img-fluid d-none d-md-block d-lg-none"
        />
        <img src="map-mobile.jpg" class="img-fluid d-md-none" />
      </div>
    </div>

    <div class="container map">
      <ul class="row">
        <li
          class="col-sm-6 col-lg-4 col-xl d-flex align-items-center size2 mb-4"
        >
          <span class="bgblue rounded num1 text-white size1"
            ><span>01</span></span
          >Bahnhofstrasse
        </li>
        <li
          class="col-sm-6 col-lg-4 col-xl d-flex align-items-center size2 mb-4"
        >
          <span class="bgblue rounded num1 text-white size1"
            ><span>03</span></span
          >Rämistrasse
        </li>
        <li
          class="col-sm-6 col-lg-4 col-xl d-flex align-items-center size2 mb-4"
        >
          <span class="bgblue rounded num1 text-white size1"
            ><span>02</span></span
          >Limmatstrasse
        </li>
        <li
          class="col-sm-6 col-lg-4 col-xl d-flex align-items-center size2 mb-4"
        >
          <span class="bgblue rounded num1 text-white size1"
            ><span>04</span></span
          >Zürich Main Station
        </li>
      </ul>
      <p class="text-center">
        <a href="#" class="d-block d-md-inline-block bbutton mt-4"
          >open in google maps</a
        >
      </p>
    </div>

    <hr style="margin: 6rem;" />
    <img class="img-fluid" src="ss1.png" />
    <div class="container">
      <div
        style="padding: 6rem 0; text-align: center"
        class="col-md-10 offset-md-1"
      >
        <span
          style="margin: auto; margin-bottom: 1.25rem;"
          class="bgblue rounded num1 text-white size1"
          ><span>01</span></span
        >
        <h1>Around Bahnhofstrasse</h1>
        <p class="norm fminion coff">
          Zurich’s Bahnhofstrasse is undoubtably the most famous landmark of the
          historic city center. Centrally located close to Lake Zurich and
          adjacent to the landmark Baur au Lac hotel, visitors of this
          world-famous shopping street can find Hauser & Wirth’s recently opened
          gallery on Bahnhofstrasse 1, focusing on exhibitions by estates
          represented by Hauser & Wirth. ‘Facing Inifnity. Alberto Giacometti &
          Pablo Picasso’, curated by Dr. Dieter Buchhart’, bringing together a
          selection of masterpieces by two of the greatest artists of the 20th
          century.
        </p>
      </div>
    </div>

    <div
      style="background: url('divider.png') repeat-y; background-position: center center; height: 15vh;"
    ></div>
    <div class="row no-gutters">
      <div class="col-12 col-sm pr-4 pr-sm-0">
        <img class="img-fluid" src="image124.png" />
        <p class="d-none d-sm-block caption text-center">
          {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div class="col-12 col-sm pl-4 pl-sm-0">
        <img class="img-fluid mt-sm-4 mt-md-5" src="image125.png" />
      </div>
      <div class="col-12 d-sm-none caption mt-1 px-4">
        {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>

    <div class="container" style="margin-top:6rem;">
      <h1 class="text-center fminion size0">
        Facing Infinity.<br />
        <i
          >Alberto Giacometti<br />
          & Pablo Picasso</i
        >
      </h1>
      <p class="text-center size2">
        Zürich, Bahnhofstrasse 1
      </p>
    </div>

    <div class="container d-none d-lg-block">
      <div class="row">
        <div class="col d-flex justify-content-center">
          <div class="max">
            <p class="cblue size1 mb-1">01.</p>
            <p class="size1 fminion mb-2">
              {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Commodo orci aliquam turpis tristique et risus. Fames dignissim
              elementum.
            </p>
            <img src="1_1.png" class="img-fluid" style="margin-top: 1rem;" />
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="max">
            <img src="1_2.png" class="img-fluid" style="margin-bottom: 1rem;" />
            <p class="cblue size1 mb-1">02.</p>
            <p class="size1 fminion mb-2">
              {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Commodo orci aliquam turpis tristique et risus. Fames dignissim
              elementum.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="d-none d-lg-block"
      style="border-top: 1px solid #E9E9E9; border-bottom: 1px solid #E9E9E9;"
    >
      <div class="container">
        <div class="row">
          <div class="col-7">
            <div class="max" style="padding-right:0">
              <img src="1_3.png" style="width: 100%" />
            </div>
          </div>
          <div class="col d-flex align-items-end">
            <div class="max" style="padding-left: 0;">
              <p class="cblue size1 mb-1">03.</p>
              <p class="size1 fminion mb-2">
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
      <div class="row no-gutters" style="border-bottom: 1px solid #E9E9E9">
        <div class="col" style="border-right: 1px solid #E9E9E9">
          <div class="max">
            <p class="cblue size1 mb-1">04.</p>
            <p class="size1 fminion mb-4">
              {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Commodo orci aliquam turpis tristique et risus. Fames dignissim
              elementum.
            </p>
            <img src="1_4.png" class="img-fluid" />
          </div>
        </div>
        <div class="col-7 d-flex align-items-center">
          <div class="max">
            <img src="1_5.png" style="width: 100%; padding-top: 3rem;" />

            <div style="padding: 1rem 0 0rem 10vw;">
              <p class="cblue size1 mb-1 mt-2">05.</p>
              <p class="size1 fminion">
                {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Commodo orci aliquam turpis tristique et risus. Fames
                dignissim elementum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h1 class="text-center my-5 d-lg-none">[ swiperjs ]</h1>

    <img src="ss2.jpg" class="img-fluid" style="margin-top: 4rem;" />
    <div class="container">
      <div
        style="padding: 6rem 0; text-align: center"
        class="col-md-10 offset-md-1"
      >
        <span
          style="margin: auto; margin-bottom: 1.25rem;"
          class="bgblue rounded num1 text-white size1"
          ><span>02</span></span
        >
        <h1>Around Rämistrasse</h1>
        <p class="norm fminion coff">
          The headquarters of Hauser & Wirth Publishers opened in 2019 in the
          historic building that once housed the Swiss publisher Emil and Emmie
          Oprecht. Enjoy a range of art books from the gallery’s imprint
          alongside the exhibition ‘About, by or of Marcel Duchamp,’ set up by
          fluid editions. At the bottom of Rämistrasse is the legendary ODEON,
          the perfect cafe no matter what time of day. And don’t miss a visit to
          the internationally renowned Kunsthaus Zürich and its newly opened
          extension, designed by David Chipperfield.
        </p>
      </div>
    </div>

    <div
      style="background: url('divider.png') repeat-y; background-position: center center; height: 15vh;"
    ></div>

    <div class="container">
      <div class="col-lg-8 offset-lg-2">
        <img src="2_1.jpg" style="width: 100%" />
        <p class="size1 fminion">
          {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>

    <img src="ss3.jpg" class="img-fluid" style="margin-top: 4rem;" />
    <div class="container">
      <div
        style="padding: 6rem 0; text-align: center"
        class="col-md-10 offset-md-1"
      >
        <span
          style="margin: auto; margin-bottom: 1.25rem;"
          class="bgblue rounded num1 text-white size1"
          ><span>03</span></span
        >
        <h1>Around Limmatstrasse</h1>
        <p class="norm fminion coff">
          Formerly a brewery, the Löwenbräu building is a unique art center in
          the Zürich West district. Where beer was once brewed, there are now
          museums, gallery, publishers, cultural institutions and a restaurant.
          In 1996 Hauser & Wirth Zürich, designed by Selldorf Architects, was
          launched in this unique setting. Don’t miss our exhibitions of new
          works by British artist Sir Frank Bowling and early works from the
          1960s by Jack Whitten. While at Löwenbräu Kunst, make sure not to miss
          our neighbors including Kunsthalle Zürich and Migros Museum or
          Contemporary Art.
        </p>
      </div>
    </div>

    <div class="container">
      <img src="up-icon.svg" class="mr-2" />
      Scroll to Top
    </div>

    <div
      style="background: #F8F8F8; padding: 5rem 0; margin-top: 5rem; margin-bottom: 5rem;"
    >
      <div class="container">
        <div class="col-10 offset-1">
          <h2 class="size3">Getting Around</h2>
          <p class="size4 fminion">
            {Short intro - 140 - 280 characters} Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus ullamcorper maximus mauris, in
            accumsan velit pharetra scelerisque. Nunc tempus tincidunt nunc
            vitae pulvinar. Fusce luctus sapien leo, vitae efficitur orci
            finibus cursus. Sed bibendum tortor lobortis.
          </p>
          <ul style="font-size: 20px;">
            <li class="my-5"><img src="tram.svg" class="mr-2" /> By Tram</li>
            <li class="my-5"><img src="foot.svg" class="mr-2" /> By Foot</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
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

  .size4 {
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
