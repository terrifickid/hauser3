<template>
  <div class="hero-pad">
    <h5 class="text-center mb-5">Be the first to receive updates</h5>
    <div class="col-10 offset-1">
    <div class="row">
      <div class="col"><input type="text" placeholder="Name" class="form-control"></div>
      <div class="col"><input type="text" placeholder="Email Address" class="form-control"></div>
      <div class="col"><a class="btn btn-outline-dark btn-block">Submit</a></div>
    </div>
    </div><!-- end row -->
    <div id="social" class="text-center">
    <img src="../assets/ab/facebook.svg">
    <img src="../assets/ab/instagram.svg">
    <img src="../assets/ab/Vector.svg">
    <img src="../assets/ab/youtube.svg">
    <img src="../assets/ab/wechat.svg">
    <img src="../assets/ab/weibo.svg">
    </div>
    <p class="text-center">Shopping assistance via <a href="https://wa.me/+447384525201">WhatsApp</a></p>
    <p class="text-center">The artworks described above are subject to changes in availability and price without prior notice. Prices excl. VAT<br>Terms & Conditions   |   &copy; 2021 Hauser & Wirth</p>

    </div><!-- -->
</template>

<script>
export default {
name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#social img{padding: 0 1rem;}
#social{margin: 6rem 0 4rem 0;}
</style>
