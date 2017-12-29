<template>
	<div class="checkMobile">
		<div class="prompt">
			<p>本次操作需要短信确认，请输入<span>181***2343</span>收到的短信检验码</p>
		</div>
		<group>
			<x-input title="校验码" type="text" placeholder="填写校验码" v-model="code" required><x-button slot="right" type="primary" mini>获取验证码</x-button></x-input>
		</group>
		<box gap="30px 25px 10px">
	    	<x-button type="primary">下一步</x-button>
	    </box>
	</div>
</template>

<script>
	import { XInput, Box, Group, XButton, Cell } from 'vux'
	export default {
		name: 'checkMobile',
		data() {
			return {
				code:''
			}
		},
		components:{
			XInput,
			Box,
			Group,
			XButton,
			Cell
		},
	}
</script>

<style scoped lang="less">
	.prompt{
		width: 100%;
		height: 107px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
		margin-bottom: 15px;
		text-align: center;
		color: #696969;
		p{
			width: 66%;
			span{
				color: #000000;
			}
		}
	}
</style>