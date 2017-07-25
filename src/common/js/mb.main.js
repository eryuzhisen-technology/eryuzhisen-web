// 基础样式引人
import css1 from '@css/mb.normalize.less'
import css2 from '@css/mb.component.less'

import {Vue} from './lib'
import store from '@server/store'

// 扩展引入
import vue_appJSBrige from '@lib/vue.appJSBrige'
Vue.use(vue_appJSBrige)

// 组件引入
import FrameDom from '@component/mb/frame.vue';
import HeaderDom from '@component/mb/header.vue';
import TitleDom from '@component/mb/title.vue';
import MenusDom from '@component/mb/menus.vue';
import SideDom from '@component/mb/side.vue';
import Bubble from '@component/mb/bubble.vue';
import ArticleList from '@component/mb/article.list.vue';
import Edit from '@component/mb/edit.vue';
import VueTouch from 'vue-touch';
import UploadImg from '@component/pc/uploadImg.vue'

Vue.component('FrameDom', FrameDom)
Vue.component('TitleDom', TitleDom)
Vue.component('HeaderDom', HeaderDom)
Vue.component('MenusDom', MenusDom)
Vue.component('SideDom', SideDom)
Vue.component('Bubble', Bubble)
Vue.component('ArticleList', ArticleList)
Vue.component('Edit', Edit)
Vue.component('UploadImg', UploadImg)
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
	threshold: 50
}

export {
	Vue,
	store
}



