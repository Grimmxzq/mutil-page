/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-04 10:38:45
 * @,@LastEditTime: ,: 2020-11-09 14:15:21
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \study-hard\my-project\src\pages\index\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/index.vue'
import Layout from '../Layout/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          component: Index
        }
      ]
    }
  ]
})
