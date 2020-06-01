<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">
          当前城市
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.$store.state.city}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
          <div class="button-list">
            <div class="button-wrapper" v-for="item in hot" :key="item.id" @click="handleCityClick(item.name)">
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="area" :ref="key" v-for="(item,key) of cities" :key="item.id">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id" @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style scoped>
.border-topbottom {
  border-color: #777;
}
.list {
  overflow: hidden;
  position: absolute;
  top: 85px;
  left: 0;
  right: 0;
  bottom: 0;
}
.title {
  line-height: 2rem;
  background: #eee;
  padding-left: 0.2rem;
  border: 0.5px solid rgb(85, 81, 81);
}
.button-list {
  overflow: hidden;
  background: white;
  padding: 0.2rem 1rem 0.2rem 0.1rem;
}
.button-wrapper {
  float: left;
  width: 33.33%;
}
.button {
  padding: 0.1rem 0;
  border-radius: 0.06rem;
  margin: 0.1rem;
  background: #eee;
  text-align: center;
  border: 0.02rem solid #ccc;
}
.item {
  line-height: 1.7rem;
  padding-left: .8rem;
  color: blue;
  border-bottom: 1px solid rgb(224, 224, 224);
}
</style>
