<template>
<div class="header">
  <el-backtop :bottom="10" :right="0"></el-backtop>
  <div class="header-left">
      <i class="el-icon-circle-plus-outline icon-top" @click="handleChange"></i>
<!--       <div class="iconfont back-icon">&#xe744;</div> -->
  </div>
  <div class="header-input">
      <!-- <span class="iconfont">&#xe753;</span> -->
      搜索功能暂时没有实现
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
  },
  methods: {
    handleChange () {
      this.$store.dispatch('changeFullwhite')
    }
  }
}
</script>

<style scoped>
  .iconfont{
    font-size: 1rem;
    color: black;
  }
  .icon-top{
    position: absolute;
    top: .2rem;
    left: .2rem;
    font-size: 2rem;
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
