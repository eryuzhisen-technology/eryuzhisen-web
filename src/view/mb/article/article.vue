<!-- style样式代码 -->
<style lang="less">
@import (less) url('../../../common/css/mb.common.less');
    .m-article {
        width: 100%;
        height: 100%;
        padding: .3rem;
        padding-bottom: 1.3rem;
        & .article-hd {
            position: relative;
            width: 100%;
            height: 4.8rem;
            margin-bottom: .2rem;
            overflow: hidden;
            .default_border-r-10;
            & .article-info {
                position: relative;
                width: 100%;
                height: 3.8rem;
                overflow: hidden;
                border-radius: .1rem .1rem 0 0;
                & .img {
                    width: 100%;
                    height: 100%;
                    filter: blur(.1rem);
                    background-position: left center;
                    background-size: cover;
                    .default_backgroud_6;
                }
                & .content {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 200%;
                    height: 3.8rem;
                    overflow: hidden;
                    background-color: rgba(0,0,0,0.5);
                    transition: all .25s;
                    .default_flex_middle;
                    & .content-item {
                        flex: 1;
                        width: 100%;
                        height: 100%;
                        &:last-child {
                            left: 100%;
                        }
                    }
                    & .content-info {
                        padding: 0 .3rem;
                        .default_flex_middle;
                        & .info-left {
                            position: relative;
                            width: 3.5rem;
                            height: 100%;
                            padding: .4rem 0;
                        }
                        & .info-right {
                            width: 2rem;
                            height: 3rem;
                            overflow: hidden;
                            .default_border-r-10;
                        }
                        & .info-name {
                            margin-bottom: .3rem;
                            .default_color_1;
                            .default_font_size_9;
                            .default_font_bolder;
                        }
                        & .info-text {
                            margin-bottom: .2rem;
                            .default_color_1;
                            .default_font_size_3;
                            .default_font_bolder;
                        }
                        & .info-number span {
                            margin-right: .3rem;
                        }
                        & .info-avatar {
                            position: absolute;
                            left: 0;
                            bottom: .4rem;
                            margin-bottom: 0;
                            .default_flex_left;
                            & img {
                                width: .4rem;
                                height: .4rem;
                                margin-right: .2rem;
                                .default_border-r-50;
                            }
                        }
                    }
                    & .content-intro {
                        padding: .5rem;
                        overflow: hidden;
                        .default_flex__v_middle;
                        & .text {
                            text-align: justify;
                            line-height: 1.5em;
                            .default_color_1;
                            .default_font_size_3;
                            .default_textOut_7;
                        }
                    }
                    &.z-0 {
                        transform: translate(0, 0);
                    }
                    &.z-1 {
                        transform: translate(-50%, 0);   
                    }
                }
                & .index {
                    position: absolute;
                    left: 0;
                    bottom: .4rem;
                    width: 100%;
                    .default_flex_center;
                    & .index-item {
                        width: .1rem;
                        height: .1rem;
                        opacity: .3;
                        overflow: hidden;
                        margin-right: .2rem;
                        .default_border-r-50;
                        .default_backgroud_fff;
                        &.z-active {
                            opacity: 1;
                        }
                        &:last-child {
                            margin-right: 0;
                        }
                    }
                }
            }
            & .article-tag {
                width: 100%;
                height: 1rem;
                padding: 0 .3rem;
                .default_flex_left;
                .default_backgroud_3;
                & .tag {
                    height: .6rem;
                    line-height: .6rem;
                    padding: 0 .3rem;
                    margin-right: .2rem;
                    border-radius: .3rem;
                    .default_color_2;
                    .default_font_size_3;
                    .default_backgroud_13;
                }
            }
        }
        & .article-bd {
            & .article-bd-tit {
                width: 100%;
                height: 1rem;
                line-height: 1rem;
                padding-left: .3rem;
                border-radius: .1rem .1rem 0 0;
                .default_color_3;
                .default_font_size_4;
                .default_backgroud_2;
            }
            & .article-bd-chapter {
                & .chapter-item {
                    width: 100%;
                    height: 1.5rem;
                    padding: 0 .3rem;
                    .default_flex_left;
                    .default_color_1;
                    .default_font_size_6;
                    .default_font_bolder;
                    .default_border-b-4;
                    .default_backgroud_3;
                }
            }
        }
        & .article-ft {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1rem;
            .default_backgroud_3;
            .default_flex_center;
            .default_border_shadow_6;
            & .ft-item {
                flex: 1;
                height: .6rem;
                .default_color_1;
                .default_font_size_6;
                .default_flex_center;
                &:first-child {
                    .default_border-rr-5;
                }
                &.z-active {
                    .default_color_2;
                }
            }   
        }
        & .article-home {
            position: fixed;
            bottom: 1.8rem;
            right: .3rem;
            width: 1.1rem;
            height: 1.1rem;
            .default_backgroud_3;
            .default_border-r-50;
            .skin_home;
            .default_border_shadow_6;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="app-body">
    <HeaderDom />
    <div class="m-article">
        <div class="article-hd">
            <div class="article-info">
                <div class="img" :style="{'background-image': 'url('+ catalog.catalog_cover_url +')'}"></div>
                <v-touch class="content"
                    v-on:swipeleft="silder('left')"
                    v-on:swiperight="silder('right')"
                    :class="'z-'+index"
                >
                    <div class="content-item content-info">
                        <div class="info-left">
                            <div class="info-name">{{catalog.catalog_title}}</div>
                            <div class="info-text info-status">{{catalog_status['catalog_status'+catalog.catalog_status]}}</div>
                            <div class="info-text info-words">字数：{{catalog.words_count}}</div>
                            <div class="info-text info-level">作品等级：{{level['level'+catalog.level]}}</div>
                            <div class="info-text info-number">
                                <span>点赞：{{catalog.praise_count}}</span>
                                <span>评论：{{catalog.comment_count}}</span>
                            </div>
                            <a :href="'author.html?user_id=' + catalog.user.uid" v-if="catalog.user" class="info-text info-avatar">
                                <img :src="catalog.user.avatar_url" />
                                <span>{{catalog.user.nick_name}}</span>
                            </a>
                        </div>
                        <div class="info-right info-images">
                            <img :src="catalog.catalog_cover_url" />
                        </div>
                    </div>
                    <div class="content-item content-intro">
                        <div v-html="textFormat(catalog.catalog_desc || '')" class="text"></div>
                    </div>
                </v-touch>
                <div class="index">
                    <div class="index-item" :class="{'z-active': index == 0}"></div>
                    <div class="index-item" :class="{'z-active': index == 1}"></div>
                </div>
            </div>
            <div class="article-tag">
                <div v-for="tag in catalog.labels" class="tag">{{tag}}</div>
            </div>
        </div>
        <div class="article-bd">
            <div class="article-bd-tit">
                目录
            </div>
            <div class="article-bd-chapter">
                <a v-for="item in chapter.lists" :href="'./article.read.html?catalog_id='+ catalog_id +'&chapter_id='+ item.chapter_id" class="chapter-item">{{item.chapter_title}}</a>
            </div>
        </div>
        <div class="article-ft">
            <div class="ft-item" :class="{'z-active': catalog.is_collected == 1}" @click="mark(catalog.catalog_id)">{{catalog.is_collected == 1 ? '已收藏' : '加入收藏' }}</div>
            <a v-if="chapter.lists[0]" :href="'./article.read.html?catalog_id='+ catalog_id +'&chapter_id='+ chapter.lists[0].chapter_id" class="ft-item">立即阅读</a>
            <div v-else class="ft-item">立即阅读</div>
        </div>
        <a href="./index.html" class="article-home"></a>
    </div>
    <Bubble />
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data (){
        return {
            avatar: this.$defaultData.mbavatar,
            level: {
                level0: '普通',
                level1: '首发',
                level2: '独家'
            },
            catalog_status: {
                catalog_status0: '连载中',
                catalog_status1: '已完结'
            },
            catalog_id: '',

            isCan: true,
            index: 0
        }
    },
    props: ['resType', 'isHideEmpty'],
    computed: mapState({
        userInfo: state => state.user.info,
        catalog: state => state.opus.catalog.info,
        chapter: state => state.opus.chapter
    }),
    methods: {
        silder (type){
            if (!this.isCan) {
                return false;
            }
            this.isCan = false;

            if (type == 'left') {
                if (this.index == 1) {
                    return false;
                }
                this.index++;
            } else {
                if (this.index == 0) {
                    return false;
                }
                this.index--;
            }

            setTimeout(res => {
                this.isCan = true;
            }, 250)
        },
        getCatalogDetail (){
            this.$store.dispatch('opus_getCatalogDetail', {
                catalogId: this.catalog_id
            }).then( res => {
                // 缓存历史记录 - 缓存1年
                var isHas = false;
                var cache_history = this.$version.history;
                var catalog_history = this.$cache.getStore(cache_history.key, cache_history.version) || [];
                for (var i = 0, len = catalog_history.length; i < len; i++) {
                    if (catalog_history[i].catalog_id == res.info.catalog_id) {
                        isHas = true;
                        break;
                    }
                }
                !isHas && catalog_history.push(res.info);
                this.$cache.setStore(cache_history.key, catalog_history, cache_history.version, cache_history.time);

                // todo
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        getChapterList (){
            this.$store.dispatch('opus_getChapterList', {
                "chapterStatus": 0,
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
        textFormat: function (value) {  
            return value.replace(/[\r\n]/g, '<br />');
        },
        delFavorites (catalogId){
            this.$store.dispatch('opus_delFavorites', {
                catalogId: catalogId
            }).then( res => {
                this.getCatalogDetail();

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        addFavorites (catalogId){
            this.$store.dispatch('opus_addFavorites', {
                catalogId: catalogId
            }).then( res => {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        msg: '《'+ this.catalog.catalog_title +'》已加入收藏'
                    }
                })

                this.getCatalogDetail();

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        mark (catalogId){
            // 判断登陆
            if (!this.userInfo.isLogin) {
                return this.$store.dispatch('bubble_fail', {
                    ret: -11,
                    msg: '未登录，请登陆后操作'
                });
                return false;
            }

            if (this.catalog.is_collected == 1) {
                this.delFavorites(catalogId);
            } else {
                this.addFavorites(catalogId);
            }
        },
    },
    created (){
        
    }, 
    updated(){
        
    }, 
    mounted (){
        // 获取url参数
        this.catalog_id = this.$url.getUrlParam('catalog_id');

        // 获取文章目录详情
        this.getCatalogDetail();

        // 获取目录-文章列表
        this.getChapterList();
    }
}
</script>

