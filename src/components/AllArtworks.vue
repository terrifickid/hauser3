<template>
  <div id="allartworks" class="hero-pad">

    <div v-bind:class="{ 'active': filtersModal }" style="overflow-y: scroll" class="fullscreen-modal">
      <div class="container" style="padding-top: 3rem; padding-bottom: 3rem;">
        <div class="row"  >
          <div class="col">  <h4 class="mb-4">Filters</h4></div>
          <div class="col text-right"><a  @click="filtersModal = !filtersModal">Close</a></div>
          <div class="col-12">
            <ul>
              <li>

                  <b class="fbold pb-3">Artist</b>

                  <ul class="child artistScroll hscroll">
                    <li><a  v-bind:class="{selected: !artistFilter.length}" @click="artistFilter = []">All</a></li>
                    <li v-for="artist in master.artists" :key="artist.term_id"><a v-bind:class="{selected: artistFilter.includes(artist.term_id)}" @click="toggleArrayItem(artistFilter, artist.term_id)">{{artist.name}}</a></li>

                  </ul>

              </li>
              <li v-if="0">

                  <b class="fbold pb-3">Price</b>

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
              </li>
              <li>

                <b class="fbold pb-3">Medium</b>

                  <ul class="child">
                    <li v-for="medium in master.mediums" :key="medium.term_id">
                      <a v-bind:class="{selected: mediumFilter.includes(medium.term_id)}" @click="toggleArrayItem(mediumFilter, medium.term_id)">{{medium.name}}</a>
                    </li>
                  </ul>
              </li>
            </ul>
          </div>
        </div><!-- end row -->

      </div>
    </div>


    <div class="container">
    <div v-ani="{class:'fade-in-bottom', delay: 0}"   class="row mb-4 d-flex align-items-top">
      <div class="col-6 col-lg-9 col-xl-10"><h4>All artworks</h4></div>
      <div class="col-6 d-lg-none text-right"><a @click="filtersModal = !filtersModal"><img class="d-lg-none" src="../assets/sliders.svg"></a></div>
      <div class="col-12 col-lg-3 col-xl-2"><input type="text" v-model="searchFilter" placeholder="Search" class="form-control"></div>


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
              <ul class="child artistScroll hscroll">

                <li><a  v-bind:class="{selected: !artistFilter.length}" @click="artistFilter = []">All</a></li>
                <li v-for="artist in master.artists" :key="artist.term_id"><a v-bind:class="{selected: artistFilter.includes(artist.term_id)}" @click="toggleArrayItem(artistFilter, artist.term_id)">{{artist.name}}</a></li>

              </ul>
            </b-collapse>
          </li>
          <li v-if="0">
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
        <a @click="clearFilters()" v-show="priceFilter.length || artistFilter.length || mediumFilter.length"><b-icon  icon="x"/> Clear</a>
      </div><!-- end col -->

      <div  v-if="artworks.length" class="col">
        <div class="row">

          <div v-if="!filteredArtworks.length" class="col-6 col-md-4 col-xl-3"><p>Nothing found.</p></div>
          <div v-for="(artwork, index) in filteredArtworks" :key="index"  class="col-6 col-md-4   col-xl-3">
            <router-link class="artwork" :to="{ path: '/artwork/'+artwork.slug+'#Artwork'}">

            <img class="img-fluid mb-4" :src="artwork.acf.hero_image.sizes.medium">
            <p class="fbold">{{artwork.artist.name}}</p>
            <div v-html="artwork.title.rendered"></div>

            <div>
              <template v-if="artwork.acf.price_upon_inquiry">Price upon inquiry</template>
              <template v-if="!artwork.acf.price_upon_inquiry">{{artwork.acf.price | toCurrency}}</template>
          </div>

        </router-link>

            <p><a @click="toggleFavorite(artwork.id)"><img v-show="!favorites.includes(artwork.id)" src="../assets/favoriteIcon.svg"><img v-show="favorites.includes(artwork.id)" src="../assets/favoriteIconSel.svg"></a></p>
          </div>


        </div>
      </div><!-- end col -->
      <div v-ani="{class:'fade-in-bottom', delay: 100}"  class="d-none d-lg-block col-3 col-xl-2">

        <ul>
        <li><a v-b-toggle.p-sort >
          <b-icon v-show="!psort" icon="plus"/>
          <b-icon v-show="psort" icon="dash"/>
          Sort by</a>
          <b-collapse id="p-sort" v-model="psort"   class="mt-2">
            <ul class="child">
              <li><a v-bind:class="{selected: sortBy == 'priceHigh'}" @click="sortBy = 'priceHigh'">Price: High to low</a></li>
              <li><a v-bind:class="{selected: sortBy == 'priceLow'}" @click="sortBy = 'priceLow'">Price: Low to high</a></li>
              <li><a v-bind:class="{selected: sortBy == 'alphaA'}" @click="sortBy = 'alphaA'">Alphabetically A — Z</a></li>
              <li><a v-bind:class="{selected: sortBy == 'alphaZ'}" @click="sortBy = 'alphaZ'">Alphabetically Z — A</a></li>
            </ul>
          </b-collapse></li>
        </ul>

          <a @click="clearSort()" v-show="sortBy"><b-icon  icon="x"/> Clear</a>

      </div><!-- end col -->
    </div><!-- end row -->

    <div v-if="perPage <= artworks.length" class="row"><div class="col text-center"><a @click="perPage = perPage + 20;" class="btn btn-md btn-outline-dark">Load 20 more</a></div></div><!-- end row -->

  </div>
  </div><!-- -->
</template>

<script>

export default {
  name: 'AllArtworks',
  methods:{
    clearFilters(){
      this.priceFilter = [];
      this.artistFilter = [];
      this.mediumFilter = [];
      this.searchFilter = '';
      this.p1 = false;
      this.p2 = false;
      this.p3 = false;
    },
    clearSort(){
      this.sortBy = false;

      this.psort = false;

    },
    addPriceRange(range){
      this.priceFilter = [];
      range.forEach((num) => {
        this.toggleArrayItem(this.priceFilter, num);
      });
    },
    toggleFavorite(id){
      this.$store.commit('toggleFavorite', id);
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
    favorites () {
      return this.$store.state.favorites;
    },
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
      }).filter((artwork) => {

        if(!this.searchFilter) return true;
        if(artwork.title.rendered.toLowerCase().search(this.searchFilter.toLowerCase()) > -1) return true;
        if(artwork.artist.name.toLowerCase().search(this.searchFilter.toLowerCase()) > -1) return true;
        return false;
      });

      if(this.sortBy) return filtered.sort((a, b) => {
        var calc = 0;
        switch(this.sortBy){
          case 'priceHigh':
            calc = b.acf.price - a.acf.price;
          break;
          case 'priceLow':
            calc = a.acf.price - b.acf.price;
          break;
          case 'alphaA':
            calc = 0;
            if(a.title.rendered < b.title.rendered) { calc = -1; }
            if(a.title.rendered > b.title.rendered) { calc = 1; }
          break;
          case 'alphaZ':
            calc = 0;
            if(a.title.rendered < b.title.rendered) { calc = 1; }
            if(a.title.rendered > b.title.rendered) { calc = -1; }
          break;
        }

        return calc;
      });

      return filtered.slice(0, this.perPage);

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
      searchFilter: null,
      sortBy: false,
      p1: true,
      p2: false,
      p3: false,
      psort: true,
      filtersModal: false,
      perPage: 20
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a.selected{text-decoration: underline !important;}
a, a:hover{color: black;}
a.artwork{text-decoration: none;}
ul{list-style: none; padding:0; }
ul.child{margin:0 0 1rem 19px;}
.fullscreen-modal ul.child{margin: 0 0 1rem 0}
.artwork{margin-bottom: 1rem; display: block;}
.fullscreen-modal b.fbold{display: block;}
.artistScroll{ max-height: 13rem; overflow-y: scroll;}

</style>
