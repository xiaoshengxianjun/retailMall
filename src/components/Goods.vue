<template>
	<div class="goods">
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
</template>

<script>
	export default {
		name: 'goods',
		data() {
			return {
				goodsList:[{
					name:'这是一个推荐的灯，好靓的灯。',
					price:2143
				},{
					name:'这是一个推荐的灯',
					price:2143
				}]
			}
		}
	}
</script>

<style scoped lang="less">
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
</style>