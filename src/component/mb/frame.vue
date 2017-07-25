<!-- style样式代码 -->
<style lang="less">
@import (reference) '../../common/css/mb.common';
.app,
.app-body {
    width: 100%;
    height: 100%;
}
.app-main { 
    // position: relative;
    width: 100%;
    min-height: 100%;
    padding-top: 2.2rem;
    transform: translate(0, 0);
    transition: all @default_speed_1;

    &.z-left {
        overflow: hidden;
        height: 100%;
        transform: translate(-3rem, 0);
    }
    &.z-hide {
        padding-top: 0;
    }
}

	
</style>

<!-- html代码 -->
<template>
<div 
    class="app-body"
>
    <div v-show="!data.isHide" class="app-header">
        <HeaderDom :data="data.header" />
        <TitleDom v-if="!!data.title" :data="data.title" />
    </div>
    <div 
        class="app-main"
        :class="{'z-left': !frame.menus.isHide, 'z-hide': data.isHide}"
    >
        <slot></slot>
    </div>
    <div class="app-dialog">
        <MenusDom :data="data.menus || {}" />
        <SideDom v-if="!!data.side" :data="data.side" />
        <Bubble />
    </div>
    <div class="app-foot">
        <slot name="footer"></slot>    
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: 'frame',
    data () {
    	return {
    		
    	}
    },
    props: ['data'],
    computed: mapState({
        frame: state => state.frame
    }),
    methods: {
        
    },
    mounted () {

    }
}
</script>

