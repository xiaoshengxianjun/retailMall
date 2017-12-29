<template>
	<div class="bindCardStep1">
		<group title="请绑定持卡人本人的银行卡">
	      <x-input title="持卡人"  placeholder="请输入持卡人姓名" v-model="name" required text-align="left" label-width="80px"></x-input>
	      <x-input title="卡号" placeholder="请输入银行卡号" mask="9999 9999 9999 9999 9999" :min="19" :max="23" v-model="card" keyboard="number" required text-align="left" label-width="80px"></x-input>
	    </group>
	    <box gap="50px 25px">
	    	<x-button type="primary">下一步</x-button>
	    </box>
	</div>
</template>

<script>
	import { XInput, Box, Group, XButton } from 'vux'
	export default {
		name: 'bindCardStep1',
		data() {
			return {
				name:'',
				card:''
			}
		},
		components:{
			XInput,
			Box,
			Group,
			XButton
		},
		watch:{
			card:function(value){
				console.log(value)
			}
		}
	}
</script>

<style scoped>

</style>