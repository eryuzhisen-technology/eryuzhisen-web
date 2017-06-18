import {Vue, store} from '@js/pc.main'
import password from './setting.password.vue'

new Vue({
	el: '#app',
	store,
	render (h) {
		return h(password);
	}
})
