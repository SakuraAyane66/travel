<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
                <img class="item-img" :src='item.imgUrl' />
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      /*  recommendList: [{
        id: '0001',
        imgUrl: 'http://www.skydragon.vip/img/1.png',
        title: '这是Sakura喜欢的东西?',
        desc: '这就是传说中的vue开发么真是够ganbade的呢这就是传说中的vue开发么真是够ganbade的呢这就是传说中的vue开发么真是够ganbade的呢'
      }, {
        id: '0002',
        imgUrl: 'http://www.skydragon.vip/img/1.png',
        title: '这是Sakura喜欢的东西',
        desc: '这就是传说中的vue开发么真是够ganbade的呢这就是传说中的vue开发么真是够ganbade的呢这就是传说中的vue开发么真是够ganbade的呢'
      }, {
        id: '0003',
        imgUrl: 'http://www.skydragon.vip/img/1.png',
        title: '这是Sakura喜欢的东西',
        desc: '这就是传说中的vue开发么真是够ganbade的呢这就是传说中的vue开发么真是够ganbade的呢这就是传说中的vue开发么真是够ganbade的呢'
      }] */
    }
  }
}
</script>

<style scoped>
.recommend-title{
    line-height: 40px;
    background: #87CEEB;
    text-indent: .2rem;
    margin-top: .2rem;
}
.title{
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
}
.item{
    overflow: hidden;
    display: flex;
    height: 5.0rem;
}
.item-img{
    width: 4rem;
    height: 4rem;
    padding: .5rem;
}
.item-info{
    flex: 1;
    min-width: 0;
    padding: .1rem;
}
.item-title{
    margin-top: .50rem;
    line-height: .56rem;
    font-size: 1.1rem;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.item-desc{
    font-size: 15px;
    margin-top: 6px;
    line-height: 15px;
    color: rgb(14, 0, 0);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    background: #87CEEB;
}
.item-button{
    margin-top: .3rem;
    margin-left: .2rem;
    line-height: .8rem;
    background: #ff9300;
    padding: 0.1rem;
    border-radius: .03rem;
    color: #fff;
}
</style>
