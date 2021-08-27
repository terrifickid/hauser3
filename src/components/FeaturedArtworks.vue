<template>
  <div>
  <div class="bg-subtle-grey">
    <div class="container">
      <div style="padding:8vw 0 1rem 0">
      <div class="row d-flex align-items-center">
        <div class="col-sm-6 col-lg-3 d-none d-md-block">
          <div class="pad-right">
          <h3 class="mb-5">David Smith</h3>
          <p>Zig I</p>
          <p>A beautiful sculpture one of the foremost artists of the twentieth century</p>
            <button class="btn btn-outline-dark btn-block">View details</button>
          </div>
        </div>
        <div class="col"><img class="img-fluid" src="../assets/ap1.png"></div>
        <div class="col-3 d-none d-lg-block text-right thumb">
          <img src="../assets/ap5.jpg" class="img-fluid"><br>
          <img src="../assets/ap5.jpg" class="img-fluid"><br>
          <img src="../assets/ap5.jpg" class="img-fluid"><br>
          <img src="../assets/ap5.jpg" class="img-fluid"><br>

        </div>

      </div>
    </div>
    </div>

  </div>
  <div class="container">
    <div class="row">
      <div class="col-12 d-md-none">
        <h4 class="mb-3 mt-5">David Smith</h4>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-6 d-md-none">  <p>Zig I</p></div>
      <div class="col-6 d-md-none text-right">  <p><a href="#">Explore <b-icon class="ml-2" icon="arrow-right"/></a></p></div>
      <div class="col-12 d-md-none mobilethumb text-right">
        <img src="../assets/ap5.jpg" class="img-fluid">
        <img src="../assets/ap5.jpg" class="img-fluid">
        <img src="../assets/ap5.jpg" class="img-fluid">
        <img src="../assets/ap5.jpg" class="img-fluid">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'FeaturedArtworks',
  components: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a, a:hover{color: black;}
.thumb img{margin-bottom: 1rem;}
.mobilethumb img{margin-left: 1rem;}
</style>
