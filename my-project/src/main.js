import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'
import rt from './router/index'
import axios from "axios";
import qs from "qs";
import store from "./state";
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

new Vue({
  el: '#app',
  store,
  router: rt,
  render: h => h(App)
})
