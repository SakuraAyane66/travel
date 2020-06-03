<template>
<div class="footer">
  <div class="footer-bottom">
    <a :href="'http://beian.miit.gov.cn/'" target="_blank"><p>渝ICP备19006881号</p></a>
    <p>作者:  陈天龙</p>
    <p>学校:西南大学</p>
    <p>作者联系方式：809653361@qq.com</p>
  </div>
  <div class="footer-line">
    --我也是有底线的!!--<!-- 后续设置个数据动态绑定距离可能更好，z-index效果可能有瑕疵 -->
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style scoped>
.footer {
  height: 4.4rem;
  width: 100%;
}
.footer-bottom{
  margin-top:0px;
  background-color:#FF6600;
  width:100%;
  height:100%;
  text-align:center;
}
.footer-line {
  z-index: -1;
  position: fixed;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 1rem;
  background: greenyellow;
}
</style>
