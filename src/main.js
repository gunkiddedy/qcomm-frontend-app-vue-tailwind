import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/css/tailwind.css'
// import axios from 'axios'

import VueSweetalert2 from 'vue-sweetalert2'
// If you don't need the styles, do not connect
import './assets/css/sweetalert2.css'
const options = {
	confirmButtonColor: '#8B5CF6',
	cancelButtonColor: '#ccc',
};
Vue.use(VueSweetalert2, options);

// axios.defaults.baseURL = 'https://api.dapurtech.com/api';

// dummy API
// axios.defaults.baseURL = 'https://dummyapi.io/data/api/';

Vue.config.productionTip = false;

// HANDLE DATE AND TIME USING MOMENT JS
/*
		Relative Time
		moment("20111031", "YYYYMMDD").fromNow(); // 9 years ago
		moment("20120620", "YYYYMMDD").fromNow(); // 9 years ago
		moment().startOf('day').fromNow();        // 2 hours ago
		moment().endOf('day').fromNow();          // in a day
		moment().startOf('hour').fromNow();       // 20 minutes ago

		Format Dates
		moment().format('MMMM Do YYYY, h:mm:ss a'); // Maret 8 2021, 2:26:06 pagi
		moment().format('dddd');                    // Senin
		moment().format("MMM Do YY");               // Mar 8 21
		moment().format('YYYY [escaped] YYYY');     // 2021 escaped 2021
		moment().format();                          // 2021-03-08T02:26:06+07:00
*/ 
import moment from 'moment'
moment.locale('id'); //change to id for indonesian time
Vue.filter('momentDate', function(value) {
	if (value) {
		return moment(String(value)).format('MM/DD/YYYY') // (03/02/2021)
	}
});
Vue.filter('momentMonthYear', function(value) {
	if (value) {
		return moment(String(value)).format('MMMM YYYY') // (MARCH 2021)
	}
});
Vue.filter('momentDateIndo', function(value) {
	if (value) {
		return moment(String(value)).format('DD/MM/YYYY') // (03/12/2021)
	}
});
Vue.filter('momentDatetime', function(value) {
	if (value) {
		return moment(String(value)).format('h:mm:ss a') // (4:51:58 am)
	}
});
Vue.filter('momentDateIndoTime', function(value) {
	if (value) {
		return moment(String(value)).format('MMMM Do YYYY, h:mm:ss a') // (March 8th 2021, 4:51:58 am)
  	}
});
Vue.filter('momentRelativeTime', function(value) {
	if (value) {
		return moment(String(value)).fromNow() // (9 years ago)
  	}
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
