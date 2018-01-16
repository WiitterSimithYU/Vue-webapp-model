import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  base: '/web/',
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      meta:{
        title:'活动首页'
      },
      path: '/index',
      component: resolve => require(['@/views/index/index.vue'], resolve)
    },
    {
      meta:{
        title:'年会抽奖'
      },
      path: '/luck-draw',
      component: resolve => require(['@/views/luck-draw/index.vue'], resolve)
    },
    {
      meta:{
        title:'倒计时'
      },
      path: '/count-down',
      component: resolve => require(['@/views/luck-draw/count-down.vue'], resolve)
    },
    {
      meta:{
        title:'中奖名单'
      },
      path: '/wins',
      component: resolve => require(['@/views/luck-draw/wins.vue'], resolve)
    },
    {
      meta:{
        title:'节目投票'
      },
      path: '/vote',
      component: resolve => require(['@/views/vote/index.vue'], resolve)
    },
    {
      path: '*',
      component: resolve => require(['@/views/error/not-found.vue'], resolve),
    }
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta.title;
})

export default router