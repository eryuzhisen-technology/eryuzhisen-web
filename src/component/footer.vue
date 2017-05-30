<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-footer;

.@{module} {
	width: 100%;
	height: 100px;
	.default_backgroud_13;
}
.@{module}-content {
	height: 100%;
	margin: 0 auto;
	padding-top: 30px;
	.default_width_960;
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
		<a :href="url.about">关于我们</a>·<a :href="url.about">用户协议</a>·<a :href="url.about">隐私政策</a>·<a :href="url.about">原创声明</a>·<a :href="url.contact">联系我们</a>·<a :href="url.contact">社区规范</a>
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

