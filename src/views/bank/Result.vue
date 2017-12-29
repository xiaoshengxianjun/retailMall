<template>
	<div class="result">
		<p class="title">提现标题</p>
		<p class="count">￥20.00</p>
		<p v-if="state == 'success'" class="state" style="color: #19a6ff;">提现成功</p>
		<p v-if="state == 'fail'" class="state" style="color: #ff6766;">提现成功</p>
		<div>
			<p><span>返利金额</span><span>￥20.00</span></p>
			<p><span>推荐产品</span><span>3060LED平板灯</span></p>
			<p><span>推荐时间</span><span>2017-11-11 11:11:11</span></p>
			<div class="vux-1px-b" style="margin: 10px 0px 20px;"></div>
			<p v-if="state == 'fail'"><span>失败原因</span><span>审核不通过</span></p>
			<p><span>提现时间</span><span>2017-12-12 12:12:12</span></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'result',
		data() {
			return {
				state:'success',//提现状态，success:成功，fail失败
			}
		}
	}
</script>

<style scoped lang="less">
	.result{
		text-align: center;
		font-size: 14px;
		p.title{
			font-size: 17px;
			margin-top: 28px;
		}
		p.count{
			font-size: 20px;
			margin-top: 16px;
		}
		>div{
			padding: 0px 20px;
			margin-top: 50px;
			margin-bottom: 30px;
			overflow: hidden;
			>p{
				height: 35px;
				line-height: 35px;
				overflow: hidden;
				>span:first-of-type{
					float: left;
					color: #999999;
				}
				>span:last-of-type{
					float: right;
				}
			}
		}
	}
</style>