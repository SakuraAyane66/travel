<template>
<div class="header">
  <div class="header-left">
      <span class="iconfont">&#xe744;</span>
  </div>
  <div class="header-input">
      <span class="iconfont">&#xe753;</span>
      输入城市/景点/游玩主体
      </div>
  <div class="header-right">
    {{this.city}}
    <span class="iconfont">&#xe74e;</span>
    </div>
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
  .header{
    line-height: 40px;
    display: flex;
    background-color: aqua;
    font-size: 10px;
    }
  .header-left{
    width: 60px;
    display: flex;
    float: left;
    background-color: red;
    }
  .header-input{
    flex: 1;
    background-color: #fff;
    height: 30px;
    line-height: 30px;
    margin-top: 5px;
    border-radius: 5px;
    margin-left: 12px;
    color: #ccc;
    }
  .header-right{
    width: 100px;
    display: flex;
    float: right;
    background-color: red;
    text-align: center;
    }
</style>
