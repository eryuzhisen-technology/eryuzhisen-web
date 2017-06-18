import {Vue, store} from '@js/pc.main'
import _edit from './article.edit.vue'

new Vue({
	el: '#app',
	store,
	render (h) {
		return h(_edit);
	}
})
