<template>
	<div class="regist">
		<group>
			<x-input title="" name="mobile" placeholder="请输入手机号" v-model="mobile" keyboard="number" is-type="china-mobile" required></x-input>
			<x-input title="" type="text" placeholder="请输入验证码" v-model="code" required>
				<x-button slot="right" type="primary" mini :disabled="getCode.disabled" @click.native="handleGetCode" style="width: 100px;">{{getCode.txt}}</x-button>
			</x-input>
			<x-input title="" type="password" placeholder="请设置登录密码" v-model="password" :min="6" :max="16" required></x-input>
			<x-input title="" type="password" placeholder="确认密码" v-model="passwordC" :min="6" :max="16" required></x-input>
		</group>
		<p><span>注册后，您的微信账号和手机号都可以登录</span></p>
		<box gap="10px 25px">
			<x-button type="primary" @click.native="handleRegist">注册</x-button>
		</box>
		<p>
			<router-link to="/Login">已有账号？去登录</router-link>
		</p>
	</div>
</template>

<script>
	import { XInput, Box, Group, XButton } from 'vux'

	export default {
		name: 'regist',
		data() {
			return {
				mobile: '', //手机号
				code: '', //验证码
				password: '', //密码
				passwordC: '', //确认密码
				getCode: {
					txt: '获取验证码',
					disabled: false,
				}
			}
		},
		methods: {
			handleGetCode() {
				if(this.mobile) {
					this.getCode.disabled = true;
					this.getCode.txt = '获取中...';
					let seconds = 60;
					let self = this;
					let time = setInterval(function() {
						--seconds;
						self.getCode.txt = seconds + 's';
						if(seconds <= 0) {
							clearInterval(time);
							self.getCode.disabled = false;
							self.getCode.txt = '获取验证码';
						}
					}, 1000)
				} else {
					this.$vux.toast.text('请先填写手机号');
				}
			},
			handleRegist() {
				if(!this.mobile || !this.code || !this.password || !this.passwordC) {
					this.$vux.toast.text('您有未填项，不能注册')
				} else if(this.password != this.passwordC) {
					this.$vux.toast.text('两次输入的密码不一致')
				} else {
					this.$vux.toast.text('注册成功')
				}
			}
		},
		created() {
			window.document.title = '注册';
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
	@color393a31: #393a31;
	.regist {
		>p:first-of-type {
			padding: 10px;
			float: right;
			font-size: 14px;
			margin-bottom: 40px;
		}
		>p:last-of-type {
			width: 100%;
			text-align: center;
			color: @color393a31;
			font-size: 14px;
			position: absolute;
			bottom: 25px;
		}
	}
</style>