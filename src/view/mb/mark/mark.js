import {Vue, store} from '@js/mb.main'

import mark from './mark.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(mark);
	}
})
