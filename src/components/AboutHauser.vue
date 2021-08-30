<template>
  <div id="aboutgallery">
    <div class="pad bg-subtle-grey">
      <div class="container" style="position: relative;">
        <div class="d-none d-md-block" v-ani="{class:'grow-in-top', delay: 0}" style="position: absolute; left: 50%; min-height:100%; border-left: 1px solid black;"></div>
      <div class="row">
      <div v-ani="{class:'slide-in-left', delay: 0}" class="col-12 col-md-5"><h1 >About<br class="d-none d-md-inline"> Hauser & Wirth</h1><div class="mb-4 d-md-none"></div></div>
      <div class="col-2"></div>
      <div v-ani="{class:'slide-in-right', delay: 0}" class="col-12 col-md-5">
  <p>Hauser & Wirth was founded in 1992 in Zurich by Iwan Wirth, Manuela Wirth and Ursula Hauser, who were joined in 2000 by Partner and President Marc Payot. A family business with a global outlook, Hauser & Wirth has expanded over the past 27 years to include outposts in Hong Kong, London, New York, Los Angeles, Somerset, Gstaad and St. Moritz.</p>
  <p>The gallery represents over 75 artists and estates who have been instrumental in shaping its identity over the past quarter century, and who are the inspiration for Hauser & Wirth’s diverse range of activities that engage with art, education, conservation and sustainability.</p>
  </div>
</div>
  </div>

  </div><!-- end hero-ad -->

  <div class="hero-pad">

    <div class="container-fluid">
      <div class="row d-flex align-items-top">
        <div class="col-10 offset-1 col-md-8 offset-md-2">
          <template v-for="(video, index) in master.video" >
              <div  v-ani="{class:'scale-up-center', delay: 0}"  v-show="selVid == index" :key="index">
                <h2 class="mb-4" >{{video.title}}</h2>
                <div  class=" embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" :src="video.video_url"></iframe>
                </div>
                <p class="pt-4">{{video.caption}}</p>
              </div>
          </template>
        </div>
        <div class="col text-right">
          <h2 class="mb-4" >&nbsp;</h2>
          <a v-bind:class="{selected: selVid == index }" @click="selVid = index" v-for="(video, index) in master.video" :key="index" class="mb-2 ml-2" style="display: inline-block; height: 75px; width: 100px; background: #eee"></a>
        </div>
        <div v-ani="{class:'fade-in-bottom', delay: 0}" class="col-10 offset-1 col-md-8 offset-md-2">
            <h3 style="margin-top: 6rem; margin-bottom: 6rem;" class="font-bold">Hauser & Wirth is a leading international contemporary and modern art gallery with spaces in Zurich, London, Somerset, New York, Los Angeles, Hong Kong, Gstaad and St. Moritz.</h3>
        </div>
      </div><!-- end row-->
    </div><!-- end container -->

      <div class="d-md-none clearfix">
        <div>
        <div v-for="(pane, index) in master.about_hauser" :key="index" class="col-8 mobilePane"><img class="img-fluid mb-3" :src="pane.image.url"><p><small>{{pane.caption}}</small></p></div>
      </div>
    </div>

    <div class="container">

      <div class="d-none d-md-block">
      <div class="row">
        <div v-for="(pane, index) in master.about_hauser" :key="index" v-ani="{class:'fade-in-bottom', delay: index*300}" class="col-4" style="float: right !important;"><img class="img-fluid mb-3" :src="pane.image.url"><p><small>{{pane.caption}}</small></p></div>
      </div><!-- end row -->
    </div>
    </div>
    </div><!-- end container -->
  </div><!-- end hero-pad -->

</template>

<script>
export default{
  name:'AboutHauser',
  data: function(){
    return{
      selVid: 0
    }
  },
  computed:{
    master () {
      return this.$store.state.master;
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.selected{border: 1px solid black;}
.pad{padding: 8rem 0;}
.mobilePane{float: right; margin-bottom: 6rem;}
.mobilePane:nth-child(2n) {

float: left !important;
}
</style>
