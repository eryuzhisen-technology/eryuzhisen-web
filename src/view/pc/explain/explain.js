import {Vue, store} from '@js/pc.main'
import explain from './explain.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(explain);
	}
})
