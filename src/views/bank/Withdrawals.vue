<template>
	<div class="withdrawals">
		<group>
			<cell-box is-link>
				<div class="bankcard">
					<div>
						<img src=""/>
					</div>
					<div>
						<p>招商银行</p>
						<p>尾号4808 储蓄卡</p>
					</div>
				</div>
			</cell-box>
		</group>
		<div class="input-money">
			<p>提现金额</p>
			<div>
				<x-input class="vux-1px-b" title="￥" name="count" v-model="count" placeholder="请输入金额" keyboard="number" label-width="20px" style="font-size: 20px;"></x-input>
			</div>
		</div>
		<box gap="10px 25px">
	    	<x-button type="primary" @click.native="handleWithdrawals">确认</x-button>
	    </box>
	    <!--<NumKeyboard v-show="showKeyboard == true" v-on:showKeyboard="handleShow"></NumKeyboard>-->
	</div>
</template>

<script>
	import { Group, Cell, CellBox, Box, XButton, XInput } from 'vux'
	import NumKeyboard from '../../components/NumKeyboard.vue'
	export default {
		name: 'withdrawals',
		data() {
			return {
				showKeyboard:false,
				count:'',//提现金额
			}
		},
		methods:{
			handleWithdrawals(){
				var reg = /^\d+$/;
				if(this.count == ''){
					this.$vux.toast.show({
			          text: '请填写提现金额',
			          type:'text'
			        })
				}else if(!reg.test(this.count)){
					this.$vux.toast.show({
			          text: '金额只能为数字',
			          type:'text'
			        })
				}else {
					this.showKeyboard = true;
					this.$vux.loading.show({
				        text: '请求中...'
				      })
				      setTimeout(() => {
				        this.$vux.loading.hide()
				      }, 2000)
				}
			},
			handleShow(value){
				this.showKeyboard = value;
			}
		},
		components: {
			Group,
			Cell,
			CellBox,
			Box,
			XButton,
			XInput,
			NumKeyboard
		}
	}
</script>

<style scoped lang="less">
	.withdrawals{
		padding-top: 15px;
	}
	.bankcard{
		>div{
			font-size: 16px;
			float: left;
			height: 50px;
			line-height: 25px;
			img{
				width: 25px;
				height: 25px;
				margin-top: 12.5px;
				margin-right: 15px;
			}
			>p:first-of-type{
				color: #000000;
			}
			>p:last-of-type{
				font-size: 14px;
				color: #999999;
			}
		}
	}
	.input-money{
		background-color: #FFFFFF;
		margin-top: 10px;
		padding: 12px 15px 20px;
		margin-bottom: 40px;
		>div{
			margin-top: 20px;
		}
	}
</style>