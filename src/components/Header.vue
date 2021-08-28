<template>
  <div>
  <div  id="hauser_header" >
    <div class="container">
      <div class="row pt-5">
        <div v-ani="{class:'fade-in-top', delay: 0}" class="col"><a href="/"><img id="hlogo" class="img-fluid" src="../assets/hauser-logo.svg"></a></div><!-- end col -->
        <div class="d-none d-xl-block col-6 text-center">
          <ul v-ani="{class:'fade-in-top', delay: 0}" id="desktopMenu">
            <li><a href="#">Featured</a></li>
            <li><a href="#">All Artworks</a></li>
            <li><a href="#">About gallery</a></li>
          </ul>
        </div><!-- end col -->
        <div v-ani="{class:'fade-in-top', delay: 0}" class="col icons text-right">
          <a herf="#"><img src="../assets/heart.svg"></a>
          <a herf="#"><img src="../assets/person.svg"></a>
          <a @click="menuModal = !menuModal"><img src="../assets/menu.svg"></a>

        </div><!-- end col -->
      </div><!-- end row -->
    </div><!-- end containr -->


    <div v-bind:class="{ 'active': menuModal }" class="fullscreen-modal menu-modal">
      <div class="container">
        <div class="row pt-5">
          <div class="col"><a href="/"><img style="filter: brightness(0%);" class="img-fluid" src="../assets/hauser-logo.svg"></a></div><!-- end col -->
          <div class="col text-right"><a  @click="menuModal = !menuModal">Close</a></div>
        </div>
        <div class="row" >
          <div class="col" style="position: relative;">
            <ul style="position: absolute; top: 25vh;">
              <li><a class="fbold" href="#">Featured</a></li>
              <li><a class="fbold" href="#">All Artworks</a></li>
              <li><a class="fbold"  href="#">About gallery</a></li>
            </ul>


          </div>
        </div>
      </div>

    </div>



  </div><!-- end hauser_header -->

</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    mode: Number
  },
  data: function() {
    return {
      menuModal: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only #hauser_header{position: fixed; width: 100%; z-index: 3000;} s-->
<style scoped lang="scss">
#hauser_header{position: relative; z-index: 2000;}
ul{list-style:  none; margin:0; padding:0;}
li{display: inline-block; margin: 0 2rem;}
a{color: white;}
.icons img{padding-right: 1rem; }
.fullscreen-modal{z-index: 100; overflow: hidden; height:0; visibility: hidden;  transition:  height 0.25s ease, visibility 0.25s, opacity 0.25s ease;}
.active{visibility: visible; height: 100%; opacity: 1; }
.menu-modal{color: black; }
.menu-modal ul{}
.menu-modal ul a{color: black;}
.menu-modal ul li{display: block; margin:1rem 0; font-size: 2rem;}
#desktopMenu a:hover{color: white;}
.invert #hlogo, .invert #desktopMenu, .invert .icons{filter: brightness(0%);}
</style>
