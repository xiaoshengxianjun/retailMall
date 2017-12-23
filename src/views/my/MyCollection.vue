<template>
	<div class="myCollection">
		<div v-for="item in collectionList" key="item.id">
			<div class="goods-img">
				<img :src="item.img"/>
			</div>
			<div class="goods-info">
				<p>{{item.name}}</p>
				<div><span>￥{{item.price}}</span><a href="javascript:;">取消收藏</a></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'myCollection',
		data() {
			return {
				collectionList:[{
					id:'1',
					name:'MD100*0.5-DKSKK+125这是一个什么玩意',
					price:'2142',
					img:''
				},{
					id:'2',
					name:'MD100*0.5-DKSKK+125这是一个什么玩意',
					price:'2142',
					img:''
				},{
					id:'3',
					name:'MD100*0.5-DKSKK+125这是一个什么玩意',
					price:'2142',
					img:''
				},{
					id:'4',
					name:'MD100*0.5-DKSKK+125这是一个什么玩意',
					price:'2142',
					img:''
				}]
			}
		}
	}
</script>

<style scoped lang="less">
	.myCollection >div{
		padding: 17.5px 20px;
		height: 90px;
		background-color: #FFFFFF;
		font-size: 14px;
		margin-bottom: 10px;
		.goods-img{
			width: 90px;
			height: 90px;
			margin-right: 17.5px;
			overflow: hidden;
			border-radius: 6px;
			background-color: #eaeeef;
			float: left;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.goods-info{
			height: 90px;
			float: left;
			width: calc(~"100% - 107.5px");
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			>p{
				line-height: 20px;
				-webkit-line-clamp: 2;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
			>div a{
				float: right;
			}
		}
	}
</style>