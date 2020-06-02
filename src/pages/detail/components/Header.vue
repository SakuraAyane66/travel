<template>
  <div>
    <router-link v-show="showAbs" tag="div" to="/" class="header-abs">
       <div class="iconfont header-back">&#xe744;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
        <router-link to="/">
       <div class="iconfont header-fixed-back">&#xe744;</div>
    </router-link>
    景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHearder',
  data () {
    return {
      showAbs: true,
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
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
.header-abs
  position: absolute
  text-align: center
  line-height: 1.5rem
  left: .5rem
  top: .6rem
  width: 1.5rem
  height: 1.5rem
  border-radius: .8rem
  background: rgba(0,0,0,.8)
 .header-back
   color: #fff
   font-size: 1.6rem
.header-fixed
  z-index: 2
  position: fixed
  top: 0
  left: 0
  right: 0
  height: 30px
  text-align: center
  line-height: 30px
  color: #fff
  background: aqua
  font-size: 1rem
  .header-fixed-back
    position: absolute
    font-size: 2rem
    top: 0
    left: 0
    width: .65rem
</style>
