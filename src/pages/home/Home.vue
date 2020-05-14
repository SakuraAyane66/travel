<template>
<div>
    
    <home-header></home-header>
    <router-link to="/list">list</router-link>
    <div>home</div>
</div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: { 
      HomeHeader
  }
}
</script>

<style>

</style>
