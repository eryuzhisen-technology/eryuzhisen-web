import * as message from '../data/message'

function _default(){
	return {
		message: {
			list: [],
			count: 0
		},
		unread: {
			list: []
		},
		detail: {

		}
	}
}

export default {
	state: _default(),
	mutations: {
		message_setMessage (state, payload) {
			for (var key in payload) {
				state.message[key] = payload[key];
			}
		},
		message_setUnread (state, payload){
			for (var key in payload) {
				state.unread[key] = payload[key];
			}
		},
		message_setDetail (state, payload){
			for (var key in payload) {
				state.detail[key] = payload[key];
			}
		}
	},
	actions: {
		message_getMessageList (context, payload){
			var promise = message.getMessageList(payload).then( res => {
				context.commit('message_setMessage', {
					list: res.list,
					more: res.more,
					count: res.page_info.total_count
				})
				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})
			return promise;
		},
		message_getUnreadMessage (context, payload){
			var promise = message.getUnreadMessage().then( res => {
				context.commit('message_setUnread', {
					list: res.list
				})
				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})
			return promise;
		},
		message_getMessageDetail (context, payload){
			if (!payload.msgId) {
				return Promise.rejectObj();
			}
			var promise = message.getMessageDetail(payload).then( res => {
				context.commit('message_setDetail', {
					list: res.list
				})
				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})
			return promise;
		},
		message_markMessage (context, payload){
			if (!payload.msgType || !payload.msgId) {
				return Promise.rejectObj();
			}
			var promise = message.markMessage(payload).then( res => {
				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})
			return promise;
		}
	}
}