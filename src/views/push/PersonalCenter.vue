<template>
	<div class="personalCenter">
		<div class="info-panel">
			
			<p>
				<a href="javascript:;" class="withdraw">提现</a>
				<a href="javascript:;">绑卡</a>
			</p>
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
	@color:#b29f75;
	.info-panel{
		width: 100%;
		height: 230px;
		background: url(../../assets/bg-center-panel.png) no-repeat center;
		background-size: 100% 100%;
		position: relative;
		p:last-of-type{
			position: absolute;
			bottom: 0px;
			left: 0px;
			width: 100%;
			height: 44px;
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
</style>