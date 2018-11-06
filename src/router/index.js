import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '../components/IndexView'
import Video from '../components/Video.vue'
import FirstPage from '../subComponents/FirstPage.vue'
import SportsView from '../subComponents/SportsView'
import VipView from '../subComponents/VipView'
import LiveView from '../subComponents/LiveView'
import MineView from '../subComponents/MineView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: IndexView,
      children: [
      {path: '/index/first', component: FirstPage},
      {path: '/index/sports', component: SportsView},
      {path: '/index/vip', component: VipView},
      {path: '/index/live', component: LiveView},
      {path: '/index/mine', component: MineView}
    ]},
    {path: '/video', name: 'Video', component: Video}
  ],
  linkActiveClass: 'active'
})
