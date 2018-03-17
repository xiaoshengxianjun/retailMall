<template>
	<div class="my">
		<div class="user-info">
			<div class="user-img">
				<img src="" />
			</div>
			<div class="name-mobile">
				<p>{{name}}</p>
				<p>{{mobile}}</p>
			</div>
		</div>
		<group style="margin-bottom: 10px;">
			<cell title="我的订单" value="查看全部订单" is-link :link="{path:'/MyOrders',query:{selected:'All'}}"></cell>
			<cell-box>
			<div class="order-type-box">
				<div class="type-item" @click="toWaitPay">
					<img src="../../assets/icon-type-wait.png"/>
					<span>待付款</span>
				</div>
				<div class="type-item" @click="toWaitGet">
					<img src="../../assets/icon-type-get.png"/>
					<span>待收货</span>
				</div>
				<div class="type-item" @click="toWaitAccess">
					<img src="../../assets/icon-type-assess.png"/>
					<span>待评价</span>
				</div>
				<div class="type-item" @click="toService">
					<img src="../../assets/icon-type-service.png"/>
					<span>售后服务</span>
				</div>
			</div>
			</cell-box>
		</group>
		<group>
			<cell title="我的收藏" is-link :link="{path:'/MyCollection'}"></cell>
			<cell title="收货地址" is-link :link="{path:'/MyAddress'}"></cell>
			<cell title="客服MM" is-link></cell>
			<cell title="修改密码" is-link></cell>
			<cell title="我的二维码" is-link :link="{path:'/MyQR'}"></cell>
		</group>
	</div>
</template>

<script>
	import { Group, Cell, CellBox, Flexbox, FlexboxItem } from 'vux'
	export default {
		name: 'my',
		data() {
			return {
				name: '张三',
				mobile: '13265464762'
			}
		},
		methods:{
			toWaitPay(){
				this.$router.push({
					path:'/MyOrders',
					query:{
						selected:'waitPay'
					}
				})
			},
			toWaitGet(){
				this.$router.push({
					path:'/MyOrders',
					query:{
						selected:'waitGet'
					}
				})
			},
			toWaitAccess(){
				this.$router.push({
					path:'/MyOrders',
					query:{
						selected:'waitAccess'
					}
				})
			},
			toService(){
				
			}
		},
		components: {
			Group,
			Cell,
			CellBox,
			Flexbox,
			FlexboxItem,
		}
	}
</script>

<style scoped lang="less">
	.user-info {
		width: 100%;
		height: 140px;
		display: flex;
		align-items: center;
		@width77: 77px;
		>div {
			height: @width77;
		}
		.user-img {
			width: @width77;
			border-radius: 50%;
			overflow: hidden;
			margin-left: 30px;
			background-color: #b0b6c4;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.name-mobile {
			padding: 5px 10px;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}
	}
	.order-type-box{
		width: 100%;
		display: flex;
		>div{
			flex: 1;
			height: 55px;
			font-size: 12px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			img{
				width: 24px;
				height: 24px;
				margin-bottom: 5px;
			}
		}
	}
</style>