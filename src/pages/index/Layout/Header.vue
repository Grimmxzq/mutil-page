<!--
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-09 10:37:07
 * @,@LastEditTime: ,: 2020-11-09 14:36:18
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \study-hard\my-project\src\pages\index\Layout\Header.vue
 -->
<template>
    <header class="header flex full-width flex-space-between padding-left-medium padding-right-medium">
        <div>
            <h1>***后台管理系统</h1>
        </div>
        <div class="flex">
            <div>
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link flex flex-center-align">
                        <el-image
                            style="width: 30px; height: 30px; border-radius: 50%"
                            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                            fit="fill">
                        </el-image>
                        <div class="name">xzq</div>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div>exit</div>
        </div>
    </header>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.header {
    height: 80px;
    background-color: red;
    .name {
        padding: 1px 30px;
        border: 1px solid #ccc;
        border-radius: 20px;
    }
}
</style>
