import Vue from 'vue'
import css1 from '../../common/css/normalize.less';
import css2 from '../../common/css/component.less';
import self from './self.vue'
import store from '../../server/store'

new Vue({
	el: '#app',
	store,
	render (h) {
		return h(self);
	}
})

