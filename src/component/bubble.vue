<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
	@bubble: c-bubble;

	.@{bubble}-mask {
		width: 100%;
		height: 100%;
		z-index: 20;
		position: fixed;
		left: 0;
		top: 0;
		background: rgba(0,0,0,0.5);
	}
	.@{bubble}-top {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 30;
		width: 100%;
		height: 60px;
		line-height: 60px;
		.default_font_size_3;
		.default_color_1;
		.default_center;
		.default_border_shadow_5;
		&.z-default {
			.default_backgroud_3;
		}
		&.z-warn {
			.default_backgroud_1;
		}
	}
	.@{bubble}-report {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 30;
		width: 300px;
		transform: translate(-50%, -50%);
		overflow: hidden;
		.default_border-r-4;
		& .report-title {
			width: 100%;
			height: 50px;
			line-height: 50px;
			padding-left: 20px;
			.default_font_size_2;
			.default_color_2;
			.default_backgroud_2;
		}
		& .report-content {
			padding: 20px 20px 30px 20px;
			.default_backgroud_3;
			& .select-item {
				height: 20px;
				margin-bottom: 15px;
				.default_pointer;
				& .select-item-radio {
					display: block;
					float: left;
					width: 20px;
					height: 20px;
					padding: 2px;
					margin-right: 10px;
					border: 2px solid @default_color_1;
					.default_border-r-50;
					& em {
						display: block;
						width: 100%;
						height: 100%;
						.default_border-r-50;
					}
				}
				& .select-item-text {
					display: block;
					float: left;
					height: 20px;
					line-height: 20px;
					.default_font_size_2;
					.default_color_2;
				}
				&.z-on .select-item-text {
					.default_color_1;
				}
				&.z-on .select-item-radio em {
					.default_backgroud_16;
				}
			}
			& .select-item:nth-child(3) {
				margin-bottom: 20px;
			}
			& .textare-item {
				width: 260px;
				height: 150px;
				// padding: 20px;
				& textarea {
					// .default_font_size_2;
					// .default_color_4;
				}
			}
		}
		& .report-bottom {
			width: 100%;
			height: 50px;
			padding: 10px 0;
			overflow: hidden;
			.default_backgroud_2;
			& .report-bottom-item {
				float: left;
				width: 50%;
				height: 30px;
				line-height: 30px;
				text-align: center;
				.default_color_2;
				.default_font_size_2;
				.default_pointer;
				&:hover {
					.default_color_1;
				}
			}
			& .report-bottom-cancel {
				.default_border-rr-5;
			}
		}
	}
	.@{bubble}-declaration {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 30;
		width: 720px;
		height: 540px;
		margin: -270px 0 0 -360px;
		.default_backgroud_2;
		& .declaration-title {
			width: 100%;
			height: 60px;
			line-height: 60px;
			padding-left: 30px;
			.default_font_size_3;
			.default_color_3;
			.default_border-b-5;
		}
		& .declaration-content {
			width: 100%;
			height: 400px;
			padding: 40px 50px;
			overflow-y: auto;
			.default_backgroud_4;
			.default_font_size_3;
			.default_color_2;
			& h3 {
				margin-bottom: 30px;
				line-height: 1.5rem;
				.default_font_size_3;
				.default_color_2;
			}
			& p {
				line-height: 1.5rem;
			}
		}
		& .declaration-bottom {
			width: 100%;
			height: 80px;
			padding-top: 20px;
			.default_border-t-5;
			.default_center;
			& .declaration-bottom-cancel {
				margin-right: 60px;
			}
		}
	}
	.@{bubble}-warn {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 30;
		width: 300px;
		transform: translate(-50%, -50%);
		overflow: hidden;
		.default_backgroud_3;
		.default_border-r-4;
		& .warn-title {
			padding-top: 30px;
			margin-bottom: 20px;
			text-align: center;
			.default_color_1;
			.default_font_size_4;
		}
		& .warn-content {
			padding: 0 30px;
			line-height: 1.5rem;
			margin-bottom: 30px;
			.default_color_2;
			.default_font_size_2;
			& p {
				line-height: 1.5rem;
				margin-bottom: 20px;
			}
		 	& a {
		 		line-height: 1.5rem;
				.default_font_size_1;
				.default_color_3;
				&:hover {
					.default_color_1;
				}
		 	}
		}
		& .warn-bottom {
			width: 100%;
			height: 50px;
			padding: 10px 0;
			overflow: hidden;
			.default_backgroud_2;
			& .warn-bottom-item {
				float: left;
				width: 50%;
				height: 30px;
				line-height: 30px;
				text-align: center;
				.default_color_2;
				.default_font_size_2;
				.default_pointer;
				&:hover {
					.default_color_1;
				}
			}
			& .warn-bottom-cancel {
				.default_border-rr-5;
			}
		}
	}
	.@{bubble}-complete {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 30;
		width: 460px;
		transform: translate(-50%, -50%);
		overflow: hidden;
		.default_backgroud_3;
		.default_border-r-4;
		& .complete-title {
			padding-top: 30px;
			margin-bottom: 15px;
			text-align: center;
			.default_color_1;
			.default_font_size_7;
			.default_font_bolder;
		}
		& .complete-content {
			padding: 0 30px;
			line-height: 1.5rem;
			margin-bottom: 30px;
			.default_color_2;
			.default_font_size_2;
			.default_center;
			& p {
				line-height: 1.5rem;
				margin-bottom: 20px;
				&:last-child {
					margin-bottom: 15px;
				}
			}
		 	& .complete-share {
		 		width: 100%;
		 		overflow: hidden;
		 		.default_center;
		 		& .share-item {
		 			display: inline-block;
		 			width: 30px;
		 			height: 30px;
		 			margin-right: 10px;
		 			.default_border-r-50;
		 			.default_middle;
		 			.default_backgroud_2;
		 			.default_pointer;
		 			&:last-child {
		 				margin-right: 0;
		 			}
		 		}
		 		& .share-wb {
					.skin_share_wb;
					&:hover {
						.skin_share_wb_on;
					}
		 		}
		 		& .share-tb {
					.skin_share_tb;
					&:hover {
						.skin_share_tb_on;
					}
		 		}
		 		& .share-qq {
					.skin_share_qq;
					&:hover {
						.skin_share_qq_on;
					}
		 		}
		 		& .share-kong {
					.skin_share_kong;
					&:hover {
						.skin_share_kong_on;
					}
		 		}
		 	}
		}
		& .complete-bottom {
			width: 100%;
			height: 50px;
			padding: 10px 0;
			overflow: hidden;
			.default_backgroud_2;
			.default_border-t-5;
			& .complete-bottom-item {
				float: left;
				width: 50%;
				height: 30px;
				line-height: 30px;
				text-align: center;
				.default_color_2;
				.default_font_size_2;
				.default_pointer;
				&:hover {
					.default_color_1;
				}
			}
			& .complete-bottom-cancel {
				.default_border-rr-5;
			}
		}
	}
</style>

<!-- html代码 -->
<template>
<div id="bubble" class="c-bubble" :class="{cpm_hide: !data.show}">
	<div class="c-bubble-mask" @click="close"></div>
	<!-- 服务请求提示 -->
    <div v-if="data.type == 'top'" class="c-bubble-top" :class="data.top.status">
    	{{data.top.msg}}
    </div>

    <!-- 举报 -->
    <div v-if="data.type == 'report'" class="c-bubble-report">
    	<div class="report-title">
    		选择举报类型
    	</div>
    	<div class="report-content">
    		<div class="select-item z-on" data-type="adv" @click="radioSwitch">
    			<span class="select-item-radio"><em></em></span>
    			<span class="select-item-text">广告或者垃圾信息</span>
    		</div>
    		<div class="select-item" data-type="copy" @click="radioSwitch">
    			<span class="select-item-radio"><em></em></span>
    			<span class="select-item-text">抄袭或未授权转载</span>
    		</div>
    		<div class="select-item" data-type="other" @click="radioSwitch">
    			<span class="select-item-radio"><em></em></span>
    			<span class="select-item-text">其他原因</span>
    		</div>
    		<div class="textare-item cpm_form_textarea">
    			<textarea placeholder="请输入举报原因" v-model="content"></textarea>
    		</div>
    	</div>
    	<div class="report-bottom">
    		<div class="report-bottom-item report-bottom-cancel" @click="close">取消</div>
    		<div class="report-bottom-item report-bottom-comfire" @click="addReport">确认</div>
    	</div>
    </div>

    <!-- 声明 -->
    <div v-if="data.type == 'declaration'" class="c-bubble-declaration">
    	<div class="declaration-title">原创声明</div>
    	<div class="declaration-content">
    		<h3>原创特指自己独立完成创作的作品。歪曲、篡改他人创作或者抄袭、剽窃他人创作而产生的作品，改编、翻译、注释、整理他人已有创作而产生的作品均不能说是原创。</h3>
			<p>如下情形不得对作品进行原创声明，一经发现将对作品永久收回原创声明功能使用权限，导致严重影响的还将对违规帐号予以一定期限内封号处理；</p>
			<p>1. 未取得合法授权发布的作品；</p>
			<p>2. 作品主要篇幅为诸如“法律、法规，国家机关的决议、决定、命令和其他具有立法、行政、司法性质的文件、时事新闻、历法、通用数表、通用表格和公式”等公共内容；</p>
			<p>3. 大篇幅引用他人内容或作品主要内容为他人作品，如书摘、文摘、报摘等；</p>
			<p>4. 营销性质的内容；</p>
			<p>5. 整合的内容；</p>
			<p>6. 对非独家代理的作品声明原创等；</p>
			<p>7. 色情低俗内容、暴力内容、等内容；</p>
			<p>8. 违反法律法规、政策及公序良俗、社会公德，违反《耳语作品规则》、《耳语版权声明》，或干扰耳语平台正常运营和侵犯其他用户或第三方合法权益内容的信息。</p>
    	</div>
    	<div class="declaration-bottom">
    		<div class="declaration-bottom-cancel cpm_button_weak z-disline">取消</div>
    		<div class="declaration-bottom-comfire cpm_button_default z-disline">确认</div>
    	</div>
    </div>

    <!-- dialog提示 -->
    <div v-if="data.type == 'warn'" class="c-bubble-warn">
    	<div class="warn-title">{{data.warn.title}}</div>
    	<div v-if="data.warn.html" class="warn-content" v-html="data.warn.html"></div>
    	<div v-else class="warn-content">{{data.warn.content}}</div>
    	<div class="warn-bottom">
    		<div class="warn-bottom-item warn-bottom-cancel" @click="close">取消</div>
    		<div class="warn-bottom-item warn-bottom-comfire" @click="comfire">确认</div>
    	</div>
    </div>

    <!-- 创作完成提示 -->
    <div v-if="data.type == 'complete'" class="c-bubble-complete">
    	<div class="complete-title">{{data.complete.title}}</div>
    	<div class="complete-content">
    		<p>发布成功</p>
    		<p>快把你的故事分享给好友吧</p>
    		<div class="complete-share">
    			<div class="share-item share-wb" @click="shareFn('wb', $event)"></div>
    			<div class="share-item share-tb" @click="shareFn('tb', $event)"></div>
    			<div class="share-item share-qq" @click="shareFn('qq', $event)"></div>
    			<div class="share-item share-kong" @click="shareFn('kong', $event)"></div>
    		</div>
    	</div>
    	<div class="complete-bottom">
    		<div class="complete-bottom-item complete-bottom-cancel" @click="close">继续创作</div>
    		<div class="complete-bottom-item complete-bottom-comfire" @click="comfireAll">查看作品</div>
    	</div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data (){
		return {
			content: ''
		}
	},
    computed: mapState({
    	data: state => state.bubble
    }),
    methods: {
    	close (){
    		this.data.methods.cancel && this.data.methods.cancel();
    		this.$store.dispatch('bubble_closeBubble');
    	},
    	shareFn (app, e){
            $(e.currentTarget).parents('.j-close-1').removeClass('z-active');
            // 分享
            var option = {
                app: app,
                url: window.location.href,
                title: this.data.complete.title,
                pic: this.data.complete.pic,
                desc: this.data.complete.desc,
                summary: this.data.complete.summary
            }
            this.$share.shareToAPP(option);
        },
    	radioSwitch (event){
    		$('.c-bubble-report .report-content .select-item').removeClass('z-on');
    		$(event.currentTarget).addClass('z-on');
    		this.$store.dispatch('bubble_setState', {
    			report: {
    				type: event.currentTarget.dataset['type']
    			}
    		})
    	},
    	addReport (){
    		this.$store.dispatch('bubble_setState', {
    			report: {
    				content: this.content
    			}
    		}).then( res => {
    			// this.data.report.map[this.data.report.type]
    			return this.$store.dispatch('common_addReport', {
    				"content_id": this.data.report.content_id, //举报内容id
					"report_reason": this.data.report.map[this.data.report.type], //举报原因
					"content_type": this.data.report.content_type, //举报内容类型 1 作品章节 2 评论 3 作者，
					"add_reason": this.data.report.content, //附加信息 
    			}).then( res => {
    				this.content = '';

    				this.$store.dispatch('bubble_showBubble', {
		                show: false
		            })

		            this.$store.dispatch('bubble_success', {
                        ret: 0,
                        type: 'top',
                        msg: '发送成功'
                    });
		            this.$store.dispatch('bubble_success', res);
    			}).catch( err => {
    				this.$store.dispatch('bubble_fail', err);	
    			});
    		}).catch( err => {
    			this.$store.dispatch('bubble_fail', err);
    		})
    	},
    	comfire (){
    		this.data.warn.comfireFn();
    		this.$store.dispatch('bubble_setState', {
    			show: false
    		})
    	},
    	comfireAll (){
    		this.data.methods.comfire();
    		this.$store.dispatch('bubble_setState', {
    			show: false
    		})
    	}
    },
    mounted (){
    	this.$watch('data.outlogin', newVal => {
    		if (newVal) {
				console.log('-----error-----no login, clear user info');
				this.$cache.removeStore(this.$version.userInfo.key);
    			this.$store.dispatch('user_ourlogin').then(res=>{
	        		// window.location.href = './index.html';
	        	});
    		}
    	})
    }
}
</script>

