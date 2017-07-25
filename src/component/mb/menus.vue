<!-- style样式代码 -->
<style lang="less">
@import (reference) '../../common/css/mb.common';
	.c-menus {
		position: fixed;
		top: 1rem;
		right: 0;
        z-index: 101;
		width: 3rem;
        transform: translate(0, 0);
        transition: all @default_speed_1;
        .default_backgroud_3;
        .default_border_shadow_6;

        &.z-hide {
            transform: translate(110%, 0);
        }
        
        & .menus-content {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 2;
            width: 100%;
            height: 100%;
            .default_color_1;
            .default_font_size_3;
        }
        & .user {
            width: 100%;
            height: 1.2rem;

            display: flex;
            align-items: center;

            & .user-btn {
                width: 100%;
                .default_flex_center;

                & a {
                    flex: 1;
                    height: .6rem;
                    .default_color_1;
                    .default_font_size_3;
                    .default_flex_center;
                    &:first-child {
                        .default_border-rr-5;
                    }
                }
            }
            & .user-info {
                width: 100%;
                padding-left: .3rem;
                .default_flex_left;   
                & .user-avatar {
                    width: .6rem;
                    height: .6rem;
                    margin-right: .2rem;
                    .default_backgroud_5;
                    .default_border-r-50;
                }
            }
        }
        & .menus {
            width: 100%;

            & .menus-item {
                width: 100%;
                height: 1.2rem;
                .default_flex_center;
            }
            & .menus-item.z-active {
                .default_backgroud_2;
            }
            & a {
                .default_color_1;
                .default_font_size_3;
            }
        }
	}
    .c-menus-mask {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
    }
	
</style>

<!-- html代码 -->
<template>
    <div>
        <div class="c-menus-mask" v-if="!menus.isHide" @click="close"></div> 
        <div 
            class="c-menus" 
            ref="menusDom" 
            :class="{'z-hide': menus.isHide}"
        >
            <div class="menus-content">
                <div class="user">
                    <div v-if="!user.isLogin" class="user-btn">
                        <a href="./register.html">注册</a>
                        <a href="./login.html">登录</a>
                    </div>
                    <div v-else class="user-info">
                        <img class="user-avatar" v-lazy="user.avatar_url" />
                        <span class="user-name">{{user.nick_name}}</span>
                    </div>
                </div>
                <div class="menus">
                    <span
                        class="menus-item" 
                        v-for="item in $defaultData.mbData.menus"
                        :class="{'z-active': data.pageIndex == item.page}"
                        @click="goUrl(item)"
                    >
                        {{item.title}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: 'menus',
    data () {
    	return {
    		
    	}
    },
    props: ['data'],
    computed: mapState({
        user: state => state.user.info,
        menus: state => state.frame.menus
    }),
    methods: {
        goUrl (item){
            if (item.needLogin) {
                // 判断登陆
                if (!this.user.isLogin) {
                    return this.$store.dispatch('bubble_fail', {
                        ret: -11,
                        msg: '未登录，请登陆后操作'
                    });
                    return false;
                }
            }
            if (this.data.pageIndex == item.page) {
                return false;
            }
            window.location.href = item.url;
        },
        close (){
            this.$store.dispatch('frame_setMenus', {
                isHide: true
            })
        }
    },
    mounted () {
        $(this.$refs.menusDom).height($(window).height() - $('.c-header').height());
    }
}
</script>

