import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// 创建一个路由: 映射关系
const router = createRouter({
  // 指定采用的模式
  history: createWebHistory(),
  // 映射关系
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('../views/Home.vue'),
      children: [
        {
          path: '/home',
          redirect: '/home/recommend'
        },
        {
          path: 'recommend',
          component: () => import('../views/HomeRecommend.vue')
        },
        {
          path: 'ranking',
          component: () => import('../views/HomeRanking.vue')
        }
      ]
    },
    {
      path: '/main',
      component: () => import('../views/Main.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

// 1.动态管理路由
let isAdmin = true
if (isAdmin) {
  // 一级路由
  router.addRoute({
    path: '/admin',
    component: () => import('../views/Admin.vue')
  })

  // 添加vip页面
  router.addRoute('home', {
    path: 'vip',
    component: () => import('../views/HomeVip.vue')
  })
}

// // 获取router中所有的映射路由对象
// console.log(router.getRoutes())

// // 2.路由导航守卫
// // 进行任何的路由跳转之前, 传入的beforeEach中的函数都会被回调
// // 需求: 进入到订单(order)页面时, 判断用户是否登录(isLogin -> localStorage保存token)
// // 情况一: 用户没有登录, 那么跳转到登录页面, 进行登录的操作
// // 情况二: 用户已经登录, 那么直接进入到订单页面
// router.beforeEach((to, from) => {
//   // 1.进入到任何别的页面时, 都跳转到login页面
//   // if (to.path !== "/login") {
//   //   return "/login"
//   // }

//   // 2.进入到订单页面时, 判断用户是否登录
//   const token = localStorage.getItem('token')
//   if (to.path === '/order' && !token) {
//     return '/login'
//   }
// })

export default router
