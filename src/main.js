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

// HANDLE DATE AND TIME USING MOMENT JS
import moment from 'moment'
Vue.filter('momentDatetime', function(value) {
	if (value) {
		return moment(String(value)).format('h:mm:ss a')
	}
});
Vue.filter('momentDate', function(value) {
	if (value) {
		return moment(String(value)).format('MM/DD/YYYY')
  	}
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
