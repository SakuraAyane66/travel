<template>
  <div class="banner">
    <img class="banner-img" src="http://www.skydragon.vip/img/2.jpg" />
    <div class="banner-info">
        <div class="banner-title">最喜欢的Sakura小姐</div>
        <div class="banner-number">?????
            <span class="iconfont">&#xe744;</span>
            39
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style scoped>
  .banner {
    position: relative;
    overflow: hidden;
    height: 0;
    background: coral;
    padding-bottom: 50%;
  }
  .banner-img {
    width: 100%;
  }
  .banner-info {
   display: flex;
   position: absolute;
   background: chartreuse;
   left: 0;
   right: 0;
   bottom: 0;
   line-height: .6rem;
  }
</style>
