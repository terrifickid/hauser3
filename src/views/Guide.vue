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
        <p class="norm fminion">
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
        <img src="Map.png" class="img-fluid" />
      </div>
    </div>

    <div class="container map">
      <ul class="row">
        <li class="col d-flex align-items-center size2">
          <span class="bgblue rounded num1 text-white size1"
            ><span>01</span></span
          >Bahnhofstrasse
        </li>
        <li class="col d-flex align-items-center size2">
          <span class="bgblue rounded num1 text-white size1"
            ><span>03</span></span
          >Rämistrasse
        </li>
        <li class="col d-flex align-items-center size2">
          <span class="bgblue rounded num1 text-white size1"
            ><span>02</span></span
          >Limmatstrasse
        </li>
        <li class="col d-flex align-items-center size2">
          <span class="bgblue rounded num1 text-white size1"
            ><span>04</span></span
          >Zürich Main Station
        </li>
      </ul>
      <p class="text-center">
        <a href="#">open in google maps</a>
      </p>
    </div>

    <hr />
    <img class="img-fluid" src="ss1.png" />
    <div class="container">
      <div
        style="padding: 6rem 0; text-align: center"
        class="col-md-10 offset-md-1"
      >
        <h1>Around Bahnhofstrasse</h1>
        <p class="norm">
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

    <div class="row no-gutters">
      <div class="col">
        <img class="img-fluid" src="image124.png" />
        <p class="caption text-center">
          {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div class="col">
        <img style="margin-top: 5vw;" class="img-fluid" src="image125.png" />
      </div>
    </div>

    <div class="container" style="margin-top:6rem;">
      <h1 class="text-center">
        Facing Infinity.<br />
        Alberto Giacometti<br />
        & Pablo Picasso
      </h1>
      <p class="text-center">Zürich, Bahnhofstrasse 1</p>
    </div>

    <div class="container">
      <div class="row">
        <div class="col d-flex justify-content-center">
          <div class="max">
            <p>01.</p>
            <p>
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
            <p>02.</p>
            <p>
              {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Commodo orci aliquam turpis tristique et risus. Fames dignissim
              elementum.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
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
              <p>03.</p>
              <p>
                {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Commodo orci aliquam turpis tristique et risus. Fames
                dignissim elementum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row no-gutters" style="border-bottom: 1px solid #E9E9E9">
        <div class="col" style="border-right: 1px solid #E9E9E9">
          <div class="max">
            <p>
              {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Commodo orci aliquam turpis tristique et risus. Fames dignissim
              elementum.
            </p>
            <img src="1_4.png" class="img-fluid" />
          </div>
        </div>
        <div class="col-7 d-flex align-items-center">
          <div class="max">
            <img src="1_5.png" style="width: 100%; padding-top: 1rem;" />
            <p style="padding: 1rem 0 0rem 10vw;">
              {Caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Commodo orci aliquam turpis tristique et risus. Fames dignissim
              elementum.
            </p>
          </div>
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
h1 {
  font-size: 48px;
  margin-bottom: 1rem;
}
p.norm {
  font-size: 31px;
  line-height: 48px;
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

.num1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
}

.num1 span {
  position: relative;
  top: 1px;
}

.size1 {
  font-size: 18px;
}

.size2 {
  font-size: 20px;
}
</style>
