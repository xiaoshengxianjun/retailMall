<template>
	<div class="classifyDetail">
		<div class="search-box">
			<search v-model="searchValue" position="absolute" auto-scroll-to-top top="0px" @on-cancel="onCancel" @on-submit="onSubmit" placeholder="请输入关键字" ref="search"></search>
		</div>
		<div class="screen-nav">
			<tab :line-width="1" custom-bar-width="40px">
				<tab-item selected>综合</tab-item>
				<tab-item>价格
					<img class="icon-order" src="../../assets/icon-order.png"/>
				</tab-item>
				<tab-item>筛选
					<img class="icon-screen" src="../../assets/icon-screen.png"/>
				</tab-item>
			</tab>
		</div>
		<div class="good-list">
			<ul>
				<li v-for="item in goodsList">
					<div class="good-img-box">
						<img src="" />
					</div>
					<div class="good-info-box">
						<div class="good-name">
							{{item.name}}
						</div>
						<span class="good-price">￥{{item.price}}</span>
						<img src="../../assets/icon-collect.png"/>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { Search, Toast, Tab, TabItem, } from 'vux'
	export default {
		name: 'classifyDetail',
		data() {
			return {
				searchValue: '', //搜索框内容
				goodsList: [{
					name: '哎哎尚德机构垃圾了文件哪里看阿拉山口党纪国法拉斯柯达',
					price: 2143
				}, {
					name: '一台灯',
					price: 2143
				}, {
					name: '哎哎尚德机构垃圾了',
					price: 2143
				}, {
					name: '哎哎尚德机构垃圾了',
					price: 2143
				}, {
					name: '哎哎尚德机构垃圾了',
					price: 2143
				}]
			}
		},
		components: {
			Search,
			Toast,
			Tab,
			TabItem
		},
		methods: {
			setFocus() {
				this.$refs.search.setFocus()
			},
			onSubmit() {
				this.$refs.search.setBlur()
				this.$vux.toast.show({
					type: 'text',
					position: 'top',
					text: 'on submit'
				})
			},
			onCancel() {
				console.log('on cancel')
			},
		}
	}
</script>

<style scoped lang="less">
	@whiteColor: #FFFFFF;
	.search-box {
		width: 100%;
		height: 44.4px;
	}
	
	.screen-nav{
		.icon-order{
			width: 6px;
			height: 10px;
		}
		.icon-screen{
			width: 14px;
			height: 14px;
			vertical-align: middle;
			margin-top: -2px;
		}
	}
	
	.good-list {
		margin-top: 6px;
		background-color: @whiteColor;
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
					position: relative;
					.good-name {
						font-size: 14px;
						height: 43.2px;
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
					img{
						width: 16px;
						height: 16px;
						position: absolute;
						right: 10px;
						bottom: 14px;
					}
				}
			}
		}
	}
</style>