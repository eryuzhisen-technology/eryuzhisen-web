<!-- style样式代码 -->
<style lang="less">
@import (reference) '../../common/css/common';
    .c-comment-info {
        & &-wrap {
            margin-bottom: 30px;
            overflow: hidden;
            .default_border-r-4;
        }
    }
    .c-comment-info-list {
        padding: 20px;
        // .default_border-b-13;
        .default_backgroud_3;
        .default_border-b-5;
        // .default_pointer;
        &.z-unread {
            .default_backgroud_4;
        }
        &:last-child {
            .default_border-n;
        }
        .c-comment-info__top {
            height: 20px;
            overflow: hidden;
            margin-bottom: 10px;
            & .top__img {
                float: left;
                width: 20px;
                height: 20px;
                margin-right: 10px;
                .default_border-r-50;
                .default_backgroud_5;
                overflow: hidden;
            }
            & .top__name {
                float: left;
                height: 20px;
                line-height: 20px;
                margin-right: 5px;
                .default_font_size_1;
                .default_color_6;
            }
            & .top__text {
                float: left;
                height: 20px;
                line-height: 20px;
                .default_font_size_2;
                .default_color_2;
            }
            & .top__detail {
                display: none;
                float: right;
                height: 20px;
                line-height: 20px;
                & a {
                    text-decoration: none;
                    .default_font_size_1;
                    .default_color_3;
                    &:hover {
                        .default_color_2;
                    }
                }
            }
            & a {
                .default_color_1;
                &:hover {
                    color: #fff;
                }
            }
        }
        .c-comment-info__comment {
            padding-left: 30px;
            margin-bottom: 20px;
            .default_color_10;
            .default_font_size_2;
            & .comment__body {
                line-height: 1.5rem;
                margin-bottom: 15px;
            }
        }
        .c-comment-info__form {
            padding-left: 30px;
            overflow: hidden;
            & .form__top {
                height: 12px;
                margin-bottom: 15px;
                .default_font_size_1;
                .default_color_3;
            }
            & .form__top__jubao {
                display: none;
                float: left;
                .default_pointer;
                .default_font_size_1;
                .default_color_3;
                &:hover {
                    .default_color_1;
                }
            }
            & .form__top__time {
                float: right;
                margin-right: 15px;
                .default_font_size_1;
                .default_color_3;
            }
            & .form__top__record {
                float: right;
                .default_pointer;
                .default_font_size_1;
                .default_color_2;
                &:hover {
                    .default_color_1;
                }
            }
            & .form__body {
                width: 100%;
                overflow: hidden;
            }
            & .form__body__write {
                float: left;
                width: 570px;
                height: 40px;
                margin-right: 10px;
                & input {
                    height: 40px;
                    padding: 13px 20px;
                }
            }
            & .form_body__commit {
                float: right;
                width: 70px;
                height: 40px;
                line-height: 40px;

                .default_center;
                .default_font_size_2;
                .default_color_2;
                .default_border-r-4;
                .default_pointer;
                .default_backgroud_13;
                &:hover {
                    .default_color_1;
                }
            }
        }
        &:hover {
            & .top__detail {
                display: block;
            }
            & .form__top__jubao {
                display: block;
            }
        }
        &:last-child {
            .default_border-n;
        }
    }

</style>

<!-- html代码 -->
<template>
<div class="c-comment-info">
<div class="c-comment-info-wrap">
    <div class="c-comment-info-list" v-for="(data, index) in message.list" :class="{'z-unread': data.read == 0}">
        <div class="c-comment-info__top">
            <a :href="'author.work.html?user_id=' + data.message.sender.user_id">
            <div class="top__img">
                <img :src="data.message.sender.avatar_url || avatar" />
            </div>
            <div class="top__name">{{data.message.sender.nick_name}}</div>
            </a>
            <div class="top__text" v-html="data.message.content.title"></div>
            <div class="top__detail">
                <a :href="'./article.read.html?catalog_id='+ data.message.arguments.catalog_id +'&chapter_id='+ data.message.arguments.chapter_id" @click.top="">查看详细</a>
            </div>
        </div>
        <div class="c-comment-info__comment">
            <div class="comment__body">{{data.message.content.content}}</div>
            <!-- <div v-if="data.message.content.cite" class="comment__bottom">{{data.message.content.cite}}</div> -->
        </div>
        <div class="c-comment-info__form">
            <div class="form__top">
                <div class="form__top__jubao" @click="addReport(data.message.sender.user_id)">举报</div>
                <div @click.stop="recordSwitch(index, data.msg_id, data.read)" class="form__top__record">{{recordIndex == index ? '收起回复' : '回复'}}</div>
                <div class="form__top__time">{{data.create_time}}</div>
            </div>
            <div v-if="recordIndex == index" class="form__body">
                <div class="form__body__write cpm_form_input">
                    <input type="text" placeholder="回复TA..." v-model="comment" @click.stop="" spellcheck="false" />
                </div>
                <div class="form_body__commit" @click="emitComment(data.message.arguments)" @click.stop="">提交</div>
            </div>
        </div>
    </div>
    <Empty 
        class="content-empty" 
        v-if="message.count <= 0 && message.dataInit"
    />
</div>
<Page 
    :count="message.count" 
    :length="pageSize"
    :index="pageIndex"
    @page_switch="pageSwitch"
/>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data (){
        return {
            avatar: this.$defaultData.avatar,
            recordIndex: -1,
            pageIndex: 1,
            pageSize: 5,

            comment: '',
            messageType: 2
        }
    },
    computed: mapState({
        message: state => state.message.message
    }),
    methods: {
        recordSwitch (index, msg_id, read){
            if (index == this.recordIndex) {
                this.recordIndex = -1;
            } else {
                this.recordIndex = index;    
            }

            // 标记已读
            if (read == 0) {
                this.$store.dispatch('message_markMessage', {
                    msgType: this.messageType,
                    msgId: msg_id
                }).then( res => {
                    this.$eventHub.$emit('getUnreadMessage');
                    this.getMessageList();

                    this.$store.dispatch('bubble_success', res);
                }).catch ( err => {
                    this.$store.dispatch('bubble_fail', err);
                })
            }
        },
        getMessageList (){
            this.$store.dispatch('message_getMessageList', {
                "page": this.pageIndex,
                "pageSize": this.pageSize,
                "pagination": 1,
                "messageType": this.messageType
            }).then( res => {
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
        pageSwitch (pageIndex){
            if (this.pageIndex == pageIndex) {
                return false;
            }
            this.pageIndex = pageIndex;
            this.getMessageList();
        },
        // 举报
        addReport (content_id){
            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'report',
                report: {
                    content_id: content_id,
                    content_type: 3
                }
            })
        },
        // 获取详情
        getMessageDetail (msgId){
            this.$store.dispatch('message_getMessageDetail', {
                "msgId": msgId
            }).then( res => {
                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
        // 新增评论
        addComment (payload){
            this.$store.dispatch('opus_addComment', {
                "to_comment_id": payload.to_comment_id, //一级评论id,表示针对那条评论的评论(有点绕),类似所有二级评论的父级.没有则表示当前发表的就是一级评论
                "to_reply_comment_id": payload.to_reply_comment_id, //一级评论下的二级回复性评论id,表示针对那条二级评论做的回复('xxx回复了xxx',在列表查询时需要使用),当前发表的是一级评论不需要带此参数.
                "comment": this.comment, //评论
                "catalog_id": payload.catalog_id, //目录id,必填
                "chapter_id": payload.chapter_id //章节id,没有则表示针对目录的评论
            }).then( res => {
                this.comment = '';
                this.recordIndex = -2;
                
                this.$store.dispatch('bubble_success', {
                    ret: 0,
                    type: 'top',
                    msg: '消息发送成功！'
                });

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        // 评论
        emitComment (option){
            if (!option) {
                return false;
            }
            this.addComment({
                "to_comment_id": option.to_comment_id, //一级评论下的二级回复性评论id,表示针对那条二级评论做的回复('xxx回复了xxx',在列表查询时需要使用),当前发表的是一级评论不需要带此参数.
                "comment": this.comment, //评论
                "catalog_id": option.catalog_id, //目录id,必填
                "chapter_id": option.chapter_id //
            })
        }
    },
    mounted (){
        // 获取精选列表
        this.getMessageList();
    }
}
</script>

