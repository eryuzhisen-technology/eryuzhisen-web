import {Vue, store} from '@js/mb.main'

import read from './article.read.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(read);
	}
})
