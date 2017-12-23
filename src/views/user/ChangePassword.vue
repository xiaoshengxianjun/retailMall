<template>
	<div class="changePassword">
		<group>
	      <x-input title="" name="mobile" placeholder="请输入手机号" v-model="mobile" keyboard="number" is-type="china-mobile" required></x-input>
	      <x-input title="" type="text" placeholder="请输入验证码" v-model="code" required><x-button slot="right" type="primary" mini>获取验证码</x-button></x-input>
	      <x-input title="" type="text" placeholder="请输入新密码" v-model="password" :min="6" :max="16" required></x-input>
	    </group>
	</div>
</template>

<script>
	import { XInput,Box, Group, XButton } from 'vux'
	export default {
		name: 'changePassword',
		data() {
			return {
				
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

<style scoped>

</style>