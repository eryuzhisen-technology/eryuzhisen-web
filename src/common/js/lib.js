// 扩展lib组件引入
import Vue from 'vue'
import vue_url from '@lib/vue.url'
import vue_cache from '@lib/vue.cache'
import vue_share from '@lib/vue.share'
import vue_iScroll from '@lib/vue.iScroll'
import vue_eventHub from '@lib/vue.eventHub'
import vue_upload from '@lib/upload/plupload.dev'
import vue_edit from '@lib/edit/edit'
import version from '@server/version'
import defaultData from '@server/defaultData'
Vue.use(vue_url)
Vue.use(vue_cache)
Vue.use(vue_share)
Vue.use(vue_eventHub)
Vue.use(vue_upload)
Vue.use(vue_edit)
Vue.use(version)
Vue.use(defaultData)
Vue.use(vue_iScroll)

// 公共函数引入
import '@js/unit'

export {
	Vue
}



