<template>
  <div>
    <div v-bind:class="{ 'active': menuModal}" class="fullscreen-modal menu-modal">
      <div class="container">
        <div class="row pt-5">
          <div class="col"><a href="/"><img style="filter: brightness(0%);" class="img-fluid" src="../assets/hauser-logo.svg"></a></div><!-- end col -->
          <div class="col text-right"><a  @click="menuModal = !menuModal">Close</a></div>
        </div>
        <div class="row" >
          <div class="col" style="position: relative;">
            <ul style="position: absolute; top: 25vh;">
            <li v-for="(link, index) in master.main_menu" :key="index"><a class="fbold" @click="navigate(link.link_url)">{{link.title}}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  <div style="position: fixed; z-index: 2000; width: 100%;" >
  <div v-bind:class="{invert: mode || belowFold, 'fade-in-top': showHeader, wbg: belowFold }" id="hauser_header" >
    <div class="container">
      <div class="row pt-5">
        <div class="col"><a href="/"><img id="hlogo" class="img-fluid" src="../assets/hauser-logo.svg"></a></div><!-- end col -->
        <div class="d-none d-xl-block col-6 text-center">
          <ul  id="desktopMenu">
            <li v-for="(link, index) in master.main_menu" :key="index"><a @click="navigate(link.link_url)">{{link.title}}</a></li>
          </ul>
        </div><!-- end col -->
        <div class="col icons text-right">
          <a href="/favorites"><img src="../assets/heart.svg"></a>
          <a  @click="menuModal = !menuModal"><img src="../assets/menu.svg"></a>

        </div><!-- end col -->
      </div><!-- end row -->
    </div><!-- end containr -->


  </div><!-- end hauser_header -->
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    mode: Number,
  },
  data: function() {
    return {
      menuModal: false,
      oldScrollY: 0,
      showHeader: true,
      belowFold: false
    }
  },
  methods:{
    headerResize(){

      var height = window.innerHeight;

      if( window.scrollY > height ){
        this.belowFold = true;
      }else{
        this.belowFold = false;
      }
      //console.log(window.scrollY, height, this.belowFold)


    },
    headerScroll(){
      var mod = 0;
      var scrollY = window.scrollY;
      if(scrollY > this.oldScrollY) mod = 1;
      if(scrollY < this.oldScrollY) mod = -1;
      this.oldScrollY = scrollY;
      if(mod > 0) this.hide();
      if(mod < 0) this.reveal();
    },
    hide(){
      this.showHeader = false;
    },
    reveal(){
      this.showHeader = true;
    },
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
    },
    master () {
      return this.$store.state.master;
    },
  },
  mounted(){
    window.addEventListener('resize', () => { this.headerResize(); });
    document.addEventListener('scroll', () => { this.headerScroll(); this.headerResize(); });
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
#hauser_header{position: relative; z-index: 2000; padding-bottom: 2.5rem; visibility: hidden;}
.wbg{background: white;}
ul{list-style:  none; margin:0; padding:0;}
li{display: inline-block; margin: 0 2rem;}
a{color: white;}
.icons img{padding-left: 1rem; }

.menu-modal{color: black; }
.menu-modal ul{}
.menu-modal ul a{color: black;}
.menu-modal ul li{display: block; margin:1rem 0; font-size: 2rem;}
#desktopMenu a{color: white;}
#desktopMenu a:hover{color: white;}
.invert #hlogo, .invert #desktopMenu a, .invert .icons a{filter: brightness(0%);}
#hauser_header.fade-in-top{visibility: visible;}
</style>
