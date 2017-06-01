<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    @module: c-comment-info;

    .@{module} {
        & &-wrap {
            margin-bottom: 30px;
        }
    }
    .@{module}-list {
        padding: 20px;
        .default_border-b-14;
    }
    .@{module}__top {
        height: 20px;
        overflow: hidden;
        margin-bottom: 10px;
        & .top__img {
            float: left;
            width: 20px;
            height: 20px;
            margin-right: 10px;
            overflow: hidden;
            .default_border-r-50;
            .default_backgroud_5;
        }
        & .top__name {
            float: left;
            height: 20px;
            line-height: 20px;
            .default_font_size_1;
            .default_color_3;
        }
        & .top__time {
            float: right;
            height: 20px;
            line-height: 20px;
            .default_font_size_1;
            .default_color_3;
        }
    }
    .@{module}__content {
        padding-left: 30px;
        line-height: 1.5rem;
        .default_font_size_2;
        .default_color_2;
        & strong {
            .default_color_5;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-comment-info">
<div class="c-comment-info-wrap">
    <div class="c-comment-info-list" v-for="data in message.list">
        <div class="c-comment-info__top">
            <div class="top__img">
                <img :src="data.message.sender.avatar_url || avatar" />
            </div>
            <div class="top__name">{{data.message.sender.nick_name}}</div>
            <div class="top__time">{{data.create_time}}</div>
        </div>
        <div class="c-comment-info__content">
            {{data.message.content.content}}
        </div>
    </div>
    <Empty 
        class="content-empty" 
        v-if="message.count <= 0"
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
import avatar from '../common/images/img/avatar.png';
export default {
    data (){
        return {
            avatar: avatar,
            pageIndex: 1,
            pageSize: 5,
            messageType: 0
        }
    },
    computed: mapState({
        message: state => state.message.message
    }),
    methods: {
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
        }
    },
    mounted (){
        // 获取精选列表
        this.getMessageList();
    }
}
</script>

