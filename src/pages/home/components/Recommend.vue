<template>
  <div>
    <div class="recommend-title">热门快讯</div>
    <ul>
        <router-link
         tag="li"
         class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
                <img class="item-img" :src='item.imgUrl' />
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
            </div>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
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
    margin-top: .8rem;
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
    -webkit-line-clamp: 1;
    overflow: hidden;
    background: #87CEEB;
}
.item-button{
    margin-top: .4rem;
    margin-left: .2rem;
    line-height: .8rem;
    background: #ff9300;
    padding: 0.1rem;
    border-radius: .03rem;
    color: #fff;
}
</style>
