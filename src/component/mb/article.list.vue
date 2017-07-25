<!-- style样式代码 -->
<style lang="less">
@import (reference) '../../common/css/mb.common';
    .app-body {
        // height: 100%;
    }
    .c-article {
        width: 100%;
        height: 100%;
        & .c-article-wrap {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        & .c-article-list {
            position: relative;
            float: left;
            width: 3.35rem;
            height: 6.75rem;
            margin-bottom: .2rem;
            overflow: hidden;
            .default_backgroud_3;
            .default_border-r-10;
            &:nth-child(2n+1) {
                margin-right: .2rem;
            }
            &.z-lr {
                width: 100%;
                height: 3.1rem;
                padding: 0 .2rem 0 .3rem;
                float: none;
                margin-bottom: 0;
                .default_border-r-n;
                .default_border-b-5;
                .default_flex_middle;
            }
            &:last-child {
                border-radius: 0 0 .1rem .1rem;
                .default_border-n;
            }
        }
        & .list-bd {
            padding: .2rem;
            & .list-bd-img {
                position: relative;
                width: 100%;
                height: 4.45rem;
                margin-bottom: .22rem;
                .default_backgroud_5;
                & span {
                    position: absolute;
                    top: .1rem;
                    left: .1rem;
                    width: .7rem;
                    height: .7rem;
                    line-height: .7rem;
                    .default_center;
                    .default_color_1;
                    .default_font_size_1;
                    .skin_fresh;
                }
            }   
            & .list-bd-tit {
                margin-bottom: .14rem;
                .default_font_size_5;
                .default_color_1;
                .default_font_bolder;
            }
            & .list-bd-tag {
                // .default_flex_left;
                width: 120%;
                height: .2rem;
                & .tag {
                    float: left;
                    margin-right: .12rem;
                    margin-bottom: .12rem;
                    .default_color_3;
                    .default_font_size_1;
                }
            }
        }
        & .list-ft {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: .8rem;
            padding-left: .2rem;
            padding-right: .2rem;
            border-radius: 0 0 .1rem .1rem;
            .default_backgroud_4;
            .default_flex_middle;
    
            & .ft-avatar {
                .default_flex_left;    
            }
            & .ft-img {
                width: .3rem;
                height: .3rem;
                line-height: 0;
                overflow: hidden;
                background-size: .3rem .3rem;
                margin-right: .08rem;
                .default_border-r-50;
                .default_backgroud_5;
            }
            & .ft-name {
                .default_font_size_1;
                .default_color_3;
            }
            & .ft-del {
                width: .32rem;
                height: .32rem;
                .skin_delete;
            }
        }
        & .list-left {
            position: relative;
            width: 4.2rem;
            height: 100%;
            padding: .3rem 0;
            & .list-left-tit {
                margin-bottom: .2rem;
                .default_font_size_5;
                .default_color_1;
            }
            & .list-left-text {
                line-height: 1.5em;
                margin-bottom: .3rem;
                .default_color_2;
                .default_font_size_3;
                .default_textOut;
            }
            & .list-left-tag {
                .default_flex_left;
                & .tag {
                    margin-right: .14rem;
                    .default_color_3;
                    .default_font_size_1;
                }
            }
            & .list-left-btns {
                position: absolute;
                bottom: .3rem;
                left: 0;
                & .btn {
                    margin-right: .2rem;
                    .default_font_size_3;
                    .default_color_2;
                }
            }
        }
        & .list-right {
            position: relative;
            width: 1.8rem;
            height: 2.7rem;
            overflow: hidden;
            .default_border-r-10;
            .default_backgroud_5;
            & span {
                position: absolute;
                top: .1rem;
                left: .1rem;
                width: .7rem;
                height: .7rem;
                line-height: .7rem;
                .default_center;
                .default_color_1;
                .default_font_size_1;
                .skin_fresh;
            }
        }
        & .list-empty {
            width: 100%;
            height: 2.5rem;
            border-radius: 0 0 .1rem .1rem;
            .default_flex__v_middle;
            .default_color_4;
            .default_font_size_6;
            .default_font_bolder;
            .default_backgroud_3;
        }
        & .list-more {
            width: 100%;
            height: 1rem;
            padding: .4rem;
            .default_flex_center;
            & img {
                width: .6rem;
                height: .6rem;
                animation: load 1s linear infinite;
            }
        }
        @keyframes load{
            from {
                transform: rotate(0);
            }
            to {
                transform: rotate(359deg);
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-article">
    <div class="c-article-wrap">
        <a v-if="showType == 1" v-for="(item, index) in lists" class="c-article-list" :class="{'z-lr': showType == 1}" :href="'article.intro.html?catalog_id=' + item.catalog_id">
            <div class="list-left">
                <div class="list-left-tit">{{item.catalog_title}}</div>
                <div class="list-left-text">{{item.catalog_desc}}</div>
                <div class="list-left-tag">
                    <p v-for="tag in item.labels" class="tag">{{tag}}</p>
                </div>
                <div class="list-left-btns">
                    <div class="btn" @click.stop.prevent="mark(item, index)">{{item.is_collected == 1 ? '已收藏' : '加入收藏'}}</div>
                </div>
            </div>
            <div class="list-right">
                <div class="list-right-img">
                    <img v-lazy="item.catalog_cover_url"/>
                    <!-- <img :src="item.catalog_cover_url" /> -->
                    <span v-if="item.updated == 1">更新</span>
                </div>
            </div>
        </a>
        <a v-if="!showType" v-for="(item, index) in lists" class="c-article-list" :href="'article.intro.html?catalog_id=' + item.catalog_id">
            <div class="list-bd">
                <div class="list-bd-img">
                    <img v-lazy="item.catalog_cover_url"/>
                    <!-- <img :src="item.catalog_cover_url" /> -->
                    <span v-if="item.updated == 1">更新</span>
                </div>
                <div class="list-bd-tit">{{item.catalog_title}}</div>
                <div class="list-bd-tag">
                    <p v-for="tag in item.labels" class="tag">{{tag}}</p>
                </div>
            </div>
            <div class="list-ft">
                <a v-if="item.user" class="ft-avatar" :href="'author.work.html?user_id=' + item.user.uid">
                    <div class="ft-img" v-lazy:background-image="item.user.avatar_url"></div>
                    <div class="ft-name">{{item.user.nick_name}}</div>
                </a>
                <div class="ft-btn">
                    <div v-if="resType == 'mark'" class="ft-del" @click.stop.prevent="delFavorites(item, index, true)"></div>    
                </div>
            </div>
        </a>
        <div v-if="count == 0" class="list-empty">
            没有相关结果
        </div>
    </div>

    <!-- page -->
    <div v-if="loadType == 'more' && count != 0 && more == 1" class="list-more">
        <img src="../../common/images/mb/loading.png" />
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
            avatar: this.$defaultData.avatar,
            user_id: '',

            isLoad: 0,
            randId: '',
            randConut: 10, // 随机获取列表-个数
            pageIndex: 1, //页数,默认不传查询第一页
            pageSize: 5 //每页数量 默认10
        }
    },
    props: ['resType', 'loadType', 'userType', 'catalog_type', 'showType', 'isHideEmpty', 'isRand'],
    computed: mapState({
        user: state => state.user.info,
        lists: state => state.opus.article.lists,
        count: state => state.opus.article.count,
        more: state => state.opus.article.more,
        load: state => state.opus.article.load
    }),
    methods: {
        getFavoritesList (){
            this.$store.dispatch('opus_getFavoritesList', {
                'type': this.loadType,
                "pagination": "1",
                "page": this.pageIndex, //页数,默认不传查询第一页
                "pageSize": this.pageSize //每页数量 默认10
            }).then( res => {
                // todo
                this.isLoad = 0;
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.isLoad = 0;
                this.$store.dispatch('bubble_fail', err);
            })
        },
        getRandCatalogList (type){
            this.$store.dispatch('opus_getRandCatalogList', {
                "type": type || this.loadType || '',
                "count": this.randConut, //每页数量 默认10
                "randId": this.randId, //如果是刷新或者第一次首页获取，不用传值，翻页时必填项（服务端返回什么传什么）
                "catalogType": this.catalog_type //0 普通（默认） 1 热门 2 优秀 如果没有此参数则查询所有
            }).then( res => {
                this.isLoad = 0;
                this.randId = res.rand_id;
                this.$emit('article_count', this.count);

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.isLoad = 0;
                this.$store.dispatch('bubble_fail', err);
            })
        },
        getCatalogList (type){
            // 未登录处理
            /*if (!this.user.isLogin && this.resType != 'index') {
                console.log('----error----on login, getCatalogList');
                return false;
            }*/
            this.$store.dispatch('opus_getCatalogList', {
                "type": this.loadType || '',
                "params": {
                    "pagination": "1",
                    "page": this.pageIndex, //页数,默认不传查询第一页
                    "pageSize": this.pageSize //每页数量 默认10
                },
                "body": {
                    "label": this.resType == 'page' ? this.labelTag : '', //标签，
                    "catalog_type": this.catalog_type || '', // 0 普通（默认） 1 热门 2 优秀 如果没有此参数则查询所有
                    "user_id": this.userType == 'user_id' ? this.user_id : '',
                    "fuzzy_query": this.query || '' // 模糊查询文字
                }
            }).then( res => {
                this.isLoad = 0;
                this.$emit('article_count', this.count);

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.isLoad = 0;
                this.$store.dispatch('bubble_fail', err);
            })
        },
        getMyCatalogList (){
            // 未登录处理
            if (!this.user.isLogin && this.resType != 'index') {
                console.log('----error----on login, getCatalogList');
                return false;
            }
            this.$store.dispatch('opus_getMyCatalogList', {
                "pagination": "1",
                "page": this.pageIndex, //页数,默认不传查询第一页
                "pageSize": this.pageSize //每页数量 默认10
            }).then( res => {
                this.isLoad = 0;
                this.$emit('article_count', this.count);

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.isLoad = 0;
                this.$store.dispatch('bubble_fail', err);
            })
        },
        getMore (){
            if (this.isLoad == 1) {
                return false;
            }
            this.isLoad = 1;
            this.getList(true);
        },
        getList (getMore){
            if (!this.user_id && this.resType == 'author') {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: '系统繁忙'
                    }
                })
                this.load = 0;
                return false;
            }
            if (this.resType == 'mark') {
                if (getMore) {
                    this.pageIndex++;
                }
                this.getFavoritesList();
            } else if (this.isRand) {
                this.getRandCatalogList(getMore ? 'more' : 'none');
            } else if (this.user.uid && this.user.uid == this.user_id) {
                if (getMore) {
                    this.pageIndex++;
                }
                this.getMyCatalogList();
            } else {
                if (getMore) {
                    this.pageIndex++;
                }
                this.getCatalogList();
            }
        },
        delFavorites (catalog, index, isDelete){
            this.$store.dispatch('opus_delFavorites', {
                catalogId: catalog.catalog_id
            }).then( res => {
                var _catalog = $.extend(true, {}, catalog);
                    _catalog.is_collected = 0;
                this.$store.dispatch('opus_setArticleDetail', {
                    index: index,
                    catalog: _catalog,
                    isDelete: isDelete
                })

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        addFavorites (catalog, index){
            this.$store.dispatch('opus_addFavorites', {
                catalogId: catalog.catalog_id
            }).then( res => {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        msg: '《'+ catalog.catalog_title +'》已加入收藏'
                    }
                })
                var _catalog = $.extend(true, {}, catalog);
                    _catalog.is_collected = 1;
                console.log(_catalog.is_collected)

                this.$store.dispatch('opus_setArticleDetail', {
                    index: index,
                    catalog: _catalog
                })

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        mark (catalog, index){
            // 判断登陆
            if (!this.user.isLogin) {
                return this.$store.dispatch('bubble_fail', {
                    ret: -11,
                    msg: '未登录，请登陆后操作'
                });
                return false;
            }

            if (catalog.is_collected == 1) {
                this.delFavorites(catalog, index);
            } else {
                this.addFavorites(catalog, index);
            }
        },
    },
    created (){
        this.$eventHub.$on('index.getList', option => {
            this.pageIndex = 1;
            this.randId = '';
            this.getList(false);
        })
    },
    mounted (){
        // 获取url的参数
        this.query = decodeURIComponent(this.$url.getUrlParam('query'));
        this.user_id = this.$url.getUrlParam('user_id');

        this.getList(); 

        $(window).on('scroll', e => {
            if (this.more == 0 || this.loadType == 'none') {
                return false;
            }
            var top = $(window).scrollTop();
            var height = $(window).height();
            var _top = $('.list-more').offset().top;
            if (_top + 20 <= top + height) {
                this.getMore();    
            }
        })   
    }
}
</script>

