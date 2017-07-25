<!-- style样式代码 -->
<style lang="less">
@import (less) url('../../../common/css/mb.common.less');
    .m-artilce-list {
        padding-top: 1rem;
        padding-bottom: .9rem;
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
            .default_backgroud_3;

            & .list-item {
                overflow: hidden;
                margin-bottom: .2rem;
                .default_border-r-10;

                &:last-child {
                    margin-bottom: 0;
                }
            }
            & .list-item_bd {
                display: block;
                position: relative;
                width: 100%;
                height: 2.6rem;
                overflow: hidden;

                & .list-item_img {
                    width: 100%;
                    height: 100%;
                    background-position: center;
                    filter: blur(.1rem);
                }
                & .list-item_text {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0,0,0,0.5);
                    .default_flex__v_middle;
                    .default_color_1;
                    .default_font_size_1;
                }
                & .list-item_title {
                    margin-bottom: .2rem;
                    .default_font_size_8;
                }
                & .list-item_tags {
                    margin-bottom: .2rem;
                    .default_flex_left;
                }
                & .list-item_status {
                    margin-bottom: .2rem;
                }
                & .list-item_number {
                    margin-bottom: 0;
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
                & .list-item_update {
                    .skin_chapter_update;
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
            <div class="list-title">我的故事</div>
            <a class="list-add" href="./article.catalog.html?catalog_id=-1"></a>
        </div>
        <div class="list-bd">
            <div 
                class="list-item"
                v-for="item in lists"
            >
                <a class="list-item_bd" :href="'./article.chapter.html?catalog_id=' + item.catalog_id">
                    <div class="list-item_img" v-lazy:background-image="item.catalog_cover_url"></div>
                    <div class="list-item_text">
                        <div class="list-item_title">{{item.catalog_title}}</div>
                        <div class="list-item_tags">
                            <p v-for="(tag, index) in item.labels">{{index == 0 ? '' : '&nbsp;/&nbsp;'}} {{tag}} </p>
                        </div>
                        <div class="list-item_status">
                            {{level['level'+item.level]}}  
                            {{catalog_status['catalog_status'+item.catalog_status]}}
                        </div>
                        <div class="list-item_number">字数：{{item.words_count}}</div>
                    </div>
                </a>
                <div class="list-item_ft">
                    <div class="list-item_btn list-item_share"></div>
                    <a :href="'./article.catalog.html?catalog_id=' + item.catalog_id" class="list-item_btn list-item_update"></a>
                    <div class="list-item_btn list-item_delete" @click="del(item.catalog_id)"></div>
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
            level: {
                level0: '普通',
                level1: '首发',
                level2: '独家'
            },
            catalog_status: {
                catalog_status0: '连载中',
                catalog_status1: '已完结'
            },

            pageIndex: 1, //页数,默认不传查询第一页
            pageSize: 5 //每页数量 默认10
        }
    },
    computed: mapState({
        userInfo: state => state.user.info,
        lists: state => state.opus.article.lists,
    }),
    methods: {
        getMyCatalogList (){
            // 未登录处理
            if (!this.userInfo.isLogin) {
                return this.$store.dispatch('bubble_fail', {
                    ret: -11,
                    msg: '未登录，请登陆后操作'
                });
            }
            this.$store.dispatch('opus_getMyCatalogList', {
                "pagination": "1",
                "page": this.pageIndex, //页数,默认不传查询第一页
                "pageSize": this.pageSize //每页数量 默认10
            }).then( res => {
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
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
        }
    },
    created (){
        
    }, 
    updated(){
        
    }, 
    mounted (){
        // 获取用户信息
        this.getMyCatalogList();

        $('.list-bd').css('min-height', $(window).height() - $('.c-header').height() - $('.list-hd').height() - $('.c-edit-foot').height());
    }
}
</script>

