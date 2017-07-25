<!-- style样式代码 -->
<style lang="less">
@import (less) url('../../../common/css/mb.common.less');
    .m-mark {
        width: 100%;
        padding: 0 .3rem;
        & .catalog {
            width: 100%;
            height: 100%;
        }
        & .top {
            position: fixed;
            bottom: .8rem;
            right: .3rem;
            width: 1rem;
            height: 1rem;
            .default_backgroud_3;
            .default_border-r-50;
            .skin_top;
            .default_border_shadow_6;
        }
    }
</style>

<!-- html代码 -->
<template>
<FrameDom
    :data="frameData"
>
    <div class="m-mark">
        <div class="catalog">
            <ArticleList 
                resType='mark'
                loadType="more"
                isHideEmpty="true"
            />
        </div>
    </div>
</FrameDom>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
            frameData: {
                title: {
                    text: '收藏'
                },
                menus: {
                    pageIndex: 'mark'
                },
                side: {
                    type: 'home'
                }
            },

            hasScroll: false
        }
    },
    computed: mapState({

    }),
    methods: {
        
    },
    updated (){

    },  
    mounted (){
        var that = this;

        $(window).scroll( e => {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > $(window).height()/2) {
                this.hasScroll = true;
            } else {
                this.hasScroll = false;
            }
        })
    }
}
</script>

