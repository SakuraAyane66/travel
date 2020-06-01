<template>
<div class="header">
  <div class="header-left">
      <div class="iconfont back-icon">&#xe744;</div>
  </div>
  <div class="header-input">
      <!-- <span class="iconfont">&#xe753;</span> -->
      输入城市/景点/游玩主体
      </div>
  <router-link to="/city">
  <div class="header-right">
    <!-- {{this.$store.state.city}} -->
    {{this.city}}
    <span class="iconfont">&#xe74e;</span>
  </div>
  </router-link>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped>
  .iconfont{
    font-size: 1rem;
    color: black;
  }
  .back-icon{
    text-align: center;
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
    float: right;
    color: black;
    min-width: 3rem;
    padding: 0 .1rem;
    text-align: right;
    }
</style>
