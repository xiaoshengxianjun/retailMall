<template>
	<div class="goodsDetails">
		<swiper height="370px" auto loop :interval=5000 @on-index-change="onSwiperItemIndexChange" v-model="swiperItemIndex" dots-position="center">
	      <swiper-item style="background-color:#efeeea"  class="swiper-demo-img" v-for="(item, index) in swiperList" :key="index">
	        <img style="height:100%;width: 100%;" :src="item.img">
	      </swiper-item>
	    </swiper>
	    <div class="push-share">
	    	<span>推手分享文案</span>
	    	<button>立即分享</button>
	    </div>
	    <div class="name-price">
	    	<p>{{goodsInfo.name}}</p>
	    	<div>
	    		<strong>{{goodsInfo.price}}</strong>
	    		<div>
	    			<span>数量</span>
	    			<CalcNumber :count.sync="goodsInfo.count"></CalcNumber>
	    		</div>
	    	</div>
	    </div>
	    <div class="explain">
	    	<span>说明</span>
	    	<div>
	    		<p>工厂开仓日期间产品不参与7天无理由退货</p>
	    		<p>本活动仅限上海地区</p>
	    	</div>
	    </div>
	</div>
</template>

<script>
	import { Swiper, SwiperItem } from 'vux'
	import CalcNumber from '../../components/CalcNumber.vue'
	const imgList = [{
		img:'',
	},{
		img:'',
	},{
		img:'',
	}]
	export default {
		name: 'goodsDetails',
		data() {
			return {
				swiperList: imgList,
				swiperItemIndex: 1,
				goodsInfo:{
					name:'MX9965-D1*108+0.5*36-和韵-米金 这行显示全称',
					price:23413,
					count:1,
				}
			}
		},
		components: {
			Swiper,
			SwiperItem,
			CalcNumber
		},
		methods: {
			onSwiperItemIndexChange (index) {
		      console.log('demo item change', index)
		    },
		}
	}
</script>

<style scoped lang="less">
	@white:#FFFFFF;
	.vux-swiper{
		height: 370px;
	}
	.push-share{
		width: 100%;
		height: 55px;
		line-height: 55px;
		background: linear-gradient(to right,#7494fb,#3658b9);
		color:@white;
		span{
			float: left;
			font-size: 12px;
			margin-left: 33px;
		}
		button{
			float: right;
			height: 27.5px;
			width: 68px;
			color:@white;
			font-size: 0.7em;
			margin-top: 13.75px;
			margin-right: 25px;
			background-color:transparent ;
			border: 1px solid @white;
		}
	}
	.name-price{
		height: 76px;
		padding: 12px 20px;
		background-color: @white;
		margin-bottom: 5px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		p{
			-webkit-line-clamp: 2;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			overflow: hidden;
			line-height: 20px;
		}
		>div{
			display: flex;
			justify-content: space-between;
			>div{
				span{
					font-size: 14px;
					margin-right: 10px;
				}
			}
		}
	}
	.explain{
		height: 40px;
		padding: 5px 20px;
		background-color: @white;
		margin-bottom: 5px;
		font-size: 12px;
		>span{
			display: block;
			float: left;
			width: 45px;
			text-align: center;
			margin-right: 5px;
			line-height: 40px;
			color: #9c9c9c;
		}
		>div{
			width : calc(~"100% - 50px");
			height: 100%;
			float: left;
			color: #6d6d6d;
		}
	}
</style>