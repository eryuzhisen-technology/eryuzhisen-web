<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
	@module: c-header;
	.@{module} {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 20;
		width: 100%;
		height: 60px;
		.default_backgroud_13;
	}
	.@{module}-content {
		.default_width_1200;
		height: 100%;
		margin: 0 auto;
		& .logo {
			float: left;
			width: 84px;
			height: 50px;
			margin-top: 5px;
			margin-right: 30px;
			.skin_head_logo;
			.default_pointer;
			& a {
				display: inline-block;
				width: 100%;
				height: 100%;
			}
		}
		& .menu {
			float: left;
			margin-top: 10px;
			margin-right: 30px;
			overflow-y: hidden;
			& .item {
				float: left;
				height: 40px;
				line-height: 40px;
				margin-right: 20px;
				.default_font_size_2;
				.default_color_2;
				text-decoration: none;
				&:hover {
					.default_color_1;
				}
				&.z-on {
					.default_color_1;
				}
				:last-child {
					margin-right: 0;
				}
			}
		}
		& .search {
			float: left;
			width: 270px;
			height: 40px;
			overflow: hidden;
			padding-left: 20px;
			margin-top: 10px;
			.default_border-r-4;
			.default_backgroud_6;
			& input {
				display: block;
				float: left;
				width: 200px;
				height: 40px;
				// line-height: 40px;
				padding: 13px 0;
				.default_color_10;
				.default_font_size_2;
			}
			& a {
				display: block;
				float: left;
				width: 50px;
				height: 40px;
				padding-top: 10px;
				.default_backgroud_14;
				.default_center;
				& span {
					display: inline-block;
					width: 20px;
					height: 20px;
					.skin_head_search;
					&:hover {
						.skin_head_search_on;
					}
				}
				&:hover {
					// .default_backgroud_4;
				}
			}
		}
		& .user {
			float: right;
			height: 60px;
			margin-right: 20px;
			.default_center;
			& .btn {
				padding: 15px 0;
				height: 30px;
				line-height: 30px;
				.default_font_size_2;
				.default_color_2;
				.default_font_family_bolder;
				& a {
					text-decoration: none;
					.default_color_1;
					&:hover {
						.default_color_10;
					}
				}
				& span {
					.default_color_2;
					.default_font_size_2;
					.default_font_bolder;
				}
			}
			& .member {
				position: relative;
				height: 60px;
				& .member-show-item {
					width: 50px;
					height: 60px;
					padding: 15px 10px;
					.default_float_l;
					&:hover {
						.default_backgroud_14;
					}
				}
				& .member-show-notice {
					position: relative;
					& .member-show-notice_img {
						width: 100%;
						height: 100%;
						.skin_head_notice;
						.default_pointer;
						.default_border-r-50;
						.default_backgroud_6;
						&:hover {
							.skin_head_notice_on;
						}
					}
					& .member-show-notice_number {
						position: absolute;
						top: 15px;
						right: 10px;
						width: 8px;
						height: 8px;
						.default_border-r-50;
						.default_backgroud_10;
					}
					& .member-notice {
						display: none;
						position: absolute;
						top: 60px;
						left: 0;
						width: 180px;
						z-index: 11;
						overflow: hidden;
						.default_backgroud_2;
						// .default_border-r-4;
						.default_border-r-b-4;
						.default_pointer;
						.default_border_shadow_4;
						& .member-notice-item {
							width: 180px;
							height: 50px;
							line-height: 50px;
							& a {
								display: block;
								width: 100%;
								height: 100%;
								padding-left: 20px;
							}
							& .member-notice-item__list {
								display: block;
								float: left;
							}
							& .member-notice-item__icon { 
								width: 16px;
								height: 100%;
								margin-right: 10px; 
							}
							& .member-notice-item__text { 
								height: 50px;
								line-height: 50px;
								.default_font_size_2;
								.default_color_2;
							}
							& .member-notice-item__number { 
								float: left;
								height: 50px;
								line-height: 50px;
								margin-right: 10px; 
								.default_font_size_2;
								.default_color_2;
							}
							&:first-child { 
								// .default_border-r-t-4;
							}
							&:last-child { 
								.default_border-r-b-4;
							}
							&:nth-child(1) .member-notice-item__icon { 
								.skin_head_comment; 
							}
							&:nth-child(2) .member-notice-item__icon { 
								.skin_head_msg; 
							}
							&:hover {
								.default_backgroud_14;
								// .default_border_shadow_4;
								& .member-notice-item__text {
									.default_color_1;	
								}
								&:nth-child(1) .member-notice-item__icon { .skin_head_comment_on; }
								&:nth-child(2) .member-notice-item__icon { .skin_head_msg_on; }
							}
						}
					}
					&:hover {
						.skin_icon_notice_on;
						& .member-notice {
							display: block;
						}
					}
				}
				& .member-show-center {
					background-repeat: no-repeat;
					background-position: center;
					background-size: contain;
					& .member-show-center_img {
						width: 100%;
						height: 100%;
						background-size: cover;
						.skin_icon;
						.default_pointer;
						.default_border-r-50;
						.default_backgroud_2;
					}
					& .member-center {
						display: none;
						position: absolute;
						top: 60px;
						left: 50px;
						width: 180px;
						z-index: 11;
						.default_backgroud_2;
						// .default_border-r-4;
						.default_border-r-b-4;
						.default_pointer;
						.default_border_shadow_4;
						& .member-center-item {
							width: 180px;
							height: 50px;
							line-height: 50px;
							& a {
								display: block;
								width: 100%;
								height: 100%;
								padding-left: 20px;
							}
							& .member-center-item__list {
								display: block;
								float: left;
							}
							& .member-center-item__icon { 
								width: 16px;
								height: 100%;
								margin-right: 10px; 
							}
							& .member-center-item__text { 
								height: 50px;
								line-height: 50px;
								.default_font_size_2;
								.default_color_2;
							}
							&:first-child { 
								.default_border-r-t-4;
							}
							&:last-child { 
								.default_border-r-b-4;
							}
							&:nth-child(1) .member-center-item__icon { .skin_head_yao; }
							&:nth-child(2) .member-center-item__icon { .skin_head_center; }
							&:nth-child(3) .member-center-item__icon { .skin_head_setting; }
							&:nth-child(4) .member-center-item__icon { .skin_head_feedback; }
							&:nth-child(5) .member-center-item__icon { .skin_head_outlogin; }
							&:hover {
								.default_backgroud_14;
								// .default_border_shadow_4;
								& .member-center-item__text {
									.default_color_1;	
								}
								&:nth-child(1) .member-center-item__icon { .skin_head_yao_on; }
								&:nth-child(2) .member-center-item__icon { .skin_head_center_on; }
								&:nth-child(3) .member-center-item__icon { .skin_head_setting_on; }
								&:nth-child(4) .member-center-item__icon { .skin_head_feedback_on; }
								&:nth-child(5) .member-center-item__icon { .skin_head_outlogin_on; }
							}
						}
					}
					&:hover {
						& .member-center {
							display: block;
						}
					}
				}
			}
		}
		& .publish {
			position: relative;
			float: right;
			height: 60px;
			padding-top: 10px;
			& .publish-btn {
				display: block;
				width: 70px;
				text-decoration: none;
			}
			& .publish-show {
				display: none;
				position: absolute;
				top: 60px;
				left: 0;
				width: 180px;
				z-index: 11;
				.default_backgroud_2;
				.default_border-r-4;
				.default_pointer;
				.default_border_shadow_4;
				& .publish-show-item {
					width: 180px;
					height: 50px;
					line-height: 50px;
					padding-left: 20px;
					& a {
						display: block;
						width: 100%;
						height: 100%;
					}
					& .publish-show-item__list {
						display: block;
						float: left;
					}
					& .publish-show-item__icon { 
						width: 16px;
						height: 100%;
						margin-right: 10px; 
					}
					& .publish-show-item__text { 
						height: 50px;
						line-height: 50px;
						.default_font_size_2;
						.default_color_2;	
					}
					&:first-child { 
						.default_border-r-t-4;
					}
					&:last-child { 
						.default_border-r-b-4;
					}
					&:nth-child(2) .publish-show-item__icon { 
						.skin_icon_charpt; 
					}
					&:nth-child(1) .publish-show-item__icon { 
						.skin_icon_article; 
					}
					&:nth-child(2) .publish-show-item__icon { 
						.skin_icon_charpt; 
					}
					&:hover {
						.default_backgroud_14;
						.default_border_shadow_4;
						& .publish-show-item__text {
							.default_color_1;	
						}
						&:nth-child(1) .publish-show-item__icon { .skin_icon_article_on; }
						&:nth-child(2) .publish-show-item__icon { .skin_icon_charpt_on; }
					}
				}
			}
			&:hover {
				& .publish-show {
					display: block;
				}	
			}
		}
	}
</style>

<!-- html代码 -->
<template>
<div class="c-header">
	<div class="c-header-content">
		<div class="logo"><a :href='url.index'></a></div>
		<div class="menu">
			<a href="javascript:void(0);" class="item" :class="{'z-on': pageIndex == 'index'}" @click="gourl('index')">发现</a>
			<a href="javascript:void(0);" class="item" :class="{'z-on': pageIndex == 'mark'}" @click="gourl('mark')">收藏</a>
		</div>
		<div class="search">
			<input type="text" placeholder="搜索" @keyup.enter="seachGo" v-model="search_value" spellcheck="false" />
			<a href="javascript:void(0)" @click="seachGo"><span></span></a>
		</div>
		<div class="publish">
			<a  v-if="user.isLogin" class="publish-btn cpm_button_weaks" :href="url.edit">创作</a>
			<a  v-else class="publish-btn cpm_button_weaks" :href="url.login">创作</a>
			<!-- <div class="publish-show">
				<ul class="publish-show-lists">
					<li class="publish-show-item"><a :href="url.edit">
						<span class="publish-show-item__list publish-show-item__icon"></span>
						<span class="publish-show-item__list publish-show-item__text">创建新作品</span>
					</a></li>
					<li class="publish-show-item"><a :href="user.isLogin ? 'author.work.html?user_id='+ user.uid : './login.html'">
						<span class="publish-show-item__list publish-show-item__icon"></span>
						<span class="publish-show-item__list publish-show-item__text">填坑新章节</span>
					</a></li>
				</ul>
			</div> -->
		</div>
		<div class="user">
			<div v-if="!user.isLogin" class="btn">
				<a :href="url.register">注册</a> <span>·</span> <a :href="url.login">登录</a>
			</div>
			<div v-else class="member">
				<div class="member-show-item member-show-notice">
					<div class="member-show-notice_img"></div>
					<div v-if="hasMessage" class="member-show-notice_number"></div>
					<div class="member-show member-notice">
						<ul class="member-notice-lists">
							<li class="member-notice-item"><a :href="url.comment">
								<span class="member-notice-item__list member-notice-item__icon"></span>
								<span class="member-notice-item__list member-notice-item__text">评论</span>
								<span v-if="!!unread.message2 && unread.message2 != 0" class="member-notice-item__list member-notice-item__number"> · {{unread.message2}}</span>
							</a></li>
							<li class="member-notice-item"><a :href="url.infomation">
								<span class="member-notice-item__list member-notice-item__icon"></span>
								<span class="member-notice-item__list member-notice-item__text">通知</span>
								<span v-if="!!unread.message0 && unread.message0 != 0" class="member-notice-item__list member-notice-item__number"> · {{unread.message0}}</span>
							</a></li>
						</ul>
					</div>
				</div>
				<div class="member-show-item member-show-center">
					<div class="member-show-center_img" :style="{'background-image': 'url('+ (!!user.avatar_url ? user.avatar_url : avatar) + ')'} "></div>
					<div class="member-show member-center">
						<ul class="member-center-lists">
							<li class="member-center-item"><a :href="url.invite">
								<span class="member-center-item__list member-center-item__icon"></span>
								<span class="member-center-item__list member-center-item__text">专属邀请码</span>
							</a></li>
							<li class="member-center-item"><a :href="url.center">
								<span class="member-center-item__list member-center-item__icon"></span>
								<span class="member-center-item__list member-center-item__text">我的主页</span>
							</a></li>
							<li class="member-center-item"><a :href="url.setting">
								<span class="member-center-item__list member-center-item__icon"></span>
								<span class="member-center-item__list member-center-item__text">个人设置</span>
							</a></li>
							<li class="member-center-item" @click="feedbackOpen"><a href="javascript:void(0);">
								<span class="member-center-item__list member-center-item__icon"></span>
								<span class="member-center-item__list member-center-item__text">意见反馈</span>
							</a></li>
							<li class="member-center-item" @click="ourlogin"><a href="javascript:void(0);">
								<span class="member-center-item__list member-center-item__icon"></span>
								<span class="member-center-item__list member-center-item__text" >退出登录</span>
							</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Feedback />
</div>
</template>

<script>
import {mapState} from 'vuex'
import avatar from '../common/images/img/avatar.png';
export default {
	name: 'header',
    data () {
    	return {
    		avatar: avatar,
    		hasMessage: false,
    		search_value: ''
    	}
    },
    props: ['pageIndex', 'resType'],
    computed: mapState({
        user: state => state.user.info,
        search (){
        	var path = location.pathname.indexOf('search.author.html') > -1 ? 'search.author.html' : 'search.article.html';
        	return './' + path + '?query=' + this.search_value
        },
        url (){
        	return {
        		invite: './invite.html?user_id=' + this.$store.state.user.info.uid,
    			index: './index.html',
    			mark: './mark.html',
    			app: './app.html',
    			login: './login.html',
    			register: './register.html',
    			center: './author.work.html?user_id=' + this.$store.state.user.info.uid,
    			setting: './setting.userinfo.html',
    			better: './message.better.html',
    			comment: './message.comment.html',
    			infomation: './message.infomation.html',
    			edit: './article.edit.html?from=' + encodeURIComponent(window.location.href)
    		}
        },
        unread (){
        	var unread = {};
        	var list = this.$store.state.message.unread.list;
        	for (var i = 0, len = list.length; i < len; i++) {
        		unread['message'+ list[i].message_type] = list[i].unread_count;
        	}
        	if (unread.message1 > 0 || unread.message2 > 0 || unread.message0 > 0) {
        		this.hasMessage = true;
        	}
        	return unread;
        }
    }),
    methods: {
    	gourl (url){
    		if (url == this.pageIndex) {
    			return false;
    		}

    		// 收藏要登录
    		if (url == 'mark' && !this.user.isLogin) {
    			window.location.href = './login.html';
    			return false;
    		}

    		window.location.href = './' + url + '.html';
    	},
    	seachGo (){
    		// 如果没有内容阻止
    		if ($.trim(this.search_value) == '') {
    			this.$store.dispatch('bubble_setState', {
					type: 'top',
					show: true,
					top: {
						status: 'z-warn',
						msg: '输入内容后再搜索！'
					}
				});
    			return false;
    		}

    		if (this.resType == 'search') {
    			this.$eventHub.$emit('header_serach', {
    				query: this.search_value
    			});
    		} else {
    			location.href = this.search;	
    		}
    	},
    	// 获取用户信息
        getUserInfo () {
			var cache_userInfo = this.$version.userInfo;
        	var info = this.$cache.getStore(cache_userInfo.key, cache_userInfo.version);
        	if (info) {
        		this.$store.dispatch('user_setUserInfo', info).then( res => {
        			this.url.center = './author.work.html?user_id=' + this.user.uid;
        		})
        		return false;
        	}
            this.$store.dispatch('user_getUserInfo', {
            	
            }).then( res => {
                this.url.center = './author.work.html?user_id=' + this.user.uid;

                // 缓存用户信息 - 1h
                this.$cache.setStore(cache_userInfo.key, res, cache_userInfo.version, cache_userInfo.time);

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
            	this.$store.dispatch('bubble_fail', err);
            }); 
        },
        // 退出登录
        ourlogin (){
        	this.centerShow = false;
        	this.$cache.removeStore(this.$version.userInfo.key);
        	this.$store.dispatch('user_ourlogin').then(res=>{
        		window.location.href = './index.html';
        	});
        },
        // 反馈打开
        feedbackOpen (){
        	this.centerShow = false;
        	this.$store.dispatch('common_switch', true);
        },
        // 获取未读消息
        getUnreadMessage (){
        	this.$store.dispatch('message_getUnreadMessage', {
            	// todo
            }).then( res => {
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
            	this.$store.dispatch('bubble_fail', err);
            });
        }
    },
    mounted () {
    	this.$eventHub.$on('getUnreadMessage', option => {
    		// 获取未读消息
        	this.getUnreadMessage();
    	})

    	// 获取url的参数
        this.search_value = decodeURIComponent(this.$url.getUrlParam('query')) || '';

    	// 获取用户信息
        this.getUserInfo();

        // 获取未读消息
        this.getUnreadMessage();
    }
}
</script>

