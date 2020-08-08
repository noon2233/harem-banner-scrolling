import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@v/index'),
    meta: {
      title: '桃飽ハーレム - Taobao • Harem'
    }
  },
  {
    path: '/404',
    component: () => import('@v/404'),
    meta: {
      title: '(/ﾟДﾟ)/没找到页面'
    }
  },
  { path: '*', redirect: '/404' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
