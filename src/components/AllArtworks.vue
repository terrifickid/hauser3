<template>
  <div class="hero-pad">
    <div class="container">
    <div class="row mb-4">
      <div class="col"><h4>All artworks</h4></div>
      <div class="d-lg-none col text-right"><img src="../assets/sliders.svg"></div>
      <div class="col-12 d-lg-none">  <div class="form-group mt-4">
          <input type="text" placeholder="Search" class="form-control">
        </div></div>
    </div><!-- end row -->
    <div class="row mt-5">
      <div v-ani="{class:'fade-in-bottom', delay: 0}"  class="d-none d-lg-block col-3 col-xl-2">
        <ul>
          <li>
            <a v-b-toggle.p-1 >
              <b-icon v-show="!p1" icon="plus"/>
              <b-icon v-show="p1" icon="dash"/>
              Artist</a>
            <b-collapse id="p-1" v-model="p1"    class="mt-2">
              <ul class="child">
                <li>Entry</li>
                <li>Entry</li>
                <li>Entry</li>
                <li>Entry</li>
                <li>Entry</li>
                <li>Entry</li>
                <li>Entry</li>
              </ul>
            </b-collapse>
          </li>
          <li>
            <a v-b-toggle.p-2 >
              <b-icon v-show="!p2" icon="plus"/>
              <b-icon v-show="p2" icon="dash"/>
              Price</a>
            <b-collapse id="p-2" v-model="p2"  class="mt-2">
              <ul class="child">
                <li>Entry</li>
                <li>Entry</li>
                <li>Entry</li>
                <li>Entry</li>
                <li>Entry</li>
                <li>Entry</li>
                <li>Entry</li>
              </ul>
            </b-collapse></li>
          <li><a v-b-toggle.p-3 >
            <b-icon v-show="!p3" icon="plus"/>
            <b-icon v-show="p3" icon="dash"/>
            Medium</a>
            <b-collapse id="p-3" v-model="p3"   class="mt-2">
              <ul class="child">
                <li>Entry</li>
                <li>Entry</li>
                <li>Entry</li>
                <li>Entry</li>
                <li>Entry</li>
                <li>Entry</li>
                <li>Entry</li>
              </ul>
            </b-collapse></li>
        </ul>

      </div><!-- end col -->

      <div v-ani="{class:'fade-in-bottom', delay: 0}" v-if="artworks.length" class="col">
        <div class="row">
          <div v-for="artwork in artworks" :key="artwork.id" class="col-6 col-md-4  col-xl-3">
            <a class="artwork" :href="'/artwork/'+artwork.id">
            <img class="img-fluid mb-4" :src="artwork.acf.hero_image.url">
            <p class="fbold">{{artwork.artist.name}}</p>
            <p>{{artwork.title.rendered}}<br>

              ${{artwork.acf.price}}</p>
              <p><a href="#">  <b-icon  icon="heart"/></a></p>
            </a>
          </div>


        </div>
      </div><!-- end col -->
      <div v-ani="{class:'fade-in-bottom', delay: 0}"  class="d-none d-lg-block col-3 col-xl-2">
        <div class="form-group mb-5">
          <input type="text" placeholder="Search" class="form-control">
        </div>
        <ul>
        <li><a v-b-toggle.p-3 >
          <b-icon v-show="!p3" icon="plus"/>
          <b-icon v-show="p3" icon="dash"/>
          Sort by</a>
          <b-collapse id="p-sort" v-model="psort"   class="mt-2">
            <ul class="child">
              <li>Price: High to low</li>
              <li>Price: Low to high</li>
              <li>Alphabetically A — Z</li>
              <li>Alphabetically Z — A</li>
            </ul>
          </b-collapse></li>
        </ul>
      </div><!-- end col -->
    </div><!-- end row -->
  </div>
  </div><!-- -->
</template>

<script>
import axios from 'axios';

export default {
  name: 'AllArtworks',
  mounted: async function() {
  console.log(process.env.VUE_APP_URI);
  try {
        const res = await axios.get(process.env.VUE_APP_URI+'wp-json/wp/v2/hauser_artworks/');
        this.artworks = res.data;
        console.log(this.artworks);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  },
  data: function() {
        return {
          artworks: {},
          p1: true,
          p2: false,
          p3: false,
          psort: true
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a, a:hover{color: black; text-decoration: none;}
ul{list-style: none; padding:0; margin:0;}
ul.child{margin-left: 1rem;}
.artwork{margin-bottom: 2rem; display: block;}
</style>
