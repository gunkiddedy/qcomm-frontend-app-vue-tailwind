import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/css/tailwind.css'
// import axios from 'axios'

import VueSweetalert2 from 'vue-sweetalert2'
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css'
Vue.use(VueSweetalert2);

// axios.defaults.baseURL = 'https://api.dapurtech.com/api';

// dummy API
// axios.defaults.baseURL = 'https://dummyapi.io/data/api/';


Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
