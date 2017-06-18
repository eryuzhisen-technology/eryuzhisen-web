import {Vue, store} from '@js/pc.main'
import privacy from './privacy.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(privacy);
	}
})
