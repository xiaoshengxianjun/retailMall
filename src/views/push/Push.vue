<template>
	<div class="push">
		<tab :line-width="2" custom-bar-width="60px">
	      <tab-item selected @on-item-click="toMustPush">必推好货</tab-item>
	      <tab-item @on-item-click="toSaleDetails">售货明细</tab-item>
	      <tab-item @on-item-click="toCenter">个人中心</tab-item>
	    </tab>
		<view-box ref="viewBox">
			<router-view></router-view>
		</view-box>
	</div>
</template>

<script>
	import { Tab, TabItem, ViewBox, Box, Flexbox, FlexboxItem } from 'vux'
	export default {
		name: 'push',
		data() {
			return {
				mustPushGoods:[{
					imgSrc:'',
					name:'JSLJD-32 好大一个灯',
					price:'1234',
					returnPrice:'10'
				},{
					imgSrc:'',
					name:'JSLJD-32 好大一个灯',
					price:'1234',
					returnPrice:'10'
				},{
					imgSrc:'',
					name:'JSLJD-32 好大一个灯',
					price:'1234',
					returnPrice:'10'
				}]
			}
		},
		components: {
			Tab,
			TabItem,
			ViewBox,
			Box,
			Flexbox,
			FlexboxItem,
		},
		methods: {
			toMustPush(){
				this.$router.push({
					path:'/Push/MustPush'
				})
			},
			toSaleDetails(){
				this.$router.push({
					path:'/Push/SaleDetails'
				})
			},
			toCenter(){
				this.$router.push({
					path:'/Push/PersonalCenter'
				})
			},
		}
	}
</script>

<style scoped lang="less">
	
</style>