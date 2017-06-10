import * as common from '../data/common'

function _default(){
	return {
		show: false,
		banner_images: [],

		access: {}
	}
}

export default {
	state: _default(),
	mutations: {
		// 设置banner列表
		common_setBannerList (state, payload){
			state.banner_images = payload.list;
		},
		// 设置反馈浮层
		common_switch (state, payload){
			state.show = payload;
		},
		// 设置验证码
		common_access (state, payload){
			for (var key in payload) {
				state.access[key] = payload[key];
			}
		}
	},
	actions: {
		// 设置banner列表
		common_setBannerList (context, payload){
			context.commit('common_setBannerList', {
            	list: payload
            });
            return Promise.resolve(1);
		},
		// 获取banner列表
		common_getHomeBanner (context, payload){
			var promise = common.getHomeBanner().then( res => {
				// 数据结构处理
				var list = res.list;
				list.map((item, index) => {
					switch(item.jumpui.page_id){
						case 'catalog_info':
							item.url = "article.intro.html?catalog_id=" + item.jumpui.arguments.catalog_id;
							break;
						case 'user_info':
							item.url = "author.work.html?user_id=" + item.jumpui.arguments.user_id;
							break;
						case 'chapter_info':
							item.url = 'article.read.html?catalog_id='+ item.jumpui.arguments.catalog_id +'&chapter_id=' + item.jumpui.arguments.chapter_id;
							break;
					}
				})
                context.commit('common_setBannerList', {
                	list: list
                });
                return Promise.resolve(res);
            }).catch(err => {
                return Promise.reject(res);
            });

            return promise;
		},
		// 获取图片上传验证码
		common_getPolicyAndAccess (context, payload){
			if (!payload.type) {
				return Promise.reject({
					ret: -20,
					msg: '请求参数错误'
				});
			};

			var promise = common.getPolicyAndAccess({
				type: payload.type
			}).then( res => {
				var option = {};
					option[payload.type] = res;
				context.commit('common_access', option);
				return Promise.resolve(res);
			}).catch( err => {
                return Promise.reject(res);
            });

            return promise;
		},
		// 设置反馈浮层显示
		common_switch (context, payload){
			context.commit('common_switch', payload);
		},
		// 反馈内容
		common_addFeedback (context, payload){
			var promise = common.addFeedback({
				"content": payload.content, //文本内容
				"img_url": '', //图片url
				"contact_info": payload.contact_info // 联系方式
			}).then( res => {
				return Promise.resolve(res);
			}).catch(err => {
	            return Promise.reject(err);
	        });
	        return promise;
		},
		// 举报内容
		common_addReport (context, payload){
			var promise = common.addReport({
				"content_id": payload.content_id, //举报内容id
				"report_reason": payload.report_reason, //举报原因
				"content_type": payload.content_type, //举报内容类型 1 作品章节 2 评论 3 作者
				"add_reason": payload.add_reason
			}).then( res => {
				return Promise.resolve(res);
			}).catch(err => {
	            return Promise.reject(err);
	        });
	        return promise;
		}
	}
}