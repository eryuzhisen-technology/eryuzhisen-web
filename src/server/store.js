import Vue from 'vue'
import Vuex from 'vuex'
import bubble from './modules/bubble'
import user from './modules/user'
import auth from './modules/auth'
import opus from './modules/opus'
import common from './modules/common'
import message from './modules/message'

Vue.use(Vuex);
var store = new Vuex.Store({
	modules: {
		bubble: bubble,
		user: user,
		auth: auth,
		opus: opus,
		common: common,
		message: message
	},
	strict: window.location.href.indexOf('isdebug=1') ? false : true
})

export default store;