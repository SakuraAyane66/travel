<template>
<div class="full" v-show="this.$store.state.fullwhite">
   <i class="el-icon-circle-plus-outline icon-top" @click="handleChange"></i>
   <el-button type="primary" round class="login">登录按钮</el-button>
   <el-button type="primary" round class="created">注册按钮</el-button>
   <el-button type="primary" round class="think">还没想好</el-button>
</div>
</template>

<script>
export default {
  name: 'HomeFull',
  data () {
    return {
    /* fullwhite: false */
    }
  },
  methods: {
    handleChange () {
      this.$store.dispatch('changeFullwhite')
    }
  }
}
</script>

<style scoped>
html body .full {
  z-index: 100;
  position:fixed;
/*top: 0;
  bottom:0;
  left:0;
  right:0; */
  display: block;
  width: 100%;
  height: 100%;
  /* 渲染背景颜色 */
  background: linear-gradient(135deg, #fff 0%, #fff 50%, #ffbdbd 58%, #ffccdd 66%, #fdffb2 74%, #c5e5ff 82%, #d6faff 90%, #d6ffee 100%);
  background-position: 0% 0%;
  /* 必须要在background后面才有效  */
  background-size: 220% 220%;
  text-align: center;
  -moz-animation: loading 1.3s ease-out forwards;
  -webkit-animation: loading 1.3s ease-out forwards;
  animation: loading 1.3s ease-in-out forwards;
  /* background: white; */
}
@keyframes loading{
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}
.login {
  position: fixed;
  top: 40%;
  left: 40%;
}
.created {
  margin: 0;
  position: fixed;
  top: 50%;
  left: 40%;
}
.think {
  margin: 0;
  position: fixed;
  top: 60%;
  left: 40%;
}
.icon-top{
  position: absolute;
  top: .2rem;
  left: .2rem;
  font-size: 2rem;
  color: black;
}
</style>
