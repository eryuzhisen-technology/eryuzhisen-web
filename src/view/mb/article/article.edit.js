import {Vue, store} from '@js/mb.main'

import edit from './article.edit.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(edit);
	}
})
