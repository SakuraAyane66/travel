<template>
  <div class="content">
    {{words}} <!--这儿多行文本有一点问题-->
  </div>
</template>

<script>
export default {
  name: 'ContentCont',
  props: {
    words: String
  }
}
</script>

<style scoped>
.content {
  margin-top: .2rem;
  font-size: 1.4rem;
  background: cyan;
  text-indent: 32px;
  overflow: hidden;
}
</style>
