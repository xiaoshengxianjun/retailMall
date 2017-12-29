<template>
	<div class="customerService">
		<div class="tab-box">
			<tab :line-width="2" custom-bar-width="60px">
				<tab-item :selected="selected == 0" @on-item-click="selected = 0">售后申请</tab-item>
				<tab-item :selected="selected == 1" @on-item-click="selected = 1">申请记录</tab-item>
			</tab>
		</div>
		<div v-if="selected == 0" class="apply">
			<div class="apply-item" v-for="item in orderList">
				<div class="identifier-time">
					<span>订单编号:{{item.identifier}}</span>
					<span>下单时间:{{item.time}}</span>
				</div>
				<div class="list-box">
					<div class="goods-list" v-for="list in item.goodsList">
						<div class="img-box">
							<img :src="list.img" />
						</div>
						<div class="name-count">
							<p>{{list.name}}</p>
							<p>数量：{{list.count}}</p>
							<button>申请售后</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-if="selected == 1" class="records">
			<div class="list-box">
				<div class="goods-list" v-for="item in recordsList">
					<div class="img-box">
						<img :src="item.img" />
					</div>
					<div class="name-count">
						<p>{{item.name}}</p>
						<p>数量：{{item.count}}</p>
						<button v-if="item.state == 'return'">退货中</button>
						<button v-if="item.state == 'exchange'" style="border-color: #e19d54;color:#e19d54;">换货中</button>
						<button v-if="item.state == 'finish'" style="border-color: #999999;color:#999999;">已完成</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Tab, TabItem } from 'vux'
	export default {
		name: 'customerService',
		data() {
			return {
				selected: 0,
				orderList: [{
					identifier: '9812735918', //订单编号
					time: '2017-12-12 12:12:12', //下单时间
					goodsList: [{
						img: require('../../assets/demo.png'),
						name: 'JYLZ09-3060LED平板灯',
						count: 2
					}, {
						img: require('../../assets/demo.png'),
						name: 'JYLZ09-3060LED平板灯',
						count: 1
					}]
				}, {
					identifier: '9812735918', //订单编号
					time: '2017-12-12 12:12:12', //下单时间
					goodsList: [{
						img: require('../../assets/demo.png'),
						name: 'JYLZ09-3060LED平板灯',
						count: 2
					}, {
						img: require('../../assets/demo.png'),
						name: 'JYLZ09-3060LED平板灯',
						count: 3
					}]
				}],
				recordsList: [{
					img: require('../../assets/demo.png'),
					name: 'JYLZ09-3060LED平板灯',
					count: 2,
					state: 'return'
				}, {
					img: require('../../assets/demo.png'),
					name: 'JYLZ09-3060LED平板灯',
					count: 3,
					state: 'exchange'
				}, {
					img: require('../../assets/demo.png'),
					name: 'JYLZ09-3060LED平板灯',
					count: 3,
					state: 'finish'
				}]
			}
		},
		components: {
			Tab,
			TabItem,
		}
	}
</script>

<style scoped lang="less">
	.tab-box {
		background: #FFFFFF;
		border-bottom: 1px solid #CCCCCC;
		padding: 0px 20%;
		margin-bottom: 10px;
	}
	
	.apply-item {
		background-color: #FFFFFF;
		margin-bottom: 10px;
		.identifier-time {
			height: 35px;
			line-height: 35px;
			padding: 0px 15px;
			font-size: 12px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			border-bottom: 1px solid #DEDEDE;
			span:last-of-type {
				margin-left: 10px;
			}
		}
		.list-box {
			padding: 0px 15px;
		}
	}
	
	.goods-list {
		width: 100%;
		height: 60px;
		padding: 15px 0px;
		border-bottom: 1px solid #DDDDDD;
		.img-box {
			width: 60px;
			height: 100%;
			float: left;
			margin-right: 10px;
			background-color: #f1f8ff;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.name-count {
			width: calc(~"100% - 70px");
			height: 100%;
			float: left;
			font-size: 12px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			position: relative;
			p:first-of-type {
				line-height: 18px;
				-webkit-line-clamp: 2;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
			button {
				position: absolute;
				right: 0px;
				bottom: 0px;
				width: 63px;
				height: 25px;
				border: 1px solid #1aa6fe;
				border-radius: 3px;
				background-color: #FFFFFF;
				color: #1aa6fe;
				font-size: 0.9em;
			}
		}
	}
	
	.goods-list:last-of-type {
		border-bottom: none;
	}
	
	.records {
		background-color: #FFFFFF;
		padding: 0px 15px;
	}
</style>