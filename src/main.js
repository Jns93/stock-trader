import Vue from 'vue'
import './plugins/vuetify'
import './plugins/axios'
import App from './App.vue'

import router from './router'
import store from './store/store'

import filter from './filters/filters'

Vue.config.productionTip = false

new Vue({
	filter,
	router,
	store,
	render: h => h(App),
}).$mount('#app')
