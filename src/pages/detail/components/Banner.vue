<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="bannerImg" />
    <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
            共{{this.bannerImgs.length}}张
        </div>
    </div>
  </div>
  <fade-animation>
  <common-gallary @close="handleGallaryClose" :imgs="bannerImgs" v-show="showGallary"></common-gallary>
  </fade-animation>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style scoped>
  .banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
  }
  .banner-img {
    width: 100%;
  }
  .banner-info {
   display: flex;
   position: absolute;
   color: black;
   background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
   left: 0;
   right: 0;
   bottom: 0;
   line-height: 1rem;
  }
  .banner-title {
   font-size: 1rem;
   padding:0 1rem;
   color: white;
   flex: 1;
  }
  .banner-number {
    padding: 0 .4rem;
    height: 1rem;
    line-height: 1rem;
    border-radius: .2rem;
    background: aqua;
  }
</style>
