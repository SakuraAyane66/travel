<template>
<div class="header">
  <div class="header-left">
      <span class="iconfont">&#xe744;</span>
  </div>
  <div class="header-input">
      <!-- <span class="iconfont">&#xe753;</span> -->
      输入城市/景点/游玩主体
      </div>
  <router-link to="/city">
  <div class="header-right">
    {{this.city}}
    <div class="iconfont">&#xe74e;</div>
  </div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style scoped>
  .iconfont{
    font-size: 2rem;
    color: black;
  }
  .header{
    line-height: 40px;
    display: flex;
    background-color: aqua;
    font-size: 15px;
    }
  .header-left{
    width: 30px;
    display: flex;
    float: left;
    }
  .header-input{
    flex: 1;
    background-color: #fff;
    height: 30px;
    line-height: 30px;
    margin-top: 5px;
    border-radius: 5px;
    margin-left: 8px;
    text-align: center;
    color: #ccc;
    }
  .header-right{
    color: black;
    width: 80px;
    display: flex;
    margin-left: 5px;
    text-align: center;
    }
</style>
