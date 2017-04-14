
function _default(){
	return {
		show: false,
		step: 1,

		create: {
			image: "",
			name: "",
			type: "",
			typeArr: [
				'小说',
				'漫画',
				'文字',
			],
			status: '',
			statusArr: [
				'上架',
				'下架'
			],
			tags: [
				'都市传说',
				'神秘学',
				'悬疑',
				'黑暗童话',
				'心理学',
				'博物志',
				'忧郁',
				'妖怪',
				'推理'
			],
			intro: ''
		}
	}
}

export default {
	state: _default(),
	mutations: {
		article_reset (state, payload){
			state = payload;
		},
		// 设置state属性
		article_setState (state, payload){
			for (var key in payload) {
				if (payload.hasOwnProperty(key)) {
					if (typeof payload[key] === 'object') {
						for (var _key in payload[key]) {
							state[key][_key] = payload[key][_key];
						}
					} else {
						state[key] = payload[key];
					}
				}
			}
		},
	},
	actions: {
		// 设置state属性-cmommit
		article_setState (context, payload){
			context.commit('article_setState', payload);
		},
		// 重置属性
		article_reset (context){
			context.commit('article_reset', _default());
		}
	}
}