<template>
      <ul class="list">
          <li class="item" v-for="(item,key) of cities" :key="key" >{{key}}</li>
      </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style scoped>
  .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 20px;
    right: 0;
    bottom: 0;
    width: 2rem;
  }
  .item{
    line-height: 1.3rem;
    text-align: center;
    color: black;
  }
</style>
