<template>
	<div class="home">
		<div class="top-info">
			<search v-model="searchValue" position="absolute" auto-scroll-to-top top="0px" @on-cancel="onCancel" @on-submit="onSubmit" placeholder="请输入关键字" ref="search"></search>
		</div>
		<div class="nearby-store">

		</div>
		<div class="screen-list">
			<div class="screen-box">
				<ul :style="{width: screenWidth + 'px'}" ref="screenBox">
					<li v-for="item in screenList" :class="{active:item.active}" @click="changeScreen(item)">{{item.name}}</li>
				</ul>
			</div>
			<x-icon class="icon-right" type="ios-arrow-right" size="30"></x-icon>
		</div>
		<div class="special-banner">

		</div>
		<div class="good-list">
			<div class="star-single">
				<h3>明星单品</h3>
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
						</div>
					</li>
				</ul>
			</div>
			<div class="star-single">
				<h3>新品速递</h3>
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
						</div>
					</li>
				</ul>
			</div>
			<div class="star-single">
				<h3>特惠闪购</h3>
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
						</div>
					</li>
				</ul>
			</div>
			<div class="star-single">
				<h3>套餐特惠</h3>
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
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { Search, Toast } from 'vux'
	window.document.title = "欧普家居商城"
	export default {
		name: 'home',
		data() {
			return {
				screenList: [{
					name: '首页推荐',
					active: true
				}, {
					name: '现代简约',
					active: false
				}, {
					name: '西式复古',
					active: false
				}, {
					name: '西式',
					active: false
				}, {
					name: '西式复',
					active: false
				}, {
					name: '西式复1',
					active: false
				}],
				searchValue: '',//搜索框内容
				screenWidth: '', //筛选框宽度
				goodsList:[{
					name:'哎哎尚德机构垃圾了文件哪里看阿拉山口党纪国法拉斯柯达',
					price:2143
				},{
					name:'一台灯',
					price:2143
				},{
					name:'哎哎尚德机构垃圾了',
					price:2143
				}]
			}
		},
		components: {
			Search,
			Toast
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
			calcScreenWidth() {
				var tempWidth = 0;
				console.log(this.$refs)
				for(var i = 0; i < this.screenList.length; i++) {
					console.log(this.screenList[i].name.length)
					tempWidth += this.$refs.screenBox.children[i].clientWidth + 16;
				}
				return tempWidth + 1;
			},
			changeScreen(item){
				for(var i=0; i<this.screenList.length; i++){
					this.screenList[i].active = false;
				}
				item.active = !item.active;
			}
		},
		mounted() {
			this.screenWidth = this.calcScreenWidth();
		},
		computed: {

		}
	}
</script>

<style scoped lang="less">
	@borderColor: #F7F8Fd;
	@whiteColor: #FFFFFF;
	.home {
		.weui-search-bar {
			background-color: red;
		}
		.top-info {
			width: 100%;
			height: 200px;
			background-color: #bcccdc;
			border-bottom: 10px solid @borderColor;
		}
		.nearby-store {
			width: 100%;
			height: 87px;
			background-color: #bcccdc;
			border-bottom: 10px solid @borderColor;
		}
		.screen-list {
			padding: 0px 15px;
			height: 50px;
			background-color: @whiteColor;
			border-bottom: 10px solid @borderColor;
			position: relative;
			.screen-box {
				width: 96%;
				height: 100%;
				overflow-x: scroll;
				overflow-y: hidden;
				ul {
					width: auto;
					line-height: 50px;
					float: left;
					li {
						float: left;
						margin: 0px 8px;
						font-size: 14px;
						-webkit-box-sizing: border-box;
						-moz-box-sizing: border-box;
						box-sizing: border-box;
						color: #999999;
					}
					li.active{
						color: #000000;
						border-bottom: 2px solid #000000;
					}
				}
			}
			.icon-right {
				position: absolute;
				right: 5px;
				top: 10px;
			}
		}
		.special-banner {
			width: 100%;
			height: 87px;
			background-color: #bcccdc;
			border-bottom: 10px solid @borderColor;
		}
		.good-list {
			.star-single {
				border-bottom: 10px solid @borderColor;
				background-color: @whiteColor;
				h3 {
					height: 50px;
					line-height: 50px;
					text-indent: 20px;
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
								-webkit-line-clamp: 2;
								/*用来限制在一个块元素显示的文本的行数*/
								display: -webkit-box;
								/*必须结合的属性，将对象作为弹性伸缩盒子模型显示*/
								-webkit-box-orient: vertical;
								/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式*/
								overflow: hidden;
							}
							span{
								font-size: 16px;
							}
						}
					}
				}
			}
		}
	}
</style>