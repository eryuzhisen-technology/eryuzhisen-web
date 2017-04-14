import css1 from '../../common/css/normalize.less';
import css2 from '../../common/css/component.less';

import Vue from 'vue'
import store from '../../server/store'
import comment from './article.comment.vue'

new Vue({
	el: '#app',
	store,
	render (h) {
		return h(comment);
	}
})