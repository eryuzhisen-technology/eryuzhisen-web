import {Vue, store} from '@js/mb.main'

import notice from './notice.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(notice);
	}
})
