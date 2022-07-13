<template>
  <div id="allartworks" class="mt-5">
    <div class="container">
      <div
        v-ani="{ class: 'fade-in-bottom', delay: 0 }"
        class="row mb-4 d-flex align-items-top"
      >
        <div class="col-12">
          <h4 style="font-size: 40px;">Artworks</h4>
        </div>
      </div>
      <!-- end row -->

      <div style="padding-bottom: 10rem;">
        <div
          class="row"
          v-masonry="'containerId'"
          transition-duration="0s"
          item-selector=".item"
          column-width=".sizer"
        >
          <div
            v-masonry-tile
            v-bind:class="{
              'col-6 sizer': !artwork.acf.featured,
              'col-8 offset-2': artwork.acf.featured
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
                  style="max-width: 100%;"
                  :src="artworkImg(artwork)"
                />

                <p v-if="!master.hide_artist_name" class="fbold mb-1">
                  {{ artwork.artist.name }}
                </p>
                <div v-html="artwork.title.rendered" class="mb-1"></div>

                <div class="pb-4">
                  <template v-if="artwork.acf.price == 0"
                    >Price upon inquiry</template
                  >
                  <template v-if="artwork.acf.price > 0">{{
                    artwork.acf.price | toCurrency
                  }}</template>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->

      <div v-if="perPage <= artworks.length" class="row">
        <div class="col text-center">
          <a
            @click="perPage = perPage + 20"
            class="mt-4 btn btn-md btn-outline-dark"
            style="margin-bottom: 5rem;"
            >Load more works</a
          >
        </div>
      </div>
      <!-- end row -->
    </div>
  </div>
  <!-- -->
</template>

<script>
import _ from "lodash";
export default {
  name: "AllArtworks",
  methods: {
    artworkImg(artwork) {
      return _.get(artwork, 'acf.artwork_images[0].sizes["large"]');
    },
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
      this.$redrawVueMasonry("containerId");
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
}
.normal .sleeve {
}

.sleeve {
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

.padl {
  padding-left: 8.3333333333%;
}
.padr {
  padding-right: 8.3333333333%;
}
</style>
