<template>
    <div class="hearder">
    城市选择
    <router-link to="/">
     <div class="iconfont header-back">&#xe744;</div>
    </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped>
  .hearder{
    position: relative;
    overflow: hidden;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    color: #fff;
    background: aqua;
  }
  .header-back{
    top: 0;
    left: 0;
    position: absolute;
    width: .64rem;
    font-size: 2.7rem;
    text-align: center;
    color: #fff;
  }
</style>
