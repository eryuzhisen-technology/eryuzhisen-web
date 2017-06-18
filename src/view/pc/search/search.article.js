import {Vue, store} from '@js/pc.main'
import search from './search.article.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(search);
	}
})
