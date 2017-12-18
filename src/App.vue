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
ul li{
	list-style: none;
}
</style>
