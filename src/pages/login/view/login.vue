<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账户">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            form: {
                name: '',
                password: ''
            }
        }
    },
    methods: {}
}
</script>
<style lang="scss" scoped></style>
