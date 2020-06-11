<template>
<div>
  <icon-top :title="title"></icon-top> <!-- 头部内容 -->
  <div>
    <icon-list></icon-list><!-- 图片循环和预览 -->
  </div>
  <div class="tbtset">
    <test></test> <!-- 图表测试 -->
  </div>
</div>
</template>

<script>
import IconList from './components/List'
import IconTop from './components/Top'
import Test from './components/Hello'
export default {
  name: 'iconsDetail',
  data () {
    return {
      title: '返回首页'
    }
  },
  components: {
    IconTop,
    IconList,
    Test
  }
}
</script>

<style scoped>
.tbtset {
}
</style>
