<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    @module: c-chapter-list;
    
    .@{module} {
        position: relative;
        & &-wrap {
            width: 100%;
            height: 100%;
        }
    }
    .@{module}-item {
        position: relative;
        float: left;
        margin-right: 10px;
        margin-bottom: 10px;
        &.add {
            width: 240px;
            height: 60px;
            padding: 10px 0;
            .default_backgroud_3;
            .default_border-r-4;
            & .add-text {
                display: block;
                width: 200px;
                height: 40px;
                line-height: 40px;
                border: 1px dotted @default_backgroud_15;
                .default_mar_auto;
                .default_center;
                .default_border-r-4;
                .default_color_2;
                .default_font_size_2;
                &:hover {
                    .default_color_fff;
                    border: 1px dotted #fff;
                }
            }
        }
        &.content {
            height: 60px;
            padding-top: 10px;
            & a {
                display: block;
                width: 100%;
                height: 50px;
                padding: 0 30px;
                line-height: 50px;
                text-decoration: none;
                .default_backgroud_3;
                .default_border-r-4;
                .default_color_1;
                .default_font_size_7;
                &:hover {
                    .default_color_fff;
                }
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-chapter-list">
<div class="c-chapter-list-wrap">
    <div v-if="catalog.owner == 1" class="c-chapter-list-item add">
        <a class="add-text" :href="'article.edit.html?catalog_id=' + catalog_id">
            添加新章节
        </a>
    </div>
    <div 
        class="c-chapter-list-item content" 
        v-for="(data, index) in chapter.lists"
        v-if="data.chapter_status == 0 || (catalog && catalog.user && userInfo && catalog.user.uid == userInfo.uid)"
    >
        <a class="link" target="_blank" :href="'./article.read.html?catalog_id='+ catalog_id +'&chapter_id='+ data.chapter_id">
            {{data.chapter_title}}
        </a>
    </div>
</div>
<Empty v-if="chapter.count == 0 && !isHideEmpty" />
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
            catalog_id: '',

            pageSize: 100,
            pageIndex: 1
        }
    },
    props: ['isHideEmpty'],
    computed: mapState({
        userInfo: state => state.user.info,
        catalog: state => state.opus.catalog.info,
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

