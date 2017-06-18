import * as message from '../data/message'

function _default(){
	return {
		message: {
			list: [],
			count: 0,
			dataInit: false
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
			state.message.dataInit = true;
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
				// 作品名字解析
				if (payload.messageType == 0) {
					res.list.map((item, index) => {
						var content = item.message.content.content;
						var _arguments = item.message.arguments || {};
						if (_arguments.chapter_id && _arguments.catalog_id) {
							item.message.content.content = content.replace(/(《.*》)/, '<a href="article.read.html?catalog_id='+ _arguments.catalog_id +'&chapter_id='+ _arguments.chapter_id +'">$1</a>');	
						} else if (_arguments.catalog_id) {
							item.message.content.content = content.replace(/(《.*》)/, '<a href="article.intro.html?catalog_id='+ _arguments.catalog_id +'">$1</a>');	
						}
						
					})
				} else {
					res.list.map((item, index) => {
						var title = item.message.content.title;
						var _arguments = item.message.arguments || {};
						item.message.content.title = title.replace(/(《.*》)/, '<a href="article.read.html?catalog_id='+ _arguments.catalog_id +'&chapter_id='+ _arguments.chapter_id +'">$1</a>');
					})
				}
				
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