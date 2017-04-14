
function _default(){
	return {
		type: 'declaration',
		show: false,
		top: {
			status: 'z-warn',
			msg: '你关注的X个作品已经更新',
			timeClose: 2000
		},
		dialog: {
			title: {
				text: '使用扫一扫分享给微信好友',
				align: 'z-center'
			},
			content: {
				title: '',
				text: '',
				html: '<div style="padding: 10px 0;"><img src="/dist/images/author/img-1.png" /></div>'
			},
			btn: {
				cancel: {
					text: '取消',
					callback: function(){}
				},
				comfire: {
					text: '确认',
					callback: function(){}
				}
			}
		},
		report: {
			type: 'adv'
		},
		warn: {
			title: '确定要删除?',
			content: '删除后将无法恢复，请谨慎处理'
		}
	}
}

export default {
	state: _default(),
	mutations: {
		bubble_setState (state, payload){
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
		}
	},
	actions: {
		bubble_showBubble (context, payload){
			context.commit('bubble_setState', payload);
			setTimeout(() => {
				console.log(context.state.type)
				if (context.state.type != 'top') {
					return false;
				}
				context.dispatch('bubble_closeBubble');
			}, context.state.top.timeClose)
		},
		bubble_closeBubble (context, payload){
			context.commit('bubble_setState', _default());
		}
	}
}