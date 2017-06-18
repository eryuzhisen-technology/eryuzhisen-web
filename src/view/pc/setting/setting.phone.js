import {Vue, store} from '@js/pc.main'
import phone from './setting.phone.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(phone);
	}
})
