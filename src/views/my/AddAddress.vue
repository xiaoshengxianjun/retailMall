<template>
	<div class="addAddress">
		<group>
	      <x-input title="收件人"  placeholder="请输入您的姓名" v-model="name" required text-align="left" label-width="80px"></x-input>
	      <x-input title="手机号" name="mobile" placeholder="请输入您的手机号" v-model="mobile" keyboard="number" is-type="china-mobile" required text-align="left" label-width="80px"></x-input>
	      <x-address title="省市区"  placeholder="请选择地区" v-model="region" :list="addressData" value-text-align="left" label-width="80px"></x-address>
	      <x-input title="详细地址" placeholder="请输入详细地址" v-model="address" required text-align="left" label-width="80px"></x-input>
	    </group>
	    <check-icon class="is-default" :value.sync="isDefault" @click.native="handleCheckedItem">默认地址</check-icon>
	    <x-button type="primary" class="add-btn" @click.native="handleAddAddress">确认添加</x-button>
	</div>
</template>

<script>
	import { XInput, Group, XButton, XAddress, ChinaAddressV4Data, CheckIcon } from 'vux'
	export default {
		name: 'addAddress',
		data() {
			return {
				addressData: ChinaAddressV4Data,
				name:'',//收件人
				mobile:'',//手机号
				province:'',//省，
				city:'',//市
				country:'',//区
				region:[],//地区
				address:'',//详细地址
				isDefault:false,
			}
		},
		methods:{
			handleCheckedItem(){
				
			},
			handleAddAddress(){
				this.$router.push({
					path:'/MyAddress'
				})
			}
		},
		components: {
		    XInput,
		    XButton,
		    Group,
		    XAddress,
		    CheckIcon
		},
	}
</script>

<style scoped lang="less">
	.is-default{
		margin-left: 10px;
		margin-top: 10px;
	}
	.add-btn{
		position: fixed;
		bottom: 0px;
		left: 0px;
		font-size: 14px;
		height: 50px;
	}
</style>