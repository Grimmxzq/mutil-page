/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-04 10:01:53
 * @,@LastEditTime: ,: 2020-11-09 11:24:03
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \study-hard\my-project\src\pages\index.js
 */
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 全局样式
import './styles/index.scss';

// 全局注册
import './components';

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})