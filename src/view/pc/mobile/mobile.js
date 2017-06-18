import {Vue, store} from '@js/pc.main'
import mobile from './mobile.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(mobile);
	}
})
