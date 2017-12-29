<template>
	<div class="numKeyboard">
		<div class="keyboard-box">
			<div class="keyboard-title vux-1px-b"><x-icon class="close-icon" type="ios-close-empty" size="30" @click.native="closeKeyboard"></x-icon><span>请输入支付密码</span></div>
			<div class="input-box">
				<ul>
					<li>{{showNum[0]}}</li><li>{{showNum[1]}}</li><li>{{showNum[2]}}</li><li>{{showNum[3]}}</li><li>{{showNum[4]}}</li><li>{{showNum[5]}}</li>
				</ul>
				<p>
					<a>忘记密码？</a>
				</p>
			</div>
			<ul>
				<li v-for="item in keyNum" @click="handleClick(item)">{{item}}</li>
				<li style="background-color: #e3e8ee;"></li>
				<li @click="handleClick(0)">0</li>
				<li style="background-color: #e3e8ee;" @click="deleteInput"><img src="../assets/icon-delete-input.png"/></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'numKeyboard',
		data() {
			return {
				showNum:[],
				keyNum:[1,2,3,4,5,6,7,8,9]
			}
		},
		methods:{
			handleClick(item){
				if(this.showNum.length<6){
					this.showNum.push(item);
				}
				if(this.showNum.length == 6){
					console.log("提交申请中")
					//处理密码填写完成之后的操作
				}
			},
			deleteInput(){
				if(this.showNum.length>0){
					this.showNum.pop();
				}
			},
			closeKeyboard(){
				this.showNum.splice(0,this.showNum.length);
				this.$emit('showKeyboard',false);
			}
		}
	}
</script>

<style scoped lang="less">
	.numKeyboard{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
		background-color: rgba(178,178,178,0.5);
	}
	.keyboard-box{
		width: 100%;
		background-color: #FFFFFF;
		text-align: center;
		position: absolute;
		bottom: 0px;
		.keyboard-title{
			height: 48px;
			line-height: 48px;
			position:relative;
			.close-icon{
				position: absolute;
				left: 10px;
				top: 9px;
			}
		}
		.input-box{
			padding: 8px 16px;
			background-color: #f9f9f9;
			margin-top: 24px;
			ul{
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 6px;
				border: 1px solid #CCCCCC;
				overflow: hidden;
				li{
					width: 16.3%;
					height: 48px;
					font-size: 22px;
					line-height: 48px;
					border-right: none;
					border-right: 1px solid #CCCCCC;
					background-color: #FFFFFF;
				}
				li:last-of-type{
					border-right: none;
				}
			} 
			p{
				width: 100%;
				margin-top:5px;
				overflow: hidden;
				a{
					float: right;
					font-size: 14px;
					color: #006de6;
				}
			}
		}
		>ul{
			width: 100%;
			overflow: hidden;
			border-top: 7px solid #f9f9f9;
			margin-top: 10px;
			li{
				width: 33.3%;
				height: 55px;
				float: left;
				font-family: "微软雅黑";
				font-size: 22px;
				text-fill-color:#444444;
				-webkit-text-fill-color: #444444;
				-webkit-text-stroke: 1px #2c2c2c;
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;
				border-top: 1px solid #ebecee;
				border-right: 1px solid #ebecee;
				text-align: center;
				line-height: 55px;
				img{
					width: 24px;
					height: 17px;
				}
			}
			li:nth-of-type(3n){
				border-right: none;
			}
			li:active{
				background-color: #CCCCCC;
			}
		}
	}
</style>