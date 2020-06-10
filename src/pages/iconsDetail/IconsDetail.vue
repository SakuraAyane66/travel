<template>
<div>
   <icon-top :title="title"></icon-top>
  <div>
    <icon-list></icon-list>
  </div>
</div>
</template>

<script>
import IconList from './components/List'
import IconTop from './components/Top'
export default {
  name: 'iconsDetail',
  data () {
    return {
      title: '返回首页'
    }
  },
  components: {
    IconTop,
    IconList
  }
}
</script>

<style>

</style>
