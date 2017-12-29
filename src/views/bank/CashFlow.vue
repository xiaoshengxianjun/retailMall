<template>
	<div class="cashFlow">
		<div v-for="item in list">
			<div>
				<span>{{item.name}}</span>
				<span v-if="item.state == 'underway'" style="color: #1aa6fe;">{{item.state | filtState}}</span>
				<span v-if="item.state == 'fail'" style="color: #fe6567;">{{item.state | filtState}}</span>
				<span v-if="item.state == 'success'">{{item.state | filtState}}</span>
			</div>
			<div><span>{{item.time}}</span><span>￥{{item.count}}</span></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cashFlow',
		data() {
			return {
				//underway:提现中，success:提现成功，fail:提现失败
				list:[{
					name:'提现标题',
					state:'underway',
					time:'2017-12-20',
					count:'20.00'
				},{
					name:'提现标题',
					state:'underway',
					time:'2017-12-20',
					count:'20.00'
				},{
					name:'提现标题',
					state:'fail',
					time:'2017-12-20',
					count:'20.00'
				},{
					name:'提现标题',
					state:'success',
					time:'2017-12-20',
					count:'20.00'
				},{
					name:'提现标题',
					state:'success',
					time:'2017-12-20',
					count:'20.00'
				}]
			}
		},
		filters:{
			filtState:function(value){
				if(value == 'underway'){
					value = '提现中';
				}else if(value == 'fail'){
					value = '提现失败';
				}else if(value = 'success'){
					value = '提现成功';
				}
				return value;
			}
		}
	}
</script>

<style scoped lang="less">
	.cashFlow >div{
		padding: 15px;
		background-color: #FFFFFF;
		font-size: 14px;
		border-bottom: 1px solid #e6e6e6;
		>div{
			overflow: hidden;
			line-height: 20px;
			span:first-of-type{
				float: left;
			}
			span:last-of-type{
				float: right;
			}
		}
		>div:first-of-type span:last-of-type{
			font-size: 12px;
		}
		>div:last-of-type span:first-of-type{
			color: #666666;
			font-size: 12px;
		}
	}
</style>