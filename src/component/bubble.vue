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
	top: 20px;
	left: 50%;
	z-index: 30;
	width: 600px;
	padding: 22px 0; 
	margin-left: -300px;
	.default_border-r-4;
	.default_font_size_3;
	.default_color_1;
	.default_center;
	.default_font_family_bolder;
	&.z-default {
		.default_backgroud_8;
	}
	&.z-warn {
		.default_backgroud_1;
	}
}
.@{bubble}-dialog {
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 30;
	width: 350px;
	transform: translate(-50%, -50%);
	& .dialog-title {
		width: 100%;
		height: 60px;
		line-height: 60px;
		padding-left: 30px;
		.default_font_size_3;
		.default_color_4;
		.default_backgroud_2;
		&.z-center {
			padding-left: 0;
			text-align: center;
		}
	}
	& .dialog-content {
		padding: 40px 45px;
		.default_backgroud_4;
		.default_border-b-6;
		.default_center;
		& .dialog-content-title {
			margin-bottom: 30px;
			.default_color_7;
			.default_font_size_4;
		}
		& .dialog-content-text {
			.default_color_2;
			.default_font_size_3;
			line-height: 140%;
			text-align: left;
		}
	}
	& .dialog-btn {
		height: 80px;
		padding-top: 20px;
		.default_backgroud_2;
		.default_center;
		& .dialog-btn-cancel {
			margin-right: 60px;
		}
	}
}
.@{bubble}-report {
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 30;
	width: 350px;
	transform: translate(-50%, -50%);
	& .report-title {
		width: 100%;
		height: 60px;
		line-height: 60px;
		padding-left: 30px;
		.default_font_size_3;
		.default_color_4;
		.default_backgroud_2;
	}
	& .report-content {
		padding: 20px 0 30px 30px;
		.default_backgroud_4;
		.default_border-b-6;
		& .select-item {
			height: 30px;
			margin-bottom: 10px;
			.default_pointer;
			& .select-item-radio {
				display: block;
				float: left;
				width: 30px;
				height: 30px;
				margin-right: 10px;
				.skin_icon_radio;
			}
			& .select-item-text {
				display: block;
				float: left;
				height: 30px;
				line-height: 30px;
				.default_font_size_3;
				.default_color_2;
			}
			&.z-on .select-item-radio {
				.skin_icon_radio_on;
			}
		}
		& .select-item:nth-child(3) {
			margin-bottom: 20px;
		}
		& .textare-item {
			width: 290px;
			height: 130px;
			padding: 20px;
			.default_border-r-4;
			.default_border_shadow_2;
			.default_backgroud_5;
			& textarea {
				.default_font_size_3;
				.default_color_2;
			}
		}
	}
	& .report-btn {
		height: 80px;
		padding-top: 20px;
		.default_backgroud_2;
		.default_center;
		& .report-btn-cancel {
			margin-right: 60px;
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
	width: 360px;
	padding: 40px 30px;
	transform: translate(-50%, -50%);
	.default_backgroud_3;
	.default_center;
	.default_border-r-4;
	& .warn-title {
		margin-bottom: 30px;
		.default_color_7;
		.default_font_size_5;
	}
	& .warn-content {
		margin-bottom: 30px;
		.default_color_2;
		.default_font_size_3;
	}
	& .warn-bottom-cancel {
		width: 60px;
		height: 60px;
		line-height: 60px;
		margin-right: 2px;
	}
	& .warn-bottom-comfire {
		width: 230px;
		height: 60px;
		line-height: 60px;
	}
}

</style>

<!-- html代码 -->
<template>
<div id="bubble" class="c-bubble" :class="{cpm_hide: !data.show}">
	<div class="c-bubble-mask" @click="close"></div>
    <div v-if="data.type == 'top'" class="c-bubble-top" :class="data.top.status">
    	{{data.top.msg}}
    </div>
    <div v-if="data.type == 'dialog'" class="c-bubble-dialog">
    	<div v-if="!!data.dialog.title" class="dialog-title" :class="data.dialog.title.align">
    		{{data.dialog.title.text}}
    	</div>
    	<div v-if="!!data.dialog.content" class="dialog-content">
    		<div v-if="!!data.dialog.content.title" class="dialog-content-title">{{data.dialog.content.title}}</div>
    		<div v-if="!!data.dialog.content.text" class="dialog-content-text">{{data.dialog.content.text}}</div>
    		<div v-if="!!data.dialog.content.html" v-html="data.dialog.content.html"></div>
    	</div>
    	<div v-if="!!data.dialog.btn" class="dialog-btn">
    		<div v-if="!!data.dialog.btn.cancel" class="dialog-btn-cancel cpm_button_weak z-disline">{{data.dialog.btn.comfire.text}}</div>
    		<div v-if="!!data.dialog.btn.comfire" class="dialog-btn-comfire cpm_button_default z-disline">{{data.dialog.btn.comfire.text}}</div>
    	</div>
    </div>
    <div v-if="data.type == 'report'" class="c-bubble-report">
    	<div class="report-title">
    		选择举报类型
    	</div>
    	<div class="report-content">
    		<div class="select-item z-on" data-type="adv" @click="radioSwitch($event)">
    			<span class="select-item-radio"></span>
    			<span class="select-item-text">广告或者垃圾信息</span>
    		</div>
    		<div class="select-item" data-type="chao" @click="radioSwitch($event)">
    			<span class="select-item-radio"></span>
    			<span class="select-item-text">抄袭或未授权转载</span>
    		</div>
    		<div class="select-item" data-type="other" @click="radioSwitch($event)">
    			<span class="select-item-radio"></span>
    			<span class="select-item-text">其他原因</span>
    		</div>
    		<div class="textare-item">
    			<textarea v-if="report.type == 'other'" placeholder="请输入举报原因"></textarea>
    			<textarea v-else disabled placeholder="请输入举报原因"></textarea>
    		</div>
    	</div>
    	<div class="report-btn">
    		<div class="report-btn-cancel cpm_button_weak z-disline">取消</div>
    		<div class="report-btn-comfire cpm_button_default z-disline">确认</div>
    	</div>
    </div>
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
    <div v-if="data.type == 'warn'" class="c-bubble-warn">
    	<div class="warn-title">{{data.warn.title}}</div>
    	<div class="warn-content">
    		{{data.warn.content}}
    	</div>
    	<div class="warn-bottom">
    		<div class="warn-bottom-cancel cpm_button_weak z-disline" @click="close">取消</div>
    		<div class="warn-bottom-comfire cpm_button_default z-disline">确认</div>
    	</div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: mapState({
    	data: state => state.bubble
    }),
    methods: {
    	close (){
    		this.$store.dispatch('bubble_closeBubble');
    	},
    	radioSwitch (event){
    		$('.c-bubble-report .report-content .select-item').removeClass('z-on');
    		$(event.currentTarget).addClass('z-on');
    		this.report.type = event.currentTarget.dataset['type'];
    	}
    }
}
</script>

