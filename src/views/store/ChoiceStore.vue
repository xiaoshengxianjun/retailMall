<template>
	<div class="choiceStore" style="height: 100%;">
		<div v-for="item in storeList">
			<p>{{item.name}}</p>
			<p>{{item.address}} | {{item.distance}}公里</p>
			<check-icon :value.sync="item.checked" class="check-item" @click.native="handleCheckedItem(item)"></check-icon>
		</div>
		<x-button type="primary" class="btn">确认</x-button>
	</div>
</template>

<script>
	import { CheckIcon, XButton } from 'vux'
	export default {
		name: 'choiceStore',
		data() {
			return {
				storeList: [{
					name: '照明美加美灯饰',
					address: '家居建材市场',
					distance: '4.3',
					checked: true
				}, {
					name: '照明美加美灯饰',
					address: '家居建材市场',
					distance: '4.3',
					checked: false
				},{
					name: '照明美加美灯饰',
					address: '家居建材市场',
					distance: '4.3',
					checked: false
				}]
			}
		},
		components: {
			CheckIcon,
			XButton
		},
		methods:{
			handleCheckedItem(item){
				this.storeList.forEach((item) => {
					item.checked = false;
				})
				item.checked = true;
			},
		}
	}
</script>

<style scoped lang="less">
	.choiceStore {
		padding-top: 5px;
		>div {
			padding: 15px 20px;
			height: 54px;
			background-color: #FFFFFF;
			margin-bottom: 5px;
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			p {
				width: 90%;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			p:last-of-type {
				font-size: 13px;
				color: #666666;
			}
			.check-item{
				position: absolute;
				right: 14px;
				top: 50%;
				margin-top:-15px;
			}
		}
		>div:last-of-type{
			margin-bottom: 50px;
		}
		.btn{
			position: fixed;
			bottom: 0px;
			left: 0px;
		}
	}
</style>