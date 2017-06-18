import {Vue, store} from '@js/pc.main'
import Register from './register.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(Register);
	}
})
