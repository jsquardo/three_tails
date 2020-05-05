import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import './assets/main.scss';

import VueSweetalert2 from 'vue-sweetalert2';
import VCalendar from 'v-calendar';

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(VCalendar);
Vue.use(VueSweetalert2);

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
