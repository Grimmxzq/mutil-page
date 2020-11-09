<!--
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-09 10:36:43
 * @,@LastEditTime: ,: 2020-11-09 10:54:05
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \study-hard\my-project\src\pages\index\Layout\index.vue
 -->
<template>
    <div>
        <Header></Header>
        <router-view />
        <Navbar></Navbar>
    </div>
</template>
<script>
import Header from './Header'
import Navbar from './Navbar'
export default {
    components: {
        Header,
        Navbar
    }
}
</script>
<style lang="scss" scoped></style>
