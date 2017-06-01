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
        .default_backgroud_5;
        & &-wrap {
            position: relative;
            width: 100%;
        }
    }
    .@{module}__head {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        .default_backgroud_13;
        & .head-wrap {
            .default_width_720;
            .default_mar_auto;
        }
    }
    .@{module}__content {
        .default_width_720;
        .default_mar_auto;
        .default_border-r-4;
        margin-bottom: 40px;
        & .content__header {
            width: 100%;
            height: 50px;
            line-height: 50px;
            padding-left: 30px;
            .default_backgroud_7;
            & h1,
            & p {
                float: left;
                height: 50px;
                line-height: 50px;
                .default_font_size_2;
                .default_color_2;
            }
            & h1 {
                margin-left: 5px;
                .default_color_1;
            }
        }
        & .content__read{
            .default_backgroud_2;
            & .content__read-text {
                padding: 40px 30px;
                & p {
                    width: 100%;
                    line-height: 1.75rem;
                    margin-bottom: 20px;
                    .default_font_size_3;
                    .default_color_2;
                }
                & img {
                    max-width: 100%;
                    width: auto;
                    margin-bottom: 10px;
                }
            }
            & .content__read-switch {
                overflow: hidden;
                height: 70px;
                padding: 20px 0;
                .default_border-t-14;
                .default_border-b-14;
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
                        .default_border-rr-4;
                    }
                }
            }
            & .content__read-author {
                height: 70px;
                padding-top: 20px;
                .default_center;
                & .author-img {
                    width: 30px;
                    height: 30px;
                    overflow: hidden;
                    margin-right: 10px;
                    vertical-align: middle;
                    .default_disline;
                    .default_border-r-50;
                    .default_backgroud_5;
                }
                & .author-name {
                    height: 30px;
                    line-height: 30px;
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
            height: 50px;
            line-height: 50px;
            padding-left: 20px;
            .default_font_size_2;
            .default_color_2;
            .default_backgroud_7;
            & span {
                .default_font_family_bolder;
                .default_font_size_7;
                .default_color_7;
            }
        }
    }
    .@{module}__speak {
        .default_width_720;
        .default_mar_auto;
        & .speak-header {
            width: 100%;
            height: 50px;
            line-height: 50px;
            padding-left: 20px;
            .default_backgroud_7;
            .default_font_size_2; 
            .default_color_2;
        }
        & .speak-form {
            padding: 30px;
            height: 160px;
            width: 100&;
            .default_backgroud_6;
            & .speak-form-left,
            & .speak-form-right {
                position: relative;
                float: left;
            }
            & .speak-form-left {
                width: 450px;
                margin-right: 20px;
                .default_backgroud_4;
                & input, 
                & textarea {
                    .default_color_4;
                    .default_font_size_2;
                }
            }
            & .speak-form-right {
                width: 150px;
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
                height: 40px;
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
                float: right;
                width: 16px;
                height: 16px;
                .skin_icon_read-1;
                &:hover {
                    .skin_icon_read-1_on;
                }
            }
            & .speak-form-btn {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 70px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                .default_color_2;
                .default_font_size_2;
                .default_border-r-4;
                .default_backgroud_2;
                .default_pointer;
                &:hover {
                    .default_color_1;
                }
            }
        }
        
        &.z-small {
            position: fixed;
            bottom: 0;
            left: 0;
            & .speak-header {
                display: none;
            }
        }
        &.z-hide{
            & .speak-header {
                display: none;
            }
            & .speak-form {
                height: 60px;
                overflow: hidden;
                padding: 10px 30px;
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
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div>
    <div class="m-artice-read" :class="{'z-scan': isScan}">
    <div class="m-artice-read-wrap">
        <div class="m-artice-read__head">
            <div class="head-wrap">
                <div class="head-title">
                    <h1>{{ isScan ?　chapter_bat.chapter_title : chapter.info.chapter_title}}</h1>
                </div>    
            </div>
        </div>
        <div class="m-artice-read__content">
            <div class="content__read">
                <div class="content__read-text" v-html=" isScan ?　chapter_bat.chapter_content : chapter.info.chapter_content">
                </div>
                <div v-if="pre || next" class="content__read-switch">
                    <div v-if="pre" class="switch-item switch-left"><a :href="'./article.read.html?catalog_id='+ catalog_id +'&chapter_id='+chapter.lists[index-1].chapter_id">上一篇</a></div>
                    <div v-if="next" class="switch-item switch-right"><a :href="'./article.read.html?catalog_id='+ catalog_id +'&chapter_id='+chapter.lists[index+1].chapter_id">下一篇</a></div>
                </div>
                <div class="content__read-author">
                    <div class="author-img">
                        <img :src="catalog.info.user && catalog.info.user.avatar_url" />
                    </div>
                    <div class="author-name">{{catalog.info.user && catalog.info.user.nick_name}}</div>
                </div>
            </div>
        </div>
        <div v-if="!isScan" class="m-artice-read__comment">
            <div class="comment-header">
                <span>{{comment.count}}</span> 条评论
            </div>
            <div class="comment-content">
                <ArticleCommentDom />
            </div>
        </div>
        <div v-if="!isScan" class="m-artice-read__speak">
            <div class="speak-header">参与评论</div>
            <div class="speak-form">
                <div class="speak-form-left speak-form-input">
                    <input @focus="inputFocus" type="text" placeholder="好作品全取决于你的鞭策..." />
                </div>
                <div class="speak-form-left speak-form-textarea">
                    <textarea @blur="textareaBlur"  placeholder="发表评论..." v-model="comment_con"></textarea>
                </div>
                <div class="speak-form-right">
                    <div class="speak-form-icon speak-form-fabulous" @click="addPraise">
                        <em></em>
                        <span>{{chapter.info.praise_count}}</span>
                    </div>
                    <div class="speak-form-icon speak-form-comment">
                        <em></em>
                        <span>{{chapter.info.comment_count}}</span>
                    </div>
                    <div class="speak-form-icon speak-form-share"></div>
                    <div class="speak-form-btn" @click="addComment">发送</div>
                </div>
            </div>
        </div>
    </div>
    </div>
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
        },
        next () {
            if (this.$store.state.opus.chapter.lists.length == 1) {
                return false;
            }
            var vai = false;
            for (var i = 0, len = this.$store.state.opus.chapter.lists.length; i < len; i++) {
                if (this.$store.state.opus.chapter.lists[i].chapter_id == this.chapter_id && i != len - 1) {
                    vai = true;
                }
            }
            return vai;
        },
        pre () {
            if (this.$store.state.opus.chapter.lists.length == 1) {
                return false;
            }
            var vai = false;
            for (var i = 0, len = this.$store.state.opus.chapter.lists.length; i < len; i++) {
                if (this.$store.state.opus.chapter.lists[i].chapter_id == this.chapter_id && i != 0) {
                    vai = true;
                }
            }
            return vai;
        }
    }),
    methods: {
        resize () {
            var left = $('.m-artice-read-wrap').offset().left;
            $('.m-artice-read__speak').css({
                left: left + 280
            })
        },
        speak (init){
            var top = $('.m-artice-read__comment').offset().top;
            var scrollTop = $(window).scrollTop();
            var height = $(window).height();
            if (top < scrollTop + height) {
                $('.m-artice-read__speak').removeClass('z-small z-hide');
            } else {
                $('.m-artice-read__speak').addClass('z-small z-hide');
            }
        },
        inputFocus (){
            $('.m-artice-read__speak').removeClass('z-hide');
            $('.m-artice-read__speak .speak-form-textarea textarea').focus();
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
        },
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
        $(window).on('scroll', () => this.speak());

        // 获取文章目录详情
        this.getCatalogDetail();

        // 获取文章列表
        this.getChapterList();

        // 获取文章详情
        this.getChapterDetail();  
    }
}
</script>

