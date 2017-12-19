<template>
	<div class="personalCenter">
		<div class="info-panel">
			<p>可提现奖励</p>
			<h3>￥8888.80</h3>
			<a href="javascript:;" class="watch-details">查看明细<x-icon type="ios-arrow-right" size="14"></x-icon></a>
			<p>
				<a href="javascript:;" class="withdraw">提现</a>
				<a href="javascript:;">绑卡</a>
			</p>
		</div>
		<p class="record">提现记录</p>
		<div class="reward-box">
			<div class="grand-total">
				<p>累计奖励</p>
				<h3>￥8888.80</h3>
				<a href="javascript:;" class="watch-details">查看明细<x-icon type="ios-arrow-right" size="14"></x-icon></a>
				<div class="border-right"></div>
			</div>
			<div class="waitfor-account">
				<p>待到账奖励</p>
				<h3>￥8888.80</h3>
				<a href="javascript:;" class="watch-details">查看明细<x-icon type="ios-arrow-right" size="14"></x-icon></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'personalCenter',
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped lang="less">
	@color:#b4a179;
	.vux-x-icon {
	  fill: @color;
	  vertical-align: middle;
	  margin-top: -3px;
	}
	.info-panel{
		width: 100%;
		height: 230px;
		background: url(../../assets/bg-center-panel.png) no-repeat center;
		background-size: 100% 100%;
		position: relative;
		font-size: 18px;
		text-align: center;
		p:first-of-type{
			padding-top: 40px;
			margin-bottom: 5px;
		}
		h3{
			color: @color;
		}
		
		p:last-of-type{
			position: absolute;
			bottom: 0px;
			left: 0px;
			width: 100%;
			height: 44px;
			font-size: 16px;
			a{
				color: #000000;
				float: left;
				width: 50%;
				height: 100%;
				text-align: center;
				line-height: 44px;
				color: @color;
				background-color: rgba(255,255,255,0.6);
				box-sizing: border-box;
			}
			.withdraw{
				border-right: 1px solid #FFFFFF;
			}
		}
	}
	.watch-details{
			width: 57px;
			height: 16px;
			border: 1.5px solid @color;
			color: @color;
			box-sizing: border-box;
			padding-left: 4px;
			text-align: center;
			line-height: 16px;
			font-size: 0.6em;
		}
	.record{
		width: 100%;
		height: 50px;
		line-height: 50px;
		background-color: #FFFFFF;
		text-align: center;
		color: @color;
		margin-bottom: 15px;
		cursor: pointer;
	}
	.reward-box{
		width: 100%;
		height: 170px;
		background-color: #FFFFFF;
		>div{
			width: 50%;
			height: 100%;
			box-sizing: border-box;
			text-align: center;
			float: left;
			position: relative;
			p{
				padding-top: 30px;
				margin-bottom: 10px;
			}
			h3{
				margin-bottom: 10px;
			}
			.border-right{
				width: 0px;
				height: 77px;
				border-right: 1px solid #e6e6e6;
				position: absolute;
				right: 0px;
				top: 50%;
				margin-top: -38px;
			}
		}
	}
</style>