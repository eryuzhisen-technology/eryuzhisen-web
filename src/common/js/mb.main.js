// 基础样式引人
import css1 from '@css/mb.normalize.less'
import css2 from '@css/mb.component.less'

import {Vue} from './lib'

import store from '@server/store'

// component
import HeaderDom from '@component/mb/header.vue';
import Bubble from '@component/mb/bubble.vue';
import ArticleList from '@component/mb/article.list.vue';
import VueTouch from 'vue-touch';

Vue.component('HeaderDom', HeaderDom)
Vue.component('Bubble', Bubble)
Vue.component('ArticleList', ArticleList)
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
	threshold: 50
}

export {
	Vue,
	store
}



