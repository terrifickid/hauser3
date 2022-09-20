<template>
  <div
    v-ani="{
      class: 'fade-in-bottom',
      delay: delay * 100 + 100
    }"
    class="sleeve"
  >
    <router-link class="artwork" :to="{ path: '/artwork/' + artwork.slug }">
      <img
        v-if="artwork.acf.hero_image"
        class="mb-4"
        style="max-width: 100%;"
        :src="artworkImg"
      />

      <p class="fbold">{{ collection }}</p>
      <p v-if="!master.hide_artist_name" class="fbold mb-1">
        {{ artwork.artist.name }}
      </p>
      <div v-html="artwork.title.rendered" class="mb-1"></div>

      <div class="pb-4">
        <template v-if="artwork.acf.price == 0">Price upon inquiry</template>
        <template v-if="artwork.acf.price > 0">{{
          artwork.acf.price | toCurrency
        }}</template>
      </div>
    </router-link>
  </div>
</template>
<script>
import _ from "lodash";
export default {
  props: ["artwork", "index"],
  methods: {},
  computed: {
    delay() {
      var page = Math.floor(this.index / 4);
      return this.index - page * 4;
    },
    collection() {
      return _.get(this.artwork, "acf.collection.name");
    },
    artworkImg() {
      return _.get(this.artwork, 'acf.artwork_images[0].sizes["large"]');
    },
    master() {
      return this.$store.state.master;
    }
  }
};
</script>
<style scoped>
a,
a:hover {
  color: black;
  text-decoration: none;
}
</style>
