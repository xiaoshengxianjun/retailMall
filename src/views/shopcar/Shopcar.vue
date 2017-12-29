<template>
	<div class="shopcar">
		<div class="handle">
			<span>编辑</span>
			<button>移入收藏夹</button>
			<button>删除</button>
		</div>
		<div class="car-item" v-for="item in shopcarList">
			<check-icon :value.sync="item.checked" @click.native="handleCheckedItem(item)"></check-icon>
			<div class="car-img">
				<img src="" />
			</div>
			<div class="car-info">
				<div class="goods-name">{{item.name}}</div>
				<div class="price-count">
					<span>￥{{item.price}}</span>
					<CalcNumber :count.sync="item.count"></CalcNumber>
				</div>
			</div>
		</div>
		<!--猜你喜欢-->
		<div class="guess-like">
			<div class="guess-title">
				<i></i>
				<span>猜你喜欢</span>
				<i></i>
			</div>
			<ul>
				<li v-for="item in recommendList">
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
		<!--合计结算-->
		<div class="total-settlement vux-1px-t">
			<check-icon :value.sync="checkedAll" @click.native="handleCheckedAll">全选</check-icon>
			<span>合计：￥<strong>123412</strong></span>
			<button>去结算</button>
		</div>
	</div>
</template>

<script>
	import { XButton, CheckIcon } from 'vux'
	import CalcNumber from '../../components/CalcNumber.vue'
	export default {
		name: 'shopcar',
		data() {
			return {
				checkedAll: false,//全选
				shopcarList: [{//购物车的商品
					name: 'MD100好灯，好亮的灯。MD100好灯，好亮的灯。MD100好灯，好亮的灯。',
					price: 12342,
					count: 1,
					checked:false,
				}, {
					name: 'MD100好灯，好亮的灯。',
					price: 12342,
					count: 1,
					checked:true,
				}, {
					name: 'MD100好灯，好亮的灯。MD100好灯，好亮的灯。',
					price: 12342,
					count: 1,
					checked:true,
				}],
				recommendList:[{//推荐的商品
					name:'这是一个推荐的灯，好靓的灯。',
					price:2143
				},{
					name:'这是一个推荐的灯',
					price:2143
				}]
			}
		},
		components: {
			XButton,
			CheckIcon,
			CalcNumber
		},
		methods: {
			change(val) {
				console.log('change', val)
			},
			handleCheckedItem(item){
				var isAll = true;
				this.shopcarList.forEach((obj)=>{
					if(obj.checked == false){
						isAll = false;
					}
				})
				if(isAll){
					this.checkedAll = true;
				}else{
					this.checkedAll = false;
				}
			},
			handleCheckedAll(){
				if(this.checkedAll == true){
					this.shopcarList.forEach((obj)=>{
						obj.checked = true;
					})
				}else{
					this.shopcarList.forEach((obj)=>{
						obj.checked = false;
					})
				}
			}
		}
	}
</script>

<style scoped lang="less">
	@white: #FFFFFF;
	.handle {
		height: 50px;
		padding: 0px 10px;
		background-color: @white;
		text-align: right;
		line-height: 50px;
		span {
			float: left;
			margin-left: 20px;
			font-size: 14px;
		}
		button {
			width: 100px;
			height: 32px;
			background-color: #F7F8FD;
			border: 1px solid #000000;
		}
	}
	
	.car-item {
		height: 90px;
		padding: 25px 13px;
		background-color: @white;
		margin-top: 10px;
		display: flex;
		align-items: center;
		>div {
			float: left;
		}
		.car-img {
			width: 90px;
			height: 90px;
			border-radius: 8px;
			overflow: hidden;
			background-color: #eaeeef;
			margin: 0px 10px 0px 5px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.car-info {
			width: calc(~"100% - 137.2px");
			height: 100%;
			text-wrap: wrap;
			font-size: 12px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.goods-name {
				-webkit-line-clamp: 2;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
			.price-count {
				display: flex;
				justify-content: space-between;
				align-items: center;
				button {
					width: 20px;
					height: 20px;
					border: none;
				}
				span {
					display: inline-block;
					width: 30px;
					text-align: center;
				}
			}
		}
	}
	
	.guess-like {
		width: 100%;
		background-color: @white;
		margin-top: 17px;
		margin-bottom:50px;
		.guess-title {
			width: 100%;
			height: 54px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 15px;
			i {
				display: inline-block;
				width: 15px;
				height: 2px;
				background-color: #000000;
				margin: 0px 10px;
			}
		}
		ul {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			li {
				width: 48%;
				.good-img-box {
					width: 100%;
					height: 182px;
					background-color: #eaeeef;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.good-info-box {
					height: 78px;
					padding: 10px 20px 0px;
					font-size: 14px;
					.good-name {
						height: 43px;
						-webkit-line-clamp: 2;
						/*用来限制在一个块元素显示的文本的行数*/
						display: -webkit-box;
						/*必须结合的属性，将对象作为弹性伸缩盒子模型显示*/
						-webkit-box-orient: vertical;
						/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式*/
						overflow: hidden;
					}
					span {
						font-size: 16px;
					}
				}
			}
		}
	}
	.total-settlement{
		width: 100%;
		height: 50px;
		padding-left: 5px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		background-color: @white;
		position: fixed;
		bottom: 50px;
		left: 0px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 13px;
		button{
			width: 90px;
			height: 100%;
			border: none;
			background-color: #393a3f;
			color: @white;
		}
		strong{
			display: inline-block;
			font-size: 18px;
			padding-bottom: 6px;
		}
	}
</style>