<template>
  <div id="diaries" class="hero-pad" style="padding: 6rem 0">
    <div class="container-fluid">
      <div v-if="master.video" class="row d-flex align-items-center">
        <div class="col-12 col-md-8 offset-md-2">
          <template v-for="(video, index) in master.video">
            <div
              v-ani="{ class: 'scale-up-center', delay: 0 }"
              v-show="selVid == index"
              :key="index"
            >
              <h2 class="mb-4">{{ video.video_title }}</h2>
              <img
                v-if="!video.video_url"
                class="img-fluid"
                :src="video.video_thumbnail.url"
              />
              <div
                v-if="video.video_url"
                class=" embed-responsive embed-responsive-16by9"
              >
                <iframe
                  class="embed-responsive-item"
                  :src="video.video_url + '?controls=0&modestbranding=1&loop=1'"
                ></iframe>
              </div>
              <p class="pt-4" v-html="video.video_caption"></p>
            </div>
          </template>
        </div>
        <div v-if="master.video.length > 1" class="col text-left">
          <a
            v-bind:class="{ selected: selVid == index }"
            @click="selVid = index"
            v-for="(video, index) in master.video"
            :key="index"
            class="mb-2 ml-2"
            v-bind:style="{
              'background-image': 'url(' + video.video_thumbnail.url + ')'
            }"
            style="background-position: center center; background-size: cover; display: inline-block; height: 75px; width: 100px; background-color: #eee"
          ></a>
        </div>
      </div>

      <!-- end row-->
    </div>
    <!-- end container -->
  </div>
  <!-- end container -->

  <!-- end hero-pad -->
</template>

<script>
export default {
  name: "AboutHauser",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.selected {
  border: 1px solid black;
}
.pad {
  padding: 8rem 0;
}
.mobilePane {
  float: right;
  margin-bottom: 6rem;
}
.mobilePane:nth-child(2n) {
  float: left !important;
}
</style>
