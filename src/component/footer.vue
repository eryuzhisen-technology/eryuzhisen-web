<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-footer;

.@{module} {
	width: 100%;
	height: 100px;
	.default_backgroud_7;
}
.@{module}-content {
	height: 100%;
	margin:0 auto;
	.default_width_960;
	& .menu {
		float: left;
		padding-top: 43px;
		.default_color_3;
		& a {
			.default_font_size_2;
			.default_color_3;
		}
	}
	& .icon {
		float: right;
		margin-top: 30px;
		& .icon-item {
			display: block;
			float: left;
			width: 40px; 
			height: 40px;
			margin-left: 20px;
			.default_border-r-50;
			.default_backgroud_4;
		}
		& .icon-item:nth-child(1) {
			.skin_icon_ios_2;
			&:hover {
				.skin_icon_ios_1;
			}
		}
		& .icon-item:nth-child(2) {
			.skin_icon_android_2;
			&:hover {
				.skin_icon_android_1;
			}
		}
	}
}
</style>

<!-- html代码 -->
<template>
<div class="c-footer">
<div class="c-footer-content">
	<div class="menu">
		<a :href="url.about">关于我们</a>
		 · 
		<a :href="url.about">用户协议</a>
		 · 
		<a :href="url.about">隐私政策</a>
		 · 
		<a :href="url.about">知识产权</a>
		 · 
		<a :href="url.about">侵权举报</a>
		 · 
		<a :href="url.about">免责声明</a>
		 · 
		<a :href="url.contact">联系我们</a>
	</div>
	<div class="icon">
		<div class="icon-item">
			<div class="qr"></div>
		</div>
		<div class="icon-item">
			<div class="qr"></div>
		</div>
	</div>
</div>
</div>
</template>

<script>
import {distUrl} from '../server/config'
export default {
    name: 'footer',
    data () {
    	return {
    		url: {
    			about: distUrl + 'about.html',
    			contact: distUrl + 'contact.html'
    		}
    	}
    },
    methods: {
    	
    }
}
</script>

