import {Vue, store} from '@js/pc.main'
import contact from './contact.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(contact);
	}
})
