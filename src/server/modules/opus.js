import * as opus from '../data/opus'

export default {
	state: {
		// 文章列表
		article: {
			count: 0,
			lists: [],
			load: 0,
			more: 0
		},

		// 热门文章推荐
		hot: {
			count: 0,
			lists: [],
			more: 0,
		},

		// 文章分类
		category: {
			label: [{
	            category_desc: "全部",
	            category_id: "0",
	            category_title: "全部"
	        }],
	        laberSubnode: [],
	        index: 0,
	        tags: [],
	        load: 0
		},

		// 文章目录详情
		catalog: {
			catalog_id: '',
			statusArr: [
				{
					audit_status: 0,
					text: '连载中'
				},
				{
					audit_status: 1,
					text: '已完结'
				}
			],
			levelArr: [
				{
					text: '普通',
					level_id: 0
				},
				{
					text: '独家',
					level_id: 1
				},
				{
					text: '首发',
					level_id: 2
				}
			],
			info: {}
		},

		// 章节列表
		chapter: {
			count: 0,
			lists: [],
			more: 0,
			info: {},
			chapter_id: ''
		},

		// 评论列表
		comment: {
			list: [],
			count: 0
		}
	},
	mutations: {
		// 设置文章列表
		opus_setArticle (state, payload){
			for (var key in payload) {
				state.article[key] = payload[key];
			}
		},
		// 设置分类：文章标签、文章分类标签...
		opus_setCategory (state, payload){
			for (var key in payload) {
				state.category[key] = payload[key];
			}
		},
		// 设置章节列表
		opus_setChapterList (state, payload){
			state.chapter.count = payload.count;
			state.chapter.lists = payload.lists;
			state.chapter.more = payload.more;
		},
		// 设置目录信息
		opus_setCatalog_info (state, payload){
			for (var key in payload) {
				state.catalog.info[key] = payload[key];
			}
		},
		// 设置目录
		opus_setCatalog (state, payload){
			for (var key in payload) {
				state.catalog[key] = payload[key];
			}
		},
		// 设置文章
		opus_setChapter (state, payload){
			for (var key in payload) {
				state.chapter[key] = payload[key];
			}
		},
		// 设置评论
		opus_setComment (state, payload){
			for (var key in payload) {
				state.comment[key] = payload[key];
			}
		},
		// 设置评论-列表
		opus_setCommentList (state, payload){
			state.comment.list[payload.index].replayIndex = payload.replayIndex;
		},
		// 设置热门文章
		opus_setHot (state, payload){
			for (var key in payload) {
				state.hot[key] = payload[key];
			}
		}
	},
	actions: {
		// 设置文章列表
		opus_setArticle (context, payload){
			context.commit('opus_setArticle', payload);
			return Promise.resolve(1);
		},
		// 设置目录信息
		opus_setCatalog_info (context, payload){
			context.commit('opus_setCatalog_info', payload);
			return Promise.resolve(1);
		},
		// 设置获取文档标签分类
		opus_setTagIndex (context, payload){
			context.commit('opus_setCategory', {
				index: payload
			});
			return Promise.resolve(1);
		},
		// 设置评论
		opus_setCommentList (context, payload) {
			context.commit('opus_setCommentList', payload);
			return Promise.resolve(1);
		},
		// 设置文章详情
		opus_setChapterInfo (context, payload) {
			context.commit('opus_setChapter', {
            	info: payload
            });	
            return Promise.resolve(1);
		},
		// 获取作品目录列表
		opus_getCatalogList (context, payload){
			if (context.state.catalog.load) {
				return Promise.reject({
					ret: -21,
					msg: '加载中'
				});
			}
			context.commit('opus_setArticle', {
				load: 1
			});

			// 分类赛选
			if (context.state.category.index) {
                payload.body.category_id = context.state.category.index;
            }

			var promise = opus.getCatalogList(payload).then( res => {
				var lists = context.state.article.lists;
				if (payload.type == 'more') {
					lists = lists.concat(res.list);
				} else {
					lists = res.list;
				}
				context.commit('opus_setArticle', {
					count: res.page_info.total_count,
					lists: lists,
					more: res.more,
					load: 0
				})
				return Promise.resolve(res);
			}).catch( err => {
				context.commit('opus_setArticle', {
					load: 0
				});
				return Promise.reject(err);
			})

			return promise;
		},
		// 获取章节列表
		opus_getChapterList (context, payload){
			var promise = opus.getChapterList(payload).then( res => {
				res.list = res.list.reverse();
				context.commit('opus_setChapterList', {
					count: Number(res.page_info.total_count),
					lists: res.list,
					more: res.more
				})
				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})

			return promise;
		},
		// 获取文章分类标签
		opus_getCategoryList (context, payload){
			// 判断是否加载中
			if (context.state.category.load) {
				return Promise.reject({
					ret: -21,
					msg: '加载中'
				});
			}
			context.commit('opus_setCategory', {
				load: 1
			});

			// 如果已经有分类标签就返回
			if (context.state.category.label.length > 1) {
				return Promise.resolve(context.state.category);
			}

			var promise = opus.getCategoryList(payload).then( res => {
				var laberSubnode = [];
				var label = context.state.category.label.concat(res.list);
				res.list.map( (item, index) => {
					laberSubnode = laberSubnode.concat(item.sub_node);
				})
	            context.commit('opus_setCategory', {
	            	label: label,
	            	laberSubnode: laberSubnode,
	            	load: 0
	            });
	            return Promise.resolve(res);
	        }).catch(err => {
	        	context.commit('opus_setCategory', {
	            	load: 0
	            });
	            return Promise.reject(err);
	        });
	        return promise;
	    },
	    // 获取收藏文章
		opus_getFavoritesList (context, payload){
			var promise = opus.getFavoritesList(payload).then( res => {
	            context.commit('opus_setArticle', {
	            	count: res.page_info.total_count,
					lists: res.list,
					more: res.more
	            });
	            return Promise.resolve(res);
	        }).catch(err => {
	            return Promise.reject(err);
	        });
	        return promise;
	    },
	    // 删除收藏文章
		opus_delFavorites (context, payload){
			if (!payload.catalogId) {
				return Promise.reject({
					ret: -20,
					msg: '请求参数错误'
				});
			};

			var promise = opus.delFavorites(payload).then( res => {
	            //todo
	            return Promise.resolve(res);
	        }).catch(err => {
	            return Promise.reject(err);
	        });
	        return promise;
	    },
	    // 收藏文章
		opus_addFavorites (context, payload){
			if (!payload.catalogId) {
				return Promise.reject({
					ret: -20,
					msg: '请求参数错误'
				});
			};

			var promise = opus.addFavorites(payload).then( res => {
	            //todo
	            return Promise.resolve(res);
	        }).catch(err => {
	            return Promise.reject(err);
	        });
	        return promise;
	    },
	    // 获取文章目录的评论数
	    opus_getCommentList (context, payload){
	    	// 目录id必填
	    	if (!payload.catalogId) {
				return Promise.reject({
					ret: -20,
					msg: '请求参数错误'
				});
			};

			var promise = opus.getCommentList(payload).then( res => {
				for (var i = 0, len = res.list.length; i < len; i++) {
					res.list[i].replayIndex = -2;
				}
	            context.commit('opus_setComment', {
	            	count: res.page_info.total_count,
					list: res.list,
					more: res.more
	            });
	            return Promise.resolve(res);
	        }).catch(err => {
	            return Promise.reject(err);
	        });
	        return promise;
	    },
	    // 获取评论的子评论数
	    opus_getReplyCommentList (context, payload){
	    	// 一级评论id必填
	    	if (!payload.commentId) {
				return Promise.reject({
					ret: -20,
					msg: '请求参数错误'
				});
			};
			var promise = opus.getReplyCommentList(payload).then( res => {
	            // 更新指定id的子评论
	            var list = context.state.comment.list;
	            for (var i = 0, len = list.length; i < len; i++) {
	            	if (list[i].comment_id == payload.commentId) {
	            		list[i].reply_page_info = res.page_info;
	            		list[i].reply_more = res.more;
	            		list[i].replys = list[i].replys.concat(res.list);
	            	}
	            }
	            context.commit('opus_setComment', {
					list: list
	            });
	            return Promise.resolve(res);
	        }).catch(err => {
	            return Promise.reject(err);
	        });
	        return promise;
	    },
	    // 新增评论
	    opus_addComment (context, payload){
	    	if (!payload.catalog_id) {
				return Promise.reject({
					ret: -20,
					msg: '请求参数错误'
				});
			};

			var promise = opus.addComment(payload).then( res => {
	            return Promise.resolve(res);
	        }).catch(err => {
	            return Promise.reject(err);
	        });
	        return promise;
	    },
		// 创建目录
		opus_addCatalog (context, payload){
			var promise = opus.addCatalog({
				"level": payload.level, // 等级
				"category_id": payload.category_id, //类别id
				"catalog_title": payload.catalog_title, //目录标题
				"catalog_desc": payload.catalog_desc, //简介
				"catalog_cover_url": payload.catalog_cover_url, //封面
				"catalog_status": payload.catalog_status, //0 连载中 1 已完结 
				"catalog_label": payload.catalog_label, //标签，多个标签逗号分割
				"translate": payload.translate, // 0 不是翻译类 1 翻译类
                "authorize": payload.authorize, // 如果为翻译类作品，需要增加授权信息 必填
                "reprint": payload.reprint, // 0 不允许转载 1 允许
			}).then( res => {
				context.commit('opus_setCatalog', {
					catalog_id: res.catalog_id
				})

				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})

			return promise;
		},
		// 更新目录
		opus_updateCatalog (context, payload){
			var promise = opus.updateCatalog({
				"level": payload.level, // 等级
				"category_id": payload.category_id, //类别id
				"catalog_id": payload.catalog_id, //类别id
				"catalog_title": payload.catalog_title, //目录标题
				"catalog_desc": payload.catalog_desc, //简介
				"catalog_cover_url": payload.catalog_cover_url, //封面
				"catalog_status": payload.catalog_status, //0 连载中 1 已完结 
				"catalog_label": payload.catalog_label, //标签，多个标签逗号分割
				"translate": payload.translate, // 0 不是翻译类 1 翻译类
                "authorize": payload.authorize, // 如果为翻译类作品，需要增加授权信息 必填
                "reprint": payload.reprint, // 0 不允许转载 1 允许
			}).then( res => {
				context.commit('opus_setCatalog', {
					catalog_id: res.catalog_id
				})

				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})

			return promise;
		},
		// 获取文章目录详情
		opus_getCatalogDetail (context, payload){
			if (!payload.catalogId) {
				return Promise.reject({
					ret: -20,
					msg: '请求参数错误'
				});
			};

			var promise = opus.getCatalogDetail(payload).then( res => {
	            context.commit('opus_setCatalog', {
	            	info: res.info
	            });
	            return Promise.resolve(res);
	        }).catch(err => {
	            return Promise.reject(err);
	        });
	        return promise;
	    },
		// 创建章节
		opus_addChapter (context, payload){
			var promise = opus.addChapter({
				"catalog_id": payload.catalog_id, //目录id
				"chapter_title": payload.chapter_title, //章节标题
				"chapter_desc": payload.chapter_desc, //简介
				"chapter_content": payload.chapter_content, //内容　***base64 编码***
				"chapter_status": payload.chapter_status //　0 发布，已完成 1 临时保存 未完成
			}).then( res => {
				context.commit('opus_setChapter', {
					chapter_id: res.chapter_id
				})
				
				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})

			return promise;
		},
		// 评论点赞
		opus_addCommentPraise (context, payload){
			if (!payload.commentId) {
				return Promise.reject({
					ret: -20,
					msg: '请求参数错误'
				});
			}
			var promise = opus.addCommentPraise({
				"commentId": payload.commentId
			}).then( res => {
				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})

			return promise;
		},
		// 文章点赞
		opus_addPraise (context, payload){
			if (!payload.catalogId || !payload.chapterId) {
				return Promise.reject({
					ret: -20,
					msg: '请求参数错误'
				});
			}
			var promise = opus.addPraise({
				"catalogId": payload.catalogId,
				"chapterId": payload.chapterId
			}).then( res => {
				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})

			return promise;
		},
		// 获取标签
		opus_getLabelList (context, payload){
			/*if (!payload.categoryId) {
				return Promise.rejectObj();
			}*/
			var promise = opus.getLabelList({
				// "categoryId": payload.categoryId,
				"count": payload.count
			}).then( res => {
				context.commit('opus_setCategory', {
					tags: res.list
				})

				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})

			return promise;
		},
		// 更新章节内容
		opus_updateChapter (context, payload){
			var promise = opus.updateChapter({
				"chapter_id": payload.chapter_id, //目录id
				"chapter_title": payload.chapter_title, //章节标题
				"chapter_desc": payload.chapter_desc, //简介
				"chapter_content": payload.chapter_content, //内容　***base64 编码***
				"chapter_status": payload.chapter_status //　0 发布，已完成 1 临时保存 未完成
			}).then( res => {
				context.commit('opus_setChapter', {
					chapter_id: res.chapter_id
				})
				var lists = context.state.chapter.lists;
				for (var i = 0, len = lists.length; i < len; i++) {
					if (lists[i].chapter_id == payload.chapter_id) {
						lists[i].chapter_title = payload.chapter_title;
						lists[i].chapter_desc = payload.chapter_desc;
						lists[i].chapter_content = payload.chapter_content;
					}
				}
				context.commit('opus_setChapterList', {
					lists: lists
				})
				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})

			return promise;
		},
		// 获取文章详情内容
		opus_getChapterDetail (context, payload){
			if (!payload.chapterId) {
				return Promise.reject({
					ret: -20,
					msg: '请求参数错误'
				});
			};

			var promise = opus.getChapterDetail(payload).then( res => {
	            context.commit('opus_setChapter', {
	            	info: res.info
	            });
	            return Promise.resolve(res);
	        }).catch(err => {
	            return Promise.reject(err);
	        });
	        return promise;
		},
		// 获取热门文章
		opus_getHotList (context, payload){
			// 分类赛选
			if (context.state.category.index) {
                payload.body.category_id = context.state.category.index;
            }
			var promise = opus.getCatalogList(payload).then( res => {
				context.commit('opus_setHot', {
					count: res.page_info.total_count,
					lists: res.list,
					more: res.more
				})
				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})
		},
		// 删除作品
		opus_deleteChapter (context, payload){
			if (!payload.chapterId) {
				return Promise.reject({
					ret: -20,
					msg: '请求参数错误'
				});
			}
			var promise = opus.delChapter(payload).then( res => {
				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})
			return promise;
		},
		// 删除作品
		opus_delCatalog (context, payload){
			if (!payload.catalogId) {
				return Promise.reject({
					ret: -20,
					msg: '请求参数错误'
				});
			}
			var promise = opus.delCatalog(payload).then( res => {
				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})
			return promise;
		},
		// 获取作品目录列表
		opus_getMyCatalogList (context, payload){
			var promise = opus.getMyCatalogList(payload).then( res => {
				context.commit('opus_setArticle', {
					count: res.page_info.total_count,
					lists: res.list,
					more: res.more
				})
				return Promise.resolve(res);
			}).catch( err => {
				return Promise.reject(err);
			})

			return promise;
		},
	}
}