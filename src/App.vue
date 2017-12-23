<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
body {
  /*background-color: #fbf9fe;*/
  background-color: #f7f8fd;
}
a{
	color: #000000;
}
ul li{
	list-style: none;
}
.weui-cells{
    margin-top: 0px!important;
}
</style>
