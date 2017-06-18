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
                width: 100%;
                height: 4.45rem;
                margin-bottom: .22rem;
            }   
            & .list-bd-tit {
                margin-bottom: .14rem;
                .default_font_size_5;
                .default_color_1;
            }
            & .list-bd-tag {
                .default_flex_left;
                & .tag {
                    margin-right: .12rem;
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
            .default_flex_left;
            .default_backgroud_4;
            & .ft-img {
                width: .3rem;
                height: .3rem;
                line-height: 0;
                overflow: hidden;
                background-size: .3rem .3rem;
                margin-right: .08rem;
                .default_border-r-50;
            }
            & .ft-name {
                .default_font_size_1;
                .default_color_3;
            }
        }
        & .list-left {
            width: 4.2rem;
            height: 2.5rem;
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
        }
        & .list-right {
            width: 1.8rem;
            height: 2.7rem;
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
    }
</style>

<!-- html代码 -->
<template>
<div class="c-article">
    <div class="c-article-wrap">
        <a v-if="showType == 1" v-for="item in lists" class="c-article-list" :class="{'z-lr': showType == 1}" :href="'article.html?catalog_id=' + item.catalog_id">
            <div class="list-left">
                <div class="list-left-tit">{{item.catalog_title}}</div>
                <div class="list-left-text">{{item.catalog_desc}}</div>
                <div class="list-left-tag">
                    <p v-for="tag in item.labels" class="tag">{{tag}}</p>
                </div>
            </div>
            <div class="list-right">
                <div class="list-right-img">
                    <img :src="item.catalog_cover_url" />
                </div>
            </div>
        </a>
        <a v-if="!showType" v-for="item in lists" class="c-article-list" :href="'article.html?catalog_id=' + item.catalog_id">
            <div class="list-bd">
                <div class="list-bd-img">
                    <img :src="item.catalog_cover_url" />
                </div>
                <div class="list-bd-tit">{{item.catalog_title}}</div>
                <div class="list-bd-tag">
                    <p v-for="tag in item.labels" class="tag">{{tag}}</p>
                </div>
            </div>
            <div v-if="item.user" class="list-ft">
                <div class="ft-img" :style="{'background-image': 'url('+item.user.avatar_url+')'}">
                </div>
                <div class="ft-name">{{item.user.nick_name}}</div>
            </div>
        </a>
        <div v-if="count == 0" class="list-empty">
            没有相关结果
        </div>
    </div>

    <!-- page -->
    <div v-if="loadType == 'more' && count != 0 && loadType != 'none'" v-show="false" class="list-more">
        <div v-if="more == 1 && !load" class="btn-more-before">{{user.isLogin ? '加载更多' : '登录查看更多'}}</div>
        <div v-else-if="more == 1" class="btn-more-loading"><em></em><span>加载中...</span></div>
        <div v-else class="btn-more-end"><em></em><span>没有更多</span></div>
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
            pageIndex: 1, //页数,默认不传查询第一页
            pageSize: 5 //每页数量 默认10
        }
    },
    props: ['resType', 'loadType', 'userType', 'catalog_type', 'showType', 'isHideEmpty'],
    computed: mapState({
        user: state => state.user.info,
        lists: state => state.opus.article.lists,
        count: state => state.opus.article.count,
        more: state => state.opus.article.more,
        load: state => state.opus.article.load
    }),
    methods: {
        getCatalogList (type){
            // 未登录处理
            /*if (!this.user.isLogin && this.resType != 'index') {
                console.log('----error----on login, getCatalogList');
                return false;
            }*/
            this.$store.dispatch('opus_getCatalogList', {
                "type": type || this.loadType || '',
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
                this.$emit('article_count', this.count);

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.pageIndex--;
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
                this.$emit('article_count', this.count);

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.pageIndex--;
                this.$store.dispatch('bubble_fail', err);
            }
            )
        },
        getMore (){
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
                return false;
            }
            if (this.user.uid && this.user.uid == this.user_id) {
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
        }
    },
    mounted (){
        // 获取url的参数
        this.query = decodeURIComponent(this.$url.getUrlParam('query'));
        this.user_id = this.$url.getUrlParam('user_id');

        this.getList(); 

        $(window).on('scroll', e => {
            if ($('.btn-more-before').length <= 0 || this.loadType == 'none') {
                return false;
            }
            var top = $(window).scrollTop();
            var height = $(window).height();
            var _top = $('.btn-more-before').offset().top;
            if (_top + 20 <= top + height) {
                this.getMore();    
            }
        })   
    }
}
</script>

