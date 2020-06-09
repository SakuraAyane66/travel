<template>
<div>
  <content-header :title="title"></content-header>
  <div>
    iconsDetail
  </div>
</div>
</template>

<script>
import ContentHeader from '../content/components/Header'
export default {
  name: 'iconsDetail',
  data () {
    return {
      title: '返回首页'
    }
  },
  components: {
    ContentHeader
  }
}
</script>

<style>

</style>
