<!-- style样式代码 -->
<style lang="less">
@import (less) '../../../common/css/mb.common.less';
	.m-translate {
		position: relative;
		width: 100%;
		height: 100%;
		padding-top: .8rem;
		background-image: url(../../../common/images/mb/user-bg.png);
		background-size: 7.5rem 13.34rem;
		background-position: top center;

		display: flex;
		justify-content: center;

		& .logo {
			width: 5.5rem;
			height: 4.3rem;
		}
		& .btn {
			position: absolute;
			bottom: 1.5rem;
			left: 0;
			width: 100%;
			.default_flex__v_middle;
			& .btn-item {
				display: block;
				width: 4.5rem;
				height: 1rem;
				line-height: 1.5em;
				border: 1px solid #dcdcdc;
				background-color: rgba(0,0,0,0.5);
				.default_color_1;
				.default_font_size_6;
				.default_font_bolder;
				.default_border-r-10;
				.default_flex__v_middle;
			}
			& .btn-and {
				height: 2rem;
				margin-top: .3rem;
			}
		}
	}

</style>

<!-- html代码 -->
<template>
	<div class="m-translate">
		<div class="logo">
			<img src="../../../common/images/mb/translate-logo.png" />
		</div>
		<div class="btn">
			<a class="btn-item btn-ios" :href="$defaultData.mbData.downUrl">IOS版下载</a>
			<div class="btn-item btn-and" @click="goMB">
				安卓版尚在开发中
				<br />
				网页版同样好用哦
				<br />
				eryuzhisen.com
			</div>
		</div>
	</div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    data () {
    	return {
			
    	}
    },
    methods: {
    	goMB (){
    		window.location.href = '/';
    	},
    	goPC (){
            // 登录成功后，讲token写入cookie
            Cookies.set('mobile_request', 'full', {
                domain: 'eryuzhisen.com',
                path: '/',
                expires: ''
            });
            window.location.replace('https://www.eryuzhisen.com');
        },
    },

}
</script>

