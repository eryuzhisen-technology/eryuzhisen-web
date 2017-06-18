import {Vue, store} from '@js/mb.main'

import agreement from './agreement.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(agreement);
	}
})
