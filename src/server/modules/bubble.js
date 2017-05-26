import {isdebug} from '../config'

function _default(){
	return {
		type: '',
		show: false,
		top: {
			status: '',
			msg: '',
			timeClose: 2000
		},
		dialog: {
			title: {
				text: '',
				align: ''
			},
			content: {
				title: '',
				text: '',
				html: ''
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
			type: 'adv',
			content: '',
			map: {
				// adv: 1,
				// copy: 2,
				// other: 3
				adv: '广告或者垃圾细腻',
				copy: '抄袭或未授权转载',
				other: '其他原因'
			}
		},
		warn: {
			title: '',
			content: '',
			comfireFn: function(){}
		},
		complete: {
            title: ''
        },
        methods: {

        },
        outlogin: false
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
		bubble_setState (context, payload){
			context.commit('bubble_setState', payload);
		},
		bubble_showBubble (context, payload){
			context.commit('bubble_setState', payload);
			setTimeout(() => {
				if (context.state.type != 'top') {
					return false;
				}
				context.dispatch('bubble_closeBubble');
			}, context.state.top.timeClose)
		},
		bubble_closeBubble (context, payload){
			context.commit('bubble_setState', _default());
		},

		// 成功统一处理
		bubble_success (context, payload){
			isdebug && console.log('----success----', payload)

			if (payload.ret == 0 && payload.type == 'top') {
				context.commit('bubble_setState', {
					type: 'top',
					show: true,
					top: {
						status: 'z-default',
						msg: payload.msg
					}
				});
			} else if (!!payload.ret && payload.ret != 0) {				
				context.commit('bubble_setState', {
					type: 'top',
					show: true,
					top: {
						status: 'z-warn',
						msg: '系统异常'
					}
				});
			}

			setTimeout(() => {
				if (context.state.type != 'top') {
					return false;
				}
				context.dispatch('bubble_closeBubble');
			}, context.state.top.timeClose)
		},

		// 错误统一处理
		bubble_fail (context, payload) {
			isdebug && console.log('---error----', payload)

			// 未登录
			if (payload.ret == -10) {
				// 清空登陆态cookie
    			context.commit('bubble_setState', {
					outlogin: true
				})
				return false;
			}

			// 未登录操作，跳转登陆
			if (payload.ret == -11) {
				return window.location.href = './login.html?from='+encodeURIComponent(location.href);
			}

			// 数据加载中
			if (payload.ret == -21) {
				return false;
			}

			// 请求参数错误
			if (payload.ret == -20) {
				context.commit('bubble_setState', {
					type: 'top',
					show: true,
					top: {
						status: 'z-warn',
						msg: '参数错误，系统异常'
					}
				});
			}

			// 后端错误提示
			if (payload.ret > 0) {
				// 获取用户token不通过
				if (payload.errcode == '30001') {
					// 清空登陆态cookie
	    			context.commit('bubble_setState', {
						outlogin: true
					})
					return false;					
				}

				var msg = payload.attach && payload.attach.popup ? payload.attach.popup.text : '系统异常';
				context.commit('bubble_setState', {
					type: 'top',
					show: true,
					top: {
						status: 'z-warn',
						msg: msg
					}
				});
			}

			setTimeout(() => {
				if (context.state.type != 'top') {
					return false;
				}
				context.dispatch('bubble_closeBubble');
			}, context.state.top.timeClose)
		}
	}
}