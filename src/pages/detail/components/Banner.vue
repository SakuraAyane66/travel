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
