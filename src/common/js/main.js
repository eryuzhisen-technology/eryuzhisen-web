import css1 from '../css/normalize.less'
import css2 from '../css/component.less'

import Vue from 'vue'
import vue_url from '../../lib/vue.url'
import vue_cache from '../../lib/vue.cache'
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

export {
	Vue,
	store
}



