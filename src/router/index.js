import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tab from '@/components/Tab'
import Home from '@/views/home/Home'
import Classify from '@/views/classify/Classify'
import ClassifyDetail from '@/views/classify/ClassifyDetail'
import GoodsDetails from '@/views/classify/GoodsDetails'
import Shopcar from '@/views/shopcar/Shopcar'
import My from '@/views/my/My'
import MyAddress from '@/views/my/MyAddress'
import MyCollection from '@/views/my/MyCollection'
import AddAddress from '@/views/my/AddAddress'
import Push from '@/views/push/Push'
import MustPush from '@/views/push/MustPush'
import SaleDetails from '@/views/push/SaleDetails'
import PersonalCenter from '@/views/push/PersonalCenter'
import Login from '@/views/user/Login'
import Regist from '@/views/user/Regist'
import LoginBind from '@/views/user/LoginBind'
import ChangePassword from '@/views/user/ChangePassword'
import MyOrders from '@/views/order/MyOrders'
import OrderDetails from '@/views/order/OrderDetails'

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
	  },{
	  		path:'/GoodsDetails',
	  		name:'GoodsDetails',
	  		component: GoodsDetails
	  },{
	  		path:'/MyOrders',
	  		name:'MyOrders',
	  		component: MyOrders
	  },{
	  		path:'/OrderDetails',
	  		name:'OrderDetails',
	  		component: OrderDetails
	  },{
	  		path:'/MyAddress',
	  		name:'MyAddress',
	  		component: MyAddress
	  },{
	  		path:'/AddAddress',
	  		name:'AddAddress',
	  		component: AddAddress
	  },{
	  		path:'/MyCollection',
	  		name:'MyCollection',
	  		component: MyCollection
	  },{
	  		path:'/ChangePassword',
	  		name:'ChangePassword',
	  		component: ChangePassword
	  }
  ]
})
