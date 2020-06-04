<template>
  <div>
    <div class="recommend-title">精选文章</div>
    <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                <img class="item-img" v-lazy='item.imgUrl' />
                </div>
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
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
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
}
.item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 37.02%;
}
.item-img{
    width: 100%;
    height: 40vw;
}
.item-info{
    padding: .1rem;
}
.item-title{
    margin-top: .50rem;
    line-height: .56rem;
    font-size: .8rem;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.item-desc{
    font-size: 13px;
    margin-top: 4px;
    line-height: 15px;
    color: rgb(17, 49, 231);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    background:  rgb(6, 176, 243);
}

</style>
