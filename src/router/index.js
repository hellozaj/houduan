import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import main from '@/components/main'
import normal from '@/components/normal'
import fabu from '@/components/fabu'
import jz1 from '@/components/jz1'
import jz2 from '@/components/jz2'
import jz3 from '@/components/jz3'
import jz4 from '@/components/jz4'
import yj1 from '@/components/yj1'
import yj2 from '@/components/yj2'
import qx1 from '@/components/qx1'
import update from '@/components/update'
import insert from '@/components/insert'
import yj1update from '@/components/yj1update'
import updateone from '@/components/updateone'
import addone from '@/components/addone'
import twoxiugai from '@/components/twoxiugai'
import twoadd from '@/components/twoadd'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component:login
    },
    {
      path:"/main",
      name: 'main',
      component:main,
      redirect:"/main/normal"
    },
    {
      path:'/updateone/:jid',
      name: 'updateone',
      component:updateone
    },
    {
      path:'/addone',
      name: 'addone',
      component:addone
    },
    {
      path:'/twoxiugai/:id',
      name: 'twoxiugai',
      component:twoxiugai
    },
    {
      path:'/twoadd',
      name: 'twoadd',
      component:twoadd
    },
    {
      path: '/main',
      name: 'main',
      component:main,
      children:[
        {path:'normal',component:normal},
        {path:'fabu',component:fabu},
        {path:'jz1',component:jz1},
        {path:'jz2',component:jz2},
        {path:'jz3',component:jz3},
        {path:'jz4',component:jz4},
        {path:'yj1',component:yj1},
        {path:'yj2',component:yj2},
        {path:'qx1',component:qx1},
      ]
    },
    {
      path: '/update/:id',
      name: 'update',
      component:update
    },
    {
      path: '/insert',
      name: 'insert',
      component:insert
    },
    {
      path: '/yj1update/:id',
      name: 'yj1update',
      component:yj1update
    }
  ]
})
