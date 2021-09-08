<template>
  <div v-bind:class="{ 'active': active }" class="fullscreen-modal">
    <div class="container">
      <div class="row d-flex align-items-center text-left" style="position: relative; height: 100vh;" >
        <div style="position: absolute; right:0; top:2rem;">
          <div class="col"><a @click="active = !active">Close</a></div>
        </div>
        <div class="col-12 col-md-8 offset-md-2" style="position: relative;">
        <h4 class="mb-5">Share via</h4>
        <div class="row">
          <div class="col-12 pad"><a :href="'https://www.facebook.com/sharer/sharer.php?u='+url"><img class="ico" src="../assets/ab/facebook.svg">Share on Facebook</a></div>
          <div class="col-12 pad"><a :href="'mailto:?subject=Id%20like%20to%20share%20a%20link%20with%20you&body='+url"><img  class="ico" src="../assets/email.svg">Share via Email</a></div>
          <div class="col-12 pad"><a :href="'fb-messenger://share/?link=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fsharing%2Freference%2Fsend-dialog&app_id=123456789'"><img  class="ico" src="../assets/messenger.svg">Share on Messenger</a></div>
          <!--
          <div class="col-6 pad"><a :href="artwork.acf.pdf_download.url"><img class="ico" src="../assets/pdficon.svg">Download as PDF</a></div>
          <div class="col-6 pad"><a :href="'https://twitter.com/intent/tweet?text='+url"><img  class="ico" src="../assets/twitter.svg">Share on Twitter</a></div>
          <div class="col-6 pad"><a @click="copy()"><img  class="ico" src="../assets/copy.svg">Copy Link</a></div>
        -->
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareModal',
  data: function(){
    return {
      url: '',
      active: false
    }
  },
  props:{
    artwork: {}
  },
  methods:{
    toggle(){
      console.log('toggle!');
      this.active = !this.active;
    },
    hide(){
      this.active = false;
    },
    copy(){
      navigator.clipboard.writeText(this.url).then(function() {
        /* clipboard successfully set */
        console.log('copied', this.url);
      }, function() {
        /* clipboard write failed */
      });
    }
  },
  mounted(){
    this.url = window.location.href;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// Medium devices (tablets, 768px and up)
a, a:hover{color: black;}
.pad{padding-bottom: 1rem;}
.ico{position: relative; top: -2px; margin-right: 0.5rem;}
</style>
