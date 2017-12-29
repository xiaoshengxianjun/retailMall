<template>
	<div class="nearbyStore">
		<div id="map"></div>
		<div class="searchstore">
			<div>
				<div><input type="search" v-model="search" name="search" id="search" placeholder="请输入关键字" @keyup.enter="handleSearch" /></div>
			</div>
		</div>
		<div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
		<div class="store-list">
			<div v-for="item in nearbyStores">
				<div class="info-box">
					<p>{{item.name}}</p>
					<p>{{item.distance}}公里 | {{item.address}}</p>
				</div>
				<div class="navigation">
					<img src="../../assets/icon-nav.png" />
					<span>到这去</span>
				</div>
				<div class="appointment" @click="showDialog = true">
					<img src="../../assets/icon-appointment.png" />
					<span>预约</span>
				</div>
			</div>
		</div>
		<div v-transfer-dom>
			<x-dialog v-model="showDialog" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
				<div class="appoint-box">
					<p>门店预约
						<x-icon type="ios-close-empty" size="34" @click.native="showDialog = false"></x-icon>
					</p>
					<div>
						<img src="../../assets/icon-user.png" />
						<input type="text" name="userName" v-model="userName" placeholder="请输入您的姓名" />
					</div>
					<div>
						<img src="../../assets/icon-phone.png" />
						<input type="text" name="mobile" v-model="mobile" placeholder="请输入您的手机号" />
					</div>
					<button @click="handleAppointment">立即预约</button>
				</div>
			</x-dialog>
		</div>
	</div>
</template>

<script>
	import { XDialog, Group, TransferDomDirective as TransferDom } from 'vux'
	export default {
		name: 'nearbyStore',
		directives: {
			TransferDom
		},
		components: {
			XDialog,
			Group,
		},
		data() {
			return {
				nearbyStores: [{
					name: '欧普照明美佳美灯饰',
					address: '上海市黄浦区复兴中路551号',
					distance: 4.3
				}, {
					name: '欧普照明',
					address: '上海市黄浦区打浦路345号',
					distance: 4.3
				}, {
					name: '欧普照明',
					address: '上海市黄浦区新闸路356号',
					distance: 4.3
				}, {
					name: '欧普照明',
					address: '山东南路与金陵东路交叉口西50米',
					distance: 4.3
				}],
				showDialog: false,
				mobile: '',
				userName: '',
				search: '', //搜索的关键字
			}
		},
		watch: {
			showDialog: function(value) {
				if(value == false) { //如果弹框关闭，清空用户名和手机号
					this.mobile = '';
					this.userName = '';
				}
			}
		},
		methods: {
			handleAppointment() {
				var regName = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$/; //校验中文用户名
				var regMobile = /^1[0-9]{10}$/; //校验手机号
				if(!this.userName) {
					this.$vux.toast.text('请填写用户名');
				} else if(!regName.test(this.userName)) {
					this.$vux.toast.text('请填写中文姓名');
				} else if(!this.mobile) {
					this.$vux.toast.text('请填写手机号');
				} else if(!regMobile.test(this.mobile)) {
					this.$vux.toast.text('请检查手机号');
				} else {
					this.$vux.toast.text('预约成功');
				}
			},
			handleSearch() {
				//关键字检索
//				var local = new BMap.LocalSearch(map, {
//					renderOptions: {
//						map: map
//					}
//				});
//				local.search(this.search);
				console.log(this.search)
			}
		},
		mounted() {
			var map = new BMap.Map("map"); // 创建地图实例  
			var point = new BMap.Point(121.4866, 31.24387); // 创建点坐标  
			map.centerAndZoom("上海", 13); // 初始化地图，设置中心点坐标和地图级别  
			map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
			var cityName = "上海";
			var index = 0;
			var myGeo = new BMap.Geocoder();
			var geolocation = new BMap.Geolocation();
			var adds = [];
			for(var i = 0; i < this.nearbyStores.length; i++) {
				geocodeSearch(this.nearbyStores[i].address, this.nearbyStores[i].name)
			}
			console.log(adds)

			function myFun(result) {
				cityName = result.name;
				map.setCenter(cityName);
				console.log(cityName)
			}
			var myCity = new BMap.LocalCity();
			myCity.get(myFun);
			//定位，根据浏览器进行定位
			geolocation.getCurrentPosition(function(r) {
				if(this.getStatus() == BMAP_STATUS_SUCCESS) {
					var mk = new BMap.Marker(r.point);
					map.addOverlay(mk);
					//					map.panTo(r.point);
					console.log(r)
				} else {
					alert('failed' + this.getStatus());
				}
			}, {
				enableHighAccuracy: true
			})
			//解析地址，并在地图上添加锚点
			function geocodeSearch(add, name) {
				myGeo.getPoint(add, function(point) {
					console.log(point)
					if(point) {
						var address = new BMap.Point(point.lng, point.lat);
						addMarker(address, new BMap.Label(name, {
							offset: new BMap.Size(20, -10)
						}));
					}
				}, cityName);
			}
			// 编写自定义函数,创建标注
			function addMarker(point, label) {
				var marker = new BMap.Marker(point);
				map.addOverlay(marker);
				marker.setLabel(label);
			}

			function G(id) {
				return document.getElementById(id);
			}

			var ac = new BMap.Autocomplete( //建立一个自动完成的对象
				{
					"input": "search",
					"location": map
				});

			ac.addEventListener("onhighlight", function(e) { //鼠标放在下拉列表上的事件
				var str = "";
				var _value = e.fromitem.value;
				var value = "";
				if(e.fromitem.index > -1) {
					value = _value.province + _value.city + _value.district + _value.street + _value.business;
				}
				str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

				value = "";
				if(e.toitem.index > -1) {
					_value = e.toitem.value;
					value = _value.province + _value.city + _value.district + _value.street + _value.business;
				}
				str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
				G("searchResultPanel").innerHTML = str;
			});

			var myValue;
			ac.addEventListener("onconfirm", function(e) { //鼠标点击下拉列表后的事件
				var _value = e.item.value;
				myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
				G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

				setPlace();
			});

			function setPlace() {
				map.clearOverlays(); //清除地图上所有覆盖物
				function myFun() {
					var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
					map.centerAndZoom(pp, 18);
					map.addOverlay(new BMap.Marker(pp)); //添加标注
				}
				var local = new BMap.LocalSearch(map, { //智能搜索
					onSearchComplete: myFun
				});
				local.search(myValue);
			}
		}
	}
</script>

<style scoped lang="less">
	#map {
		width: 100%;
		height: 400px;
	}
	
	.searchstore {
		position: absolute;
		top: 20px;
		left: 0px;
		width: 100%;
		>div {
			padding: 0px 15px;
			>div {
				height: 35px;
				border-radius: 5px;
				border: 1px solid #E6E6E6;
				background-color: #FFFFFF;
				overflow: hidden;
				text-align: center;
				input {
					width: 90%;
					height: 100%;
					text-align: center;
					border: none;
					outline: none;
				}
			}
		}
	}
	
	.store-list {
		width: 100%;
		height: 300px;
		position: absolute;
		bottom: 0px;
		left: 0px;
		background-color: #F7F8FD;
		overflow: scroll;
		>div {
			padding: 10px 15px;
			margin-bottom: 5px;
			overflow: hidden;
			background-color: #FFFFFF;
			>div {
				float: left;
				font-size: 12px;
				height: 58px;
				img {
					width: 22px;
					height: 22px;
				}
			}
			.appointment {
				margin-right: 10px;
			}
			.info-box {
				width: calc(~"100% - 80px");
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				p:first-of-type {
					font-size: 16px;
					margin-bottom: 6px;
				}
				p {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}
			>div:not(.info-box) {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				float: right;
			}
		}
	}
	
	.appoint-box {
		width: 196px;
		height: 262px;
		margin: 0 auto;
		padding: 0px 22px;
		background-color: #FFFFFF;
		text-align: center;
		>p:first-of-type {
			height: 30px;
			line-height: 30px;
			padding: 10px 14px;
			margin-bottom: 15px;
			position: relative;
			.vux-x-icon {
				position: absolute;
				right: -10px;
				top: 8px;
			}
		}
		>div {
			width: 100%;
			height: 32px;
			line-height: 32px;
			border: 1px solid #CCCCCC;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			margin-bottom: 25px;
			display: flex;
			align-items: center;
			img {
				width: 20px;
				height: 20px;
				margin: 0px 8px;
			}
			input {
				height: 30px;
				border: none;
				outline: none;
			}
		}
		button {
			width: 100%;
			height: 33px;
			background-color: #393A3E;
			color: #393A3E;
			color: #FFFFFF;
			border: none;
			margin-top: 20px;
		}
	}
</style>