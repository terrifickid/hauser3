<template>
  <div  id="Artwork">
    <div v-if="artwork">
    <div class="bg-subtle-grey">
        <Header :mode="1"></Header>
        <div   class="container pb-5 pt-5">
          <div class="row d-flex align-items-center">
            <div class="d-none d-xl-block col-3 align-self-end ">
              <div class="row d-flex align-items-center">
                <div class="col-2"><a class="avatar" v-bind:style="{'background-image': 'url('+artwork.acf.hero_audio_avatar.url+')'}"></a></div>
                <div class="col"><div class="ml-1">{{artwork.artist.name}} on {{artwork.title.rendered}}</div></div>
              </div>
            </div>

            <div class="col-10 offset-1 col-lg-8 col-xl-6 offset-lg-0 offset-xl-0">
              <div class="p-3">

                <Lottie v-if="artwork.acf.hero_3d_" :url="artwork.acf.hero_3d_"></Lottie>
                <img v-if="!artwork.acf.hero_image.url" :src="artwork.acf.hero_image.url" class="img-fluid">
              </div>
            </div>

            <div class="col-lg-4 col-xl-3">
              <h4>{{artwork.artist.name}}</h4>
              <p>{{artwork.title.rendered}}</p>
              <p v-html="artwork.acf.hero_content"></p>
              <p>${{artwork.acf.price}}</p>
              <p class="mt-4"><a class="btn btn-block btn-md btn-outline-dark"><img class="btniconfix" src="../assets/whatsapp.svg"> Live Chat</a>
              <a class="btn btn-block btn-md btn-outline-dark">Email Enquiry</a></p>

              <p class="mt-5"><a href="#">Details & Features <b-icon class="ml-2" icon="arrow-right"/></a></p>
              <p><a href="#">About the artwork <b-icon class="ml-2" icon="arrow-right"/></a></p>
              <p><a href="#">About the artist <b-icon class="ml-2" icon="arrow-right"/></a></p>

              <div style="padding-top: 5rem;">
                <a class="circlelink mr-3"><b-icon  icon="heart"/></a><a class="circlelink"><b-icon  icon="share"/></a>
              </div>
            </div>
          </div>
        </div><!-- end container -->


</div>

<div class="artwork_images">
  <div class="container">
<div class="d-none d-sm-block artwork col-8 offset-2" v-for="artwork in artwork.acf.artwork_images" :key="artwork.ID">
  <img :src="artwork.url" class="img-fluid">
</div>
</div>

<div class="d-sm-none artwork" v-for="artwork in artwork.acf.artwork_images" :key="artwork.ID">
  <img :src="artwork.url" class="img-fluid">
</div>

</div>

<div class="container">
  <div class="row pb-5" >
    <div class="d-none d-md-block col-1" style="border-right: 1px solid black;"></div>
    <div class="col-md-8 offset-md-1" >
      <div style="padding: 3rem 0">
      <h3 class="mb-4">Details & features</h3>
      <div class="row mb-2" v-for="detail in artwork.acf.details" :key="detail.title">
        <div class="col-3">{{detail.title}}:</div><div class="col">{{detail.description}}</div>
      </div><!-- end row -->
      <h3 class="mb-4 mt-5">About the artwork</h3>
      <p v-html="artwork.acf.about_the_artwork_description"></p>
    </div>
    </div>
  </div>
</div>

<div style="height: 4rem;"></div>


    <div v-for="panel in artwork.acf.panels" :key="panel.title">

      <template v-if="panel.acf_fc_layout == 'left_image'">
        <div class="d-md-none" style="height: 20rem; background-size: cover; background-position: center center;" v-bind:style="{'background-image': 'url('+panel.image.url+')'}"></div>
        <div class="container-fluid">
          <div class="row">
          <div class="col-6 d-none d-md-block" style="background-size: cover; background-position: center center;" v-bind:style="{'background-image': 'url('+panel.image.url+')'}"></div>
            <div class="col">
              <div style="padding: 8rem 4rem">
                <h3>{{panel.title}}</h3>
                {{panel.description}}
              </div>
            </div>
        </div>
        </div>
        <div class="d-none d-md-block" style="height: 8rem;"></div>
      </template>

      <template v-if="panel.acf_fc_layout == 'right_image'">
          <div class="d-md-none" style="height: 20rem;  background-size: cover; background-position: center center;" v-bind:style="{'background-image': 'url('+panel.image.url+')'}"></div>
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div style="padding: 8rem 4rem">
                <h3>{{panel.title}}</h3>
                {{panel.description}}
              </div>
            </div>
            <div class="col-6 d-none d-md-block" style="background-size: cover; background-position: center center;" v-bind:style="{'background-image': 'url('+panel.image.url+')'}"></div>
          </div>
        </div>
          <div class="d-none d-md-block" style="height: 8rem;"></div>
      </template>

      <template v-if="panel.acf_fc_layout == 'quote'">
        <div class="col">
          <div v-bind:style="{'background-color': panel.background_color}" style="padding: 4rem 4rem 3rem 4rem;  color: white;" >
            <h3>{{panel.description}}</h3>
            <p><b-icon class="ml-2" icon="dash"/> {{panel.author}}</p>
          </div>
        </div>
          <div  style="height: 8rem;"></div>
      </template>

      <template v-if="panel.acf_fc_layout == 'small_print'">
        <div class="container">
          <div class="col">
        <small>  {{panel.small_print}}</small>
      </div>
      </div>
        <div style="height: 8rem;"></div>
      </template>






</div>

<div class="container">
  <div class="row">
    <div class="col">
      <h3>Explore Other Artworks</h3>
      <div class="row">
        <div v-for="artwork in artwork.acf.other_artworks" :key="artwork.ID" class="col">
              <pre>{{artwork}}</pre>
        </div>
      </div>

    </div>
  </div>
</div>

<Footer></Footer>

  </div>
</div>
</template>
<script>
import axios from 'axios';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Lottie from '@/components/Lottie.vue';
export default{
  components: {
    Header,
    Footer,
    Lottie
  },
  mounted: async function() {
  try {
        const resp = await axios.get(process.env.VUE_APP_URI+'wp-json/wp/v2/hauser_artworks/'+this.$route.params.id);
        this.artwork = resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  },
  data: function() {
    return {
      artwork: null
    }
  }
}
</script>
<style scoped lang="scss">
a, a:hover{color: black}
.artwork{margin-bottom: 6rem;}
.artwork_images{margin: 4rem 0;}
.avatar{width: 40px; height: 40px; background-color: red; display: inline-block; background-size: cover; border-radius: 10rem;}
</style>
