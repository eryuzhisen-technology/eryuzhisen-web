<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    .c-artice-comment {
        width: 100%;
        height: 100%;
        & &-wrap {
            width: 100%;
            height: 100%;
            margin-bottom: 30px;
            .default_backgroud_3;
            .default_border-r-4;
        }
    }
    .c-artice-comment-list {
        padding-bottom: 20px;
        .default_border-b-5;
        & .comment__content {
            padding: 20px;
            & .content__top {
                height: 20px;
                margin-bottom: 10px;
                & .top-img {
                    float: left;
                    width: 20px;
                    height: 20px;
                    overflow: hidden;
                    margin-right: 10px;
                    .default_border-r-50;
                    .default_backgroud_5;
                }
                & .top-name {
                    float: left;
                    height: 20px;
                    line-height: 20px;
                    .default_color_3;
                    .default_font_size_1;
                    &:hover {
                        .default_color_1;
                    }
                }
            }
            & .content__body {
                padding-left: 30px;
                line-height: 1.5rem;
                margin-bottom: 20px;
                .default_color_10;
                .default_font_size_2;
            }
            & .content__bottom {
                padding-left: 30px;
                height: 12px;
                overflow: hidden;
                .default_color_3;
                .default_font_size_1;
                & .bottom-jubao {
                    float: left;
                    height: 12px;
                    line-height: 12px;
                    .default_pointer;
                    &:hover {
                        .default_color_1;
                    }
                }
                & .bottom-time {
                    float: right;
                    height: 12px;
                    line-height: 12px;
                    margin-right: 15px;
                }
                & .bottom-fabulous {
                    float: right;
                    height: 12px;
                    margin-right: 12px;
                    & span {
                        float: left;
                        display: block;
                        width: 12px;
                        height: 12px;
                        margin-right: 4px;
                        .skin_icon_fabulous;
                        &:hover {
                            .skin_icon_fabulous_on;
                        }
                    }
                    & strong {
                        float: right;
                        height: 12px;
                    }
                    .default_pointer;
                }
                & .bottom-record {
                    float: right;
                    height: 12px;
                    line-height: 12px;
                    .default_color_2;
                    .default_center;
                    .default_pointer;
                    &:hover {
                        .default_color_1;
                    }
                }
            }
        }
        & .comment__record {
            margin: 0 20px 0 40px;
            padding: 0 20px;
            .default_backgroud_2;
            .default_border-r-4;
            & .record__item {
                padding: 10px 0;
            }
            & .record__item-content {
                & .item-text {
                    & p {
                        line-height: 1.5rem;
                        margin-bottom: 10px;
                        .default_color_10;
                        .default_font_size_2;    
                    }
                    & strong {
                        .default_color_6;
                        .default_font_size_1;
                    }
                    & em {
                        font-style: normal;
                    }
                }
                & .item-bottom {
                    height: 12px;
                    line-height: 12px;
                    overflow: hidden;
                    .default_color_3;
                    .default_font_size_1;
                }
                & .item-bottom-jubao {
                    float: left;
                    .default_pointer;
                    &:hover {
                        .default_color_1;
                    }
                }
                & .item-bottom-time {
                    float: right;
                    margin-right: 15px;
                }
                & .item-bottom-record {
                    float: right;
                    .default_pointer;
                    .default_color_2;
                    &:hover {
                        .default_color_1;
                    }
                }
            }
            & .record__page {
                height: 40px;
                line-height: 40px;
                .default_center;
                .default_font_size_2;
                .default_color_2;
                & span {
                    .default_color_1;
                }
                & strong {
                    .default_color_1;
                    .default_pointer;
                    &:hover {
                        .default_color_fff;
                    }
                }
            }
        }
        & .content__reply {
            padding: 10px 0;
            overflow: hidden;
            & .content__reply-form {
                float: left;
                height: 40px;
                width: 540px;
                margin-right: 10px;
                & input {
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                }
            }
            & .content__reply-btn {
                float: left;
                width: 70px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                .default_color_2;
                .default_font_size_2;
                .default_backgroud_13;
                .default_border-r-4;
                .default_pointer;
                &:hover {
                    .default_color_1;
                }
            }
            &.z-top {
                padding-left: 40px;
                & .content__reply-form {
                    width: 580px;
                }
            }
        }
        &:last-child {
            .default_border-n;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-artice-comment">
<div class="c-artice-comment-wrap">
    <div class="c-artice-comment-list" 
        v-for="(data, _index) in comment.list"
        :data-uid="data.user.uid"
        :data-comment_id="data.comment_id"
    >
        <div class="comment__content">
            <div class="content__top">
            <a :href="'author.work.html?user_id=' + data.user.uid">
                <div class="top-img">
                    <img :src="data.user.avatar_url || avatar" />
                </div>
                <div class="top-name">{{data.user.nick_name}}</div>
            </a></div>
            <div class="content__body">{{data.comment}}</div>
            <div class="content__bottom">
                <div class="bottom-jubao" @click="addReport">举报</div>
                <div class="bottom-record" @click="replayCommit(_index, data.replayIndex == -1 ? -2 : -1)">{{data.replayIndex == -1 ? '收起回复' : '回复'}}</div>
                <div class="bottom-time">{{data.publish_time}}</div>
                <div class="bottom-fabulous" @click="addCommentPraise"><span :class="data.hasFabulous ? 'z-on': ''"></span><strong>{{data.praise_count}}</strong></div>
            </div>
        </div>
        <div class="comment__record">
            <div class="record__item" 
                v-for="(reply, index) in data.replys"
                :data-uid="reply.user.uid"
                :data-comment_id="reply.comment_id"
                :data-index="index"
            >
                <div class="record__item-content">
                    <div class="item-text">
                        <p>
                            <a :href="'author.work.html?user_id=' + reply.user.uid"><strong>{{reply.user.nick_name}}</strong></a> 
                            <em v-if="reply.reply_to_user"> 回复 <a :href="'author.work.html?user_id=' + reply.reply_to_user.uid"><strong>{{reply.reply_to_user.nick_name}}</strong></a></em>：
                            {{reply.comment}}
                        </p>
                    </div>
                    <div class="item-bottom">
                        <div class="item-bottom-jubao" @click="addReport">举报</div>
                        <div class="item-bottom-record" @click="replayCommit(_index, index == data.replayIndex ? -2 : index)">{{ index == data.replayIndex ? '收起回复' : '回复'}}</div>
                        <div class="item-bottom-time">{{reply.publish_time}}</div>
                    </div>
                </div>
                <div class="content__reply"
                    v-if="index == data.replayIndex"
                >
                    <div class="content__reply-form cpm_form_input">
                        <input type="text" placeholder="回复评论..." v-model="comment_con" spellcheck="false" />
                    </div>
                    <div class="content__reply-btn" @click="sendReplyComment(data.comment_id, reply.comment_id)">提交</div>
                </div>
            </div>
            <div class="record__page" v-if="data.replys && data.reply_page_info.total_count - data.replys.length > 0">
                还有<span>{{data.reply_page_info.total_count - data.replys.length}}</span>条回复 <strong @click="getSubCommentMore(data)">点击加载更多</strong>
            </div>
        </div>
        <div class="content__reply z-top"
            v-if="data.replayIndex == -1"
        >
            <div class="content__reply-form cpm_form_input">
                <input type="text" placeholder="回复评论..." v-model="comment_con" spellcheck="false" />
            </div>
            <div class="content__reply-btn" @click="sendComment(data.comment_id)">提交</div>
        </div>
    </div>
    <Empty v-if="comment.count == 0 && resType == 'article'" />
</div>
<Page
    v-if="comment.count > 5"
    :count="comment.count" 
    :length="pageSize"
    :index="pageIndex"
    @page_switch="pageSwitch"
/>

</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
            avatar: this.$defaultData.avatar,

            pageIndex: 1,
            pageSize: 5,

            commentIndex: 1,
            commentSize: 5,

            subPageIndex: 1,
            subPageSize: 2,

            comment_con: ''
        }
    },
    computed: mapState({
        userInfo: state => state.user.info,
        comment: state => state.opus.comment,
        catalog: state => state.opus.catalog.info
        // catalog_id: state => state.opus.catalog.catalog_id,
        // chapter_id: state => state.opus.chapter.chapter_id
    }),
    props: ['type', 'resType'],
    methods: {
        // 子评论回复
        replayCommit (_index, replayIndex){
            this.$store.dispatch('opus_setCommentList', {
                index: _index,
                replayIndex: replayIndex
            })
        },
        // 分页查询
        pageSwitch (pageIndex){
            if (this.pageIndex == pageIndex) {
                return false;
            }
            this.pageIndex = pageIndex;
            this.getCommentList();
        },

        // 获取目录评论
        getCommentList (){
            this.$store.dispatch('opus_getCommentList', {
                "page": this.pageIndex, //页数,默认不传查询第一页
                "pageSize": this.pageSize, //每页数量 默认10
                "pagination": 1, //1表示返回页码相关信息 0 或者 不传 则不返回
                "catalogId": this.catalog_id, //目录id,必填项
                "type": this.type || 2, // 排序类型  1 最热(按评论数,点赞数) 2 最新(时间) 不传表示默认(按照写入的先后顺序)
                "chapterId":  this.chapter_id, //章节id,选填,如果有则获取章节下的评论,否则获取目录的所有评论
                "subPageSize": this.subPageSize // //子评论列表首次显示数量 默认为5
            }).then( res => {
                this.subPageIndex = 1;

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        // 新增评论
        addComment (payload){
            // 判断登陆
            if (!this.userInfo.isLogin) {
                return this.$store.dispatch('bubble_fail', {
                    ret: -11,
                    msg: '未登录，请登陆后操作'
                });
                return false;
            }

            this.$store.dispatch('opus_addComment', {
                "to_comment_id": payload.to_comment_id, //一级评论id,表示针对那条评论的评论(有点绕),类似所有二级评论的父级.没有则表示当前发表的就是一级评论
                "to_reply_comment_id": payload.to_reply_comment_id, //一级评论下的二级回复性评论id,表示针对那条二级评论做的回复('xxx回复了xxx',在列表查询时需要使用),当前发表的是一级评论不需要带此参数.
                "comment": payload.comment, //评论
                "catalog_id": this.catalog_id, //目录id,必填
                "chapter_id": payload.chapter_id //章节id,没有则表示针对目录的评论
            }).then( res => {
                this.$eventHub.$emit('article.comment.refresh');
                this.comment_con = '';
                this.replayIndex = -2;
                this.getCommentList();

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        // 评论点赞
        addCommentPraise (e){
            // 判断登陆
            if (!this.userInfo.isLogin) {
                return this.$store.dispatch('bubble_fail', {
                    ret: -11,
                    msg: '未登录，请登陆后操作'
                });
                return false;
            }

            var comment_id = $(e.currentTarget).parents('.c-artice-comment-list').attr('data-comment_id');
            this.$store.dispatch('opus_addCommentPraise', {
                commentId: comment_id
            }).then( res => {
                this.getCommentList();
                this.$store.dispatch('bubble_success', res);
            }).catch(err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        // 举报
        addReport (e){
            // 判断登陆
            if (!this.userInfo.isLogin) {
                return this.$store.dispatch('bubble_fail', {
                    ret: -11,
                    msg: '未登录，请登陆后操作'
                });
                return false;
            }
            
            var comment_id;
            if ($(e.currentTarget).parents('.record__item').length > 0) {
                comment_id = $(e.currentTarget).parents('.record__item').data('comment_id');
            } else {
                comment_id = $(e.currentTarget).parents('.c-artice-comment-list').data('comment_id');
            }
            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'report',
                report: {
                    content_id: comment_id,
                    content_type: 2
                }
            })
        },
        // 一级评论添加评论
        sendComment (id){
            this.addComment({
                comment: this.comment_con,
                to_comment_id: id
            })
        },
        // 子评论添加评论
        sendReplyComment (comment_id, reply_comment_id){
            this.addComment({
                comment: this.comment_con,
                to_comment_id: comment_id,
                to_reply_comment_id: reply_comment_id
            })
        },
        // 获取子评论
        getSubCommentMore (data){
            this.subPageIndex++;
            this.$store.dispatch('opus_getReplyCommentList', {
                "page": this.subPageIndex, //页数,默认不传查询第一页
                "pageSize": this.subPageSize, //每页数量 默认10
                "pagination": 1, //1表示返回页码相关信息 0 或者 不传 则不返回
                "commentId": data.comment_id //目录id,必填项
            }).then( res => {
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        }
    },
    created () {
        this.$eventHub.$on('article.comment.addComment', payload => {
            this.addComment(payload);
        });
    },
    mounted () {
        // 获取url的参数
        this.catalog_id = this.$url.getUrlParam('catalog_id');
        this.chapter_id = this.$url.getUrlParam('chapter_id');

        // 获取评论
        this.getCommentList();
    }
}
</script>

