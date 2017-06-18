import {Vue, store} from '@js/pc.main'
import article from './article.list.vue'

new Vue({
	el: '#app',
	store,
	render (h) {
		return h(article);
	}
})
