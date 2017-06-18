import {Vue, store} from '@js/pc.main'
import Back from './back.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(Back);
	}
})
