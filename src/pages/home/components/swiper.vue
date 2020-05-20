<template>
  <div class="wrapper">
  <swiper :options="swiperOptions">
    <swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl" />{{item.imgUrl}}{{item.id}}</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://www.skydragon.vip/img/1.png'
      }, {
        id: '0002',
        imgUrl: 'http://www.skydragon.vip/img/2.jpg'
      }
      ]
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
    padding-bottom: 50%;
    background-color: aqua;
  }
</style>
