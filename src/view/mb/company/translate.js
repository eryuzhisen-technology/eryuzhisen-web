import {Vue, store} from '@js/mb.main'
import translate from './translate.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(translate);
	}
})
