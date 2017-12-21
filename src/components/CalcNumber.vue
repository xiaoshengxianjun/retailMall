<template>
	<div class="calcNumber">
		<button @click="handleReduce(count)" :disabled="count == 1">-</button>
		<span>{{count}}</span>
		<button @click="handlePlus(count)">+</button>
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
		props: ['count'],
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
		button {
			width: 20px;
			height: 20px;
			border: none;
			vertical-align: middle;
			margin-top: -3px;
		}
		span {
			display: inline-block;
			width: 30px;
			text-align: center;
		}
	}
</style>