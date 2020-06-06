<template>
   <div>
   <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
   <content-header :title="title"></content-header>
   <content-author></content-author>
   <div class="content">
      <content-cont :words="test"></content-cont>
    </div>
   </div>
</template>

<script>
import DetailBanner from '../detail/components/Banner'
import ContentHeader from './components/Header'
import ContentAuthor from './components/Author'
import ContentCont from './components/Tcontent'
import axios from 'axios'
export default {
  name: 'Content',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      title: '',
      list: [],
      test: 'This is worlds'
    }
  },
  components: {
    DetailBanner,
    ContentHeader,
    ContentAuthor,
    ContentCont
  },
  methods: {
    getContentInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getDataSuccess)
    },
    getDataSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        /* this.sightName = data.sightName */
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
        /* title为测试数据 */
        this.title = data.sightName
      }
    }
  },
  mounted () {
    this.getContentInfo()
  }
}
</script>

<style scoped>
.content {
  height: 50rem;
}
</style>
