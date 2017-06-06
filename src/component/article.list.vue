<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    @module: c-artice-list;
    .c-artice-list {
        width: 100%;
        height: 100%;
        & &-wrap {
            width: 100%;
            height: 100%;
            min-height: 300px;
            // min-width: 720px;
            .default_mar_auto;
            margin-bottom: 30px;
        }
        & a {
            text-decoration: none;
        }
        & .c-artice-item:first-child,
        & .c-artice-item:nth-child(1),
        & .c-artice-item:nth-child(2),
        & .c-artice-item:nth-child(3),
        & .c-artice-item:nth-child(4),
        & .c-artice-item:nth-child(5) {
            .default_border-t-n;
        }
        & .c-artice-item:last-child,
        & .c-artice-item:nth-child(5n) {
            .default_border-r-n;
        }
    }
    .c-artice-item {
        position: relative;
        float: left;
        width: 240px;
        height: 480px;
        padding: 10px;
        .default_backgroud_3;
        .default_border-t-5;
        .default_border-rr-5;
        & &-wrap,
        & &-wrap-link {
            display: block;
            width: 100%;
            height: 100%;
        }
        & a {
            text-decoration: none;
        }
        &:hover {
            .default_backgroud_2;
        }
        & .item-hd {
            position: relative;
            width: 220px;
            height: 330px;
            overflow: hidden;
            margin-bottom: 12px;
            & .item-hd-img {
                width: 100%;
                height: 100%;
                overflow: hidden;
                & img {
                    max-width: 100%;
                }
            }
            & .item-hd-tag {
                position: absolute;
                right: 0;
                bottom: 0;
                width: 50px;
                height: 50px;
                line-height: 50px;
                .skin_article_tag;
                & .item-hd-tag_text {
                    position: absolute;
                    bottom: 10px;
                    right: 2px;
                    .default_color_2;
                    .default_font_size_1;
                }
            }
        }
        & .item-bd {
            position: relative;
            width: 100%;
            & .item-bd-title {
                line-height: 1.5em;
                margin-bottom: 8px;
                .default_font_size_7;
                .default_color_1;
                &:hover {
                    .default_color_fff;
                }
            }
            & .item-bd-content {
                height: 11.25rem;
                line-height: 1.25rem;
                overflow: hidden;
                text-align: justify;
                .default_color_2;
                .default_font_size_2;
            }
            & .item-bd-tags {
                width: 100%;
                overflow: hidden;
                & a {
                    float: left;
                    display: block;
                    margin-right: 8px;
                    margin-bottom: 8px;
                    .default_font_size_1;
                    .default_color_2;  
                    &.z-active,
                    &:hover {
                        .default_color_1;
                    } 
                }
            }
        }
        & .item-ft {
            position: absolute;
            bottom: 10px;
            left: 10px;
            width: 100%;
            & .item-ft-btn {
                display: inline-block;
                height: 20px;
                line-height: 20px;
                margin-right: 10px;
                .default_font_size_1;
                .default_color_2;
                .default_middle;
                &:hover {
                   .default_color_1; 
                }
            }
            & .item-ft-img {
                float: left;
                width: 20px;
                height: 20px;
                overflow: hidden;
                margin-right: 8px;
                .default_border-r-50;
            }
            & .item-ft-name {
                float: left;
                height: 20px;
                line-height: 20px;
                margin-right: 20px;
                .default_color_3;
                .default_font_size_1;
                &:hover {
                    .default_color_1;
                }
            }
            & .item-ft-btn-more {
                position: absolute;
                bottom: -10px;
                right: 0;
                width: 36px;
                height: 36px;
                padding: 10px;
                .skin_mark_more;
                & .cpm_sub_more {
                    width: 150px;
                }
                &:hover {
                    .skin_mark_more_on;
                    & .cpm_sub_more {
                        display: block;
                    }
                }
            }
        }
        &.z-left_right {
            width: 400px;
            height: 350px;
            overflow: hidden;
        }
        &.z-left_right .item-hd {
            float: left;
            width: 220px;
            margin-right: 9px;
        }
        &.z-left_right .item-bd {
            float: right;
            width: 150px;
            height: 100%;
            padding: 10px;
            & .item-bd-tags {
                position: absolute;
                bottom: 10px;
                left: 10px;
                & a {
                    margin-top: 8px;
                    margin-bottom: 0;
                }
            }
        }
        &.z-left_right .item-ft {
            position: absolute;
            bottom: 10px;
            right: 0;
            width: 150px;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-artice-list">
<div class="c-artice-list-wrap" :style="{'height': Math.ceil(lists.length/(showType == 'left_right' ? 3 : 5))*(showType == 'left_right' ? 350 : 480) + 'px', 'width': (lists.length && lists.length <= 3 ? lists.length*(showType == 'left_right' ? 400 : 240) : 1200) + 'px'}">
    <div class="c-artice-item" v-for="data in lists" :class="{'z-left_right': showType == 'left_right'}">
        <div class="c-artice-item-wrap"
            :data-catalog_id="data.catalog_id"
        >
            <a :href="'./article.list.html?catalog_id=' + data.catalog_id" class="c-artice-item-wrap-link">
                <!-- 头部 -->
                <div class="item-hd">
                    <div class="item-hd-img">
                        <img :src="data.catalog_cover_url" />
                    </div>
                    <!-- <div class="item-hd-tag">
                        <div class="item-hd-tag_text">{{data.category_title}}</div>
                    </div> -->
                </div>

                <!-- 内容 -->
                <div class="item-bd">
                    <div class="item-bd-title">{{data.catalog_title}}</div>
                    <div v-if="showType == 'left_right'" class="item-bd-content" v-html="textFormat(data.catalog_desc)"></div>
                    <div class="item-bd-tags">
                        <a
                            :href="'./page.html?labelTag='+ label" 
                            v-for="label in data.labels"
                            :class="{'z-active': labelTag == label}" 
                        >{{label}}</a>
                    </div>
                </div>

                <!-- 作者 -->
                <div class="item-ft">
                    <a v-if="resType != 'author'" class="item-ft-btn" target="_blank" :href="'author.work.html?user_id=' + data.user.uid">
                        <div class="item-ft-img">
                            <img :src="data.user.avatar_url || avatar" />
                        </div>
                        <div class="item-ft-name">{{data.user.nick_name}}</div>
                    </a>

                    <div v-if="resType == 'mark'" class="item-ft-btn item-ft-btn-more">
                        <div class="cpm_sub_more z-left">
                            <div v-if="resType == 'history'" class="item" @click.prevent="delHistory(data.catalog_id)">
                                <div class="item-text">删除记录</div>
                            </div>
                            <div v-if="resType == 'mark' && data.owner != 1 && data.is_collected == 1" class="item" @click.prevent="delFavorites">
                                <div class="item-text">删除</div>
                            </div>
                            <div v-if="resType == 'search' && data.owner != 1 && data.is_collected != 1" class="item">
                                <div class="item-text">加入收藏</div>
                            </div>
                            <a v-if="resType == 'author' && data.owner == 1" class="item" :href="'./article.edit.html?catalog_id='+ data.catalog_id + '&chapter_id=-1'">
                                <div class="item-text">添加章节</div>
                            </a>
                            <div v-if="resType == 'author' && data.owner == 1" class="item" @click.stop.prevent="remove(data.catalog_id)">
                                <div class="item-text">删除作品</div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <Empty v-if="count <= 0" />
</div>

<div v-if="loadType == 'more' && count != 0 && loadType != 'none'" v-show="false" class="list-more">
    <div v-if="more == 1 && !load" class="btn-more-before">{{user.isLogin ? '加载更多' : '登录查看更多'}}</div>
    <div v-else-if="more == 1" class="btn-more-loading"><em></em><span>加载中...</span></div>
    <div v-else class="btn-more-end"><em></em><span>没有更多</span></div>
</div>

<Page v-if="loadType != 'more' && loadType != 'none'"
    class="list-pages"
    :count="count" 
    :length="pageSize"
    :index="pageIndex"
    @page_switch="pageSwitch"
/>

</div>
</template>

<script>
import {mapState} from 'vuex'
import avatar from '../common/images/img/avatar.png';
export default {
    data () {
        return {
            avatar: avatar,
            labelTag: '',
            subMoreShow: false,
            query: '', // 模糊查询文字
            pageIndex: 1, //页数,默认不传查询第一页
            pageSize: 5, //每页数量 默认10

            pageHotIndex: 1,
            pageHotSize: 10
        }
    },
    props: ['resType', 'loadType', 'userType', 'catalog_type', 'showType'],
    computed: mapState({
        tag: state => state.opus.category,
        user: state => state.user.info,
        lists (){
            return this.resType != 'hot' ? this.$store.state.opus.article.lists : this.$store.state.opus.hot.lists;
        },
        count (){
            return this.resType != 'hot' ? this.$store.state.opus.article.count : this.$store.state.opus.hot.count;
        },
        more (){
            return this.resType != 'hot' ? this.$store.state.opus.article.more : this.$store.state.opus.hot.more;
        },
        load (){
            return this.$store.state.opus.article.load;
        }
    }),
    methods: {
        pageSwitch (pageIndex) {
            if (this.pageIndex == pageIndex) {
                return false;
            }
            this.pageIndex = pageIndex;
            this.getList();
        },
        subMoreSwitch () {
            this.subMoreShow = !this.subMoreShow;
        },
        remove (catalogId){
            var that = this;
            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'warn',
                warn: {
                    title: '确定要删除?',
                    content: '删除后将无法恢复，请谨慎处理',
                    comfireFn: function(){
                        that.delCatalog(catalogId);
                    }
                },
            })
        },
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
                    "catalog_type": this.catalog_type || 0, // 0 普通（默认） 1 热门 2 优秀 如果没有此参数则查询所有
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
            })
        },
        getHotList (){
            // 未登录处理
            /*if (!this.user.isLogin && this.resType != 'index') {
                console.log('----error----on login, getHotList');
                return false;
            }*/
            this.$store.dispatch('opus_getHotList', {
                "params": {
                    "pagination": "1",
                    "page": this.pageHotIndex, //页数,默认不传查询第一页
                    "pageSize": this.pageHotSize //每页数量 默认10
                },
                "body": {
                    "catalog_type": this.catalog_type || 0 // 0 普通（默认） 1 热门 2 优秀 如果没有此参数则查询所有
                }
            }).then( res => {
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        getFavoritesList (){
            this.$store.dispatch('opus_getFavoritesList', {
                "pagination": "1",
                "page": this.pageIndex, //页数,默认不传查询第一页
                "pageSize": this.pageSize //每页数量 默认10
            }).then( res => {
                // todo
                
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.pageIndex--;
                this.$store.dispatch('bubble_fail', err);
            })
        },
        getMore (){
            this.getList(true);
        },
        getList (getMore){
            if (this.resType == 'mark') {
                if (getMore) {
                    this.pageIndex++;
                }
                this.getFavoritesList();
            } else if (this.resType == 'history') {
                // 从缓存中获取
                var cache_history = this.$version.history;
                var history = this.$cache.getStore(cache_history.key, cache_history.version);
                var lists = history.slice((this.pageIndex-1)*this.pageSize, this.pageSize*this.pageIndex);
                this.$store.dispatch('opus_setArticle', {
                    lists: lists,
                    count: history.length
                }).then( res => {
                    this.$emit('article_count', this.count);
                })
            } else if (this.user.uid && this.user.uid == this.user_id) {
                if (getMore) {
                    this.pageIndex++;
                }
                this.getMyCatalogList();
            } else if (this.resType == 'hot') {
                if (getMore) {
                    this.pageHotIndex++;
                }
                this.getHotList();
            } else {
                if (getMore) {
                    this.pageIndex++;
                }
                this.getCatalogList();
            }
        },
        delFavorites (e){
            var catalogId = $(e.currentTarget).parents('.c-artice-item-wrap').data('catalog_id');
            this.$store.dispatch('opus_delFavorites', {
                catalogId: catalogId
            }).then( res => {
                this.getList();

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        delCatalog (catalogId){
            this.$store.dispatch('opus_delCatalog', {
                "catalogId": catalogId
            }).then( res => {
               this.getCatalogList();

               this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
        delHistory (catalog_id){
            var cache_history = this.$version.history;
            var lists = this.$cache.getStore(cache_history.key, cache_history.version);
            for(var i = 0, len = lists.length; i < len; i++) {
                if (lists[i].catalog_id == catalog_id) {
                    lists.splice(i, 1);
                    break;
                }
            }
            this.$cache.setStore(cache_history.key, lists, cache_history.version, cache_history.time);
            this.getList();
        },
        textFormat: function (value) {  
            return value.replace(/[\r\n]/g, '<br />');
        },
        loadMore (){
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
    },
    created (){
        this.$eventHub.$on('header_serach', option => {
            if (this.query == option.query) {
                return false;
            }
            this.query = option.query;
            this.getList();
        });

        this.$eventHub.$on('author_chapter_list_refresh', option => {
            this.getList();
        })
    }, 
    mounted (){
        // 加载更多
        if (this.resType != 'hot') {
            this.loadMore();
        }
        
        // 获取url的参数
        this.query = decodeURIComponent(this.$url.getUrlParam('query'));
        this.user_id = this.$url.getUrlParam('user_id');
        this.labelTag = decodeURIComponent(this.$url.getUrlParam('labelTag'));

        // watch tags change
        this.$watch('tag.index', function(newVal, oldVal){
            this.pageIndex = 1;
            this.getCatalogList('page');
        })

        // 获取文章列表
        if (!this.labelTag && this.resType == 'page') {
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

        this.getList();    
    }
}
</script>

