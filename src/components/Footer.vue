<template>
  <div style="padding-top: 0; padding-bottom: 2em;" class="hero-pad">
    <div class="container">
      <h5 class="text-center mb-5">Be the first to receive updates</h5>
      <div class="col-10 offset-1 col-md-8 offset-md-2">
      <form action="https://hauserwirth.us14.list-manage.com/subscribe/post?u=4f151f95a189c32d4d5205374&amp;id=c951207a70" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div class="row">
          <div class="col-md-6 col-lg-4"><input type="text" name="FNAME" placeholder="Name" class="form-control mb-4"></div>
          <div class="col-md-6 col-lg-4"><input type="text" name="EMAIL" placeholder="Email Address" class="form-control mb-4"></div>
          <div class="col-12 col-lg-4"><button type="submit" class="btn btn-md btn-outline-dark btn-block">Submit</button></div>
        </div>
      </form>
      </div><!-- end row -->
      <div id="social" class="text-center">
      <a href="https://www.facebook.com/hauserwirth/"><img src="../assets/ab/facebook.svg"></a>
      <a href="https://www.instagram.com/hauserwirth/?hl=en"><img src="../assets/ab/instagram.svg"></a>
      <a href="https://twitter.com/hauserwirth"><img src="../assets/ab/Vector.svg"></a>
      <a href="https://www.youtube.com/channel/UCmwkuoCJOD681XWL_3joE5w"><img src="../assets/ab/youtube.svg"></a>
      <a v-b-modal.modal-1><img src="../assets/ab/wechat.svg"></a>
      <a href="https://weibo.com/hauserwirth?is_hot=1"><img src="../assets/ab/weibo.svg"></a>
      </div>
      <p class="text-center">Shopping assistance via <a style="text-decoration: underline;" href="https://wa.me/442072872300?text=Hello+Hauser+%26+Wirth">WhatsApp</a></p>
      <p class="text-center">The artworks described above are subject to changes in availability and price without prior notice. Prices excl. VAT<br><a href="#">Terms & Conditions</a>   |   &copy; 2021 Hauser & Wirth</p>
    </div>


<b-modal size="sm" id="modal-1" centered hide-header hide-footer>


    <div class="text-center">
      <h4 class="mt-4">Follow us on WeChat</h4>
      <img src="../assets/wechatqr.jpg" class="img-fluid mt-4">
      <p>Scan the image to begin</p>

</div>

</b-modal>

    </div><!-- -->
</template>

<script>
export default {
name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a, a:hover{color: black;}
#social img{padding: 0 0.75rem;}
#social{margin: 6rem 0 4rem 0;}
</style>
