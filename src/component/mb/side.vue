<!-- style样式代码 -->
<style lang="less">
@import (reference) '../../common/css/mb.common';
	.c-side {
        position: fixed;
        bottom: 1rem;
        right: .3rem;
        z-index: 100;
        
        &.z-hasBar {
            bottom: 1.8rem;
        }
        & .side-item {
            width: 1rem;
            height: 1rem;
            margin-top: .3rem;
            .default_backgroud_6;
            .default_border_shadow_6;
            .default_border-r-50;

            &.z-top {
                .skin_top;
            }
            &.z-home {
                .skin_home;
            }
            &.z-edit {
                .skin_edit;
            }
        }
    }
	
</style>

<!-- html代码 -->
<template>
    <div 
        class="c-side"
        v-if="hasScroll" 
        :class="[data.hasBottomBar ? 'z-hasBar': '']"
    >
        <div 
            class="side-item z-edit"
            @click="goEdit" 
        >
        </div>
        <div
            class="side-item"
            @click="goBack" 
            :class="'z-' + data.type"
        >
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: 'side',
    data () {
    	return {
    		hasScroll: false
    	}
    },
    props: ['data'],
    computed: mapState({
        userInfo: state => state.user.info,
    }),
    methods: {
        goBack (){
            if (this.data.type == 'home') {
                window.location.href = './index.html';
            } else {
                $(window).scrollTop(0);
                this.$eventHub.$emit('index.getList');    
            }
        },
        goEdit (){
            // 未登录处理
            if (!this.userInfo.isLogin) {
                return this.$store.dispatch('bubble_fail', {
                    ret: -11,
                    msg: '未登录，请登陆后操作'
                });
            }
            window.location.href = './article.work.html';
        }
    },
    mounted () {
        if (this.data.type == 'home') {
            this.hasScroll = true;
        }

        $(window).scroll( e => {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > $(window).height()/2) {
                this.hasScroll = true;
            } else if (this.data.type == 'top') {
                this.hasScroll = false;
            }
        })
    }
}
</script>

