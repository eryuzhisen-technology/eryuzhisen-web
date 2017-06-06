import * as auth from '../data/auth'

export default {
	state: {
		// 用户列表
		count: 0,
		lists: [],

		// 邀请码
		code: ''
	},
	mutations: {
		// 设置state属性
		auth_setState (state, payload){
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
		// 设置数据列表
		auth_setLists (state, payload){
			state.count = payload.count;
			state.lists = payload.lists;
		},
		// 设置邀请码
		auth_setCode (state, payload){
			state.code = payload.code;
		}
	},
	actions: {
		// 设置state属性-cmommit
		auth_setState (context, payload){
			context.commit('auth_setState', payload);
		},
		// 获取关注人数
		auth_getFollowList (context, payload){
			var promise = auth.getFollowList(payload).then( res => {
				res.list.map(list => {
    				list.relation = 1;
    			})
				context.commit('auth_setLists', {
					"lists": res.list,
					"count": res.page_info.total_count
				})
				return Promise.resolve(res);
			}).catch( (res) => {
				return Promise.reject(res);
			});
			return promise;
		},
		// 获取粉丝用户列表
		auth_getFansList (context, payload){
			var promise = auth.getFansList(payload).then( res => {
				context.commit('auth_setLists', {
					"lists": res.list,
					"count": res.page_info.total_count
				})
				return Promise.resolve(res);
			}).catch( (res) => {
				return Promise.reject(res);
			});
			return promise;
		},
		// 获取用户列表
		auth_getUserList (context, payload){
			var promise = auth.getUserList(payload).then( res => {
				context.commit('auth_setLists', {
					"lists": res.list,
					"count": res.page_info.total_count
				})
				return Promise.resolve(res);
			}).catch( (res) => {
				return Promise.reject(res);
			});
			return promise;
		},
		// 获取用户黑名单
		auth_getBlackList (context, payload){
    		var promise = auth.getBlackList({
    			"pagination": 1, // 获取总数
    			"page": payload.pageIndex, //页数,默认不传查询第一页
				"pageSize": payload.pageSize //每页数量 默认10
    		}).then( res => {
    			res.list.map(list => {
    				list.relation = 3;
    			})
				context.commit('auth_setLists', {
					"lists": res.list,
					"count": res.page_info.total_count
				});
				return Promise.resolve(res);
    		}).catch( (res) => {
				return Promise.reject(res);
			});
    		return promise;
		},
		// 删除黑名单
		auth_delBlack (context, payload){
    		var promise = auth.delBlack({
    			userId: payload.userId //被拉进黑名单的用户
    		}).then( res => {
				return Promise.resolve(res);
    		}).catch( (res) => {
				return Promise.reject(res);
			});
    		return promise;
		},
		// 添加黑名单
		auth_addBlack (context, payload){
    		var promise = auth.addBlack({
    			userId: payload.userId //被拉进黑名单的用户
    		}).then( res => {
				return Promise.resolve(res);
    		}).catch( (res) => {
				return Promise.reject(res);
			});
    		return promise;
		},
		// 关注用户
		auth_addFollow (context, payload){
    		var promise = auth.addFollow({
    			userId: payload.userId //被拉进黑名单的用户
    		}).then( res => {
				return Promise.resolve(res);
    		}).catch( (res) => {
				return Promise.reject(res);
			});
    		return promise;
		},
		// 取消关注
		auth_delFollow (context, payload){
    		var promise = auth.delFollow({
    			userId: payload.userId //被拉进黑名单的用户
    		}).then( res => {
				return Promise.resolve(res);
    		}).catch( (res) => {
				return Promise.reject(res);
			});
    		return promise;
		},
		// 获取热门用户
		auth_getRecommendUserList (context, payload){
			var promise = auth.getRecommendUserList(payload).then( res => {
				context.commit('auth_setLists', {
					"lists": res.list,
					"count": res.list.length
				})
				return Promise.resolve(res);
			}).catch( (res) => {
				return Promise.reject(res);
			});
			return promise;
		},
		// 获取标签指定活跃用户
		auth_getActiveUserList (context, payload){
			var promise = auth.getActiveUserList(payload).then( res => {
				context.commit('auth_setLists', {
					"lists": res.list,
					"count": res.list.length
				})
				return Promise.resolve(res);
			}).catch( (res) => {
				return Promise.reject(res);
			});
			return promise;
		},
		// 获取邀请码
		auth_getInviteCode (context, payload){
			var promise = auth.getInviteCode(payload).then( res => {
				context.commit('auth_setCode', {
					"code": res
				})
				return Promise.resolve(res);
			}).catch( (res) => {
				return Promise.reject(res);
			});
			return promise;
		},
	}
}