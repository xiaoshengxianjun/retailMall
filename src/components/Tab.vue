<template>
	<div class="tab"  style="height:100%;">
		<view-box ref="viewBox">
			<router-view></router-view>
		</view-box>
		<tabbar slot="bottom" style="position: fixed;">
			<tabbar-item selected link="/Home">
				<img slot="icon" src="../assets/icon-home.png">
				<img slot="icon-active" src="../assets/icon-home-active.png">
				<span slot="label">首頁</span>
			</tabbar-item>
			<tabbar-item link="/Classify">
				<img slot="icon" src="../assets/icon-type.png">
				<img slot="icon-active" src="../assets/icon-type-active.png">
				<span slot="label">分类</span>
			</tabbar-item>
			<tabbar-item link="/Push/MustPush">
				<img class="plus-icon" slot="icon" src="../assets/icon-tuishou.png">
				<span slot="label">推手</span>
			</tabbar-item>
			<tabbar-item link="/Shopcar">
				<img slot="icon" src="../assets/icon-shopcar.png">
				<img slot="icon-active" src="../assets/icon-shopcar-active.png">
				<span slot="label">购物车</span>
			</tabbar-item>
			<tabbar-item link="/My">
				<img slot="icon" src="../assets/icon-my.png">
				<img slot="icon-active" src="../assets/icon-my-active.png">
				<span slot="label">我的</span>
			</tabbar-item>
		</tabbar>
	</div>
</template>

<script>
	import { ViewBox, Tabbar, TabbarItem } from 'vux'
	export default {
		name: 'tab',
		data() {
			return {

			}
		},
		components: {
			ViewBox,
			Tabbar,
			TabbarItem
		}
	}
</script>

<style scoped>
	html, body {
	    height: 100%;
	    width: 100%;
	    overflow-x: hidden;
	  }
	.weui-tabbar{
		background-color: #FFFFFF;
	}
	.plus-icon {
		position: absolute;
		top: -24px;
		left: -50%;
		width: 200%;
		height: 200%;
	}
	
</style>