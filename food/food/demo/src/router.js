import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from './components/home.vue'
import fruitlist from './components/fruitlist'
import shucailist from './components/shucailist'
import seefoodlist from './components/seefoodlist'
import lingshilist from './components/lingshilist'
import detail from './components/detail'
import news from './components/news'
import cart from './components/cart'
import login from './components/login'
import login2 from './components/login2'
import pay from './components/pay.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: home },
    {path: '/fruitlist',component:fruitlist},
    {path:'/shucailist',component:shucailist},
    {path:'/seefoodlist',component:seefoodlist},
    {path:'/lingshilist',component:lingshilist},
    {path:'/detail/:id',component:detail},
    {path:'/login',component:login},
    {path:'/login2',component:login2},
    {path:'/news',component:news},
    {path:'/cart/',component:cart},
    {path:'/pay/',component:pay},
  ]
})
