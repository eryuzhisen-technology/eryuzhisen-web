import {Vue, store} from '@js/pc.main'
import page from './page.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(page);
	}
})
