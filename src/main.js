// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MintUI from 'mint-ui';

import 'mint-ui/lib/style.css';
import App from './App';
import router from './router';
//import './mock';
//import Axios from 'axios';
// 带配置的Axios
/*Vue.prototype.$axios = Axios.create({
  baseURL: 'http://localhost:8000/'
});*/
Vue.use(MintUI);

//axios.defaults.baseURL = '/api';
//Vue.use(Axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
