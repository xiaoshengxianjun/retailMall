<template>
	<div class="shopcar">
		<div class="handle">
			<span>编辑</span>
			<button>移入收藏夹</button>
			<button>删除</button>
		</div>
		<div class="car-item">
			<check-icon :value.sync="checked"></check-icon>
			<div class="car-img">
				<img src=""/>
			</div>
			<div class="car-info">
				<div class="goods-name">MD100好灯，好亮的灯。MD100好灯，好亮的灯。MD100好灯，好亮的灯。</div>
				<div class="price-count">
					<span>￥12341</span>
					<inline-x-number :min="1"  @on-change="change" mini></inline-x-number>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Box, XButton, CheckIcon, InlineXNumber } from 'vux'
	export default {
		name: 'shopcar',
		data() {
			return {
				checked:'',
			}
		},
		components:{
			Box,
			XButton,
			CheckIcon,
			InlineXNumber
		},
		methods: {
		    change (val) {
		      console.log('change', val)
		    }
  		}
	}
</script>

<style scoped lang="less">
	@white:#FFFFFF;
	.handle{
		height: 50px;
		padding: 0px 10px;
		background-color: @white;
		text-align: right;
		line-height: 50px;
		span{
			float: left;
			margin-left: 20px;
			font-size: 14px;
		}
		button{
			width: 100px;
			height: 32px;
			background-color: @white;
			border: 1px solid #000000;
		}
	}
	.car-item{
		height: 90px;
		padding: 25px 13px;
		background-color: @white;
		margin-top: 10px;
		display:flex;
		align-items:center;
		>div{
			float: left;
		}
		.car-img{
			width: 90px;
			height: 90px;
			border-radius: 8px;
			overflow: hidden;
			background-color: #eaeeef;
			margin: 0px 10px 0px 5px;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.car-info{
			width : calc(~"100% - 137.2px");
			height: 100%;
			text-wrap: wrap;
			font-size: 12px;
			.goods-name{
				-webkit-line-clamp: 2;
				/*用来限制在一个块元素显示的文本的行数*/
				display: -webkit-box;
				/*必须结合的属性，将对象作为弹性伸缩盒子模型显示*/
				-webkit-box-orient: vertical;
				/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式*/
				overflow: hidden;
			}
		}
	}
</style>