<template>
	<div class="mustPush">
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
							<div class="icon-share"><img src="../../assets/icon-share.png" /></div>
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
		name: 'mustPush',
		data() {
			return {
				mustPushGoods: [{
					imgSrc: '',
					name: 'JSLJD-32 好大一个灯',
					price: '1234',
					returnPrice: '10'
				}, {
					imgSrc: '',
					name: 'JSLJD-32 好大一个灯',
					price: '1234',
					returnPrice: '10'
				}, {
					imgSrc: '',
					name: 'JSLJD-32 好大一个灯',
					price: '1234',
					returnPrice: '10'
				}, {
					imgSrc: '',
					name: 'JSLJD-32 好大一个灯',
					price: '1234',
					returnPrice: '10'
				}, {
					imgSrc: '',
					name: 'JSLJD-32 好大一个灯',
					price: '1234',
					returnPrice: '10'
				}, {
					imgSrc: '',
					name: 'JSLJD-32 好大一个灯',
					price: '1234',
					returnPrice: '10'
				}, {
					imgSrc: '',
					name: 'JSLJD-32 好大一个灯',
					price: '1234',
					returnPrice: '10'
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
		overflow: hidden;
		margin-bottom: 10px;
		.img-box{
			width: @width88;
			height: @width88;
			background-color:#eaeeef;
			float:left;
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
			.icon-share{
				text-align: right;
				height: 40px;
				img{
					width: 20px;
					height: 20px;
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