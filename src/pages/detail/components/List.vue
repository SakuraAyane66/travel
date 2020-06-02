<template>
  <div>
    <div class="item" v-for="(item,index) of list" :key="index">
       <div class="item-title border-bottom">
           <span class="item-title-icon">{{index+1}}</span>
           {{item.title}}
        </div>
        <div v-if="item.children" class="item-children">
         <detail-list :list="item.children"></detail-list>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style scoped>
.item-title-icon {
  position: absolute;
  left: 0.3rem;
  top: .3rem;
  display: inline-block;
  width: .8rem;
  height: .8rem;
  margin-right: .2rem;
}
.item-title {
  line-height: 1rem;
  font-size: 1rem;
  padding: .3rem 1rem;
}
.item-children {
  padding: 0 1rem;
}
</style>
