<!-- style样式代码 -->
<style lang="less">
@import (reference) '../../common/css/mb.common';
	.c-header {
		position: fixed;
		top: 0;
		left: 0;
        z-index: 110;
		width: 100%;
		height: 1rem;
        .default_border_shadow_6;
        
		& .c-header-wrap {
			width: 100%;
			height: 100%;
			padding: 0 .3rem;
			.default_backgroud_3;
			.default_flex_middle;
		}
		& .logo {
			width: 3.62rem;
			height: 100%;
            background-repeat: no-repeat;
            background-size: 2.72rem .84rem;
            background-position: left center;
		}
		& .btn {
            display: block;
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
<div class="c-header" v-if="!isHide">
	<a href="./index.html" class="c-header-wrap">
		<div class="logo" v-lazy:background-image="$defaultData.mbData.logo"></div>
        <a v-if="$defaultData.ua.isIOS" :href="$defaultData.mbData.downUrl" class="btn">立即打开</a>
		<div v-else @click.stop.prevent="goTranslate" class="btn">立即打开</div>
	</a>
</div>
</template>

<script>
import Cookies from 'js-cookie';
import {mapState} from 'vuex'
export default {
	name: 'header',
    data () {
    	return {
    		
    	}
    },
    props: ['pageIndex', 'resType', 'isHide'],
    computed: mapState({
        user: state => state.user.info
    }),
    methods: {
        goTranslate (){
            window.location.href = './translate.html';
        },
        goPC (){
            // 登录成功后，讲token写入cookie
            Cookies.set('mobile_request', 'full', {
                domain: 'eryuzhisen.com',
                path: '/',
                expires: ''
            });
            window.location.replace('http://www.eryuzhisen.com');
        },
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

