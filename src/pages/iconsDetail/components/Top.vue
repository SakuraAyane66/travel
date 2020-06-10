<template>
<div>
  <router-link tag="div" to="/" v-show="showIcon" class="showTop"> <!--返回-->
    <i class="el-icon-arrow-left icontop"></i>
  </router-link>
  <el-backtop :bottom="10" :right="0"></el-backtop> <!--backtop-->
  <div class="header-fixed" v-show="!showIcon" :style="opacityStyle"> <!--返回-->
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe744;</div>
      </router-link>
    我又出现啦!
  </div>
  <!--<div class="header">{{this.title}}</div> 内容-->
</div>
</template>

<script>
export default {
  name: 'IconTop',
  props: {
    title: String
  },
  data () {
    return {
      showIcon: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 0.7 ? 0.7 : opacity
        this.opacityStyle = { opacity }
        this.showIcon = false
      } else {
        this.showIcon = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.header {
  margin-top: .2rem;
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
}
.icontop {
  background: white;
  font-size: 1.6rem
}
.showTop {
  position: absolute;
  line-height: 1.5rem;
  left: .5rem;
  top: .6rem;
  width: 1.5rem;
  height: 1.5rem;
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  background: black;
  font-size: 1rem;
}
.header-fixed-back {
  position: absolute;
  padding: .1rem 0;
  font-size: 2rem;
  top: 0;
  left: 0;
  width: .65rem;
}
</style>
