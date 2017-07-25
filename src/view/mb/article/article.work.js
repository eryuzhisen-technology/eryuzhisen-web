import {Vue, store} from '@js/mb.main'

import work from './article.work.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(work);
	}
})
