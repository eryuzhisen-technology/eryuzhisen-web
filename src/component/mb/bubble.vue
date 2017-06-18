<!-- style样式代码 -->
<style lang="less">
@import (reference) '../../common/css/common';
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
		height: .6rem;
		line-height: .6rem;
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
</style>

<!-- html代码 -->
<template>
<div id="bubble" class="c-bubble" :class="{cpm_hide: !data.show}">
	<div class="c-bubble-mask" @click="close"></div>
	<!-- 服务请求提示 -->
    <div v-if="data.type == 'top'" class="c-bubble-top" :class="data.top.status">
    	{{data.top.msg}}
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

