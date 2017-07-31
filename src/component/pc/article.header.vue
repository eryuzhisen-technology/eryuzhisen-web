<!-- style样式代码 -->
<style lang="less">
@import (reference) '../../common/css/common';
    @module: c-article-header;

    .@{module} {
        position: relative;
        z-index: 2;
        width: 100%;
        min-width: 1200px;
        padding-top: 80px;
        padding-bottom: 80px;
        .default_backgroud_6;
        & &-wrap {
            width: 600px;
            .default_mar_auto;
        }
        & .name {
            /*overflow: hidden;*/
            margin-bottom: 20px;
            .default_center;
            & .name-text {
                display: inline-block;
                margin-right: 10px;
                .default_color_1;
                .default_font_size_6;
                .default_font_bolder;
                .default_middle;
            }
            & .name-tag {
                display: inline-block;
                height: 30px;
                line-height: 30px;
                padding: 0 12px;
                border-radius: 15px;
                .default_font_size_2;
                .default_color_6;
                .default_backgroud_13;
                .default_center;
                .default_middle;
                &.z-level0 {
                    .default_color_2;
                }
                &.z-level1 {
                    .default_color_6;
                }
                &.z-level2 {
                    .default_color_8;
                }
            }
        }
        & .text {
            overflow: hidden;
            margin-bottom: 30px;
            .default_center;
            & .text-tag {
                overflow: hidden;
                margin-bottom: 20px;
                .default_center;
                & a {
                    display: inline-block;
                    height: 30px;
                    line-height: 30px;
                    padding: 0 12px;
                    margin-right: 10px;
                    border-radius: 15px;
                    .default_color_2;
                    .default_font_size_2;
                    .default_backgroud_3;
                    .default_center;
                    &:hover {
                        .default_color_1;
                    }
                }
            }
            & .text-number {
                margin-bottom: 20px;
                overflow: hidden;
                .default_center;
                & .text-number-item {
                    display: inline-block;
                    .default_color_2;
                    .default_font_size_2;
                }
                & .text-zan {
                    margin: 0 20px;
                }
            }
            & .text-author {
                display: inline-block;
                height: 20px;
                overflow: hidden;
                .default_center;
                & .text-author__img {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    margin-right: 5px;
                    overflow: hidden;
                    .default_backgroud_4;
                    .default_border-r-50;
                    .default_middle;
                    .default_backgroud_5;
                }
                & .text-author__name {
                    display: inline-block;
                    height: 20px;
                    line-height: 20px;
                    .default_color_2;
                    .default_font_size_2;
                    .default_middle;
                }
                &:hover {
                    .default_color_1;
                }
            }
        }
        & .btn {
            height: 50px;
            .default_center;
            & .btn-item {
                display: inline-block;
                height: 50px;
                line-height: 50px;
                margin-right: 10px;
                .default_backgroud_13;
                .default_border-r-4;
                .default_center;
                .default_color_2;
                .default_font_size_2;
                .default_pointer;
                .default_middle;
                & a {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    text-decoration: none;
                    .default_color_2;
                    .default_font_size_2;
                }
                & .cpm_sub_more {
                    width: 150px;
                }
                &.z-active {
                    & .cpm_sub_more {
                        display: block;
                    }
                }
                &.z-unactive {
                    .default_backgroud_4;
                }
            }
            & .btn-item:last-child {
                margin-right: 0;
            }
            & .btn-mark {
                width: 150px;
                & span {
                    display: block;
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                }
                &:hover span {
                    .default_color_1;
                }
            }
            & .btn-share {
                width: 50px;
                position: relative;
                .default_pointer;
                .skin_icon_author-5;
                &:hover {
                    .skin_icon_author-5_on;
                }
            }
            & .btn-more {
                width: 50px;
                position: relative;
                .default_pointer;
                .skin_icon_author-4;
                &:hover {
                    .skin_icon_author-4_on;
                }
            }
        }
        & .menu {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 0);
            & .menu-item {
                float: left;
                width: 40px;
                margin-right: 60px;
                .default_center;
                .default_pointer;
                & a,
                & span {
                    display: block;
                    width: 100%;
                    height: 100%;
                    padding-bottom: 16px;
                    text-decoration: none;
                    .default_color_1;
                    .default_font_size_2;
                }
                &:hover a,
                &:hover span {
                    .default_color_fff;
                }
                &:nth-child(3) {
                    margin-right: 0;
                }
            }
            & .menu-arrow {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 40px;
                height: 2px;
                background-color: #fff;
                transition: left @default_speed_1;
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-article-header">
<div class="c-article-header-wrap">
    <div class="name">
        <div class="name-text">{{catalog.catalog_title}}</div>
        <div class="name-tag" :class="'z-level'+catalog.level">{{level['level'+catalog.level]}}</div>
        <div class="name-tag" :class="'z-level0'">{{catalog_status['catalog_status'+catalog.catalog_status]}}</div>
    </div>
    <div class="text">
        <div class="text-tag">
            <a
                :href="'./page.html?labelTag='+ label"
                v-for="label in catalog.labels"
            >{{label}}</a>
        </div>
        <div class="text-number">
            <div class="text-number-item">
                字数·{{catalog.words_count}}
            </div>
            <div class="text-number-item text-zan">
                点赞·{{catalog.praise_count}}
            </div>
            <div class="text-number-item text-comment">
                评论·{{catalog.comment_count}}
            </div>
        </div>
        <div class="text-author" v-if="catalog.user">
        <a :href="'author.work.html?user_id=' + catalog.user.uid">
            <div class="text-author__img">
                <img v-lazy="catalog.user.avatar_url" />
                <!-- <img :src="catalog.user.avatar_url" /> -->
            </div>
            <div class="text-author__name">{{catalog.user.nick_name}}</div>
        </a></div>
    </div>
    <div class="btn">
        <div class="btn-item btn-mark"
            :data-catalog_id="catalog.catalog_id"
            :class="{'z-unactive': catalog.is_collected == 1}"
        >
            <span
                v-if="catalog.owner != 1"
                @click="mark(catalog.catalog_id)"
            >{{ catalog.is_collected == 1 ? '取消收藏' : '加入收藏' }}</span>
            <span v-else @click="updateCatalog">修改目录信息</span>
        </div>
        <div class="btn-item btn-share j-close-1" @click="selctEnter">
            <div class="cpm_sub_more z-left">
                <div class="item">
                    <div class="item-icon z-wx"></div>
                    <div class="item-text">微信</div>
                    <div class="item-sub">
                        <Qrcode :data="qr" />
                    </div>
                </div>
                <div class="item" @click.stop="shareFn('wb', $event)">
                    <div class="item-icon z-wb"></div>
                    <div class="item-text">微博</div>
                </div>
                <div class="item" @click.stop="shareFn('tb', $event)">
                    <div class="item-icon z-tb"></div>
                    <div class="item-text">贴吧</div>
                </div>
                <div class="item" @click.stop="shareFn('qq', $event)">
                    <div class="item-icon z-qq"></div>
                    <div class="item-text">QQ 好友</div>
                </div>
                <div class="item" @click.stop="shareFn('kong', $event)">
                    <div class="item-icon z-kong"></div>
                    <div class="item-text">QQ 空间</div>
                </div>
            </div>
        </div>
        <div class="btn-item btn-more j-close-1" @click="selctEnter">
            <div class="cpm_sub_more z-left">
                <div v-if="catalog.owner != 1" class="item" @click.stop="addReport">
                    <div class="item-icon z-report"></div>
                    <div class="item-text">举报</div>
                </div>
                <div v-if="catalog.owner == 1" class="item" @click.stop="removeCatalog(catalog.catalog_id, $event)">
                    <div class="item-icon z-del"></div>
                    <div class="item-text">删除作品</div>
                </div>
            </div>
        </div>
    </div>
    <div class="menu">
        <div
            class="menu-item"
            v-for="(item, index) in menu"
            @mouseover="enter(index)"
            @mouseout="out(index)"
        >
            <a v-if="!item.isActive" :href="item.url">{{item.title}}</a>
            <span v-else>{{item.title}}</span>
        </div>
        <div class="menu-arrow" :style="{'left': (index == -1 ? menuIndex : index)*100 + 'px'}"></div>
    </div>
</div>
    <Edit resType="article" />
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
        return  {
            avatar: this.$defaultData.avatar,
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
            index: -1,

            qr: {
                url: window.location.href
            }
        }
    },
    props: ['menu', 'menuIndex'],
    computed: mapState({
        userInfo: state => state.user.info,
        catalog: state => state.opus.catalog.info
    }),
    methods: {
        selctEnter (e){
            $('.j-close-1').removeClass('z-active');
            $(e.currentTarget).addClass('z-active');
        },
        enter (index){
            clearTimeout(this.timer);
            this.index = index;
        },
        out (){
            clearTimeout(this.timer);
            this.timer = setTimeout( res=> {
                this.index = -1;
            }, 500)
        },
        shareFn (app, e){
            $(e.currentTarget).parents('.j-close-1').removeClass('z-active');
            // 分享
            var desc;
            if (this.catalog.owner == 1) {
                desc = '我在耳语之森发布了新连载《'+ this.catalog.catalog_title +'》，只属于你的怪诞故事';
            } else {
                desc = '我在耳语之森发现了连载《'+ this.catalog.catalog_title +'》，一则怪诞离奇的故事';
            }
            var option = {
                app: app,
                url: window.location.href,
                title: this.catalog.catalog_title,
                pic: this.catalog.catalog_cover_url,

                desc: desc,
                summary: desc,
                showcount: 0,
                source: '',
                sourceUrl: '',
                site: '',
            }
            this.$share.shareToAPP(option);
        },
        removeCatalog (catalogId, e){
            var that = this;

            $(e.currentTarget).parents('.j-close-1').removeClass('z-active');

            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'warn',
                warn: {
                    title: '确定要删除你的故事?',
                    content: '删除后无法恢复，读者也将无法看见，请谨慎操作',
                    comfireFn: function(){
                        that.delCatalog(catalogId);
                    }
                },
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
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-default',
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
        // 举报
        addReport (e){
            $(e.currentTarget).parents('.j-close-1').removeClass('z-active');

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

        $('body').on('click', e => {
            var node = $(e.target);
            if (!node.hasClass('j-close-1') && node.parents('.j-close-1').length == 0) {
                $('.j-close-1').removeClass('z-active');
            }
        })
    }
}
</script>

