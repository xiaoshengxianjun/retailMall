<template>
	<div class="evaluate">
		<div class="itemgoods" v-for="item in goodsList">
			<group>
				<div class="star-box vux-1px-b">
					<img :src="item.img" /><span>评分</span>
					<rater v-model="item.star" :max="5" active-color="#F23031"></rater>
				</div>
				<x-textarea placeholder="请在此输入您的评价~" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
				<div class="uploadarea">
					<div class="upload-box">
						<img src="../../assets/icon-camera.png"/>
						<span>添加图片</span>
					</div>
				</div>
			</group>
		</div>
		<div class="store-star">
			<div><img src="../../assets/icon-store.png"/>店铺评分</div>
			<div><span>物流服务</span><rater v-model="storeStar" :max="5" active-color="#F23031"></rater></div>
		</div>
		<x-button type="primary" class="btn">提交</x-button>

	</div>
</template>

<script>
	import { Rater, Group, XTextarea, XButton } from 'vux'
	export default {
		name: 'evaluate',
		data() {
			return {
				goodsList: [{
					img: require('../../assets/demo.png'),
					star: 3,
					evaluate: '', //评价语
					attachment: [], //上传的图片附件
				},{
					img: require('../../assets/demo.png'),
					star: 4,
					evaluate: '', //评价语
					attachment: [], //上传的图片附件
				}],
				storeStar:0,//店铺评分
			}
		},
		methods: {
			onEvent(event) {
				console.log('on', event)
			}
		},
		components: {
			Rater,
			Group,
			XTextarea,
			XButton
		},
	}
</script>

<style scoped lang="less">
	.itemgoods {
		width: 100%;
		margin-bottom: 5px;
		.star-box {
			height: 50px;
			width: 100%;
			display: flex;
			align-items: center;
			img {
				width: 45px;
				height: 34px;
				margin: 0px 20px;
				vertical-align: middle;
			}
			span {
				margin-right: 10px;
				font-size: 14px;
			}
		}
	}
	.uploadarea{
		padding: 15px;
		.upload-box{
			width: 80px;
			height: 80px;
			border: 1px dashed #CCCCCC;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 12px;
			color: #CCCCCC;
			img{
				width: 25px;
				height: 21px;
			}
		}
	}
	.store-star{
		background-color: #FFFFFF;
		padding: 15px;
		font-size: 14px;
		margin-bottom: 42px;
		img{
			width: 18px;
			height: 16px;
			vertical-align: middle;
			margin-top: -3px;
			margin-right: 10px;
		}
		>div:last-of-type{
			height: 50px;
			display: flex;
			align-items: center;
			span{
				margin-right: 15px;
				color: #666666;
			}
		}
	}
	.btn{
		position: fixed;
		bottom: 0px;
		left: 0px;
	}
</style>