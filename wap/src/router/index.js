import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/views/Common/index.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: resolve => require(['@/views/index/index.vue'], resolve),
    },
    {
      path: '/',
      component: Common,
      children: [
        {
          meta:{
            title:'抽奖'
          },
          path: '/luck-draw',
          component: resolve => require(['@/views/luck-draw/index.vue'], resolve),
        },
      ]
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