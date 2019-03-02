// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex';
import router from './router'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './css/base.css';
import './css/style.css';
import './js/getHeight.js';
import AppComponent from './App.vue';
Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(VueRouter);
import axios from './js/axios_config.js';
import api from './js/api_config.js';
Vue.prototype.$http = axios;
Vue.prototype.$api = api;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render:c=>c(AppComponent)
})
