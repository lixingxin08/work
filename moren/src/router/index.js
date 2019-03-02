import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Project from '../components/Project/Project.vue'
import News from '../components/News/News.vue'
import Flash from '../components/Flash/Flash.vue'
import NewsDetail from '../components/News/NewsDetail/NewsDetail.vue'
import ProjectDetail from '../components/Project/ProjectDetail/ProjectDetail.vue'
import Login from '../components/user/login/login.vue'
import SelectZone from '../components/user/login/SelectZone/SelectZone.vue'
import userMsg from '../components/user/user_msg/user_msg.vue'
import MySet from '../components/user/MySet/MySet.vue'
import CallUs from '../components/user/MySet/CallUs/CallUs.vue'
import JifenDetail from '../components/user/JifenDetail/JifenDetail.vue'
import changeMsg from '../components/user/changeMsg/changeMsg.vue'
import yaoQing from '../components/user/yaoQing/yaoQing.vue'
import InviteMsg from '../components/user/yaoQing/Invite_msg/Invite_msg.vue'
import MyInvite from '../components/user/MyInvite/MyInvite.vue'
Vue.use(Router)

const router= new Router({
  routes: [
    {
      path:'/',redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
  {
    path:'/project',
    name:'project',
    component:Project
  },
  {
    path:'/news',
    name:'news',
    component:News
  },
  {
    path:'/flash',
    name:'flash',
    component:Flash
  },
  {
    path:'/news/newsdetail',
    name:'newsdetail',
    component:NewsDetail
  },
  {
    path:'/project/projectdetail',
    name:'projectdetail',
    component:ProjectDetail
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/login/selectzone',
    name:'selectzone',
    component:SelectZone
  },
  {
    path:'/usermsg',
    name:'usermsg',
    component:userMsg
  },
  {
    path:'/usermsg/changemsg',
    name:'changemsg',
    component:changeMsg
  },
  {
    path:'/usermsg/jifendetail',
    name:'jifendetail',
    component:JifenDetail
  },
  {
    path:'/usermsg/myset',
    name:'myset',
    component:MySet
  },
  {
    path:'/usermsg/myset/callus',
    name:'callus',
    component:CallUs
  },
  {
    path:'/usermsg/yaoqing',
    name:'yaoqing',
    component:yaoQing
  },
  {
    path:'/usermsg/yaoqing/invitmsg',
    name:'invitemsg',
    component:InviteMsg
  },
  {
    path:'/usermsg/yaoqing/myinvite',
    name:'myinvite',
    component:MyInvite
  },
  ],

})

export default router