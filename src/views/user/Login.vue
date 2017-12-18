<template>
	<div class="login">
		<group style="margin-top:-1.17647059em;">
	      <x-input title="" name="mobile" placeholder="请输入手机号码" v-model="mobile" keyboard="number" is-type="china-mobile" required></x-input>
	      <x-input title="" type="text" placeholder="请输入密码" v-model="password" :min="6" :max="16" @on-change="change" required></x-input>
	    </group>
	    <p><span class="forget-pass">忘记密码?</span></p>
	    <box gap="10px 10px">
	    	<x-button type="primary">登录</x-button>
	    	<x-button><img class="icon-wx" src="../../assets/icon-wx.png" />微信登录</x-button>
	    </box>
	    <p><span class="to-regist">还没有账号？快去注册</span></p>
	</div>
</template>

<script>
	import { XInput,Box, Group, XButton } from 'vux'
	export default {
		name: 'login',
		data() {
			return {
				mobile:'',//用户手机号
				password:'',//用户密码
			}
		},
		components: {
		    XInput,
		    XButton,
		    Group,
		    Box
		},
		methods:{
			change (val) {
		      console.log('on change', val)
		    }
		}
	}
</script>

<style scoped lang="less">
	@color666:#666666;
	@color393a31:#393a31;
	.input-box{
		background-color: #FFFFFF;
	}
	.login{
		>p:first-of-type{
			padding: 20px 15px 40px;
			float: right;
			color: @color666;
			font-size:14px;
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
	.icon-wx{
		width: 18px;
		height: 14px;
		margin-right: 6px;
	}
</style>