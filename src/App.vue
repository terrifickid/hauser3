<template>
  <div id="app">
    <div
      v-if="!loaded"
      class="row d-flex align-items-center"
      style="height: 100vh;"
    >
      <Loader></Loader>
    </div>
    <router-view v-if="testVar" />

    <div
      id="gdpr"
      v-if="!testVar"
      class="d-flex align-items-center justify-content-center"
      style="position: fixed; top: 0; bottom:0; right:0; left: 0; background: grey url('/blur.png'); background-size:cover; background-position: center center; padding: 2rem 0;"
    >
      <div
        class="col-10  col-md-6"
        style="border: 1px solid white; padding: 4rem; background: white;"
      >
        <form @submit="sendEmail">
          <h4 style="margin: 0 0 0 0;">Enter email to continue</h4>
          <input
            type="text"
            required
            placeholder="Enter Email"
            class="form-control"
            style="margin: 2rem 0 2.5rem 0"
          />
        </form>
        <a class="btn btn-md btn-outline-dark btn-block " @click="closeGDPR()"
          >Submit</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import Loader from "@/components/Loader.vue";
export default {
  components: {
    Loader
  },
  data: function() {
    return {
      testVar: true
    };
  },
  methods: {
    closeGDPR() {
      this.testVar = true;
      this.$store.commit("setGDPR", true);
    }
  },
  computed: {
    gdpr() {
      return this.$store.state.gdpr;
    },
    master() {
      return this.$store.state.master;
    },
    artworks() {
      return this.$store.state.artworks;
    },
    loaded() {
      if (this.master && this.artworks) return true;
      return false;
    }
  },
  mounted() {
    var p = this.$route.params;

    this.$store.dispatch("loadData", { param: p });
  }
};
</script>
<style lang="scss"></style>
