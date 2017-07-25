<!-- style样式代码 -->
<style lang="less">
@import (reference) '../../common/css/mb.common';
	.c-title {
		position: fixed;
        top: 1rem;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 1rem;
        padding: 0 .3rem;
        .default_flex_middle;
        .default_backgroud_6;
        transform: translate(0, 0);
        transition: all @default_speed_1;

        &.z-left {
            transform: translate(-3rem, 0);
        }

        & h3 {
            .default_font_size_8;
            .default_color_1;
        }
        & span {
            width: .44rem;
            height: .44rem;
            .skin_more;   
        }
	}
</style>

<!-- html代码 -->
<template>
    <div 
        class="c-title"
        :class="{'z-left': !menus.isHide}"
    >
        <h3>{{data.text}}</h3>
        <span @click="showMenu"></span>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: 'title',
    data () {
    	return {
    		
    	}
    },
    props: ['data'],
    computed: mapState({
        menus: state => state.frame.menus
    }),
    methods: {
        showMenu (){
            this.$store.dispatch('frame_setMenus', {
                isHide: !this.menus.isHide
            })
        }
    },
    mounted (){

    }
}
</script>

