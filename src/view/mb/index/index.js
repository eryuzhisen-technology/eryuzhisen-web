import {Vue, store} from '@js/mb.main'

import index from './index.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(index);
	}
})
