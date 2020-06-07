import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Content from '@/pages/content/Content'
import iconsDetail from '@/pages/iconsDetail/IconsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/list',
      name: 'List',
      component: List
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, {
      path: '/content/:id',
      name: 'Content',
      component: Content
    }, {
      path: '/iconsDetail/:id',
      name: 'iconsDetail',
      component: iconsDetail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
