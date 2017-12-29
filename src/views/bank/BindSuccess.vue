<template>
	<div class="bindSuccess">
		<div class="succ-state">
			<img src="../../assets/icon-success.png"/>
			<span>绑定成功</span>
		</div>
		<div class="btn">
			<box gap="10px 25px">
		    	<x-button type="primary">完成</x-button>
		    </box>
		</div>
	</div>
</template>

<script>
	import { Box, XButton } from 'vux'
	export default {
		name: 'bindSuccess',
		data() {
			return {
				
			}
		},
		components:{
			Box,
			XButton,
		},
	}
</script>

<style scoped lang="less">
	.succ-state{
		width: 100%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 90px;
		img{
			width: 75px;
			height: 75px;
		}
	}
	.btn{
		width: 100%;
		position: absolute;
		bottom: 40px;
		left: 0px;
	}
</style>