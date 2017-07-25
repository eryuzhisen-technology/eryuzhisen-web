import Vue from 'vue'
import Vuex from 'vuex'
import bubble from './modules/bubble'
import user from './modules/user'
import auth from './modules/auth'
import opus from './modules/opus'
import common from './modules/common'
import message from './modules/message'
import frame from './modules/frame'

Vue.use(Vuex);
var store = new Vuex.Store({
	modules: {
		bubble: bubble,
		user: user,
		auth: auth,
		opus: opus,
		frame: frame,
		common: common,
		message: message
	},
	strict: true
})

export default store;