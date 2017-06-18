<!-- style样式代码 -->
<style lang="less">
@import (reference) '../../common/css/mb.common';
	.c-header {
		position: fixed;
		top: 0;
		left: 0;
        z-index: 100;
		width: 100%;
		height: 1rem;
		& .c-header-wrap {
			width: 100%;
			height: 100%;
			padding: 0 .3rem;
			.default_backgroud_3;
			.default_flex_middle;
		}
		& .logo {
			width: 3.62rem;
			height: .72rem;
			.skin_logo;
			& img {
				width: 100%;
				height: 100%;
			}
		}
		& .btn {
			height: .7rem;
			line-height: .7rem;
			padding: 0 .3rem;
			border-radius: .35rem;
			.default_backgroud_5;
			.default_color_1;
			.default_font_size_3;
		}
	}
	
</style>

<!-- html代码 -->
<template>
<div class="c-header">
	<div class="c-header-wrap">
		<div class="logo"></div>
		<a href="https://www.eryuzhisen.com" class="btn">切换电脑版</a>
	</div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: 'header',
    data () {
    	return {
    		avatar: this.$defaultData.avatar,
    	}
    },
    props: ['pageIndex', 'resType'],
    computed: mapState({
        user: state => state.user.info
    }),
    methods: {
    	// 获取用户信息
        getUserInfo () {
			var cache_userInfo = this.$version.userInfo;
        	var info = this.$cache.getStore(cache_userInfo.key, cache_userInfo.version);
        	if (info) {
        		this.$store.dispatch('user_setUserInfo', info);
        		return false;
        	}
            this.$store.dispatch('user_getUserInfo', {
            	
            }).then( res => {
                // 缓存用户信息 - 1h
                this.$cache.setStore(cache_userInfo.key, res, cache_userInfo.version, cache_userInfo.time);

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
            	this.$store.dispatch('bubble_fail', err);
            }); 
        },
        // 退出登录
        ourlogin (){
        	this.centerShow = false;
        	this.$cache.removeStore(this.$version.userInfo.key);
        	this.$store.dispatch('user_ourlogin').then(res=>{
        		window.location.href = './index.html';
        	});
        }
    },
    mounted () {
    	// 获取用户信息
        this.getUserInfo();
    }
}
</script>

