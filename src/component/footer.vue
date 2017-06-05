<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-footer;

.@{module} {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100px;
	.default_backgroud_13;
}
.@{module}-content {
	height: 100%;
	margin: 0 auto;
	padding-top: 30px;
	.default_width_1200;
	.default_center;
	.default_color_4;
	.default_font_size_2;
	& .menu {
		margin-bottom: 8px;
		& a {
			text-decoration: none;
			.default_color_4;
			.default_font_size_2;
			&:hover {
				.default_color_2;
			}
		}
	}
	& .text {
		.default_color_4;
		.default_font_size_2;
	}
}
</style>

<!-- html代码 -->
<template>
<div class="c-footer">
<div class="c-footer-content">
	<div class="menu">
		<a href="about.html">关于我们</a>
		·
		<a href="agreement.html">用户协议</a>
		·
		<a href="privacy.html">隐私政策</a>
		·
		<a href="statement.html">原创声明</a>
		·
		<a href="standard.html">社区规范</a>
		·
		<a href="contact.html">联系我们</a>
	</div>
	<div class="text">© 2017 耳语之森 BETA1.0版 沪ICP备17018710号</div>
</div>
</div>
</template>

<script>
import {distUrl} from '../server/config'
export default {
    name: 'footer',
    data () {
    	return {
    		
    	}
    },
    methods: {
    	
    }
}
</script>

