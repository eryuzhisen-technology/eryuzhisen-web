<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-footer;

.@{module} {
	width: 100%;
	height: 100px;
	.default_backgroud_6;
}
.@{module}-content {
	height: 100%;
	margin:0 auto;
	.default_width_960;
	& .footer-left {
		float: left;
		padding-top: 30px;
		.default_font_size_2;
		.default_color_3;
		& .menu {
			margin-bottom: 10px;
		}
		& a {
			text-decoration: none;
			.default_color_3;
			&:hover {
				.default_color_1;
			}
		}
	}
	& .footer-right {
		float: right;
		margin-top: 35px;
		& .icon-item {
			position: relative;
			display: block;
			float: left;
			width: 30px; 
			height: 30px;
			margin-left: 20px;
			.default_border-r-50;
			.default_backgroud_2;
			.default_pointer;
			& .qr {
				display: none;
				position: absolute;
				top: -175px;
				left: 50%;
				z-index: 300;
				width: 140px;
				height: 140px;
				padding: 20px;
				transform: translate(-50%, 0);
				.default_border_shadow_4;
				.default_backgroud_2;
				.default_border-r-4;
				& img {
					width: 100%;
					height: 100%;
				}
			}
		}
		& .icon-item:nth-child(1) {
			.skin_icon_ios_2;
			&:hover {
				.skin_icon_ios_1;
				& .qr {
					display: block;
				}
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
	<div class="footer-left">
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
		<div class="text">© 2017 耳语之森 BETA1.0版 All RightReserved. 沪ICP备17018710号</div>
	</div>
	<div class="footer-right">
		<div class="icon">
			<div class="icon-item">
				<div class="qr">
					<img src="../common/images/img/qr-1.png" />
				</div>
			</div>
			<div class="icon-item"></div>
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

