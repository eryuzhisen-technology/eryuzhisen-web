import {Vue, store} from '@js/pc.main'
import author from './author.fans.vue'

new Vue({
	el: '#app',
	store,
	render (h) {
		return h(author);
	}
})
