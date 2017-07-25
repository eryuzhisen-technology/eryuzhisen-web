import * as common from '../data/common'

function _default(){
	return {
		menus: {
			isHide: true
		}
	}
}

export default {
	state: _default(),
	mutations: {
		// 设置banner列表
		frame_setMenus (state, payload){
			state.menus = payload;
		},
	},
	actions: {
		frame_setMenus (context, payload){
			context.commit('frame_setMenus', payload);
		}
	}
}