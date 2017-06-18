import {Vue, store} from '@js/pc.main'
import history from './history.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(history);
	}
})
