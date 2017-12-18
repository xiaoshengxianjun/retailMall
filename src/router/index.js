import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tab from '@/components/Tab'
import Home from '@/views/home/Home'
import Classify from '@/views/classify/Classify'
import ClassifyDetail from '@/views/classify/ClassifyDetail'
import Shopcar from '@/views/shopcar/Shopcar'
import My from '@/views/my/My'
import Push from '@/views/push/Push'
import MustPush from '@/views/push/MustPush'
import SaleDetails from '@/views/push/SaleDetails'
import PersonalCenter from '@/views/push/PersonalCenter'
import Login from '@/views/user/Login'
import Regist from '@/views/user/Regist'
import LoginBind from '@/views/user/LoginBind'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tab',
      component: Tab,
      redirect:'/Home',//从定向到首页
      children:[{
      	path:'/Home',
      	name:'Home',
      	component: Home
      },{
      	path:'/Classify',
      	name:'Classify',
      	component: Classify
      },{
      	path:'/Push',
      	name:'Push',
      	component: Push,
      	children:[{
      		path:'/Push/MustPush',
      		name:'MustPush',
      		component: MustPush
      	},{
      		path:'/Push/SaleDetails',
      		name:'SaleDetails',
      		component: SaleDetails
      	},{
      		path:'/Push/PersonalCenter',
      		name:'PersonalCenter',
      		component: PersonalCenter
      	}]
      },{
      	path:'/Shopcar',
      	name:'Shopcar',
      	component: Shopcar
      },{
      	path:'/My',
      	name:'My',
      	component: My
      },{
      		path:'/ClassifyDetail',
      		name:'ClassifyDetail',
      		component: ClassifyDetail
      }]
    },{
	  		path:'/Login',
	  		name:'Login',
	  		component:Login
	  },{
	  		path:'/Regist',
	  		name:'Regist',
	  		component:Regist
	  },{
	  		path:'/LoginBind',
	  		name:'LoginBind',
	  		component:LoginBind
	  }
  ]
})
