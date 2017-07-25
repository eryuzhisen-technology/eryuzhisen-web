<!-- style样式代码 -->
<style lang="less">
@import (less) url('../../../common/css/mb.common.less');
    .m-artilce-list {
        padding-top: 1rem;
        padding-bottom: 1rem;

        & .list-hd {
            height: 1rem;
            padding: 0 .3rem;
            .default_flex_middle;

            & .list-title {
                .default_color_1;
                .default_font_size_8;
            }
            & .list-add {
                width: .44rem;
                height: .44rem;
                .skin_chapter_add;
            }
        }
        & .list-bd {
            padding: .2rem .3rem;
            .default_backgroud_4;

            & .list-item {
                overflow: hidden;
                margin-bottom: .2rem;
                .default_border-r-10;
                .default_backgroud_3;

                &:last-child {
                    margin-bottom: 0;
                }
            }
            & .list-item_bd {
                display: block;
                position: relative;
                width: 100%;
                height: 1.5rem;
                overflow: hidden;
                padding: 0 .3rem;
                .default_flex_left;

                & .list-item_icon {
                    margin-right: .2rem;
                    width: .4rem;
                    height: .4rem;
                    .skin_chapter_edit;
                }
                & .list-item_title {
                    .default_font_size_6;
                    .default_color_1;
                    .default_font_bolder;
                }
                &.z-publish .list-item_icon {
                    .skin_chapter_publish;
                }
            }
            & .list-item_ft {
                height: .9rem;
                width: 100%;
                overflow: hidden;
                .default_flex_center;
                .default_backgroud_2;

                & .list-item_btn {
                    flex: 1;
                    height: .4rem;
                    .default_border-rr-4;
                    &:last-child {
                        .default_border-n;
                    }
                }
                & .list-item_share {
                    .skin_chapter_share;
                }
                & .list-item_delete {
                    .skin_chapter_delete;
                }
            }
        }
    }
    .c-edit-foot {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: .9rem;
        .default_flex_center;
        .default_backgroud_7;
        .default_color_2;
        .default_font_size_3;
        .default_border_shadow_6;
    }
</style>

<!-- html代码 -->
<template>
<div class="app-body">
    <HeaderDom />
    <div class="m-artilce-list">
        <div class="list-hd">
            <div class="list-title">{{catalog.catalog_title}}</div>
            <div class="list-add" @click="addChapter"></div>
        </div>
        <div class="list-bd">
            <div 
                class="list-item"
                v-for="item in chapter"
            >
                <a 
                    class="list-item_bd" 
                    :href="item.chapter_status == 0 ? './article.read.html?catalog_id=' + catalog_id + '&chapter_id=' + item.chapter_id : './article.edit.html?chapter_id=' + item.chapter_id"
                    :class="{'z-publish': item.chapter_status == 0}"
                >
                    <div class="list-item_icon"></div>
                    <div class="list-item_title">{{item.chapter_title}}</div>
                </a>
                <div class="list-item_ft">
                    <div class="list-item_btn list-item_share"></div>
                    <div class="list-item_btn list-item_delete" @click="remove(item.chapter_id, item.chapter_status == 0)"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="c-edit-foot">电脑码字可登陆 eryuzhisen.com</div>
    <Bubble />
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data (){
        return {
            catalog_id: -1
        }
    },
    computed: mapState({
        userInfo: state => state.user.info,
        chapter (){
            var list = [];
            this.$store.state.opus.chapter.lists.map((item, index)=>{
                list.push(item);
            })
            list = list.reverse();
            return list;
        },
        catalog: state => state.opus.catalog.info
    }),
    methods: {
        // 获取文章目录详情
        getCatalogDetail (){
            this.$store.dispatch('opus_getCatalogDetail', {
                catalogId: this.catalog_id
            }).then( res => {
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },

        // 获取文章列表
        getChapterList (){
            this.$store.dispatch('opus_getChapterList', {
                "catalogId": this.catalog_id, // 目录id
                "pagination": "1", // 获取总数
                "page": 1, //页数,默认不传查询第一页
                "pageSize": 100 //每页数量 默认10
            }).then( res => {
                //todo
                
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },

        del (catalogId){
            var that = this;
            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'warn',
                warn: {
                    title: '确定要删除你的故事?',
                    content: '删除后无法恢复，读者也将无法看见，请谨慎操作',
                    btnComfire: '确定'
                },
                methods: {
                    comfire: function(){
                        that.delCatalog(catalogId);
                    }
                }
            })
        },

        delCatalog (catalogId){
            this.$store.dispatch('opus_delCatalog', {
                "catalogId": catalogId
            }).then( res => {
                this.getMyCatalogList();

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },

        // 创建内容
        addChapter (){
            this.$store.dispatch('opus_addChapter', {
                "catalog_id": this.catalog_id, //目录id
                "chapter_title": '在此处添加标题', //章节标题
                "chapter_desc": '', //简介
                "chapter_content": '<p>若故事有效总字数超过10000</p><p>可发邮件至editor@eryuzhisen.com申请进入首页并获取定制封面</p><p>邮件标题为：耳语作者申请</p><p>邮件内容为：用户名+故事名</p><p>也可以加入QQ群432769756向管理员直接申请</p>', //内容　***base64 编码***
                "chapter_status": 1 //　0 发布，已完成 1 临时保存 未完成
            }).then( res => {
                this.getChapterList(this.catalog_id);

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },

        // 删除草稿
        remove (chapterId, isPublish){
            var that = this;
            if (!isPublish) {
                that.deleteChapter(chapterId);
                return;
            }
            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'warn',
                warn: {
                    title: '删除已发布的章节？?',
                    content: '若删除已发布的章节，读者也将永远无法看见，请谨慎操作',
                    btnComfire: '确定'
                },
                methods: {
                    comfire: function(){
                        that.deleteChapter(chapterId)
                    }
                }

            })
        },

        // 删除文章
        deleteChapter (chapterId){
            this.$store.dispatch('opus_deleteChapter', {
                "chapterId": chapterId
            }).then( res => {
               this.getChapterList(this.catalog_id, true);

               this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
    },
    created (){
        
    }, 
    updated(){
        
    }, 
    mounted (){
        this.catalog_id = this.$url.getUrlParam('catalog_id');

        // 获取用户信息
        this.getCatalogDetail();
        this.getChapterList();

        $('.list-bd').css('min-height', $(window).height() - $('.c-header').height() - $('.list-hd').height() - $('.c-edit-foot').height());
    }
}
</script>

