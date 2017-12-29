<template>
	<div class="loginBind">
		<group title="关联已有账号" class="weui-cells_form">
	      <x-input title="" name="mobile" placeholder="请输入手机号" v-model="mobile" keyboard="number" is-type="china-mobile" required></x-input>
	      <x-input title="" type="text" placeholder="请设置登录密码" v-model="password" :min="6" :max="16" required></x-input>
	      <x-input title="" type="text" placeholder="请输入验证码" v-model="code" required  class="weui-cell_vcode">
	      	<img slot="right" class="weui-vcode-img" src="https://i.loli.net/2017/09/18/59bf7f32425d5.jpg">
	      </x-input>
	      <x-input title="" type="text" placeholder="确认密码" v-model="passwordC" :min="6" :max="16" required></x-input>
	    </group>
	    <p><span>注册后，您的微信账号和手机号都可以登录</span></p>
	    <box gap="10px 25px">
	    	<x-button type="primary">注册</x-button>
	    </box>
	    <p><span class="to-login">忘记密码</span></p>
	</div>
</template>

<script>
	import { XInput,Box, Group, XButton } from 'vux'
	export default {
		name: 'loginBind',
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
	.loginBind{
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