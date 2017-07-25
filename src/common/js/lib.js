// 扩展lib组件引入
import Vue from 'vue'
import vue_url from '@lib/vue.url'
import vue_cache from '@lib/vue.cache'
import vue_share from '@lib/vue.share'
import vue_eventHub from '@lib/vue.eventHub'
import vue_upload from '@lib/upload/plupload.dev'
import vue_qrcode from '@lib/vue.qrcode'
import vue_edit from '@lib/edit/wangEditor'
import version from '@server/version'
import defaultData from '@server/defaultData'
Vue.use(vue_url)
Vue.use(vue_cache)
Vue.use(vue_share)
Vue.use(vue_qrcode)
Vue.use(vue_eventHub)
Vue.use(vue_upload)
Vue.use(vue_edit)
Vue.use(version)
Vue.use(defaultData)

// 公共扩展
import filterXSS from 'xss';
Vue.prototype.$filterXSS = filterXSS;
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
	listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'load'],
	filter: {
		srcFormat: function(listener, options) {
			// 协议转化成https
			if (listener.src && (listener.src.indexOf('http://') > -1)) {
				listener.src = listener.src.replace('http://', 'https://');
			}
			if (!listener.src || listener.src.indexOf('?') > -1) {
				return false;
			}
			// 图片加上参数压缩
			// 用户头像
			if (listener.src.indexOf('/user/') > -1) {
				listener.src += '?x-oss-process=image/resize,w_180,h_180,m_fill/auto-orient,1/quality,q_80/format,jpg';
			}
			// 故事图片 - 封面
			if (listener.src.indexOf('/opus/') > -1) {
				listener.src += '?x-oss-process=image/resize,w_540,h_810,m_fixed/auto-orient,1/quality,q_100/format,jpg';
			}
			// banner图片
			if (listener.src.indexOf('/banner/') > -1) {
				listener.src += '?x-oss-process=image/auto-orient,1/quality,q_90/format,jpg';
			}
		}
	}
})

// 公共函数引入
import '@js/unit'

export {
	Vue
}