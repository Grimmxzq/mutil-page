<!--
 * @,@Author: ,: xzq
 * @,@Date: ,: 2020-11-04 10:40:05
 * @,@LastEditTime: ,: 2020-11-04 11:38:12
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \study-hard\my-project\src\pages\index\view\index.vue
 -->
<template>
    <div>
        <el-row>
            <el-button>默认按钮(测试element UI组件)</el-button>
            <el-button type="primary" @click="goLogin">登录页面</el-button>
            <el-button type="success" @click="goUser">用户中心页面</el-button>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'Index',
    methods: {
        goLogin() {
            window.location.href = "/login.html";
        },
        goUser() {
            window.location.href = "/user.html";
        }
    }
}
</script>

<style lang="scss" scoped >
$color:red;
div {color:$color;}
</style>
