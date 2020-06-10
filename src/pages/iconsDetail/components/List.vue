<template>
<div class="heng">
  <div class="box"  v-for="item in itemlist" :key="item.id" @click="handleBannerClick">
    <!-- <img class="img" v-lazy="item.imgUrl" /> --> 
    <!-- 大图预览 -->
    <el-image 
    style="width: 100%; height: 100%"
    :src="item.imgUrl" 
    :preview-src-list="test">
   </el-image>
    <!-- <fade-animation>
      <common-gallary @close="handleGallaryClose" :imgs="" v-show="showGallary">
      </common-gallary>
    </fade-animation> -->
    <!-- <div class="img"></div> -->
    <!-- <span class="font-style">作者:{{author}}</span>
    <span>id:{{item.id}}</span> -->
  </div>
  <!-- <div class="box">
    <img class="img" :src="imgUrl" />
    <span class="font-style">第{{this.id}}图片</span>
  </div> -->
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'IconList',
  props: {
    /* imgUrl: Array,
    id: Number */
  },
  data () {
    return {
      showGallary: false,
      test: ['http://www.skydragon.vip/img/2.jpg','http://www.skydragon.vip/img/12.JPG'],
      /* imgUrl: 'http://www.skydragon.vip/img/2.jpg', */
      id: 1,
      author: 'Sakura',
      itemlist: [
        {
          imgUrl: 'http://www.skydragon.vip/img/2.jpg',
          id: 1
        }, {
          imgUrl: 'http://www.skydragon.vip/img/12.JPG',
          id: 2
        }, {
          imgUrl: 'http://www.skydragon.vip/img/15.JPG',
          id: 3
        },
        {
          imgUrl: 'http://www.skydragon.vip/img/2.jpg',
          id: 4
        }, {
          imgUrl: 'http://www.skydragon.vip/img/2.jpg',
          id: 5
        },
        {
          imgUrl: 'http://www.skydragon.vip/img/15.JPG',
          id: 6
        }, {
          imgUrl: 'http://www.skydragon.vip/img/12.JPG',
          id: 7
        }, {
          imgUrl: 'http://www.skydragon.vip/img/15.JPG',
          id: 8
        },
        {
          imgUrl: 'http://www.skydragon.vip/img/2.jpg',
          id: 9
        }, {
          imgUrl: 'http://www.skydragon.vip/img/2.jpg',
          id: 10
        },
        {
          imgUrl: 'http://www.skydragon.vip/img/15.JPG',
          id: 11
        }]
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
.heng {
  padding-top: .5rem;
  text-align: center;
}
.box {
  /* display: flex; */
  overflow: hidden;;
  float: left;
  width: 10rem;
  height: 10rem;
  margin-top: 2rem;
  margin-left: .8rem;
  background: gray;
}
.img {
  /* background: black; */
  height: 100%;
  width: 100%;
}
.font-style {
  font-size: 1rem;
}
</style>
