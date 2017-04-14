import Vue from 'vue'
import Vuex from 'vuex'
import bubble from './modules/bubble'
import article from './modules/article'
import user from './modules/user'
import feedback from './modules/feedback'

Vue.use(Vuex);
var store = new Vuex.Store({
	modules: {
		bubble: bubble,
		article: article,
		user: user,
		feedback: feedback
	},
	strict: true
})

export default store;