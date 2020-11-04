/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-04 11:39:44
 * @,@LastEditTime: ,: 2020-11-04 11:55:23
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \study-hard\my-project\src\pages\login\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        }
    ]
})