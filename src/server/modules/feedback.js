
function _default(){
	return {
		show: false
	}
}

export default {
	state: _default(),
	mutations: {
		feedback_switch (state, payload){
			state.show = payload;
		}
	},
	actions: {
		feedback_switch (context, payload){
			context.commit('feedback_switch', payload);
		}
	}
}
