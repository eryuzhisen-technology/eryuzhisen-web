import {Vue, store} from '@js/pc.main'
import backlist from './setting.backlist.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(backlist);
	}
})
