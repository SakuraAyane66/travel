<template>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style scoped>
  .search{
    height: 2rem;
    background: aqua;
    padding: 0.1rem;
  }
  .search-input{
    padding:0 .1rem;
    height: 1.2rem;
    text-align: center;
    line-height: 1.2rem;
    width: 98%;
    border-radius: .06rem;
    color: #666;
  }
</style>
