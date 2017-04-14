<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-header;
.@{module} {
	width: 100%;
	height: 150px;
	.default_backgroud_7;
}
.@{module}-content {
	.default_width_960;
	height: 100%;
	margin: 0 auto;
	& .logo {
		float: left;
		width: 140px;
		height: 50px;
		margin-top: 50px;
		margin-right: 30px;
		.skin_icon_logo_1;
		.default_pointer;
		& a {
			display: inline-block;
			width: 100%;
			height: 100%;
		}
	}
	& .menu {
		float: left;
		margin-top: 78px;
		margin-right: 30px;
		overflow-y: hidden;
		& .item {
			float: left;
			margin-right: 20px;
			.default_font_size_3;
			.default_color_3;
			text-decoration: none;
			&:hover {
				.default_color_1;
			}
			&.z-on {
				.default_color_1;
				.default_font_family_bolder;
			}
		}
	}
	& .search {
		float: left;
		width: 250px;
		height: 40px;
		overflow: hidden;
		padding: 10px 20px;
		margin-top: 68px;
		.default_border-r-4;
		.default_backgroud_4;
		& input {
			display: block;
			float: left;
			width: 170px;
			margin-top: 3px;
			margin-right: 15px;
			.default_color_4;
			.default_font_size_3;
		}
		& a {
			display: block;
			float: left;
			width: 20px;
			height: 20px;
			.skin_icon_search_1;
			.default_pointer;
		}
	}
	& .user {
		float: right;
		margin-right: 20px;
		margin-top: 70px;
		.default_center;
		& .btn {
			height: 40px;
			line-height: 40px;
			.default_font_size_3;
			.default_color_1;
			.default_font_family_bolder;
			& a {
				.default_color_1;
			}
		}
		& .member {
			display: none;
			position: relative;
			width: 100px;
			& .member-show-item {
				width: 40px;
				height: 40px;
				.default_float_l;
				.default_pointer;
				.default_border-r-50;
				.default_backgroud_2;
			}
			& .member-show-notice {
				position: relative;
				margin-right: 20px;
				.skin_icon_notice_1;
				& .member-show-notice_number {
					position: absolute;
					top: -4px;
					right: -15px;
				}
			}
			& .member-show-center {
				background-repeat: no-repeat;
				background-position: center;
				background-size: contain;
			}
			& .member-notice {
				position: absolute;
				top: 77px;
				left: 0;
				width: 200px;
				z-index: 10;
				overflow: hidden;
				.default_backgroud_3;
				.default_border-r-4;
				& .member-notice-item {
					width: 200px;
					height: 60px;
					line-height: 60px;
					padding-left: 20px;
					& a {
						display: block;
						width: 100%;
						height: 100%;
						.default_font_size_3;
						.default_color_3;	
					}
					& .member-notice-item__list {
						display: block;
						float: left;
					}
					& .member-notice-item__icon { 
						width: 20px;
						height: 100%;
						margin-right: 10px; 
					}
					& .member-notice-item__text { 
						margin-top: 22px;
					}
					& .member-notice-item__number { 
						float: left;
						margin-top: 22px;
						margin-right: 10px; 
					}
					&:nth-child(1) .member-notice-item__icon { .skin_icon_er; }
					&:nth-child(2) .member-notice-item__icon { .skin_icon_cmt; }
					&:nth-child(3) .member-notice-item__icon { .skin_icon_msg; }
					&:hover {
						.default_backgroud_7;
						& a {
							.default_color_1;	
						}
						&:nth-child(1) .member-notice-item__icon { .skin_icon_er_on; }
						&:nth-child(2) .member-notice-item__icon { .skin_icon_cmt_on; }
						&:nth-child(3) .member-notice-item__icon { .skin_icon_msg_on; }
					}
				}
			}
			& .member-center {
				position: absolute;
				top: 77px;
				left: 60px;
				width: 200px;
				z-index: 10;
				overflow: hidden;
				.default_backgroud_3;
				.default_border-r-4;
				.default_pointer;
				& .member-center-item {
					width: 200px;
					height: 60px;
					line-height: 60px;
					padding-left: 20px;
					& {
						.default_color_3;
					}
					& a {
						display: block;
						width: 100%;
						height: 100%;
						.default_font_size_3;
						.default_color_3;	
					}
					& .member-center-item__list {
						display: block;
						float: left;
					}
					& .member-center-item__icon { 
						width: 20px;
						height: 100%;
						margin-right: 10px; 
					}
					& .member-center-item__text { 
						margin-top: 22px;
					}
					&:nth-child(1) .member-center-item__icon { .skin_icon_me; }
					&:nth-child(2) .member-center-item__icon { .skin_icon_set; }
					&:nth-child(3) .member-center-item__icon { .skin_icon_back; }
					&:nth-child(4) .member-center-item__icon { .skin_icon_logout; }
					&:hover {
						.default_backgroud_7;
						& {
							.default_color_1;	
						}
						& a {
							.default_color_1;	
						}
						&:nth-child(1) .member-center-item__icon { .skin_icon_me_on; }
						&:nth-child(2) .member-center-item__icon { .skin_icon_set_on; }
						&:nth-child(3) .member-center-item__icon { .skin_icon_back_on; }
						&:nth-child(4) .member-center-item__icon { .skin_icon_logout_on; }
					}
				}
			}
		}
		&.z-active .btn { display: none; }
		&.z-active .member { display: block; }
	}
	& .publish {
		float: right;
		margin-top: 70px;
		.default_backgroud_3;
		.default_font_family_bolder;
	}
}
</style>

<!-- html代码 -->
<template>
<div class="c-header">
	<div class="c-header-content">
		<div class="logo"><a :href='url.index'></a></div>
		<div class="menu">
			<a class="item" :class="{'z-on': data.page == 'index'}" :href='url.index'>发现</a>
			<a class="item" :class="{'z-on': data.page == 'mark'}" :href='url.mark'>收藏</a>
		</div>
		<div class="search">
			<input type="text" placeholder="搜索">
			<a :href="url.search"></a>
		</div>
		<div class="publish cpm_button cpm_button_warn" @click="publish">发布</div>
		<div class="user" :class="{'z-active': user.isLogin}">
			<div class="btn">
				<a :href="url.register">注册</a>
				·
				<a :href="url.login">登录</a>
			</div>
			<div class="member">
				<div class="member-show">
					<div class="member-show-item member-show-notice j-close-1" @click="noticeSwitch">
						<div class="member-show-notice_number cpm_tip_number">20</div>
					</div>
					<div class="member-show-item member-show-center j-close-1" @click="centerSwitch" :style="{'background-image': 'url('+ user.avatar_url + ')'} ">
					</div>
				</div>
				<div class="member-show member-notice j-close-1" :class="{'cpm_hide' : !noticeShow}">
					<ul class="member-notice-lists">
						<li class="member-notice-item"><a :href="url.better">
							<span class="member-notice-item__list member-notice-item__icon"></span>
							<span class="member-notice-item__list member-notice-item__text">精选</span>
							<span class="member-notice-item__list member-notice-item__number">·2</span>
						</a></li>
						<li class="member-notice-item"><a :href="url.comment">
							<span class="member-notice-item__list member-notice-item__icon"></span>
							<span class="member-notice-item__list member-notice-item__text">评论我</span>
							<span class="member-notice-item__list member-notice-item__number">·12</span>
						</a></li>
						<li class="member-notice-item"><a :href="url.infomation">
							<span class="member-notice-item__list member-notice-item__icon"></span>
							<span class="member-notice-item__list member-notice-item__text">其他消息</span>
							<span class="member-notice-item__list member-notice-item__number">·10</span>
						</a></li>
					</ul>
				</div>
				<div class="member-show member-center j-close-1" :class="{'cpm_hide' : !centerShow}">
					<ul class="member-center-lists">
						<li class="member-center-item"><a :href="url.center">
							<span class="member-center-item__list member-center-item__icon"></span>
							<span class="member-center-item__list member-center-item__text">我的主页</span>
						</a></li>
						<li class="member-center-item"><a :href="url.setting">
							<span class="member-center-item__list member-center-item__icon"></span>
							<span class="member-center-item__list member-center-item__text">个人设置</span>
						</a></li>
						<li class="member-center-item" @click="feedbackOpen">
							<span class="member-center-item__list member-center-item__icon"></span>
							<span class="member-center-item__list member-center-item__text">意见反馈</span>
						</li>
						<li class="member-center-item" @click="ourlogin">
							<span class="member-center-item__list member-center-item__icon"></span>
							<span class="member-center-item__list member-center-item__text" >退出登录</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<Feedback />
	<Edit />
</div>
</template>

<script>
import {mapState} from 'vuex'
import {distUrl} from '../server/config'
import Feedback from './feedback.vue'
import edit from './article.edit.vue'
export default {
	components: {
        Feedback: Feedback,
        Edit: edit
    },
	name: 'header',
    data () {
    	return {
    		noticeShow: false,
    		centerShow: false,
    		url: {
    			index: distUrl + 'index.html',
    			mark: distUrl + 'mark.html',
    			app: distUrl + 'app.html',
    			login: distUrl + 'login.html',
    			register: distUrl + 'register.html',
    			search: distUrl + 'search.article.html',
    			center: distUrl + 'author.work.html',
    			setting: distUrl + 'setting.userinfo.html',
    			better: distUrl + 'message.better.html',
    			comment: distUrl + 'message.comment.html',
    			infomation: distUrl + 'message.infomation.html',
    		}
    	}
    },
    props: ['data'],
    computed: mapState({
        user: state => state.user.info
    }),
    methods: {
    	noticeSwitch (){
    		this.noticeShow = !this.noticeShow;
    		this.centerShow = false;
    	},
    	centerSwitch (){
    		this.centerShow = !this.centerShow;
    		this.noticeShow = false;
    	},
    	publish (){
    		this.$store.dispatch('article_setState', {
                show: true
            });
    	},
    	// 获取用户信息
        getUserInfo () {
            this.$store.dispatch('user_getUserInfo').then( info => {
                //todo
            }).catch(res => {
            	// 未登录
            	if (res.ret == -10) {
            		return false;
            	}
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: res.msg
                    }
                })
            }); 
        },
        // 退出登录
        ourlogin (){
        	this.centerShow = false;
        	this.$store.dispatch('user_ourlogin', {
        		//todo
        	});
        },
        // 反馈打开
        feedbackOpen (){
        	this.centerShow = false;
        	this.$store.dispatch('feedback_switch', true);
        }
    },
    mounted () {
    	$('body').on('click', e => {
    		var node = $(e.target);
    		if (!node.hasClass('j-close-1') && node.parents('.j-close-1').length == 0) {
    			this.noticeShow = false;
    			this.centerShow = false;
    		}
    	})

    	// 获取用户信息
        this.getUserInfo();
    }
}
</script>

