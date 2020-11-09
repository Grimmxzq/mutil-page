/*
 * @,@Author: ,: xzq
 * @,@Date: ,: 2020-11-09 09:35:28
 * @,@LastEditTime: ,: 2020-11-09 10:07:41
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: 自动注册所有 comonents/ 下的全局组件， 
 *                    组件名为文件夹的名称，文件夹内必须有一个index.vue的文件
 * @,@FilePath: ,: \study-hard\my-project\src\pages\index\components\index.js
 */

import Vue from 'vue';
import { getAllModules } from '@/utils/import-all';
 
 // 获取所有组件
const modules = getAllModules(
    require.context('./', true, /[^.]+\/index\.(vue|js)$/)
);

// 注册所有组件
for (let key in modules) {
    Vue.component(key.replace('/index', ''), modules[key]);
}