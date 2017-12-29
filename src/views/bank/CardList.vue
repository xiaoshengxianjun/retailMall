<template>
	<div class="cardList">
		<div v-for="item in cardList">
			<div class="card-logo">
				<img src=""/>
			</div>
			<div class="card-info">
				<p class="bank-name">{{item.name}}</p>
				<p class="card-type">{{item.type}}</p>
				<p class="card-number">{{item.number | filterCardNumber}}</p>
			</div>
		</div>
		<p>
			<a><img src="../../assets/icon-add-plus.png"/>添加银行卡</a>
		</p>
	</div>
</template>

<script>
	import { Masker, XButton } from 'vux'
	export default {
		name: 'cardList',
		data() {
			return {
				cardList:[{
					name:'建设银行',
					type:'储蓄卡',
					number:'3213211278964513'
				},{
					name:'招商银行',
					type:'储蓄卡',
					number:'3213211278964513'
				},{
					name:'农业银行',
					type:'储蓄卡',
					number:'3213211278964513'
				}]
			}
		},
		components: {
		    Masker,
		    XButton
		},
		filters:{
			filterCardNumber:function(value){
				return '**** **** **** ' + value.substring(12,16);
			}
		}
	}
</script>

<style scoped lang="less">
	.cardList{
		>div{
			margin: 10px;
			height: 84px;
			background: #1a66a4;
			overflow: hidden;
			border-radius: 5px;
			padding: 13px;
			.card-logo{
				width: 37px;
				height: 100%;
				float:left;
				margin-right:10px;
				img{
					width: 37px;
					height: 37px;
				}
			}
			.card-info{
				float: left;
				width: calc(~"100% - 47px");
				height: 100%;
				color: #FFFFFF;
				p:first-of-type{
					font-size: 14px;
				}
				p.card-type{
					color: #a2c0dc;
					font-size: 12px;
				}
				p.card-number{
					font-size: 21px;
					margin-top: 5px;
				}
			}
		}
		>div:last-of-type{
			margin-bottom: 60px;
		}
		>p{
			width: 100%;
			position: fixed;
			bottom: 30px;
			text-align: center;
			img{
				width: 20px;
				height: 20px;
				vertical-align: middle;
				margin-top: -3px;
				margin-right: 10px;
			}
		}
	}
</style>