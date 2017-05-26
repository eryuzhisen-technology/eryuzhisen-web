import {Vue, store} from '../../common/js/main'

import HeaderDom from '../../component/header.vue'
import FooterDom from '../../component/footer.vue'
import MenuLeft from '../../component/menu.left.vue'
import SideMenu from '../../component/sideMenu.vue'
import Bubble from '../../component/bubble.vue'
import Feedback from '../../component/feedback.vue'
import Page from '../../component/page.fenye.vue'
import Empty from '../../component/content.empty.vue'
import Edit from '../../component/chapter.edit.vue'
import UploadImg from '../../component/uploadImg.vue'

Vue.component('HeaderDom', HeaderDom)
Vue.component('FooterDom', FooterDom)
Vue.component('MenuLeft', MenuLeft)
Vue.component('SideMenu', SideMenu)
Vue.component('Bubble', Bubble)
Vue.component('Feedback', Feedback)
Vue.component('Page', Page)
Vue.component('Empty', Empty)
Vue.component('Edit', Edit)
Vue.component('UploadImg', UploadImg)

import ListDom from '../../component/article.list.vue'
import HotDom from '../../component/article.hot.vue'
import HotAuthor from '../../component/author.hot.vue'
Vue.component('ListDom', ListDom)
Vue.component('HotDom', HotDom)
Vue.component('HotAuthor', HotAuthor)

import index from './index.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(index);
	}
})
