<template>
	<div class="type">
		<div class="search-box">
			<search v-model="searchValue" position="absolute" auto-scroll-to-top top="0px" @on-cancel="onCancel" @on-submit="onSubmit" placeholder="请输入关键字" ref="search"></search>
		</div>
		<div class="type-list" ref="typeListHeight">
			<ul>
				<li v-for="item in typeList" :class="{active:item.active}" @click="getTypeMain(item)">
					<span>{{item.name}}<i></i></span>
					<i></i>
				</li>
			</ul>
		</div>
		<div class="type-main" ref="typeMainHeight">
			<div class="type-main-banner">
				<!--banner图-->	
			</div>
			<div class="type-main-content">
				<div class="main-content-title">
					<span>现代简约</span>
					<i></i>
				</div>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li @click="toClassifyDetail">更多...</li>
				</ul>
			</div>
			<div class="type-main-content">
				<div class="main-content-title">
					<span>西式复古</span>
					<i></i>
				</div>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li>更多...</li>
				</ul>
			</div>
			<div class="type-main-content">
				<div class="main-content-title">
					<span>现代简约</span>
					<i></i>
				</div>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li>更多...</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { Search, Toast } from 'vux'
	window.document.title = "商品分类";
	export default {
		name: 'type',
		data() {
			return {
				searchValue: '',//搜索框内容
				typeList:[{name:'客厅',active:true},{name:'餐厅',active:false},{name:'餐厅',active:false},{name:'餐厅',active:false},{name:'厨房',active:false},{name:'卧室',active:false},{name:'卫生间',active:false},{name:'家具周边',active:false},{name:'家具周边好东西',active:false}]
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
			getTypeMain(item){
				for(var i=0; i<this.typeList.length; i++){
					this.typeList[i].active = false;
				}
				item.active = !item.active;
			},
			toClassifyDetail(){
				this.$router.push({
					path:'/ClassifyDetail'
				})
			}
		},
		mounted(){
			var tempHeight = document.documentElement.clientHeight - 94.4;
			this.$refs.typeListHeight.style.height = tempHeight + "px";
			this.$refs.typeMainHeight.style.height = tempHeight + "px";
		}
	}
</script>

<style scoped lang="less">
	@color999:#999999;
	@whiteColor: #FFFFFF;
	.search-box{
		width: 100%;
		height: 44.4px;
	}
	.type-list{
		width: 25%;
		height: auto;
		float: left;
		background-color: @whiteColor;
		text-align: center;
		overflow-y: scroll;
		overflow-x: hidden;
		ul{
			width: 100%;
			height: auto;
			li{
				width: 100%;
				height: auto;
				min-height: 68px;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				color: @color999;
				font-size: 14px;
				>i{
					width: 26px;
					height: 0px;
					position: absolute;
					bottom: 0px;
					left: 50%;
					margin-left: -13px;
					border-bottom: 1px solid #e5e5e5;
				}
			}
			li:last-of-type{
				>i{
					border: none;
				}
			}
			li.active{
				color: #393A3F;
				span{
					position:relative;
					i{
						width: 18px;
						height: 0px;
						position: absolute;
						bottom: -6px;
						left: 50%;
						margin-left: -9px;
						border-bottom: 2px solid #393A3F;
					}
				}
			}
		}
	}
	.type-main{
		width: 75%;
		float: left;
		box-sizing: border-box;
		padding: 0px 20px;
		overflow-y: scroll;
		overflow-x: hidden;
		.type-main-banner{
			width: 100%;
			height: 80px;
			margin-top: 13px;
			border-radius: 6px;
			overflow: hidden;
			background: blue;
		}
		.type-main-content{
			text-align: center;
			margin-top: 15px;
			.main-content-title{
				margin-bottom: 12px;
				position: relative;
				>span{
					padding-bottom: 3px;
					border-bottom: 1.5px solid @color999;
				}
				>i{
					width: 160px;
					height: 0px;
					display: block;
					position: absolute;
					bottom: -2px;
					left: 50%;
					margin-left: -80px;
					border-bottom: 1px solid @color999;
				}
			}
			ul{
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				li{
					width:70px;
					height:70px;
					line-height: 70px;
					font-size: 12px;
					background-color: @whiteColor;
					margin-bottom: 10px;
				}
			}
		}
	}
	
</style>