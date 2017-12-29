<template>
	<div class="calcNumber">
		<button @click="handleReduce(count)" :disabled="count == 1" :style="{width:size,height:size}"></button>
		<span>{{count}}</span>
		<button @click="handlePlus(count)" :style="{width:size,height:size}"></button>
		<div class="inline-number">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'calcNumber',
		data() {
			return {}
		},
		props: ['count','size'],
		methods: {
			handleReduce(count) {
				count--;
				if(count <= 1) {
					count = 1;
				}
				this.$emit('update:count', count)
			},
			handlePlus(count) {
				count++;
				this.$emit('update:count', count)
			},
		}
	}
</script>

<style scoped lang="less">
	.calcNumber{
		display: inline-block;
		height: auto;
		button {
			width: 20px;
			height: 20px;
			border: none;
			vertical-align: middle;
			color: #000000;
		}
		button:first-of-type{
			background: url('../assets/icon-jian.png') no-repeat center;
			background-size: 100% 100%;
		}
		button:last-of-type{
			background: url('../assets/icon-jia.png') no-repeat center;
			background-size: 100% 100%;
		}
		span {
			display: inline-block;
			width: 30px;
			text-align: center;
		}
	}
</style>