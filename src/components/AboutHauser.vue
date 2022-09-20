<template>
  <div v-if="master.hauser_title" id="aboutgallery">
    <div class="pad bg-subtle-grey" style="padding: 4rem 0;">
      <div class="container" style="position: relative;">
        <div
          class="d-none d-md-block"
          v-ani="{ class: 'grow-in-top', delay: 0 }"
          style="position: absolute; left: 50%; min-height:100%; border-left: 1px solid black;"
        ></div>
        <div class="row">
          <div
            v-ani="{ class: 'slide-in-left', delay: 0 }"
            class="col-12 col-md-5"
          >
            <h1 v-html="master.hauser_title"></h1>
            <div class="mb-4 d-md-none"></div>
          </div>
          <div class="col-2"></div>
          <div
            v-ani="{ class: 'slide-in-right', delay: 0 }"
            class="col-12 col-md-5"
            v-html="master.hauser_description"
          ></div>
        </div>
      </div>
    </div>
    <!-- end hero-ad -->

    <div id="diaries" class="hero-pad" style="padding: 6rem 0">
      <div class="container-fluid">
        <div v-if="master.video" class="row d-flex align-items-top">
          <div class="col-12 col-md-8 offset-md-2">
            <template v-for="(video, index) in master.video">
              <div
                v-ani="{ class: 'scale-up-center', delay: 0 }"
                v-show="selVid == index"
                :key="index"
              >
                <h2 class="mb-4">{{ video.title }}</h2>
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
                    :src="
                      video.video_url + '?controls=0&modestbranding=1&loop=1'
                    "
                  ></iframe>
                </div>
                <p class="pt-4" v-html="video.caption"></p>
              </div>
            </template>
          </div>
          <div v-if="master.video.length > 1" class="col text-left">
            <h2 class="mb-4">&nbsp;</h2>
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

      <div class="d-md-none clearfix">
        <div>
          <div
            v-for="(pane, index) in master.about_hauser"
            :key="index"
            class="col-8 mobilePane"
          >
            <a target="_blank" :href="pane.link_url"
              ><img class="img-fluid mb-3" :src="pane.image.url"
            /></a>
            <p><small v-html="pane.caption"></small></p>
          </div>
        </div>
      </div>

      <div class="container" style="margin-bottom: 2rem;">
        <div class="d-none d-md-block">
          <div class="row">
            <div
              v-for="(pane, index) in master.about_hauser"
              :key="index"
              v-ani="{ class: 'fade-in-bottom', delay: index * 300 }"
              class="col-4"
              style="float: right !important;"
            >
              <a target="_blank" :href="pane.link_url"
                ><img class="img-fluid mb-3" :src="pane.image.url"
              /></a>
              <p><small v-html="pane.caption"></small></p>
            </div>
          </div>
          <!-- end row -->
        </div>
      </div>
    </div>
    <!-- end container -->
  </div>
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
