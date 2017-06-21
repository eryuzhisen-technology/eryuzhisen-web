<!-- style样式代码 -->
<style lang="less">
@import (less) url('../../../common/css/mb.common.less');
    .m-article-read {
        width: 100%;
        height: 100%;
        padding: .3rem;
        padding-top: 0;
        & .m-article-read-wrap {
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 0 0 .1rem .1rem;
            .default_backgroud_3;
        }
        & .content {
            padding: .6rem .4rem;
            .default_border-b-4;
            & .content-title {
                margin-bottom: .6rem;
                .default_font_size_11;
                .default_color_1;
                .default_font_bolder;
            }
            & .content-read {
                .default_color_2;
                .default_font_size_8;
                & p {
                    min-height: 1em;
                    line-height: 1.75em;
                }
                & img {
                    max-width: 100%;
                }
            }   
        }
        & .switch {
            padding: .25rem 0;
            .default_flex_middle;
            & .switch-item {
                flex: 1;
                height: 1rem;
                .default_flex_center;
                .default_color_2;
                .default_font_size_8;
                .default_border-rr-5;
                &:last-child {
                    .default_border-n;
                }
            }
        }
        & .chapter {
            width: 100%;
            height: 1.5rem;
            .default_flex_center;
            .default_color_2;
            .default_font_size_8;
            .default_border-t-4;
            .default_border-b-4;
        }
        & .author {
            width: 100%;
            height: 1.5rem;
            .default_flex_center;
            & img {
                width: .4rem;
                height: .4rem;
                .default_border-r-50;
            }
        }
        & .top {
            position: fixed;
            bottom: .8rem;
            right: .3rem;
            width: 1.1rem;
            height: 1.1rem;
            .default_backgroud_16;
            .default_border-r-50;
            .skin_top;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="app-body">
    <HeaderDom />
    <div class="m-article-read">
    <div class="m-article-read-wrap">
        <div class="content">
            <div class="content-title">{{chapter.info.chapter_title}}</div>
            <div class="content-read" v-html="chapter.info.chapter_content"></div>
        </div>
        <div class="switch">
            <a :href="'./article.read.html?catalog_id='+ catalog_id +'&chapter_id='+chapter.pre_id" v-if="chapter.pre_id" class="switch-item">上一篇</a>
            <a :href="'./article.read.html?catalog_id='+ catalog_id +'&chapter_id='+chapter.next_id" v-if="chapter.next_id" class="switch-item">下一篇</a>
        </div>
        <a :href="'article.html?catalog_id=' + catalog_id" class="chapter">查看全部章节</a>
        <a v-if="catalog.user" class="author" target="_black" :href="'author.html?user_id=' + catalog.user.uid">
            <img :src="catalog.user.avatar_url" />
        </a>   
        <div v-if="hasScroll" class="top" @click="top"></div> 
    </div>
    </div>
    <Bubble />
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data (){
        return {
            catalog_id: '',
            hasScroll: false
        }
    },
    props: ['resType', 'isHideEmpty'],
    computed: mapState({
        userInfo: state => state.user.info,
        catalog: state => state.opus.catalog.info,
        chapter: state => state.opus.chapter
    }),
    methods: {
        // 获取文章目录详情
        getCatalogDetail (){
            this.$store.dispatch('opus_getCatalogDetail', {
                catalogId: this.catalog_id
            }).then( res => {
                // todo
                
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        // 获取文章详情
        getChapterDetail (){
            this.$store.dispatch('opus_getChapterDetail', {
                chapterId: this.chapter_id
            }).then( res => {
                // todo
                
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        textFormat: function (value) {  
            return value.replace(/[\r\n]/g, '<br />');
        },
        top (){
            $(window).scrollTop(0);
        }
    },
    created (){
        
    }, 
    updated(){
        
    }, 
    mounted (){
        // 获取url的参数
        this.catalog_id = this.$url.getUrlParam('catalog_id');
        this.chapter_id = this.$url.getUrlParam('chapter_id');

        $(window).scroll( e => {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > $(window).height()/2) {
                this.hasScroll = true;
            } else {
                this.hasScroll = false;
            }
        })

        // 获取文章目录详情
        this.getCatalogDetail();

        // 获取文章详情
        this.getChapterDetail();
    }
}
</script>

