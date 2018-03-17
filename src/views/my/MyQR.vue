<template>
	<div class="myQR">
		<vue-q-art :config="config"></vue-q-art>
		<vue-qr :bgSrc='config.imagePath' :logoSrc="config.imagePath" :text="config.value" :size="200" :margin="0"></vue-qr>
	</div>
</template>

<script>
	import VueQArt from 'vue-qart'
	import VueQr from 'vue-qr'

	export default {
		name: 'myQR',
		data() {
			return {
				config: {
					value: 'https://www.baidu.com',
					imagePath: require('../../assets/img-demoUser.jpg'),
					filter: 'color'
				}
			}
		},
		components: {
			VueQArt,
			VueQr
		}
	}
</script>

<style scoped lang="less">
	.myQR{
		text-align: center;
	}
</style>