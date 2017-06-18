import {Vue, store} from '@js/mb.main'

import about from './about.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(about);
	}
})
