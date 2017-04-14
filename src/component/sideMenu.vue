<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-side-menu;

.@{module} {
    position: fixed;
    bottom: 160px;
    right: 60px;
	width: 60px;
    height: 60px;
    .default_border-r-50;
    .default_backgroud_7;
    .skin_icon_side_top_1;
    .default_pointer;
}
</style>

<!-- html代码 -->
<template>
	<div v-show="hasScroll" class="c-side-menu" @click="top"></div>
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

