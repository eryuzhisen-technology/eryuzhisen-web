import {Vue, store} from '../../common/js/main'

import HeaderDom from '../../component/header.vue';
import FooterDom from '../../component/footer.vue';
import MenuTop from '../../component/menu.top.vue';
import SideMenu from '../../component/sideMenu.vue';
import Bubble from '../../component/bubble.vue';
import Feedback from '../../component/feedback.vue'
import Page from '../../component/page.fenye.vue';
import Empty from '../../component/content.empty.vue';
import Edit from '../../component/chapter.edit.vue'
import UploadImg from '../../component/uploadImg.vue'

Vue.component('HeaderDom', HeaderDom)
Vue.component('FooterDom', FooterDom)

import invite from './invite.vue'
new Vue({
	el: '#app',
	store,
	render (h) {
		return h(invite);
	}
})
