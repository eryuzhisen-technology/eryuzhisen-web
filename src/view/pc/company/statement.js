import {Vue, store} from '@js/pc.main'
import statement from './statement.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(statement);
	}
})
