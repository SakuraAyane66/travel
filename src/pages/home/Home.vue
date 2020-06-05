<template>
<div>
    <home-full></home-full>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
    <home-lazy></home-lazy>
    <home-footer :footerShow="footerShow"></home-footer>
    <!--<router-link to="/list">list</router-link>
    <div>home</div>-->
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import HomeFooter from './components/Footer'
import HomeLazy from './components/Lazyimg'
import HomeFull from './components/Full'
import FadeAnimation from 'common/fade/FadeAnimation'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    HomeFooter,
    HomeLazy,
    HomeFull,
    FadeAnimation
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      footerShow: false
    }
  },
  computed: {
    /* 映射方法 */
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      /* console.log(res) */
    },
    handleScroll (e) {
      var scrollTop = e.target.scrollTop
      var windowHeight = e.target.clientHeight
      var scrollHeight = e.target.scrollHeight
      if (scrollTop + windowHeight === scrollHeight) {
        this.footerShow = true
      } else {
        this.footerShow = false
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
    /* window监听事件 */
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
    /* console.log('activited') */
  }
}
</script>

<style>

</style>
