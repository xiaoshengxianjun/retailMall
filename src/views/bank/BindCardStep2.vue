<template>
	<div class="bindCardStep2">
		<group>
	      <!--<cell title="卡类型" :value="cardType" value-align="left" label-width="80px"></cell>-->
	      <x-input title="卡类型" v-model="cardType" text-align="left":show-clear="false" label-width="80px" disabled></x-input>
	    </group>
	    <group style="margin-top: 0.7em;">
	    	<x-input title="手机号" name="mobile" placeholder="请输入手机号码" v-model="mobile" keyboard="number" is-type="china-mobile" required text-align="left" label-width="80px"></x-input>
	    </group>
	    <box gap="50px 25px">
	    	<x-button type="primary">下一步</x-button>
	    </box>
	</div>
</template>

<script>
	import { XInput, Box, Group, XButton, Cell } from 'vux'
	export default {
		name: 'bindCardStep2',
		data() {
			return {
				cardType:'招商银行储蓄卡',
				mobile:''
			}
		},
		components:{
			XInput,
			Box,
			Group,
			XButton,
			Cell
		},
		watch:{
			card:function(value){
				console.log(value)
			}
		}
	}
</script>

<style scoped>
	.bindCardStep2{
		padding-top: 15px;
	}
</style>