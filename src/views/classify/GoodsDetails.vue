<template>
	<div class="goodsDetails">
		<div class="threeD">
			<img src="../../assets/icon-3D.png" />
			<span>3D体验</span>
		</div>
		<swiper height="370px" auto loop :interval=5000  v-model="swiperItemIndex" dots-position="center">
			<swiper-item style="background-color:#efeeea" class="swiper-demo-img" v-for="(item, index) in swiperList" :key="index">
				<img style="height:100%;width: 100%;" :src="item.img">
			</swiper-item>
		</swiper>
		<div class="push-share">
			<span>推手分享文案</span>
			<button>立即分享</button>
		</div>
		<!--商品名称价格和数量-->
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
		<!--说明-->
		<div class="explain">
			<span>说明</span>
			<div>
				<p>工厂开仓日期间产品不参与7天无理由退货</p>
				<p>本活动仅限上海地区</p>
			</div>
		</div>
		<!--关联商品-->
		<div class="related-goods">
			<h4>关联产品</h4>
			<div class="related-box">
				<ul :style="{width: relatedWidth + 'px'}" ref="relatedBox">
					<li v-for="item in relatedList">
						<div class="good-img-box">
							<img src="" />
						</div>
						<div class="good-info-box">
							<div class="good-name">
								{{item.name}}
							</div>
							<span class="good-price">￥{{item.price}}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="tab-box">
			<tab :line-width="2" custom-bar-width="60px">
		      <tab-item selected @on-item-click="">产品介绍</tab-item>
		      <tab-item @on-item-click="">产品参数</tab-item>
		    </tab>
		</div>
		<!--产品介绍和参数切换内容-->
	    <div class="prouct-intro">
	    	
	    </div>
	    <!--加入购物车购买等操作-->
	    <div class="handle-box vux-1px-t">
	    	<div>
		    	<img src="../../assets/icon-share.png"/>
		    	<img src="../../assets/icon-collect.png"/>
	    		<div>
		    		<img src="../../assets/icon-shopcar-active.png"/>
		    		<badge class="badge" text="1"></badge>
	    		</div>
	    	</div>
	    	<button>立即购买</button>
	    	<button>加入购物车</button>
	    </div>
	</div>
</template>

<script>
	import { Swiper, SwiperItem, Tab, TabItem, Badge } from 'vux'
	import CalcNumber from '../../components/CalcNumber.vue'
	const imgList = [{
		img: '',
	}, {
		img: '',
	}, {
		img: '',
	}]
	export default {
		name: 'goodsDetails',
		data() {
			return {
				swiperList: imgList,
				swiperItemIndex: 1,
				goodsInfo: {
					name: 'MX9965-D1*108+0.5*36-和韵-米金 这行显示全称',
					price: 23413,
					count: 1,
				},
				relatedWidth:400,//关联商品的父节点宽度
				relatedList: [{ //关联商品
					name: 'MX9965-D1*108 + 0.5 * 36-和韵-米金 这行显示全称',
					price: 23413,
				},{ 
					name: 'MX9965-D1*108 + 0.5 * 36-和韵-米金 这行显示全称',
					price: 23413,
				},{ 
					name: 'MX9965-D1*108 + 0.5 * 36-和韵-米金 这行显示全称',
					price: 23413,
				}]
			}
		},
		components: {
			Swiper,
			SwiperItem,
			CalcNumber,
			Tab,
			TabItem,
			Badge
		},
		methods: {
			calcRelatedWidth() {
				var tempWidth = 0;
				for(var i = 0; i < this.relatedList.length; i++) {
					tempWidth += this.$refs.relatedBox.children[i].clientWidth + 5;
				}
				return tempWidth;
			},
		},
		mounted() {
			this.relatedWidth = this.calcRelatedWidth();
		}
	}
</script>

<style scoped lang="less">
	@white: #FFFFFF;
	.threeD {
		position: absolute;
		right: 15px;
		top: 10px;
		z-index: 99;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 12px;
		img {
			width: 20px;
			height: 20px;
		}
	}
	
	.push-share {
		width: 100%;
		height: 55px;
		line-height: 55px;
		background: linear-gradient(to right, #7494fb, #3658b9);
		color: @white;
		span {
			float: left;
			font-size: 12px;
			margin-left: 33px;
		}
		button {
			float: right;
			height: 27.5px;
			width: 68px;
			color: @white;
			font-size: 0.7em;
			margin-top: 13.75px;
			margin-right: 25px;
			background-color: transparent;
			border: 1px solid @white;
		}
	}
	
	.name-price {
		height: 76px;
		padding: 12px 20px;
		background-color: @white;
		margin-bottom: 5px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		p {
			-webkit-line-clamp: 2;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			overflow: hidden;
			line-height: 20px;
		}
		>div {
			display: flex;
			justify-content: space-between;
			>div {
				span {
					font-size: 14px;
					margin-right: 10px;
				}
			}
		}
	}
	
	.explain {
		height: 40px;
		padding: 5px 20px;
		background-color: @white;
		margin-bottom: 5px;
		font-size: 12px;
		>span {
			display: block;
			float: left;
			width: 45px;
			text-align: center;
			margin-right: 5px;
			line-height: 40px;
			color: #9c9c9c;
		}
		>div {
			width: calc(~"100% - 50px");
			height: 100%;
			float: left;
			color: #6d6d6d;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
	
	.related-goods {
		padding: 0px 20px 10px;
		background-color: @white;
		margin-bottom: 5px;
		h4 {
			line-height: 50px;
		}
		.related-box {
			width: 100%;
			height: 200px;
			overflow-x: scroll;
			overflow-y: hidden;
			ul {
				width: 500px;
				height: 100%;
				overflow: hidden;
				li {
					width: 130px;
					float: left;
					margin-right: 5px;
					.good-img-box {
						width: 100%;
						height: 130px;
						background-color: #eaeeef;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.good-info-box {
						height: 60px;
						padding: 10px 10px 0px;
						font-size: 10px;
						.good-name {
							height: 32px;
							line-height: 16px;
							-webkit-line-clamp: 2;
							/*用来限制在一个块元素显示的文本的行数*/
							display: -webkit-box;
							/*必须结合的属性，将对象作为弹性伸缩盒子模型显示*/
							-webkit-box-orient: vertical;
							/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式*/
							overflow: hidden;
						}
						span {
							display: block;
							font-size: 13px;
							margin-top: 4px;
						}
					}
				}
			}
		}
	}
	.tab-box{
		padding: 0px 18%;
		background-color: @white;
	}
	.prouct-intro{
		width: 100%;
		margin-bottom: 50px;
	}
	.handle-box{
		width: 100%;
		height: 50px;
		background-color: @white;
		position: fixed;
		bottom: 0px;
		left: 0px;
		button{
			float: right;
			width: 7.5em;
			height: 100%;
			border: none;
			background-color: #EAEEEF;
			color: #666666;
		}
		button:first-of-type{
			background-color: #000000;
			color: @white;
		}
		img{
			float: left;
			width: 20px;
			height: 20px;
		}
		>div{
			width: calc(~"100% - 220px");
			height: 100%;
			padding-left: 10px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			float: left;
			>div{
				position: relative;
				.badge{
					position: absolute;
					top: -6px;
					right: -6px;
				}
			}
		}
	}
</style>