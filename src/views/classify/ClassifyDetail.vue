<template>
	<div class="classifyDetail">
		<div class="search-box">
			<search v-model="searchValue" position="absolute" auto-scroll-to-top top="0px" @on-cancel="onCancel" @on-submit="onSubmit" placeholder="请输入关键字" ref="search"></search>
		</div>
		<div class="screen-nav">
			<div>
				<tab :line-width="1" custom-bar-width="40px">
					<tab-item selected @on-item-click="handleDefault">综合</tab-item>
					<tab-item @on-item-click="handlePriceOrder">价格
						<img class="icon-order" :src="priceOrder.img" ref="priceOrderImg" />
					</tab-item>
					<tab-item @on-item-click="handleScreen">筛选
						<img class="icon-screen" :src="screenType.img" />
					</tab-item>
				</tab>
			</div>
			<div class="vux-1px-b" @click="changeType">
				<img :src="model.img" />
			</div>
		</div>
		<div v-show="showScreenList == true" class="screen-type-list">
			<div>
				<p>价格区间</p>
				<div style="justify-content: space-around;">
					<input type="number" name="" placeholder="最低价格" /> <i>—</i>
					<input type="number" name="" placeholder="最高价格" />
				</div>
			</div>
			<div v-for="item in screenTypeList" :style="{height:item.height + 'px'}">
				<p>{{item.type}}<span v-show="item.list.length > 3" @click="showAll(item)">全部</span></p>
				<checker v-model="screenChecked" type="checkbox" default-item-class="list-item" selected-item-class="list-item-selected">
					<checker-item v-for="list in item.list" :value="list.id" :key="list.id"><div>{{list.name}}</div></checker-item>
				</checker>
			</div>
			<p><span @click="confirmScreen">确定</span><span>|</span><span @click="handelReset">重置</span></p>
		</div>
		<div v-if="model.type == 1 && showScreenList == false" class="good-list">
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
						<img :src="item.collect.img" @click="handleCollect(item)" />
					</div>
				</li>
			</ul>
		</div>
		<ul v-if="model.type == 2 && showScreenList == false" class="list-type2">
			<li v-for="item in goodsList">
				<div class="goods-img">
					<img src="" />
				</div>
				<div class="goods-info">
					<p>{{item.name}}</p>
					<p><strong>￥{{item.price}}</strong></p>
				</div>
				<img :src="item.collect.img" @click="handleCollect(item)" />
			</li>
		</ul>
	</div>
</template>

<script>
	import { Search, Tab, TabItem, Checker, CheckerItem } from 'vux'
	export default {
		name: 'classifyDetail',
		data() {
			return {
				selected: 0, //tab选中项
				searchValue: '', //搜索框内容
				model: { //列表展示类型
					img: require('../../assets/icon-type2.png'),
					type: 1
				},
				priceOrder: { //价格排序类型，asc升序，desc降序
					type: 'default',
					img: require('../../assets/icon-order.png')
				},
				screenType: {//筛选状态
					active: false,
					img: require('../../assets/icon-screen.png')
				},
				showScreenList:false,
				screenChecked:[],//筛选项选中的内容
				screenTypeList: [{
					id:1,
					height:'70',
					type: '风格',
					list: [{id: '1',name: '现代简约',}, {id: '12',name: '现代中式',}, {id: '123',name: '现代中式中式',}, {id: '1234',name: '现代中式',}, {id: '12345',name: '现代中式',}]
				},{
					id:2,
					height:'70',
					type: '控制方式',
					list: [{id: '1',name: '现代简约',},{id: '1',name: '现代简约',},{id: '1',name: '现代简约',},{id: '1',name: '现代简约',},{id: '1',name: '现代简约',},{id: '1',name: '现代简约',},{id: '1',name: '现代简约',},{id: '1',name: '现代简约',},{id: '1',name: '现代简约',},{id: '1',name: '现代简约',},{id: '1',name: '现代简约',},{id: '1',name: '现代简约',},{id: '1',name: '现代简约',},{id: '1',name: '现代简约',},{id: '1',name: '现代简约',}, {id: '12',name: '现代中式',}, {id: '123',name: '现代中式中式',}, {id: '1234',name: '现代中式',}, {id: '12345',name: '现代中式',}]
				}],
				goodsList: [{
					name: '哎哎尚德机构垃圾了文件哪里看阿拉山口党纪国法拉斯柯达',
					price: 2143,
					collect: {
						type: true,
						img: require('../../assets/icon-collect-active.png')
					}
				}, {
					name: '一台灯',
					price: 2143,
					collect: {
						type: false,
						img: require('../../assets/icon-collect.png')
					}
				}, {
					name: '哎哎尚德机构垃圾了',
					price: 2143,
					collect: {
						type: false,
						img: require('../../assets/icon-collect.png')
					}
				}]
			}
		},
		watch: {
			screenChecked:function(value){
				console.log(value)
			}
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
			changeType() {
				if(this.model.type == 1) {
					this.model.img = require('../../assets/icon-type1.png');
					this.model.type = 2;
				} else {
					this.model.img = require('../../assets/icon-type2.png');
					this.model.type = 1;
				}
			},
			handleCollect(item) {
				if(item.collect.type) {
					item.collect.img = require('../../assets/icon-collect.png');
					item.collect.type = false;
				} else {
					item.collect.img = require('../../assets/icon-collect-active.png');
					item.collect.type = true;
				}
			},
			resetState() {
				var self = this;

				function priceOrderDefault() {
					self.priceOrder.type = 'default';
					self.priceOrder.img = require('../../assets/icon-order.png');
					self.$refs.priceOrderImg.style.transform = "rotate(0deg)";
				}

				function screenDefault() {
					self.screenType.active = false;
					self.screenType.img = require('../../assets/icon-screen.png');
				}
				if(this.selected == 0) {
					priceOrderDefault();
					screenDefault();
				} else if(this.selected == 1) {
					screenDefault();
				} else if(this.selected == 2) {
					priceOrderDefault();
				}
			},
			handleDefault() {
				this.selected = 0;
				this.resetState();
			},
			handlePriceOrder() {
				this.selected = 1;
				this.resetState();
				if(this.priceOrder.type == 'default') {
					this.priceOrder.type = 'asc';
					this.priceOrder.img = require('../../assets/icon-order-active.png');
				} else if(this.priceOrder.type == 'asc') {
					this.priceOrder.type = 'desc';
					this.$refs.priceOrderImg.style.transform = "rotate(180deg)";
				} else if(this.priceOrder.type == 'desc') {
					this.priceOrder.type = 'asc';
					this.$refs.priceOrderImg.style.transform = "rotate(0deg)";
				}
			},
			handleScreen() {
				this.selected = 2;
				this.resetState();
				if(!this.screenType.acitve) {
					this.screenType.active = true;
					this.showScreenList = true;//显示筛选列表
					this.screenType.img = require('../../assets/icon-screen-active.png');
				}
			},
			showAll(item){
				if(item.height>70){
					item.height = 70;
				}else{
					var num = parseInt(item.list.length/3);
					num = item.list.length > num*3 ? num + 1 : num;
					console.log(num)
					var height = 30 + 45*num;
					item.height = height;
				}
			},
			handelReset(){//筛选项重置事件
				this.screenChecked.splice(0,this.screenChecked.length);
			},
			confirmScreen(){//筛选项确认事件
				this.showScreenList = false;//关闭筛选列表
			}
		},
		components: {
			Search,
			Tab,
			TabItem,
			Checker,
			CheckerItem
		}
	}
</script>

<style scoped lang="less">
	@whiteColor: #FFFFFF;
	.search-box {
		width: 100%;
		height: 44.4px;
	}
	
	.screen-nav {
		overflow: hidden;
		>div:first-of-type {
			float: left;
			width: calc(~'100% - 30px');
		}
		>div:last-of-type {
			width: 30px;
			height: 44px;
			float: right;
			background-color: #FFFFFF;
			img {
				width: 15px;
				height: 15px;
				margin-top: 14.5px;
			}
		}
		.icon-order {
			width: 6px;
			height: 10px;
		}
		.icon-screen {
			width: 14px;
			height: 14px;
			vertical-align: middle;
			margin-top: -2px;
		}
	}
	
	.screen-type-list {
		width: 100%;
		background-color: @whiteColor;
		overflow: hidden;
		margin-bottom: 38px;
		>div {
			height: 70px;
			overflow: hidden;
			font-size: 12px;
			padding: 15px 15px 0px;
			color: #646464;
			transition: 0.5s;
			>p {
				margin-bottom: 10px;
				span{
					float: right;
					color: #000000;
				}
			}
			>div {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				input {
					height: 35px;
					width: 38%;
					border: 1px solid #E8EAF6;
					text-align: center;
				}
				i {
					color: #CCCCCC;
				}
				>div{
					width: 33%;
				}
			}
		}
		>p{
			width: 100%;
			padding: 0px 15px;
			font-size: 14px;
			overflow: hidden;
			position: fixed;
			bottom: 50px;
			left: 0px;
			background-color: @whiteColor;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			span{
				float: right;
				padding: 8px 10px;
				display: block;
			}
		}
	}
	
	.list-item >div{
		width: 80px;
		height: 35px;
		margin: 0 auto;
		margin-bottom: 10px;
		background-color: #f7f8fd;
		text-align: center;
		line-height: 35px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	.list-item-selected >div{
		border: 1px solid #393A3E;
		color: #393A3E;
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
					img {
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
	
	.list-type2 {
		padding: 14px 10px 0px;
		li {
			width: 100%;
			height: 80px;
			border-radius: 6px;
			overflow: hidden;
			background-color: @whiteColor;
			margin-bottom: 10px;
			font-size: 13px;
			.goods-img {
				width: 80px;
				height: 80px;
				margin-right: 15px;
				overflow: hidden;
				background-color: #ebefef;
				float: left;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.goods-info {
				height: 80px;
				float: left;
				width: calc(~"100% - 135px");
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				>p:first-of-type {
					line-height: 18px;
					-webkit-line-clamp: 2;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
				>p:last-of-type {
					float: right;
					font-size: 12px;
				}
			}
			>img {
				width: 20px;
				height: 20px;
				margin-top: 30px;
			}
		}
	}
</style>