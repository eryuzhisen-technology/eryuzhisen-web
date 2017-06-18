import {Vue, store} from '@js/pc.main'
import invite from './invite.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(invite);
	}
})
