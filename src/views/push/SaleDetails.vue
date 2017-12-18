<template>
	<div class="saleDetails">
		<box gap="10px 10px">
			<div class="mustpush-item" v-for="item in mustPushGoods">
				<div class="img-box">
					<img :src="item.imgSrc" />
				</div>
				<div class="info-box">
					<flexbox :gutter="0">
						<flexbox-item :span="9">
							<div class="goods-name">{{item.name}}</div>
						</flexbox-item>
						<flexbox-item :span="1"></flexbox-item>
						<flexbox-item :span="2">
							<div class="icon-state" v-if="item.state == 'getBill'"><img src="../../assets/icon-bill-get.png" /></div>
							<div class="icon-state" v-if="item.state == 'waitBill'"><img src="../../assets/icon-bill-wait.png" /></div>
							<div class="icon-state" v-if="item.state == 'billUnavailable'"><img src="../../assets/icon-bill-unavailable.png" /></div>
						</flexbox-item>
					</flexbox>
					<flexbox>
						<flexbox-item>
							<div class="goods-price">￥{{item.price}}</div>
						</flexbox-item>
						<flexbox-item>
							<div class="return-price">返利：￥{{item.returnPrice}}</div>
						</flexbox-item>
					</flexbox>
				</div>
			</div>
		</box>
	</div>
</template>

<script>
	import { Box, Flexbox, FlexboxItem } from 'vux'
	export default {
		name: 'saleDetails',
		data() {
			return {
				mustPushGoods: [{
					imgSrc: '',
					name: '好亮的灯',
					price: '1234',
					returnPrice: '10',
					state:'getBill',
				}, {
					imgSrc: '',
					name: '好亮的灯',
					price: '1234',
					returnPrice: '10',
					state:'waitBill',
				}, {
					imgSrc: '',
					name: '好亮的灯',
					price: '1234',
					returnPrice: '10',
					state:'billUnavailable',
				}, {
					imgSrc: '',
					name: '好亮的灯',
					price: '1234',
					returnPrice: '10',
					state:'waitBill',
				}, {
					imgSrc: '',
					name: '好亮的灯',
					price: '1234',
					returnPrice: '10',
					state:'billUnavailable',
				}, {
					imgSrc: '',
					name: '好亮的灯',
					price: '1234',
					returnPrice: '10',
					state:'waitBill',
				}, {
					imgSrc: '',
					name: '好亮的灯',
					price: '1234',
					returnPrice: '10',
					state:'billUnavailable',
				}]
			}
		},
		components: {
			Box,
			Flexbox,
			FlexboxItem,
		},
	}
</script>

<style scoped lang="less">
	@width88:88px;
	.mustpush-item{
		background: #FFFFFF;
		width: 100%;
		height: @width88;
		border-radius: 6px;
		/*overflow: hidden;*/
		margin-bottom: 10px;
		.img-box{
			width: @width88;
			height: @width88;
			background-color:#eaeeef;
			float:left;
			border-top-left-radius:6px;
			border-bottom-left-radius:6px;
			overflow:hidden;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.info-box{
			float: right;
			width : calc(~"100% - @{width88}");
			height: 100%;
			padding: 10px 15px 10px 10px;
			font-size: 14px;
			box-sizing: border-box;
			.goods-name{
				height: 40px;
				line-height: 20px;
				-webkit-line-clamp: 2;
				/*用来限制在一个块元素显示的文本的行数*/
				display: -webkit-box;
				/*必须结合的属性，将对象作为弹性伸缩盒子模型显示*/
				-webkit-box-orient: vertical;
				/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式*/
				overflow: hidden;
			}
			.icon-state{
				text-align: right;
				height: 40px;
				img{
					/*width: 20px;*/
					height: 26px;
					margin-right: -20px;
				}
			}
			.goods-price{
				margin-top: 5px;
				font-size: 13px;
				color: #666666;
			}
			.return-price{
				float: right;
				margin-top: 5px;
				font-size: 13px;
				color: #ff9446;
			}
		}
	}
</style>