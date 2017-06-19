import {Vue, store} from '@js/mb.main'
import Back from './back.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(Back);
	}
})
