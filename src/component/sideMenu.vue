<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-side-menu;

.@{module} {
    position: fixed;
    bottom: 180px;
    right: 10px;
    z-index: 100;
	width: 50px;
    height: 50px;
    transition: all @default_speed_1;
    .default_border-r-50;
    .default_backgroud_13;
    .default_pointer;
    & span {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        transition: opacity @default_speed_1;
        &:nth-child(1) {
            opacity: 1;
            .skin_sime_menu_1;
        }
        &:nth-child(2) {
            opacity: 0;
            .skin_sime_menu_1_on;
        }
        
    }
    & .c-dialog__tip {
        top: 50%;
        display: none;
        transform: translate(-120%, -50%);
    }
    &:hover {
        .default_border_shadow_4;
    }
    &:hover span:nth-child(1) {
        opacity: 0;
    }
    &:hover span:nth-child(2) {
        opacity: 1;
    }
    &:hover .c-dialog__tip {
        display: block;
    }
}
</style>

<!-- html代码 -->
<template>
	<div v-show="hasScroll" class="c-side-menu" @click="top">
        <span></span>   
        <span></span>
        <div class="c-dialog__tip">
            <div class="tip-arrow"></div>
            <div class="tip-text">置顶</div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
    	return {
    		hasScroll: false
    	}
    },
    mounted (){
        // 判断是否有滚动条
        $(window).scroll( e => {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > $(window).height()/2) {
                this.hasScroll = true;
            } else {
                this.hasScroll = false;
            }
        })
    },
    methods: {
        top () {
            $(window).scrollTop(0);
        }
    }
}
</script>

