import {Vue, store} from '@js/pc.main'
import Login from './login.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(Login);
	}
})
