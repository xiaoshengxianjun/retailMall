<template>
	<div class="returnGoods">
		<div class="goods-info">
			<div class="img-box">
				<img :src="goods.img" />
			</div>
			<div class="name-count">
				<p>{{goods.name}}</p>
				<p>价格：￥{{goods.price}}&nbsp;&nbsp;&nbsp;&nbsp;数量：{{goods.count}}</p>
			</div>
		</div>
		<div class="service-type">
			<p>服务类型</p>
			<checker v-model="type" default-item-class="type-item" selected-item-class="type-item-selected">
				<checker-item value="return">退货</checker-item>
				<checker-item value="exchange">换货</checker-item>
			</checker>
		</div>
		<div v-show="type == 'return'" class="return-type">
			<p>退款方式</p>
			<span>原支付返还</span>
		</div>
		<div class="apply-number">
			<p>申请数量</p>
			<CalcNumber :count.sync="returnCount" size="30px"></CalcNumber>
		</div>
		<div class="description">
			<p>问题描述</p>
			<!--<x-textarea :max="500" name="description" placeholder="请您在此描述问题" :height="105"></x-textarea>-->
			<div class="textarea-box">
				<textarea placeholder="请您在此描述问题" v-model="description"></textarea>
				<span>{{descripttionCount}}/500</span>				
			</div>
		</div>
		<x-button type="primary" class="btn">提交</x-button>
	</div>
</template>

<script>
	import { Checker, CheckerItem, InlineXNumber, XTextarea, XButton } from 'vux'
	import CalcNumber from '../../components/CalcNumber.vue'
	export default {
		name: 'returnGoods',
		data() {
			return {
				goods: {
					img: require('../../assets/demo.png'),
					name: 'JYLZ09-3060LED平板灯',
					price: 12345,
					count: 2
				},
				type: 'return', //服务类型
				returnCount:1,
				description:'',//问题描述
				descripttionCount:0,//当前问题描述已经编写的文字长度
			}
		},
		methods: {
			calcDescription(v){
				console.log(v)
				if(this.description.length>=50){
					this.description = this.description.substring(0,50);
				}
				this.descripttionCount = this.description.length;
			}
		},
		watch:{
			description:function(value,old){
				console.log(value.length)
				if(value.length>=500){
					this.description = this.description.substring(0,500);
				}
				this.descripttionCount = value.length;
			}
		},
		components: {
			Checker,
			CheckerItem,
			CalcNumber,
			InlineXNumber,
			XTextarea,
			XButton
		},
	}
</script>

<style scoped lang="less">
	.goods-info {
		height: 70px;
		padding: 13px 15px;
		background-color: #FFFFFF;
		margin-bottom: 10px;
		.img-box {
			width: 70px;
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
			width: calc(~"100% - 80px");
			height: 100%;
			float: left;
			font-size: 12px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			position: relative;
			p:first-of-type {
				font-size: 14px;
				line-height: 18px;
				-webkit-line-clamp: 2;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
			p:last-of-type {
				color: #666666;
			}
		}
	}
	
	.type-item {
		width: 77px;
		height: 28px;
		border: 1.5px solid #C4C4C4;
		color: #C4C4C4;
		text-align: center;
		line-height: 28px;
		font-size: 14px;
		margin-right: 15px;
	}
	
	.type-item-selected, .return-type span {
		width: 77px;
		height: 28px;
		border: 1.5px solid #3A3A3C;
		color: #3A3A3C;
		text-align: center;
		line-height: 28px;
		font-size: 14px;
	}
	.service-type, .return-type, .apply-number, .description{
		padding: 15px 15px 18px;
		background-color: #FFFFFF;
		font-size: 14px;
		margin-bottom: 10px;	
		p{
			margin-bottom: 15px;
		}
	}
	.return-type span{
		display: block;
		width: 88px;
	}
	.description{
		margin-bottom: 42px;
	}
	.btn{
		position: fixed;
		bottom: 0px;
		left: 0px;
	}
	.textarea-box{
		padding: 10px;
		background-color: #f8f8f8;
		border-radius: 4px;
		overflow: hidden;
		textarea{
			width: 100%;
			height: 90px;
			resize:none;
			line-height: 18px;
			font-size: 14px;
			border: none;
			outline: none;
			background-color: #f8f8f8;
		}
		span{
			float: right;
			color: #a8a8a8;
		}
	}
</style>