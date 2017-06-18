import {Vue, store} from '@js/pc.main'
import infomation from './message.infomation.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(infomation);
	}
})
