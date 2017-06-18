import {Vue, store} from '@js/pc.main'
import search from './search.author.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(search);
	}
})
