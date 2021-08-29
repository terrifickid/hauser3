<template>
  <div id="allartworks" class="hero-pad">

    <div class="container">
    <div v-ani="{class:'fade-in-bottom', delay: 0}"   class="row mb-4 d-flex align-items-top">
      <div class="col-6 col-lg-9 col-xl-10"><h4>All artworks</h4></div>
      <div class="col-6 d-lg-none text-right"><img class="d-lg-none" src="../assets/sliders.svg"></div>
      <div class="col-12 col-lg-3 col-xl-2"><input type="text" placeholder="Search" class="form-control"></div>


    </div><!-- end row -->

  
    <div class="row mt-5">
      <div v-ani="{class:'fade-in-bottom', delay: 100}"  class="d-none d-lg-block col-3 col-xl-2">
        <ul>
          <li>
            <a v-b-toggle.p-1 >
              <b-icon v-show="!p1" icon="plus"/>
              <b-icon v-show="p1" icon="dash"/>
              Artist</a>
            <b-collapse id="p-1" v-model="p1"    class="mt-2">
              <ul class="child">
                <li><a  v-bind:class="{selected: !artistFilter.length}" @click="artistFilter = []">All</a></li>
                <li v-for="artist in master.artists" :key="artist.term_id"><a v-bind:class="{selected: artistFilter.includes(artist.term_id)}" @click="toggleArrayItem(artistFilter, artist.term_id)">{{artist.name}}</a></li>

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
                <li><a  v-bind:class="{selected: !priceFilter.length}" @click="priceFilter = []">All</a></li>
                <li><a v-bind:class="{selected: Math.max(...this.priceFilter) == 15000}" @click="addPriceRange([0, 15000])">Under $15,000</a></li>
                <li><a v-bind:class="{selected:  Math.max(...this.priceFilter) == 50000}" @click="addPriceRange([15000, 50000])">$15,000-50,000</a></li>
                <li><a v-bind:class="{selected:  Math.max(...this.priceFilter) == 100000}" @click="addPriceRange([50001, 100000])">$50,001-100,000</a></li>
                <li><a v-bind:class="{selected:  Math.max(...this.priceFilter) == 250000}" @click="addPriceRange([100001, 250000])">$100,001-250,000</a></li>
                <li><a v-bind:class="{selected:  Math.max(...this.priceFilter) == 500000}" @click="addPriceRange([250001, 500000])">$250,001-500,000</a></li>
                <li><a v-bind:class="{selected:  Math.max(...this.priceFilter) == 1000000}" @click="addPriceRange([500001, 1000000])">$500,001-1,000,000</a></li>
                <li><a v-bind:class="{selected:  Math.max(...this.priceFilter) == 1000001}" @click="addPriceRange([1000001, 99999999999])">Above $1,000,000</a></li>
              </ul>
            </b-collapse></li>
          <li><a v-b-toggle.p-3 >
            <b-icon v-show="!p3" icon="plus"/>
            <b-icon v-show="p3" icon="dash"/>
            Medium</a>
            <b-collapse id="p-3" v-model="p3"   class="mt-2">
              <ul class="child">
                <li v-for="medium in master.mediums" :key="medium.term_id">
                  <a v-bind:class="{selected: mediumFilter.includes(medium.term_id)}" @click="toggleArrayItem(mediumFilter, medium.term_id)">{{medium.name}}</a>
                </li>
              </ul>
            </b-collapse></li>
        </ul>

      </div><!-- end col -->

      <div v-ani="{class:'fade-in-bottom', delay: 100}"  v-if="artworks.length" class="col">
        <div class="row">
          <div v-for="artwork in filteredArtworks" :key="artwork.id" class="col-6 col-md-4   col-xl-3">
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
      <div v-ani="{class:'fade-in-bottom', delay: 100}"  class="d-none d-lg-block col-3 col-xl-2">

        <ul>
        <li><a v-b-toggle.p-3 >
          <b-icon v-show="!p3" icon="plus"/>
          <b-icon v-show="p3" icon="dash"/>
          Sort by</a>
          <b-collapse id="p-sort" v-model="psort"   class="mt-2">
            <ul class="child">
              <li><a>Price: High to low</a></li>
              <li><a @click="sortBy[0] = priceLow">Price: Low to high</a></li>
              <li><a @click="sortBy[0] = alphaA">Alphabetically A — Z</a></li>
              <li><a @click="sortBy[0] = alphaZ">Alphabetically Z — A</a></li>
            </ul>
          </b-collapse></li>
        </ul>
      </div><!-- end col -->
    </div><!-- end row -->
    <div class="row"><div class="col text-center"><a class="btn btn-md btn-outline-dark">Load 20 more</a></div></div><!-- end row -->

  </div>
  </div><!-- -->
</template>

<script>
export default {
  name: 'AllArtworks',
  methods:{
    addPriceRange(range){
      this.priceFilter = [];
      range.forEach((num) => {
        this.toggleArrayItem(this.priceFilter, num);
      });
    },
    toggleArrayItem(a, v) {
      var i = a.indexOf(v);
      if (i === -1)
          a.push(v);
      else
          a.splice(i,1);
    },
  },
  mounted: async function() {
  },
  props:{

  },
  computed:{
    artworks () {
      return this.$store.state.artworks;
    },
    filteredArtworks(){

      var filtered = this.artworks.filter((artwork )=>{
        //Filter Artists
          if(!this.artistFilter.length)return true;
          if(this.artistFilter.includes(artwork.hauser_artists[0]))return true;
          return false;
      }).filter((artwork) => {
        //Filter Price
          if(!this.priceFilter.length) return true;
          if(Math.min(...this.priceFilter) <= artwork.acf.price && Math.max(...this.priceFilter) >= artwork.acf.price) return true;
          return false;
      }).filter((artwork) => {
        //Filter medium
        if(!this.mediumFilter.length)return true;
        if(this.mediumFilter.includes(artwork.hauser_mediums[0]))return true;
        return false;
      });



      return filtered;

    },
    master () {
      return this.$store.state.master;
    },
  },
  data: function() {
    return {
      artistFilter: [],
      priceFilter: [],
      mediumFilter: [],
      sortBy: [],
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
a.selected{text-decoration: underline !important;}
a, a:hover{color: black;}
ul{list-style: none; padding:0; }
ul.child{margin:0 0 1rem 19px;}
.artwork{margin-bottom: 2rem; display: block;}
</style>
