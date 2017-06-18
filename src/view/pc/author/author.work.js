import {Vue, store} from '@js/pc.main'
import author from './author.work.vue'

new Vue({
	el: '#app',
	store,
	render (h) {
		return h(author);
	}
})
