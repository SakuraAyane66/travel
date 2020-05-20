<template>
<div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <router-link to="/list">list</router-link>
    <div>home</div>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>

</style>
