import {Vue, store} from '@js/pc.main'
import standard from './standard.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(standard);
	}
})
