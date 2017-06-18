import {Vue, store} from '@js/pc.main'
import userinfo from './setting.userinfo.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(userinfo);
	}
})
