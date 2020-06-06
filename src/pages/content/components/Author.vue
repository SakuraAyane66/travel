<template>
  <div class="middle">
    <span class="time">time:{{time}}</span><span class="author">作者:{{author}}</span>
  </div>
</template>

<script>
export default {
  name: 'ContentAuthor',
  props: {
  },
  data () {
    return {
      time: 'wao',
      author: 'CTL'
    }
  }
}
</script>

<style scoped>
.middle {
  margin-top: .1rem;
  text-align: center;
  font-size: 1.1rem;
}
.time {
  margin: 0 auto;
}
.author {
  margin-left: 2rem;
}
</style>
