import {Vue, store} from '@js/mb.main'

import welfare from './welfare.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(welfare);
	}
})
