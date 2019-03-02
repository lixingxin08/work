// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex';
import router from './router'
import VueRouter from 'vue-router';
import './css/base.css';
import './css/style.css';
import AppComponent from './App.vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
//接入远程滑块JS
import apis from './js/commin.js'
//启用vue插件
Vue.use(Mint);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(apis);
import axios from './js/axios_config.js';
import api from './js/api_config.js';
Vue.prototype.$http = axios;
Vue.prototype.$api = api;
Vue.config.productionTip = false;
//导入store配置项
import storeConfig from './store'
/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render:c=>c(AppComponent),
  store:new Vuex.Store(storeConfig)
})
