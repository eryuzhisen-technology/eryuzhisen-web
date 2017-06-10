<!-- style样式代码 -->
<style lang="less">
@import (less) '../../common/css/common.less';
    @module: m-artice-read;
    .app-body {
        padding-top: 0;
    }
    .@{module} {
        position: relative;
        padding-top: 60px;
        padding-bottom: 80px;
        .default_backgroud_7;
        & &-wrap {
            position: relative;
            width: 100%;
        }
    }
    .@{module}__head {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 60px;
        .default_backgroud_13;
        & .head-wrap {
            position: relative;
            .default_width_720;
            .default_mar_auto;
            & .head-title {
                height: 60px;
                line-height: 60px;
                & a {
                    .default_color_3;
                    .default_font_size_2;
                }
            }
            & .head-btns {
                position: absolute;
                top: 0;
                right: 0;
                height: 60px;
                & .btn-item {
                    position: relative;
                    float: left;
                    width: 40px;
                    height: 60px;
                    .default_pointer;
                    &:hover  {
                        background-color: #000;
                    }
                }
                & .btn-mark {
                    .skin_icon_article-mark;
                    &:hover {
                        .skin_icon_article-mark_on;
                    }
                    &.z-active {
                        .skin_icon_article-mark_active;   
                    }
                }
                & .btn-menu {
                    .skin_icon_article-menu;
                    &.z-active {
                        background-color: #000;
                    }
                    &.z-active .btn-more {
                        display: block;
                    }
                    &:hover {
                        .skin_icon_article-menu_on;
                    }
                }
                & .btn-more {
                    display: none;
                }
                & .menu-list {
                    position: absolute;
                    top: 60px;
                    left: 0;
                    width: 200px;
                    max-height: 400px;
                    overflow: hidden;
                    .default_backgroud_3;
                    .default_border_shadow_6;
                    .default_border-r-b-4;
                    & .menu-item {
                        width: 200px;
                        & a {
                            display: block;
                            width: 100%;
                            height: 100%;
                            height: 50px;
                            line-height: 50px;
                            padding-left: 20px;
                            .default_color_2;
                            .default_font_size_2;
                        }
                        &.z-active a {
                            .default_color_1;
                            .default_backgroud_14;
                        }
                        &:hover a{
                            .default_color_1;
                        }
                    }
                }
            }
        }
    }
    .@{module}__content {
        .default_width_720;
        .default_mar_auto;
        .default_border-r-4;
        margin-bottom: 50px;
        & .content__read{
            .default_backgroud_3;
            .default_border-r-b-4;
            & .content__read-title {
                padding: 40px;
                .default_font_size_6;
                .default_color_1;
                .default_font_bolder;
            }
            & .content__read-text {
                padding: 0 40px 50px;
                & p {
                    width: 100%;
                    line-height: 1.75rem;
                    // margin-bottom: 20px;
                    .default_font_size_3;
                    .default_color_10;
                }
                & img {
                    max-width: 100%;
                    width: auto;
                    // margin-bottom: 10px;
                }
            }
            & .content__read-switch {
                overflow: hidden;
                height: 80px;
                padding: 25px 0;
                .default_border-t-5;
                .default_center;
                & .switch-item {
                    .default_disline;
                    width: 49%;
                    & a {
                        display: block;
                        width: 100%;
                        height: 30px;
                        line-height: 30px;
                        text-decoration: none;
                        .default_color_2;
                        .default_font_size_7;
                        .default_center;
                        &:hover {
                            .default_color_1;
                        }
                    }
                    & .switch-item {
                        .default_border-rr-5;
                    }
                }
            }
            & .content__read-author {
                height: 80px;
                padding-top: 30px;
                .default_center;
                .default_border-t-5;
                & .author-img {
                    width: 20px;
                    height: 20px;
                    overflow: hidden;
                    margin-right: 10px;
                    vertical-align: middle;
                    .default_disline;
                    .default_border-r-50;
                    .default_backgroud_5;
                }
                & .author-name {
                    height: 20px;
                    line-height: 20px;
                    vertical-align: middle;
                    .default_disline;
                    .default_color_2;
                    .default_font_size_2;
                }
            }
        }
    }
    .@{module}__comment {
        .default_width_720;
        .default_mar_auto;
        margin-bottom: 30px;
        & .comment-header {
            width: 100%;
            margin-bottom: 20px;
            .default_font_size_5;
            .default_color_1;
            .default_backgroud_7;
            & span {
                .default_font_family_bolder;
                .default_font_size_6;
                .default_color_1;
            }
        }
        & .comment-content {
            width: 100%;
            .default_border-r-4;
        }
    }
    .@{module}__speak {
        .default_width_720;
        .default_mar_auto;
        & .speak-header {
            width: 100%;
            margin-bottom: 20px;
            .default_backgroud_7;
            .default_font_size_5; 
            .default_color_1;
        }
        & .speak-form {
            padding: 20px;
            height: 140px;
            width: 100%;
            .default_border-r-4;
            .default_backgroud_3;
            & .speak-form-left,
            & .speak-form-right {
                position: relative;
                float: left;
            }
            & .speak-form-left {
                width: 500px;
                margin-right: 20px;
                .default_backgroud_6;
                .default_border-13;
                .default_border-r-4;
                & input, 
                & textarea {
                    width: 100%;
                    height: 100%;
                    .default_color_2;
                    .default_font_size_2;
                }
            }
            & .speak-form-right {
                width: 160px;
                height: 100px;
            }
            & .speak-form-input {
                display: none;
                padding: 11px 20px;
                height: 40px;
            }
            & .speak-form-textarea {
                padding: 20px;
                height: 100px;
            }
            & .speak-form-icon {
                float: left;
                margin-top: 10px;
                .default_font_size_1;
                .default_color_3;
                .default_pointer;
                & span,
                & em {
                    .default_disline;
                    vertical-align: middle;
                }
                & em {
                    width: 12px;
                    height: 12px;
                }
            }
            & .speak-form-fabulous {
                margin-right: 15px;
                & em {
                    .skin_icon_read-3;
                    &:hover {
                        .skin_icon_read-3_on;
                    }
                }
                &.z-active em {
                    .skin_icon_read-3_on;
                }
            }
            & .speak-form-comment {
                & em {
                    .skin_icon_read-2;
                    &:hover {
                        .skin_icon_read-2_on;
                    }
                }
            }
            & .speak-form-share {
                position: relative;
                float: right;
                width: 16px;
                height: 16px;
                .skin_icon_read-1;
                & .cpm_sub_more {
                    width: 150px;
                    top: -30px;
                    transform: translate(0, -100%);
                    border-radius: 4px 4px 4px 0;
                }
                &:hover {
                    .skin_icon_read-1_on;
                }
                &.z-active .cpm_sub_more {
                    display: block;
                }
            }
            & .speak-form-btn,
            & .speak-form-first {
                width: 70px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                .default_color_2;
                .default_font_size_2;
                .default_border-r-4;
                .default_backgroud_13;
                .default_pointer;
                &:hover {
                    .default_color_1;
                }
            }
            & .speak-form-btn {
                position: absolute;
                bottom: 0;
                left: 0;
            }
            & .speak-form-first {
                float: left;
                display: none;
                margin-right: 20px;
                .default_backgroud_6;
            }
        }
        
        &.z-small {
            position: fixed;
            bottom: 0;
            left: 0;
            & .speak-header {
                display: none;
            }
            & .speak-form {
                .default_border-r-n;
            }
        }
        &.z-hide{
            & .speak-form {
                .default_backgroud_13;
            }
            & .speak-header {
                display: none;
            }
            & .speak-form {
                height: 60px;
                padding: 10px 20px;
            }
            & .speak-form-right {
                height: 40px;
            }
            & .speak-form-btn {
                display: none;
            }
            & .speak-form-textarea {
                display: none;
            }
            & .speak-form-input {
                display: block;
            }
            & .speak-form-icon {
                margin-top: 14px;
            }
            & .speak-form-share {
                margin-top: 12px;
                & .cpm_sub_more {
                    top: -25px;
                }
            }
            & .speak-form-fabulous {
                margin-top: 12px;
            }
            & .speak-form-comment {
                margin-top: 12px;
            }
            & .speak-form-left {
                width: 450px;
                margin-right: 10px;
            }
            & .speak-form-right {
                width: 210px;
            }
            & .speak-form-first {
                display: block;
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="app-body">
    <div class="m-artice-read" :class="{'z-scan': isScan}">
    <div class="m-artice-read-wrap">
        <div class="m-artice-read__head">
            <div class="head-wrap">
                <div class="head-title"><a :href="'./article.intro.html?catalog_id=' + catalog.info.catalog_id">
                    {{ isScan ?　chapter_bat.chapter_title : catalog.info.catalog_title}}
                </a></div>
                <div class="head-btns">
                    <div v-if="chapter.info.owner != 1" class="btn-item btn-mark" :class="{'z-active': catalog.info.is_collected == 1}" @click="mark(catalog_id)"></div>
                    <div class="btn-item btn-menu j-close-1" @click="selctEnter">
                        <div class="btn-more menu-list" ref="chapterMenu">
                        <div class="menu-wrap">
                            <div class="menu-item" 
                                v-for="item in chapter.lists"
                                :class="{'z-active': chapter_id == item.chapter_id}"
                                v-if="item.chapter_status == 0"
                            ><a :href="'article.read.html?catalog_id='+ catalog_id +'&chapter_id=' + item.chapter_id">
                                {{item.chapter_title}}
                            </a></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="m-artice-read__content">
            <div class="content__read">
                <div class="content__read-title">{{isScan ?　chapter_bat.chapter_title : chapter.info.chapter_title}}</div>
                <div class="content__read-text" v-html="isScan ?　chapter_bat.chapter_content : chapter.info.chapter_content">
                </div>
                <div v-if="!isScan && (chapter.pre_id || chapter.next_id)" class="content__read-switch">
                    <div v-if="chapter.pre_id" class="switch-item switch-left"><a :href="'./article.read.html?catalog_id='+ catalog_id +'&chapter_id='+chapter.pre_id">上一篇</a></div>
                    <div v-if="chapter.next_id" class="switch-item switch-right"><a :href="'./article.read.html?catalog_id='+ catalog_id +'&chapter_id='+chapter.next_id">下一篇</a></div>
                </div>
                <div v-if="catalog.info.user" class="content__read-author"><a target="_black" :href="'author.work.html?user_id=' + catalog.info.user.uid">
                    <div class="author-img">
                        <img :src="catalog.info.user && catalog.info.user.avatar_url" />
                    </div>
                    <div class="author-name">{{catalog.info.user && catalog.info.user.nick_name}}</div>
                </a></div>
            </div>
        </div>
        <div v-show="!isScan && comment.count != 0" class="m-artice-read__comment">
            <div class="comment-header">
                <span>{{comment.count}}</span> 条评论
            </div>
            <div class="comment-content">
                <ArticleCommentDom />
            </div>
        </div>
        <div v-if="!isScan" class="m-artice-read__speak">
            <div class="speak-header">评论</div>
            <div class="speak-form">
                <div class="speak-form-left speak-form-input">
                    <input type="text" v-model="comment_con" placeholder="好作品全取决于你的鞭策..." spellcheck="false" />
                </div>
                <div class="speak-form-left speak-form-textarea">
                    <textarea @blur="textareaBlur"  placeholder="发表评论..." v-model="comment_con"></textarea>
                </div>
                <div class="speak-form-right">
                    <div class="speak-form-first" @click="addComment">发送</div>
                    <div class="speak-form-icon speak-form-fabulous" @click="addPraise" :class="{'z-active': chapter.info.praised == 1}">
                        <em></em>
                        <span>{{chapter.info.praise_count}}</span>
                    </div>
                    <div class="speak-form-icon speak-form-comment">
                        <em></em>
                        <span>{{chapter.info.comment_count}}</span>
                    </div>
                    <div class="speak-form-icon speak-form-share j-close-1" @click="selctEnter">
                        <div class="cpm_sub_more z-left">
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
                    <div class="speak-form-btn" @click="addComment">发送</div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <FooterDom />
    <SideMenu />
    <Bubble />
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
            comment_con: '',

            isScan: false,
            chapter_bat: {}
        }
    },
    computed: mapState({
        userInfo: state => state.user.info,
        catalog: state => state.opus.catalog,
        chapter: state => state.opus.chapter,
        comment: state => state.opus.comment,
        index (){
            var index;
            for (var i = 0, len = this.$store.state.opus.chapter.lists.length; i < len; i++) {
                if (this.$store.state.opus.chapter.lists[i].chapter_id == this.chapter_id) {
                    index = i;
                    break;
                }
            }
            return index;
        }
    }),
    methods: {
        shareFn (app, e){
            $(e.currentTarget).parents('.j-close-1').removeClass('z-active');
            // 分享
            var option = {
                app: app,
                url: window.location.href,
                title: this.catalog.info.catalog_title,
                pic: this.catalog.info.catalog_cover_url,

                desc: this.catalog.info.catalog_desc,
                summary: this.catalog.info.catalog_desc,
                showcount: 0,
                source: '',
                sourceUrl: '',
                site: '',
            }
            this.$share.shareToAPP(option);
        },
        selctEnter (e){
            $('.j-close-1').removeClass('z-active');
            $(e.currentTarget).addClass('z-active');
        },
        resize () {
            var left = $('.m-artice-read__content').offset().left - $(window).scrollLeft();
            $('.m-artice-read__speak').css({
                left: left
            })
        },
        speak (init){
            var top = $('.m-artice-read__content').height() + 50;
            var scrollTop = $(window).scrollTop();
            var height = $(window).height();
            if (top < scrollTop + height) {
                $('.m-artice-read__speak').removeClass('z-small z-hide');
            } else {
                $('.m-artice-read__speak').addClass('z-small z-hide');
            }
        },
        textareaBlur (){
            this.speak();
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

        // 获取文章详情
        getChapterDetail (){
            this.$store.dispatch('opus_getChapterDetail', {
                chapterId: this.chapter_id
            }).then( res => {
                // todo
                
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },

        // 获取文章目录详情
        getCatalogDetail (){
            this.$store.dispatch('opus_getCatalogDetail', {
                catalogId: this.catalog_id
            }).then( res => {
                // todo
                
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },

        // 新增评论
        addComment (){
            // 判断登陆
            if (!this.userInfo.isLogin) {
                return this.$store.dispatch('bubble_fail', {
                    ret: -11,
                    msg: '未登录，请登陆后操作'
                });
                return false;
            }

            this.$eventHub.$emit('article.comment.addComment', {
                comment: this.comment_con,
                chapter_id: this.chapter_id
            });
            this.$eventHub.$on('article.comment.refresh', res => {
                this.comment_con = '';
                this.getChapterDetail();
            })
        },

        // 文章点赞
        addPraise (){
            // 判断登陆
            if (!this.userInfo.isLogin) {
                return this.$store.dispatch('bubble_fail', {
                    ret: -11,
                    msg: '未登录，请登陆后操作'
                });
                return false;
            }

            this.$store.dispatch('opus_addPraise', {
                "catalogId": this.catalog_id,
                "chapterId": this.chapter_id
            }).then( res => {
                this.getChapterDetail();
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },  

        // 取消收藏
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

        // 收藏
        addFavorites (catalogId){
            this.$store.dispatch('opus_addFavorites', {
                catalogId: catalogId
            }).then( res => {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-default',
                        msg: '《'+ this.catalog.info.catalog_title +'》已加入收藏'
                    }
                })
                this.getCatalogDetail();

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },

        // 收藏目录
        mark (catalogId){
            // 判断登陆
            if (!this.userInfo.isLogin) {
                return this.$store.dispatch('bubble_fail', {
                    ret: -11,
                    msg: '未登录，请登陆后操作'
                });
                return false;
            }

            if (this.catalog.info.is_collected == 1) {
                this.delFavorites(catalogId);
            } else {
                this.addFavorites(catalogId);
            }
        }
    },
    updated (){
        if (this.menuShow) {
            if (this.chapterMenu) {
                this.chapterMenu.refresh();
            } else {
                this.chapterMenu = new this.$iScroll(this.$refs.chapterMenu, {
                    bounce: false,
                    mouseWheel: true
                });
            }
        }
        this.speak()
    },
    mounted (){
        // 获取url的参数
        this.catalog_id = this.$url.getUrlParam('catalog_id');
        this.chapter_id = this.$url.getUrlParam('chapter_id');
        this.isScan = this.$url.getUrlParam('isScan') == 1;

        if (this.isScan) {
            var chapaterEdit_edit = this.$version.chapaterEdit_edit;
            var key = chapaterEdit_edit.key + '_' + this.catalog_id + '_' + this.chapter_id;
            this.chapter_bat = this.$cache.getStore(key, chapaterEdit_edit.version);
        }

        this.resize();
        this.speak(true);
        $(window).on('resize', () => (this.resize() && this.speak()));
        $(window).on('scroll', () => {
            this.speak()
            this.resize();
        });

        // 获取文章目录详情
        this.getCatalogDetail();

        // 获取文章列表
        this.getChapterList();

        // 获取文章详情
        this.getChapterDetail();

        $('body').on('click', e => {
            var node = $(e.target);
            if (!node.hasClass('j-close-1') && node.parents('.j-close-1').length == 0) {
                $('.j-close-1').removeClass('z-active');
            }
        })
    }
}
</script>

