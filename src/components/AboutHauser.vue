<template>
  <div id="aboutgallery">
    <div class="hero-pad bg-subtle-grey">
      <div class="container" style="position: relative;">
        <div v-ani="{class:'grow-in-top', delay: 0}" style="position: absolute; left: 50%; min-height:100%; border-left: 1px solid black;"></div>
      <div class="row">
      <div v-ani="{class:'slide-in-left', delay: 0}" class="col-12 col-md-5"><h1 >About<br class="d-none d-md-inline"> Hauser & Wirth</h1><div class="mb-4 d-md-none"></div></div>
      <div class="col-2"></div>
      <div v-ani="{class:'slide-in-right', delay: 0}" class="col-5">
  <p>Hauser & Wirth was founded in 1992 in Zurich by Iwan Wirth, Manuela Wirth and Ursula Hauser, who were joined in 2000 by Partner and President Marc Payot. A family business with a global outlook, Hauser & Wirth has expanded over the past 27 years to include outposts in Hong Kong, London, New York, Los Angeles, Somerset, Gstaad and St. Moritz.</p>
  <p>The gallery represents over 75 artists and estates who have been instrumental in shaping its identity over the past quarter century, and who are the inspiration for Hauser & Wirth’s diverse range of activities that engage with art, education, conservation and sustainability.</p>
  </div>
</div>
  </div>

  </div><!-- end hero-ad -->
  <div class="d-md-none">

    <img src="../assets/ap3.jpg" class="img-fluid">
    <div class="container">
      <div class="col-10 offset-1">
        <h3 style="margin-top: 4rem; margin-bottom: 6rem;" class="font-bold">Hauser & Wirth is a leading international contemporary and modern art gallery with spaces in Zurich, London, Somerset, New York, Los Angeles, Hong Kong, Gstaad and St. Moritz.</h3>
      </div>
    </div>
  </div>
  <div class="hero-pad">

    <div class="container-fluid">
      <div class="row d-flex align-items-center">
        <div class="d-none d-md-block col-md-8 offset-2">
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
          <a v-bind:class="{selected: selVid == index }" @click="selVid = index" v-for="(video, index) in master.video" :key="index" class="mb-2" style="display: inline-block; height: 75px; width: 100px; background: #eee">link</a>
        </div>
        <div v-ani="{class:'fade-in-bottom', delay: 0}" class="col-12 col-md-8 offset-2">
            <h3 style="margin-top: 4rem; margin-bottom: 6rem;" class="font-bold">Hauser & Wirth is a leading international contemporary and modern art gallery with spaces in Zurich, London, Somerset, New York, Los Angeles, Hong Kong, Gstaad and St. Moritz.</h3>
        </div>
      </div><!-- end row-->


      <div class="d-md-none clearfix">
        <div >
        <div class="col-8" style="float: right !important;"><img class="img-fluid mb-3" src="../assets/ap4.jpg"><p><small>Hauser & Wirth presidents, Iwan and Manuela Wirth</small></p></div>
        <div class="col-8"><img class="img-fluid  mb-3" src="../assets/ap4.jpg"><p><small>Hauser & Wirth presidents, Iwan and Manuela Wirth</small></p></div>
        <div class="col-8" style="float: right !important;"><img class="img-fluid mb-3" src="../assets/ap4.jpg"><p><small>Hauser & Wirth presidents, Iwan and Manuela Wirth</small></p></div>
      </div>
    </div>



      <div class="d-none d-md-block">
      <div class="row">
        <div class="col-4"><img class="img-fluid mb-3" src="../assets/ap4.jpg"><p><small>Hauser & Wirth presidents, Iwan and Manuela Wirth</small></p></div>
        <div class="col-4"><img class="img-fluid  mb-3" src="../assets/ap4.jpg"><p><small>Hauser & Wirth presidents, Iwan and Manuela Wirth</small></p></div>
        <div class="col-4"><img class="img-fluid mb-3" src="../assets/ap4.jpg"><p><small>Hauser & Wirth presidents, Iwan and Manuela Wirth</small></p></div>
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

</style>
