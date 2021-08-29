<template>
  <div>
  <div v-bind:class="{invert: mode}" id="hauser_header" >
    <div class="container">
      <div class="row pt-5">
        <div v-ani="{class:'fade-in-top', delay: 0}" class="col"><a href="/"><img id="hlogo" class="img-fluid" src="../assets/hauser-logo.svg"></a></div><!-- end col -->
        <div class="d-none d-xl-block col-6 text-center">
          <ul v-ani="{class:'fade-in-top', delay: 0}" id="desktopMenu">
            <li><a @click="navigate('#featured')">Featured</a></li>
            <li><a  @click="navigate('#allartworks')">All Artworks</a></li>
            <li><a @click="navigate('#aboutgallery')" >About gallery</a></li>
          </ul>
        </div><!-- end col -->
        <div v-ani="{class:'fade-in-top', delay: 0}" class="col icons text-right">
          <a href="#"><img src="../assets/heart.svg"></a>
          <a herf="#"><img src="../assets/person.svg"></a>
          <a  @click="menuModal = !menuModal"><img src="../assets/menu.svg"></a>

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
              <li><a class="fbold" @click="navigate('#featured')">Featured</a></li>
              <li><a class="fbold" @click="navigate('#allartworks')">All Artworks</a></li>
              <li><a class="fbold" @click="navigate('#aboutgallery')" >About gallery</a></li>
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
  },
  methods:{
    navigate(t){

      if(this.currentRouteName == 'Home'){
          this.menuModal = false;
        document.querySelector(t).scrollIntoView({
            behavior: 'smooth'
        });
      }else{
        window.location = '/'+t;
      }

    }
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  },
  mounted(){

    document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();


    });
});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only #hauser_header{position: fixed; width: 100%; z-index: 3000;} s-->
<style scoped lang="scss">
#hauser_header{position: relative; z-index: 2000;}
ul{list-style:  none; margin:0; padding:0;}
li{display: inline-block; margin: 0 2rem;}
a{color: white;}
.icons img{padding-left: 1rem; }

.menu-modal{color: black; }
.menu-modal ul{}
.menu-modal ul a{color: black;}
.menu-modal ul li{display: block; margin:1rem 0; font-size: 2rem;}
#desktopMenu a:hover{color: white;}
.invert #hlogo, .invert #desktopMenu a, .invert .icons a{filter: brightness(0%);}
</style>
