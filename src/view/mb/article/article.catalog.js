import {Vue, store} from '@js/mb.main'

import catalog from './article.catalog.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(catalog);
	}
})
