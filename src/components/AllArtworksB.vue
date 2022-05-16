<template>
  <div id="allartworks" class="hero-pad">
    <div class="container">
      <div
        v-ani="{ class: 'fade-in-bottom', delay: 0 }"
        class="row mb-4 d-flex align-items-top"
      >
        <div class="col-6 col-lg-9 col-xl-10">
          <h4 style="font-size: 40px;">Exhibiting artworks</h4>
        </div>
        <div class="col-6 d-lg-none text-right">
          <a @click="filtersModal = !filtersModal"
            ><img class="d-lg-none" src="../assets/sliders.svg"
          /></a>
        </div>
      </div>
      <!-- end row -->

      <a v-b-toggle.p-1 class="filterBtn">
        Artist
        <b-icon class="biconhelper" v-show="!p1" icon="chevron-down" />
        <b-icon class="biconhelper" v-show="p1" icon="chevron-up" />
      </a>
      <a v-b-toggle.p-3 class="filterBtn">
        Medium
        <b-icon v-show="!p3" class="biconhelper" icon="chevron-down" />
        <b-icon v-show="p3" class="biconhelper" icon="chevron-up" />
      </a>
      <a v-b-toggle.p-sort class="filterBtn">
        Sort by
        <b-icon v-show="!psort" class="biconhelper" icon="chevron-down" />
        <b-icon v-show="psort" class="biconhelper" icon="chevron-up" />
      </a>

      <ul class="row" style="margin-top: 1rem;">
        <li class="col-12">
          <b-collapse id="p-1" v-model="p1" class="mt-2" accordion="op">
            <ul class="child artistScroll hscroll">
              <li>
                <a
                  v-bind:class="{ selected: !artistFilter.length }"
                  @click="artistFilter = []"
                  >All</a
                >
              </li>
              <li v-for="artist in master.artists" :key="artist.term_id">
                <a
                  v-bind:class="{
                    selected: artistFilter.includes(artist.term_id)
                  }"
                  @click="toggleArrayItem(artistFilter, artist.term_id)"
                  >{{ artist.name }}</a
                >
              </li>
            </ul>
          </b-collapse>
        </li>
        <li v-if="0">
          <a v-b-toggle.p-2>
            <b-icon v-show="!p2" icon="plus" />
            <b-icon v-show="p2" icon="dash" />
            Price</a
          >
          <b-collapse id="p-2" v-model="p2" class="mt-2">
            <ul class="child">
              <li>
                <a
                  v-bind:class="{ selected: !priceFilter.length }"
                  @click="priceFilter = []"
                  >All</a
                >
              </li>
              <li>
                <a
                  v-bind:class="{
                    selected: Math.max(...this.priceFilter) == 15000
                  }"
                  @click="addPriceRange([0, 15000])"
                  >Under $15,000</a
                >
              </li>
              <li>
                <a
                  v-bind:class="{
                    selected: Math.max(...this.priceFilter) == 50000
                  }"
                  @click="addPriceRange([15000, 50000])"
                  >$15,000-50,000</a
                >
              </li>
              <li>
                <a
                  v-bind:class="{
                    selected: Math.max(...this.priceFilter) == 100000
                  }"
                  @click="addPriceRange([50001, 100000])"
                  >$50,001-100,000</a
                >
              </li>
              <li>
                <a
                  v-bind:class="{
                    selected: Math.max(...this.priceFilter) == 250000
                  }"
                  @click="addPriceRange([100001, 250000])"
                  >$100,001-250,000</a
                >
              </li>
              <li>
                <a
                  v-bind:class="{
                    selected: Math.max(...this.priceFilter) == 500000
                  }"
                  @click="addPriceRange([250001, 500000])"
                  >$250,001-500,000</a
                >
              </li>
              <li>
                <a
                  v-bind:class="{
                    selected: Math.max(...this.priceFilter) == 1000000
                  }"
                  @click="addPriceRange([500001, 1000000])"
                  >$500,001-1,000,000</a
                >
              </li>
              <li>
                <a
                  v-bind:class="{
                    selected: Math.max(...this.priceFilter) == 1000001
                  }"
                  @click="addPriceRange([1000001, 99999999999])"
                  >Above $1,000,000</a
                >
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="col-12">
          <b-collapse id="p-3" v-model="p3" class="mt-2" accordion="op">
            <ul class="child">
              <li v-for="medium in master.mediums" :key="medium.term_id">
                <a
                  v-bind:class="{
                    selected: mediumFilter.includes(medium.term_id)
                  }"
                  @click="toggleArrayItem(mediumFilter, medium.term_id)"
                  >{{ medium.name }}</a
                >
              </li>
            </ul>
          </b-collapse>
        </li>

        <li class="col-12" v-if="!master.hide_sort">
          <b-collapse id="p-sort" v-model="psort" class="mt-2" accordion="op">
            <ul class="child">
              <li>
                <a
                  v-bind:class="{ selected: sortBy == 'priceHigh' }"
                  @click="sortBy = 'priceHigh'"
                  >Price: High to low</a
                >
              </li>
              <li>
                <a
                  v-bind:class="{ selected: sortBy == 'priceLow' }"
                  @click="sortBy = 'priceLow'"
                  >Price: Low to high</a
                >
              </li>
              <li>
                <a
                  v-bind:class="{ selected: sortBy == 'alphaA' }"
                  @click="sortBy = 'alphaA'"
                  >Alphabetically A — Z</a
                >
              </li>
              <li>
                <a
                  v-bind:class="{ selected: sortBy == 'alphaZ' }"
                  @click="sortBy = 'alphaZ'"
                  >Alphabetically Z — A</a
                >
              </li>
            </ul>
          </b-collapse>
        </li>
      </ul>

      <div
        v-masonry="'containerId'"
        transition-duration="0s"
        item-selector=".item"
        column-width=".sizer"
      >
        <div
          v-masonry-tile
          v-bind:class="{
            'col-6 col-md-4 sizer': index != 0,
            'col-12 col-md-8': index == 0
          }"
          class="item"
          v-for="(artwork, index) in filteredArtworks"
          :key="index"
        >
          <div
            v-ani="{
              class: 'fade-in-bottom',
              delay: delay(index) * 100 + 100
            }"
            class="sleeve"
          >
            <router-link
              class="artwork"
              :to="{ path: '/artwork/' + artwork.slug }"
            >
              <img
                v-if="artwork.acf.hero_image"
                class="mb-4"
                style="width: 100%"
                :src="artwork.acf.hero_image.sizes.large"
              />
              
              <p v-if="!master.hide_artist_name" class="fbold">
                {{ artwork.artist.name }}
              </p>
              <div v-html="artwork.title.rendered"></div>

              <div>
                <template v-if="artwork.acf.price == 0"
                  >Price upon inquiry</template
                >
                <template v-if="artwork.acf.price > 0">{{
                  artwork.acf.price | toCurrency
                }}</template>
              </div>
            </router-link>
            <p>
              <a @click="toggleFavorite(artwork.id)"
                ><img
                  v-show="!favorites.includes(artwork.id)"
                  src="../assets/favoriteIcon.svg"/><img
                  v-show="favorites.includes(artwork.id)"
                  src="../assets/favoriteIconSel.svg"
              /></a>
            </p>
          </div>
        </div>
      </div>

      <!-- end row -->

      <div v-if="perPage <= artworks.length" class="row">
        <div class="col text-center">
          <a
            @click="perPage = perPage + 20"
            class="mt-4 btn btn-md btn-outline-dark"
            >Load more works</a
          >
        </div>
      </div>
      <!-- end row -->
    </div>

    <div
      v-bind:class="{ active: filtersModal }"
      style="overflow-y: scroll"
      class="fullscreen-modal"
    >
      <div class="container" style="padding-top: 3rem; padding-bottom: 3rem;">
        <div class="row">
          <div class="col"><h4 class="mb-4">Filters</h4></div>
          <div class="col text-right">
            <a @click="filtersModal = !filtersModal">Close</a>
          </div>
          <div class="col-12">
            <ul class="child mb-3">
              <li
                class="mb-2"
                v-for="(collection, index) in master.collections"
                :key="index"
              >
                <a
                  v-bind:class="{
                    selected: collectionFilter.includes(collection.term_id)
                  }"
                  @click="toggleArrayItem(collectionFilter, collection.term_id)"
                  >{{ collection.name }}</a
                >
              </li>
            </ul>

            <ul>
              <li v-if="!master.hide_artist_name">
                <b class="fbold pb-3">Artist</b>

                <ul class="child artistScroll hscroll">
                  <li>
                    <a
                      v-bind:class="{ selected: !artistFilter.length }"
                      @click="artistFilter = []"
                      >All</a
                    >
                  </li>
                  <li v-for="artist in master.artists" :key="artist.term_id">
                    <a
                      v-bind:class="{
                        selected: artistFilter.includes(artist.term_id)
                      }"
                      @click="toggleArrayItem(artistFilter, artist.term_id)"
                      >{{ artist.name }}</a
                    >
                  </li>
                </ul>
              </li>
              <li v-if="0">
                <b class="fbold pb-3">Price</b>

                <ul class="child">
                  <li>
                    <a
                      v-bind:class="{ selected: !priceFilter.length }"
                      @click="priceFilter = []"
                      >All</a
                    >
                  </li>
                  <li>
                    <a
                      v-bind:class="{
                        selected: Math.max(...this.priceFilter) == 15000
                      }"
                      @click="addPriceRange([0, 15000])"
                      >Under $15,000</a
                    >
                  </li>
                  <li>
                    <a
                      v-bind:class="{
                        selected: Math.max(...this.priceFilter) == 50000
                      }"
                      @click="addPriceRange([15000, 50000])"
                      >$15,000-50,000</a
                    >
                  </li>
                  <li>
                    <a
                      v-bind:class="{
                        selected: Math.max(...this.priceFilter) == 100000
                      }"
                      @click="addPriceRange([50001, 100000])"
                      >$50,001-100,000</a
                    >
                  </li>
                  <li>
                    <a
                      v-bind:class="{
                        selected: Math.max(...this.priceFilter) == 250000
                      }"
                      @click="addPriceRange([100001, 250000])"
                      >$100,001-250,000</a
                    >
                  </li>
                  <li>
                    <a
                      v-bind:class="{
                        selected: Math.max(...this.priceFilter) == 500000
                      }"
                      @click="addPriceRange([250001, 500000])"
                      >$250,001-500,000</a
                    >
                  </li>
                  <li>
                    <a
                      v-bind:class="{
                        selected: Math.max(...this.priceFilter) == 1000000
                      }"
                      @click="addPriceRange([500001, 1000000])"
                      >$500,001-1,000,000</a
                    >
                  </li>
                  <li>
                    <a
                      v-bind:class="{
                        selected: Math.max(...this.priceFilter) == 1000001
                      }"
                      @click="addPriceRange([1000001, 99999999999])"
                      >Above $1,000,000</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <b class="fbold pb-3">Medium</b>

                <ul class="child">
                  <li v-for="medium in master.mediums" :key="medium.term_id">
                    <a
                      v-bind:class="{
                        selected: mediumFilter.includes(medium.term_id)
                      }"
                      @click="toggleArrayItem(mediumFilter, medium.term_id)"
                      >{{ medium.name }}</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <!-- end row -->
      </div>
    </div>
  </div>
  <!-- -->
</template>

<script>
export default {
  name: "AllArtworks",
  methods: {
    setCollection(id) {
      this.collectionFilter = [parseInt(id)];
    },
    clearFilters() {
      this.priceFilter = [];
      this.artistFilter = [];
      this.mediumFilter = [];
      this.collectionFilter = [];
      this.searchFilter = "";
      this.p1 = false;
      this.p2 = false;
      this.p3 = false;
    },
    clearSort() {
      this.sortBy = false;

      this.psort = false;
    },
    addPriceRange(range) {
      this.priceFilter = [];
      range.forEach(num => {
        this.toggleArrayItem(this.priceFilter, num);
      });
    },
    toggleFavorite(id) {
      this.$store.commit("toggleFavorite", id);
    },
    toggleArrayItem(a, v) {
      var i = a.indexOf(v);
      if (i === -1) a.push(v);
      else a.splice(i, 1);
    },
    delay(index) {
      var page = Math.floor(index / 4);

      return index - page * 4;
    }
  },
  mounted: async function() {
    if (location.hash) {
      document.querySelector(location.hash).scrollIntoView({
        behavior: "smooth"
      });
    }

    setInterval(() => {
      this.$redrawVueMasonry('containerId');
    }, 100);


  },
  props: {},
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
    artworks() {
      return this.$store.state.artworks;
    },
    filteredArtworks() {
      var filtered = this.artworks
        .filter(artwork => {
          //Filter Artists
          if (!this.artistFilter.length) return true;
          if (this.artistFilter.includes(artwork.hauser_artists[0]))
            return true;
          return false;
        })
        .filter(artwork => {
          //Filter Price
          if (!this.priceFilter.length) return true;
          if (
            Math.min(...this.priceFilter) <= artwork.acf.price &&
            Math.max(...this.priceFilter) >= artwork.acf.price
          )
            return true;
          return false;
        })
        .filter(artwork => {
          //Filter medium
          if (!this.mediumFilter.length) return true;
          if (this.mediumFilter.includes(artwork.hauser_mediums[0]))
            return true;
          return false;
        })
        .filter(artwork => {
          //Filter Collection
          if (!this.collectionFilter.length) return true;
          if (this.collectionFilter.includes(artwork.hauser_collections[0]))
            return true;
          return false;
        })
        .filter(artwork => {
          if (!this.searchFilter) return true;
          if (
            artwork.title.rendered
              .toLowerCase()
              .search(this.searchFilter.toLowerCase()) > -1
          )
            return true;
          if (
            artwork.artist.name
              .toLowerCase()
              .search(this.searchFilter.toLowerCase()) > -1
          )
            return true;
          return false;
        });

      if (this.sortBy)
        return filtered.sort((a, b) => {
          var calc = 0;
          var lastA = a.artist.slug.split("-").pop();
          var lastB = b.artist.slug.split("-").pop();
          switch (this.sortBy) {
            case "priceHigh":
              calc = b.acf.price - a.acf.price;
              break;
            case "priceLow":
              calc = a.acf.price - b.acf.price;
              break;
            case "alphaA":
              calc = lastA.localeCompare(lastB);
              break;
            case "alphaZ":
              calc = lastB.localeCompare(lastA);
              break;
          }

          return calc;
        });

      return filtered.slice(0, this.perPage);
    },
    fOne() {
      return [this.filteredArtworks[0]];
    },
    fTwo() {
      return [this.filteredArtworks[1], this.filteredArtworks[2]];
    },
    master() {
      return this.$store.state.master;
    }
  },
  data: function() {
    return {
      artistFilter: [],
      priceFilter: [],
      mediumFilter: [],
      collectionFilter: [],
      searchFilter: null,
      sortBy: false,
      p1: false,
      p2: false,
      p3: false,
      psort: false,
      filtersModal: false,
      perPage: 20
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.featured .sleeve {
  width: 25.5vw;
}
.normal .sleeve {
  width: 25.5vw;
}

a.selected {
  text-decoration: underline !important;
}
a,
a:hover {
  color: black;
}
a.artwork {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
}
ul.child {
  margin: 0 0 1rem 19px;
}
.fullscreen-modal ul.child {
  margin: 0 0 1rem 0;
}
.artwork {
  margin-bottom: 1rem;
  display: block;
}
.fullscreen-modal b.fbold {
  display: block;
}
.artistScroll {
  max-height: 13rem;
  overflow-y: scroll;
}
.artimg {
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
.biconhelper {
  font-size: 0.75rem;
  margin-left: 0.25rem;
}
.filterBtn {
  margin-right: 1rem;
  font-size: 16px;
}
ul.child {
  margin: 0 !important;
}
</style>
