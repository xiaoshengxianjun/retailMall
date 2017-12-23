<template>
	<div class="orderDetails">
		<div class="receipt-info" @click="toChooseAddress">
			<span v-show="!receiptAddress.show">+添加收货信息</span>
			<div v-show="receiptAddress.show">
				<p>{{receiptAddress.receipter}}&nbsp;&nbsp;{{receiptAddress.mobile}}</p>
				<p>{{receiptAddress.address}}</p>
				<x-icon class="icon-right" type="ios-arrow-forward" size="18"></x-icon>
			</div>
		</div>
		<group style="margin-bottom: 50px;">
			<cell :title="'订单编号:' + orderNumber" ></cell>
			<cell-box v-for="item in goodsList" key="item.id">
				<div class="goods-item">
					<div class="goods-img">
						<img src=""/>
					</div>
					<div class="goods-info">
						<p>{{item.name}}</p>
						<div><strong>￥{{item.price}}</strong><span>x{{item.count}}</span></div>
					</div>
					<div class="goods-service">
						<check-icon :value.sync="item.serviceChecked" @click.native="handleCheckedItem">安装服务</check-icon>
						<span v-show="item.serviceChecked == true">服务费:￥{{item.servicePrice}}</span>
						<div v-show="item.serviceChecked == true">
							数量
							<CalcNumber :count.sync="item.serviceCount"></CalcNumber>
						</div>
					</div>
				</div>
			</cell-box>
			<cell title="发现门店" value="最近门店" is-link v-show="!storeInfo.show"></cell>
			<cell-box is-link v-show="storeInfo.show">
				<div class="store">
					<p>发货门店</p>
					<p><span>门店名称：</span>上海欧冰蓝贸易有限公司</p>
					<p><span>门店地址：</span>上海市宝山区昌邑路15号简配路B馆</p>
					<p><span>门店电话：</span>021-12374125</p>
				</div>
			</cell-box>
			<datetime v-model="receiptTime" @on-change="change" title="收货时间" placeholder="请选择收货时间"></datetime>
			<cell title="安装费用" >
				<div>
					<span style="color: #393a3e;">￥20.00</span>
				</div>
			</cell>
			<cell inline-desc="共两件" >
				<div>
					小计&nbsp;￥<span style="color:#393a3e;font-size: 16px;">247100.00</span>
				</div>
			</cell>
		</group>
		<div class="pay-box vux-1px-t">
			<button>付款</button>
			<span>合计:￥<strong>24710.00</strong></span>
		</div>
	</div>
</template>

<script>
	import { Group, Cell, CellBox, Datetime, CheckIcon } from 'vux'
	import CalcNumber from '../../components/CalcNumber.vue'
	export default {
		name: 'orderDetails',
		data() {
			return {
				receiptAddress:{//收货地址信息
					show:false,
					receipter:'张三',
					mobile:'18321976666',
					address:'上海上海市浦东新区东靖路558号'
				},
				storeInfo:{//发货门店信息
					show:false,
					name:'上海欧冰蓝贸易有限公司',
					mobile:'021-12374125',
					address:'上海市宝山区昌邑路15号简配路B馆'
				},
				receiptTime:'',//收货时间
				orderNumber:'1928735913467242',//订单编号
				goodsList:[{
					id:'132412352',
					name:'MD100*0.5-DKSKK+125这是一个什么玩意',
					price:2351,
					count:1,
					serviceChecked:false,
					servicePrice:'20.00',
					serviceCount:1
				},{
					id:'13247232',
					name:'MD100*0.5-DKSKK+125这是一个什么玩意',
					price:2351,
					count:1,
					serviceChecked:false,
					servicePrice:'20.00',
					serviceCount:1
				}]
			}
		},
		methods:{
			change (value) {
		      console.log('change', value)
		    },
		    handleCheckedItem(){
		    	
		    },
		    toChooseAddress(){
		    	this.$router.push({
		    		path:'/MyAddress'
		    	})
		    }
		},
		components: {
			Group,
			Cell,
			CellBox,
			Datetime,
			CheckIcon,
			CalcNumber
		}
	}
</script>

<style scoped lang="less">
	@white: #FFFFFF;
	@black:#393a3e;
	.vux-x-icon {
	  fill: #AAAAAA;
	}
	.receipt-info {
		width: 100%;
		height: 80px;
		background-color: @white;
		margin-top: 10px;
		margin-bottom: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		>span{
			font-size: 15px;
			display: block;
			text-align: center;
		}
		>div{
			text-indent: 15px;
			position: relative;
			line-height: 30px;
			p:first-of-type{
				font-size: 16px;
				color: #000000;
			}
			p:last-of-type{
				font-size: 13px;
				color: #626262;
			}
			.icon-right{
				position: absolute;
				right: 10px;
				top: 50%;
				margin-top: -9px;
			}
		}
	}
	.goods-item{
		width: 100%;
		overflow: hidden;
		font-size: 14px;
		.goods-img{
			width: 80px;
			height: 80px;
			margin-right: 20px;
			margin-bottom: 10px;
			overflow: hidden;
			border-radius: 6px;
			background-color: #eaeeef;
			float: left;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.goods-info{
			height: 80px;
			float: left;
			width: calc(~"100% - 100px");
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			>p{
				line-height: 20px;
				-webkit-line-clamp: 2;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
			>div span:last-of-type{
				float: right;
			}
		}
		.goods-service{
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 12px;
			
		}
	}
	.store{
		>p{
			width: 100%;
			span{
				color: #666666;
			}
		}
		>p:first-of-type{
			color: @black;
		}
	}
	.pay-box{
		width: 100%;
		height: 50px;
		line-height: 50px;
		background-color: @white;
		position: fixed;
		bottom: 0px;
		left: 0px;
		font-size: 13px;
		button{
				float: right;
				width: 7.5em;
				height: 100%;
				background-color: @black;
				color: @white;
				border:none;
				
			}
			>span{
				float: right;
				margin-right: 25px;
				strong{
					font-size: 18px;
				}
			}
	}
</style>