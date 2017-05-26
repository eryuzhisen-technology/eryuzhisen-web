<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    @module: c-chapter-list;
    
    .@{module} {
        position: relative;
        & &-wrap {
            width: 100%;
            height: 100%;
            margin-bottom: 30px;
            .default_backgroud_2;
        }
    }
    .@{module}-item {
        position: relative;
        height: 80px;
        padding: 0 30px;
        .default_border-b-14;
        & .link {
            display: block;
            width: 100%;
            height: 100%;
        }
        & a {
            text-decoration: none;
        }
    }
    .@{module}__top {
        position: relative;
        overflow: hidden;
        padding-top: 15px;
        margin-bottom: 15px;
        & .top-number {
            float: left;
            margin-right: 20px;
            .default_color_2;
            .default_font_size_7;
            .default_font_family_bolder;
        }
        & .top-title {
            float: left;
            margin-right: 5px;
            .default_color_1;
            .default_font_size_7;
            .default_font_family_bolder;
        }
        & .top-new {
            float: left;
            margin-top: 5px;
            .default_color_5;
            .default_font_size_3;
        }
    }
    .@{module}__bottom {
        .default_color_3;
        .default_font_size_1;
        & .bottom-time {
            float: left;
            height: 12px;
            line-height: 12px;
            margin-right: 12px;
        }
        & .bottom-follow {
            float: right;
            & em {
                width: 12px;
                height: 12px;
                margin-right: 6px;
                .default_disline;
                .default_middle;
                .skin_icon_read-3;
                &:hover {
                    .skin_icon_read-3_on;
                }
            }
            & span {
                .default_disline;
                .default_middle;
            }
        }
        & .bottom-comment {
            float: right;
            margin-right: 12px;
            & em {
                width: 12px;
                height: 12px;
                margin-right: 6px;
                .default_disline;
                .default_middle;
                .skin_icon_read-2;
                &:hover {
                    .skin_icon_read-2_on;
                }
            }
            & span {
                .default_disline;
                .default_middle;
            }
        }
        & .bottom-manger-item {
            float: left;
            height: 12px;
            line-height: 12px;
            margin-right: 12px;
            .default_color_2;
            .default_font_size_1;
            .default_pointer;
            &:hover {
                .default_color_1;
            }
        }
    }
    .@{module}__history {
        position: absolute;
        top: 50px;
        right: 0;
        width: 30px;
        height: 30px;
        .default_backgroud_4;
        .skin_icon_history;
        & a {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-chapter-list">
<div class="c-chapter-list-wrap">
    <div class="c-chapter-list-item" v-for="(data, index) in chapter.lists">
    <a class="link" :href="'./article.read.html?catalog_id='+ catalog_id +'&chapter_id='+ data.chapter_id">
        <div class="c-chapter-list__top">
            <!-- <div class="top-number">第 {{index+1}} 话</div> -->
            <div class="top-title">{{data.chapter_title}}</div>
            <div v-if="data.isNew" class="top-new">·new</div>
        </div>
        <div class="c-chapter-list__bottom">
            <div class="bottom-time">{{data.publish_date}}</div>
            <a v-if="data.owner == 1 && data.chapter_status == 1" :href="'./article.edit.html?catalog_id='+ catalog_id +'&chapter_id='+ data.chapter_id" class="bottom-manger-item bottom-manger-edit">修改信息</a>
            <a href="javascript:void(0);" v-if="data.owner == 1" class="bottom-manger-item bottom-manger-remove" @click="remove(data.chapter_id)">删除章节</a>
            <div class="bottom-follow"><em></em><span>{{data.praise_count}}</span></div>
            <div class="bottom-comment"><em></em><span>{{data.comment_count}}</span></div>
        </div>
        <div v-if="data.hasHistory" class="c-chapter-list__history"><a href="#none"></a></div>
        <div class="bottom"></div>
    </a>
    </div>
    <Empty v-if="chapter.count <= 0" />
</div>
<Page 
    :count="chapter.count" 
    :length="pageSize"
    :index="pageIndex"
    @page_switch="pageSwitch"
/>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
            subMoreShow: false,
            data: {},
            index: 0,

            pageSize: 5,
            pageIndex: 1
        }
    },
    computed: mapState({
        chapter: state => state.opus.chapter
    }),
    methods: {
        subMoreSwitch () {
            this.subMoreShow = !this.subMoreShow;
        },
        pageSwitch (pageIndex){
            if (pageIndex == this.pageIndex) {
                return false;
            }
            this.pageIndex = pageIndex;
            this.getChapterList();
        },
        getChapterList (){
            this.$store.dispatch('opus_getChapterList', {
                "catalogId": this.catalog_id, // 目录id
                "pagination": "1", // 获取总数
                "page": this.pageIndex, //页数,默认不传查询第一页
                "pageSize": this.pageSize //每页数量 默认10
            }).then( res => {
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
        remove (chapterId){
            var that = this;
            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'warn',
                warn: {
                    title: '确定要删除',
                    content: '删除后将无法恢复，请谨慎处理',
                    comfireFn: function(){
                        that.deleteChapter(chapterId)
                    }
                }
            })
        },
        deleteChapter (chapterId){
            this.$store.dispatch('opus_deleteChapter', {
                "chapterId": chapterId
            }).then( res => {
               this.getChapterList();

               this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        }
    },
    mounted (){
        // 获取url参数
        this.catalog_id = this.$url.getUrlParam('catalog_id');

        // 获取文章列表
        this.getChapterList();
    }
}
</script>

