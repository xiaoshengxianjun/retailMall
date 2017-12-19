<template>
	<div class="regist">
		<group>
	      <x-input title="" name="mobile" placeholder="请输入手机号" v-model="mobile" keyboard="number" is-type="china-mobile" required></x-input>
	      <x-input title="" type="text" placeholder="请输入验证码" v-model="code" required><x-button slot="right" type="primary" mini>获取验证码</x-button></x-input>
	      <x-input title="" type="text" placeholder="请设置登录密码" v-model="password" :min="6" :max="16" required></x-input>
	      <x-input title="" type="text" placeholder="确认密码" v-model="passwordC" :min="6" :max="16" required></x-input>
	    </group>
	    <p><span>注册后，您的微信账号和手机号都可以登录</span></p>
	    <box gap="10px 10px">
	    	<x-button type="primary">注册</x-button>
	    </box>
	    <p><span class="to-login">已有账号？去登录</span></p>
	</div>
</template>

<script>
	import { XInput,Box, Group, XButton } from 'vux'
	export default {
		name: 'regist',
		data() {
			return {
				mobile:'',//手机号
				code:'',//验证码
				password:'',//密码
				passwordC:''//确认密码
			}
		},
		components: {
		    XInput,
		    XButton,
		    Group,
		    Box
		}
	}
</script>

<style scoped lang="less">
	@color393a31:#393a31;
	.regist{
		>p:first-of-type{
			padding: 10px;
			float: right;
			font-size: 14px;
			margin-bottom: 40px;
		}
		>p:last-of-type{
			width: 100%;
			text-align: center;
			color: @color393a31;
			font-size:14px;
			position: absolute;
			bottom: 25px;
		}
	}
</style>