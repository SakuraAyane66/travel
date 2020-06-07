<template>
    <div class="icons">
    <swiper>
    <swiper-slide v-for="(page,index) of pages" :key="index">
    <router-link tag="div" :to="'/iconsDetail/' + item.id" class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
        <img class="icon-img-content" :src="item.imgUrl" />
        <p class="icon-desc">{{item.desc}}</p>
        </div>
        </router-link>
    </swiper-slide>
    </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      iconList: []
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped>
  .icons{
    padding-bottom: 50%;
    height: 0;
    overflow: hidden;
    /*background-color: cadetblue;*/
  }
  .icon{
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    /*background-color: crimson;*/
  }
  .icon-img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .44rem;
    /*background: darkorange;*/
    box-sizing: border-box;
    padding: .8rem;
  }
  .icon-img-content{
    display: block;
    margin: 0 auto;
    height: 100%;
    /*background: darkred;*/
  }
  .icon-desc{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .44rem;
    height: .44rem;
    color: #333;
    text-align: center;
  }
</style>
