<template>
  <div class="wrapper">
  <swiper :options="swiperOptions" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" />
      <!-- <el-image 预览功能失败了
        style="width: 100%; height: 100px"
        :src="item.imgUrl"
        :preview-src-list="srcList">
      </el-image> -->
    </swiper-slide>
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
    width: 100%;
    height: 120px;
  }
  .wrapper{
    overflow: hidden;
    width: 100%;
    height: 0px;
    padding-bottom: 30%;
    /* background-color: aqua; */
  }
</style>
