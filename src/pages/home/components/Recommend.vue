<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
        <li class="item">
            <div class="item-img-wrapper">
                <img class="item-img" src='' />
            </div>
            <p></p>
            <p></p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend'
}
</script>

<style scoped>
.recommend-title{
    line-height: 40px;
    background: #87CEEB;
    text-indent: .2rem;
    margin-top: .2rem;
}
</style>
