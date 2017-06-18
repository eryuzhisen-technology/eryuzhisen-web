import {Vue, store} from '@js/mb.main'

import author from './author.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(author);
	}
})
