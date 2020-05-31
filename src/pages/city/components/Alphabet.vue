<template>
      <ul class="list">
          <li class="item" @click="handleLetterClick" v-for="(item,key) of cities" :key="key" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" >{{key}}</li>
      </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove () {
      if (this.touchStatus) {

      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
