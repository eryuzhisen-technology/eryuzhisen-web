<!-- style样式代码 -->
<style lang="less">
@import (reference) '../../common/css/mb.common';
	@bubble: c-bubble;

	.@{bubble}-mask {
		width: 100%;
		height: 100%;
		z-index: 2;
		position: fixed;
		left: 0;
		top: 0;
		background: rgba(0,0,0,0.5);
		&.z-nobg {
			background: none;
		}
	}
	.@{bubble}-top {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 200;
		width: 5rem;
		height: 2rem;
		padding: 0 .3rem;
		margin: -1rem 0 0 -2.5rem;
		line-height: 1.5em;
		background: rgba(0,0,0,.7);
		.default_border-r-10;
		.default_font_size_6;
		.default_color_1;
		.default_flex__v_middle;
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
		.default_border-r-10;
		& .warn-title {
			padding-top: 30px;
			margin-bottom: 20px;
			.default_color_1;
			.default_font_size_8;
			.default_center;
		}
		& .warn-content {
			padding: 0 .6rem;
			line-height: 1.5em;
			margin-bottom: 30px;
			.default_color_2;
			.default_font_size_5;
			& h3 {
				margin-bottom: .4rem;
				.default_color_1;
				.default_font_size_8;
				.default_font_bolder;
			}
			& p {
				line-height: 1.5em;
			}
			& span {
				.default_font_size_4;
			}
		 	& a {
		 		line-height: 1.5em;
				.default_font_size_5;
				.default_color_1;
		 	}
		}
		& .warn-bottom {
			width: 100%;
			height: 1rem;
			padding: .2rem 0;
			overflow: hidden;
			.default_backgroud_2;
			.default_flex_center;
			& .warn-bottom-item {
				flex: 1;
				height: .6rem;
				line-height: .6rem;
				text-align: center;
				.default_color_2;
				.default_font_size_6;
				.default_font_bolder;
				.default_border-rr-4;
				&:last-child {
					.default_border-n;
				}
			}
		}
		&.z-center .warn-content {
			.default_center;
		}
	}
</style>

<!-- html代码 -->
<template>
<div id="bubble" class="c-bubble" :class="{cpm_hide: !data.show}">
	<div class="c-bubble-mask" @click="close" :class="{'z-nobg': data.type == 'top'}"></div>
	<!-- 服务请求提示 -->
    <div v-if="data.type == 'top'" class="c-bubble-top">
    	{{data.top.msg}}
    </div>

    <!-- dialog提示 -->
    <div v-if="data.type == 'warn'" class="c-bubble-warn" :class="data.warn.className">
    	<div class="warn-title">{{data.warn.title}}</div>
    	<div v-if="data.warn.html" class="warn-content" v-html="data.warn.html"></div>
    	<div v-else class="warn-content">{{data.warn.content}}</div>
    	<div class="warn-bottom">
    		<div class="warn-bottom-item warn-bottom-cancel" @click="close">{{data.warn.btnCancel || '取消'}}</div>
    		<div v-if="data.warn.btnComfire" class="warn-bottom-item warn-bottom-comfire" @click="comfire">{{data.warn.btnComfire || '确认'}}</div>
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
    	comfire (){
    		this.data.methods.comfire && this.data.methods.comfire();
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

