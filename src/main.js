import Vue from 'vue'
import App from './App.vue'

// 导入 Element_ui
import ElementUI from 'element-ui';
// 导入 Element-ui 样式
import 'element-ui/lib/theme-chalk/index.css';
// 插件 Element-ui
Vue.use(ElementUI);

// 导入全局初始化样式
import '@/style/base.scss'

// 路由整合
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 导入对应的路由
import discovery from '@/views/discovery.vue'
import playlists from '@/views/playlists.vue'
import playlist from '@/views/playlist.vue'
import songs from '@/views/songs.vue'
import mvs from '@/views/mvs.vue'
import mv from '@/views/mv.vue'
import result from '@/views/result.vue'

const router = new VueRouter({
  routes:[
    {
      // 发现音乐
      path:"/discovery",
      component:discovery
    },
    {
      // 推荐歌单
      path:"/playlists",
      component:playlists
    },
    {
      // 推荐歌单
      path:"/playlist",
      component:playlist
    },
    {
      // 最新音乐
      path:"/songs",
      component:songs
    },
    {
      // 最新音乐
      path:"/mvs",
      component:mvs
    },
    // mv详情
    {
      path:"/mv",
      component:mv
    },
    // 搜索结果页
    {
      path:"/result",
      component:result
    }
  ]
})




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载到Vue示例上
  router
}).$mount('#app')
