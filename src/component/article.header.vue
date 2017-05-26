<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    @module: c-article-header;

    .@{module} {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 320px;
        padding-top: 40px; 
        .user_background_1;
        & &-wrap{
            .default_width_960;
            .default_mar_auto;
        }
    }
    .@{module}_left {
        position: relative;
        float: left;
        width: 150px;
        height: 240px;
        margin-right: 20px;
        .default_backgroud_5;
        & .left-img {
            width: 100%;
            height: 240px;
            overflow: hidden;
            & img {
                width: 100%;
                height: 100%;
            }
        }
        & .left-tag {
            position: absolute;
            top: 0;
            left: 0;
            width: 50px;
            height: 50px;
            &.z-man {
                .skin_icon_article-4;
            }
            &.z-wen {
                .skin_icon_article-3;
            }
        }
    }
    .@{module}_right {
        position: relative;
        float: left;
        width: 790px;
        height: 240px;
        & .name {
            overflow: hidden;
            margin-bottom: 15px;
            & .name-text {
                float: left;
                .default_color_1;
                .default_font_size_6;
                .default_font_bolder;
                margin-right: 10px;
            }
            & .name-tag {
                float: left;
                width: 52px;
                height: 30px;
                line-height: 30px;
                border-radius: 15px;
                .default_font_size_2;
                .default_color_6;
                .default_backgroud_5;
                .default_center;
            }
        }
        & .btn {
            height: 40px;
            margin-bottom: 15px;
            & .btn-item {
                float: left;
                height: 40px;
                line-height: 40px;
                margin-right: 10px;
                .default_backgroud_5;
                .default_border-r-4;
                .default_center;
                .default_color_1;
                .default_font_size_2;
                .default_pointer;
                & a {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    text-decoration: none;
                    .default_color_1;
                    .default_font_size_2;
                }
                & .cpm_sub_more {
                    width: 150px;
                }
                &:hover {
                    & .cpm_sub_more {
                        display: block;
                    }
                }
            }
            & .btn-item:last-child {
                margin-right: 0;
            }
            & .btn-mark {
                width: 600px;
                & span {
                    display: block;
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                }
            }
            & .btn-share {
                width: 100px;
                position: relative;
                .default_pointer;
                .skin_icon_author-5;
                &:hover {
                    .skin_icon_author-5_on;
                }
            }
            & .btn-more {
                width: 40px;
                position: relative;
                .default_pointer;
                .skin_icon_author-4;
                &:hover {
                    .skin_icon_author-4_on;
                }
            }
        }
        & .text {
            & .text-intro {
                margin-bottom: 10px;
                line-height: 1.5rem;
                .default_color_1;
                .default_font_size_2;
            }
            & .text-tag p {
                display: inline-block;
                margin-right: 10px;
                margin-bottom: 10px;
                .default_color_1;
                .default_font_size_2;
            }
            & .text-number {
                overflow: hidden;
                & .text-number-item {
                    display: inline-block;
                    height: 12px;
                    & span {
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        margin-right: 4px;
                        vertical-align: middle;
                    }
                    & strong {
                        display: inline-block;
                        .default_color_1;
                        .default_font_size_1;
                        vertical-align: middle;
                    }
                }
                & .text-zan {
                    margin-right: 15px;
                    & span {
                        .skin_icon_article-5;
                    }
                }
                & .text-comment {
                    & span {
                        .skin_icon_article-6;   
                    }
                }
            }
            & .text-author {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 20px;
                overflow: hidden;
            }
            & .text-author__img {
                float: left;
                width: 20px;
                height: 20px;
                margin-right: 10px;
                overflow: hidden;
                .default_backgroud_4;
                .default_border-r-50;
            }
            & .text-author__name {
                float: left;
                height: 20px;
                line-height: 20px;
                .default_color_1;
                .default_font_size_1;
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-article-header">
<div class="c-article-header-wrap">
    <div class="c-article-header_left">
        <div class="left-img">
            <img :src="catalog.catalog_cover_url" />
        </div>
        <div 
            class="left-tag"
            :class="{'z-man': catalog.category_title == '漫画', 'z-wen': catalog.category_title == '文字'}"
        ></div>
    </div>
    <div class="c-article-header_right">
        <div class="name">
            <div class="name-text">{{catalog.catalog_title}}</div>
            <div class="name-tag">{{level['level'+catalog.level]}}</div>
        </div>
        <div class="btn">
            <div class="btn-item btn-mark" 
                :data-catalog_id="catalog.catalog_id"
            >
                <span v-if="catalog.owner != 1" @click="mark(catalog.catalog_id)">{{ catalog.is_collected == 1 ? '取消收藏' : '加入收藏' }}</span>
                <span v-else @click="updateCatalog">修改目录信息</span>
            </div>
            <div class="btn-item btn-share">
                <div class="cpm_sub_more z-left">
                    <div class="item">
                        <div class="item-icon z-wx"></div>
                        <div class="item-text">微信</div>
                    </div>
                    <div class="item">
                        <div class="item-icon z-peng"></div>
                        <div class="item-text">朋友圈</div>
                    </div>
                    <div class="item">
                        <div class="item-icon z-wb"></div>
                        <div class="item-text">微博</div>
                    </div>
                    <div class="item">
                        <div class="item-icon z-qq"></div>
                        <div class="item-text">QQ 好友</div>
                    </div>
                    <div class="item">
                        <div class="item-icon z-kong"></div>
                        <div class="item-text">QQ 空间</div>
                    </div>
                    <div class="item">
                        <div class="item-icon z-more"></div>
                        <div class="item-text">更多</div>
                    </div>
                </div>
            </div>
            <div class="btn-item btn-more">
                <div class="cpm_sub_more z-left">
                    <div class="item" @click="addReport">
                        <div class="item-icon z-report"></div>
                        <div class="item-text">举报</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text">
            <div class="text-intro">{{catalog.catalog_desc}}</div>
            <div class="text-tag">
                <p v-for="item in catalog.labels">{{item}}</p>
            </div>
            <div class="text-number">
                <div class="text-number-item text-zan">
                    <span></span>
                    <strong>{{catalog.praise_count}}</strong>
                </div>
                <div class="text-number-item text-comment">
                    <span></span>
                    <strong>{{catalog.comment_count}}</strong>
                </div>
            </div>
            <div class="text-author">
                <div class="text-author__img">
                    <img :src="catalog.user && catalog.user.avatar_url || avatar" />
                </div>
                <div class="text-author__name">{{catalog.user && catalog.user.nick_name}}</div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import avatar from '../common/images/img/avatar.png';
export default {
    data () {
        return  {
            avatar: avatar,
            level: {
                level0: '普通',
                level1: '首发',
                level2: '独家'
            },
            catalog_id: ''
        }
    },
    computed: mapState({
        userInfo: state => state.user.info,
        catalog: state => state.opus.catalog.info
    }),
    methods: {
        updateCatalog (){
            this.$eventHub.$emit('header_article_setShow', {
                show: true,
                catalog: this.catalog
            });
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
        // 举报
        addReport (){
            // 判断登陆
            if (!this.userInfo.isLogin) {
                return this.$store.dispatch('bubble_fail', {
                    ret: -11,
                    msg: '未登录，请登陆后操作'
                });
                return false;
            }

            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'report',
                report: {
                    content_id: this.catalog.catalog_id,
                    content_type: 1
                }
            })
        }
    },
    mounted () {
        this.$eventHub.$on('updateCatalog_success', res => {
            // 刷新目录
            // this.getCatalogDetail();    
        })

        // 获取url参数
        this.catalog_id = this.$url.getUrlParam('catalog_id');

        // 获取文章目录详情
        this.getCatalogDetail();
    }
}
</script>

