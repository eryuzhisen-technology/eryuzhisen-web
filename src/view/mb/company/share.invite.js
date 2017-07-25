import {Vue, store} from '@js/mb.main'
import share from './share.invite.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(share);
	}
})
