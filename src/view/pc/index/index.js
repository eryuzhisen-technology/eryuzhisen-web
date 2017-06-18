import {Vue, store} from '@js/pc.main'
import index from './index.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(index);
	}
})
