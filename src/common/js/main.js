// 基础样式引人
import css1 from '../css/normalize.less'
import css2 from '../css/component.less'

// 扩展lib组件引入
import Vue from 'vue'
import vue_url from '../../lib/vue.url'
import vue_cache from '../../lib/vue.cache'
import vue_iScroll from '../../lib/vue.iScroll'
import vue_eventHub from '../../lib/vue.eventHub'
import vue_upload from '../../lib/upload/plupload.dev'
import vue_edit from '../../lib/edit/edit'
import store from '../../server/store'
import version from '../../server/version'
Vue.use(vue_url)
Vue.use(vue_cache)
Vue.use(vue_eventHub)
Vue.use(vue_upload)
Vue.use(vue_edit)
Vue.use(version)
Vue.use(vue_iScroll)

// 公共函数引入
import '../../common/js/unit'

export {
	Vue,
	store
}



