<template>
	<div class="perfectOrder">
		<div v-show="orderInfo.state == 'waitPay'" class="bill-warn">你的订单已提交，请在<span>02小时59分钟59秒</span>内完成支付</div>
		<div class="order-info">
			<p>订单:{{orderInfo.orderNumber}} <button>复制</button>
				<span v-if="orderInfo.state == 'waitPay'" style="color: #f43b26;">{{orderInfo.state | filtState}}</span>
				<span v-if="orderInfo.state == 'waitGet'" style="color: #f69b28;">{{orderInfo.state | filtState}}</span>
				<span v-if="orderInfo.state == 'waitAccess'" style="color: #393a3e;">{{orderInfo.state | filtState}}</span>
				<span v-if="orderInfo.state == 'return'" style="color: #999999;">{{orderInfo.state | filtState}}</span>
			</p>
			<p>下单时间:{{orderInfo.time}}</p>
		</div>
		<p>收货人</p>
		<div class="receipt-info">
			<p>{{receiptAddress.receipter}}&nbsp;&nbsp;{{receiptAddress.mobile}}</p>
			<p>{{receiptAddress.address}}</p>
		</div>
		<p>商品清单</p>
		<div class="goods-item" v-for="item in goodsList" key="item.id">
			<div class="goods-img">
				<img src="" />
			</div>
			<div class="goods-info">
				<p>{{item.name}}</p>
				<span v-show="item.serviceChecked">安装服务</span>
				<div><strong>￥{{item.price}}</strong><span>x{{item.count}}</span></div>
			</div>
		</div>
		<group title="" style="margin-bottom: 50px;">
			<cell-box>
				<div class="store">
					<p>发货门店</p>
					<p><span>门店名称：</span><span>{{storeInfo.name}}</span></p>
					<p><span>门店地址：</span><span>{{storeInfo.address}}</span></p>
					<p><span>门店电话：</span><span>{{storeInfo.mobile}}</span></p>
				</div>
			</cell-box>
			<cell title="收货时间">
				<div>
					<span style="color: #393a3e;">2017-12-12</span>
				</div>
			</cell>
			<cell title="安装费用">
				<div>
					<span style="color: #393a3e;">￥20.00</span>
				</div>
			</cell>
			<cell inline-desc="共两件">
				<div>
					小计&nbsp;￥<span style="color:#393a3e;font-size: 16px;">247100.00</span>
				</div>
			</cell>
		</group>
		<div v-if="orderInfo.state != 'return'" class="pay-box vux-1px-t">
			<button v-if="orderInfo.state == 'waitPay'">付款</button>
			<button v-if="orderInfo.state == 'waitGet'">确认收货</button>
			<button v-if="orderInfo.state == 'waitAccess'">立即评价</button>
			<button v-if="orderInfo.state == 'waitAccess'" style="background-color: #ff6666;">申请售后</button>
			<span v-if="orderInfo.state == 'waitAccess'">合计:￥24710.00</span>
			<span v-else="orderInfo.state != 'waitAccess'">合计:￥<strong>24710.00</strong></span>
		</div>
	</div>
</template>

<script>
	import { Group, Cell, CellBox, Datetime, CheckIcon } from 'vux'
	import CalcNumber from '../../components/CalcNumber.vue'
	export default {
		name: 'perfectOrder',
		data() {
			return {
				orderInfo: {
					orderNumber: '1928735913467242', //订单编号
					time: '2017-12-12 12:12:12',
					state: 'waitPay',//订单状态，(waitPay,waitGet,waitAccess,return),根据订单的状态改变页面的样式内容
				},
				receiptAddress: { //收货地址信息
					receipter: '张三',
					mobile: '18321976666',
					address: '上海上海市浦东新区东靖路558号'
				},
				storeInfo: { //发货门店信息
					name: '上海欧冰蓝贸易有限公司',
					mobile: '021-12374125',
					address: '上海市宝山区昌邑路15号简配路B馆'
				},
				receiptTime: '', //收货时间
				goodsList: [{
					id: '132412352',
					name: 'MD100*0.5-DKSKK+125这是一个什么玩意',
					price: 2351,
					count: 1,
					serviceChecked: true,
					servicePrice: '20.00',
					serviceCount: 1
				}, {
					id: '13247232',
					name: 'MD100*0.5-DKSKK+125这是一个什么玩意',
					price: 2351,
					count: 1,
					serviceChecked: false,
					servicePrice: '20.00',
					serviceCount: 1
				}]
			}
		},
		methods: {
			change(value) {
				console.log('change', value)
			},
			handleCheckedItem() {

			},
			toChooseAddress() {
				this.$router.push({
					path: '/MyAddress'
				})
			}
		},
		filters: {
			filtState: function(value) {
				if(value == 'waitPay') {
					value = '待支付';
				} else if(value == 'waitGet') {
					value = '待收货';
				} else if(value == 'waitAccess') {
					value = '待评价';
				} else if (value == 'return') {
					value = '退货中';
				}
				return value;
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
	@black: #393a3e;
	.vux-x-icon {
		fill: #AAAAAA;
	}
	
	.perfectOrder>p {
		font-size: 12px;
		color: #959595;
		line-height: 32px;
		padding: 0px 15px;
	}
	
	.bill-warn {
		padding: 0px 15px;
		height: 36px;
		text-align: center;
		line-height: 36px;
		font-size: 12px;
		background-color: #fadfd4;
		color: #fb946b;
		span {
			color: #393A3F;
		}
	}
	
	.order-info,
	.receipt-info {
		padding: 10px 15px;
		height: auto;
		background-color: @white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		p:first-of-type {
			font-size: 14px;
			color: #000000;
		}
		p:last-of-type {
			font-size: 13px;
			color: #626262;
		}
	}
	
	.order-info {
		button {
			width: 38px;
			height: 19px;
			border: 1px solid #DDDDDD;
			background-color: #FFFFFF;
			font-size: 0.7em;
			margin-left: 10px;
		}
		span {
			float: right;
			font-size: 12px;
		}
	}
	
	.goods-item {
		padding: 10px 15px;
		overflow: hidden;
		font-size: 12px;
		background-color: #FFFFFF;
		margin-bottom: 5px;
		.goods-img {
			width: 60px;
			height: 60px;
			margin-right: 10px;
			overflow: hidden;
			border-radius: 6px;
			background-color: #eaeeef;
			float: left;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.goods-info {
			height: 60px;
			float: left;
			width: calc(~"100% - 70px");
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			position: relative;
			>p {
				line-height: 18px;
				-webkit-line-clamp: 2;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
			>p:first-of-type {
				width: 75%;
			}
			>span {
				position: absolute;
				right: 0px;
				top: 0px;
				color: #19a6fe;
			}
			>div span:last-of-type {
				float: right;
			}
		}
		.goods-service {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 12px;
		}
	}
	
	.store {
		>p {
			width: 100%;
			font-size: 13px;
			overflow: hidden;
			span {
				color: #666666;
				display: block;
				float: left;
			}
			span:last-of-type {
				width: calc(~'100% - 65px');
			}
		}
		>p:first-of-type {
			font-size: 14px;
			color: @black;
		}
	}
	
	.pay-box {
		width: 100%;
		height: 50px;
		line-height: 50px;
		background-color: @white;
		position: fixed;
		bottom: 0px;
		left: 0px;
		font-size: 13px;
		button {
			float: right;
			width: 7.5em;
			height: 100%;
			background-color: @black;
			color: @white;
			border: none;
		}
		>span {
			float: left;
			margin-left: 15px;
			strong {
				font-size: 20px;
			}
		}
	}
</style>