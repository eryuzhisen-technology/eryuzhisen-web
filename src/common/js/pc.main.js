// 基础样式引人
import css1 from '@css/normalize.less'
import css2 from '@css/component.less'

import {Vue} from './lib'

import store from '@server/store'

import HeaderDom from '@component/pc/header.vue';
import FooterDom from '@component/pc/footer.vue';
import MenuLeft from '@component/pc/menu.left.vue';
import MenuTop from '@component/pc/menu.top.vue';
import SideMenu from '@component/pc/sideMenu.vue';
import Bubble from '@component/pc/bubble.vue';
import Feedback from '@component/pc/feedback.vue'
import Page from '@component/pc/page.fenye.vue';
import Empty from '@component/pc/content.empty.vue';
import Edit from '@component/pc/chapter.edit.vue'
import UploadImg from '@component/pc/uploadImg.vue'

import ArticleHeaderDom from '@component/pc/article.header.vue';
import ArticleCommentDom from '@component/pc/article.comment.vue';
import ListDom from '../../component/pc/article.list.vue';
import Chapter from '@component/pc/chapter.list.vue'
import Create from '@component/pc/edit.vue'

import AuthorHeaderDom from '@component/pc/author.header.vue';
import AuthorDom from '@component/pc/author.list.vue';

import CommentList from '@component/pc/comment.list.vue';
import CommentInfo from '@component/pc/comment.info.vue';

Vue.component('HeaderDom', HeaderDom)
Vue.component('FooterDom', FooterDom)
Vue.component('MenuLeft', MenuLeft)
Vue.component('MenuTop', MenuTop)
Vue.component('SideMenu', SideMenu)
Vue.component('Bubble', Bubble)
Vue.component('Feedback', Feedback)
Vue.component('Page', Page)
Vue.component('Empty', Empty)
Vue.component('Edit', Edit)
Vue.component('UploadImg', UploadImg)

Vue.component('ArticleHeaderDom', ArticleHeaderDom)
Vue.component('ArticleCommentDom', ArticleCommentDom)
Vue.component('Chapter', Chapter)
Vue.component('Create', Create)

Vue.component('AuthorHeaderDom', AuthorHeaderDom)
Vue.component('AuthorDom', AuthorDom)
Vue.component('ListDom', ListDom)

Vue.component('CommentList', CommentList)
Vue.component('CommentInfo', CommentInfo)


export {
	Vue,
	store
}



