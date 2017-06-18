import {Vue, store} from '@js/pc.main'
import comment from './article.comment.vue'

new Vue({
	el: '#app',
	store,
	render (h) {
		return h(comment);
	}
})