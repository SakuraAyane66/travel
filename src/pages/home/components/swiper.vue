<template>
  <div class="wrapper">
  <swiper :options="swiperOptions" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id"><img class="swiper-img" :src="item.imgUrl" /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style scoped>
  .swiper-img{
    width:100%
  }
  .wrapper{
    overflow: hidden;
    width: 100%;
    height: 0px;
    padding-bottom: 30%;
    /* background-color: aqua; */
  }
</style>
