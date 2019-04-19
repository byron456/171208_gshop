/*
路由器对象模块
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/Msite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/MSite',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/Order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/Profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/Search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/MSite'
    }
  ]
})
