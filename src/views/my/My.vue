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
			<cell title="我的订单" value="查看全部订单" is-link></cell>
			<div class="order-type-box vux-1px-t">
				<div class="type-item">
					<img src="../../assets/icon-type-wait.png"/>
					<span>待付款</span>
				</div>
				<div class="type-item">
					<img src="../../assets/icon-type-get.png"/>
					<span>待收货</span>
				</div>
				<div class="type-item">
					<img src="../../assets/icon-type-assess.png"/>
					<span>待评价</span>
				</div>
				<div class="type-item">
					<img src="../../assets/icon-type-service.png"/>
					<span>售后服务</span>
				</div>
			</div>
		</group>
		<group>
			<cell title="我的收藏" is-link></cell>
			<cell title="收货地址" is-link></cell>
			<cell title="客服MM" is-link></cell>
			<cell title="修改密码" is-link></cell>
		</group>
	</div>
</template>

<script>
	import { Group, Cell, Flexbox, FlexboxItem } from 'vux'
	export default {
		name: 'my',
		data() {
			return {
				name: '张三',
				mobile: '13265464762'
			}
		},
		components: {
			Group,
			Cell,
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
		display: flex;
		>div{
			flex: 1;
			height: 75px;
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