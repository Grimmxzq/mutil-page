<!--
 * @,@Author: ,: xzq
 * @,@Date: ,: 2020-11-04 10:01:40
 * @,@LastEditTime: ,: 2020-11-04 10:36:55
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: 入口。多页面主页, 从此页面进入其他页面
 * @,@FilePath: ,: \study-hard\my-project\src\pages\App.vue
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>