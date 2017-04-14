<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-author-header;

.@{module} {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 300px;
    padding-top: 60px;
    padding-left: 110px;
    margin-bottom: 20px;
    .user_background_1;
}
.@{module}_left {
    float: left;
    width: 180px;
    height: 180px;
    margin-right: 30px;
    .default_backgroud_4;
    .default_border-r-50;
}
.@{module}_right {
    float: left;
    width: 530px;
    & .name {
        height: 30px;
        overflow: hidden;
        margin-bottom: 20px;
        & .name-text {
            float: left;
            margin-right: 20px;
            .default_color_7;
            .default_font_size_6;
            .default_font_family_bolder;
        }
        & .name-time {
            float: left;
            height: 30px;
            line-height: 30px;
            .default_font_size_3;
            .default_color_1;
        }
    }
    & .btn {
        height: 40px;
        margin-bottom: 20px;
        & .btn-item {
            float: left;
            margin-right: 10px;
        }
        & .btn-item:last-child {
            margin-right: 0;
        }
        & .btn-mark {
            width: 390px;
            &.z-width {
                width: 440px;
            }
        }
        & .btn-share {
            width: 80px;
            position: relative;
        }
        & .btn-more {
            position: relative;
        }
    }
    & .text {
        line-height: 150%;
        .default_color_1;
        .default_font_size_3;
    }
}
</style>

<!-- html代码 -->
<template>
<div class="c-author-header">
    <div class="c-author-header_left"></div>
    <div class="c-author-header_right">
        <div class="name">
            <div class="name-text">{{data.name}}</div>
            <div class="name-time">社区年龄：<span>{{data.time}}</span>年</div>
        </div>
        <div class="btn">
            <div class="btn-item btn-mark" 
                :class="[{cpm_button_weak: data.isMark}, {cpm_button_default: !data.isMark}, {'z-width': !data.hasMore}]" >
                <span v-if="data.type == 'author'">{{ data.isMark ? '取消关注' : '添加关注' }}</span>
                <span v-else>个人设置</span>
            </div>
            <div class="btn-item btn-share cpm_button_default j-close-2" @click="subShareMoreSwitch">
                分享
                <div v-show="subShareMoreShow" class="m-sub-more cpm_sub_more">
                    <div class="item">微信</div>
                    <div class="item">微博</div>
                    <div class="item">QQ 好友</div>
                    <div class="item">QQ 空间</div>
                </div>
            </div>
            <div v-if="data.hasMore" class="btn-item btn-more cpm_button_more j-close-2" @click="subMoreMoreSwitch">
                <div v-show="subMoreMoreShow" class="m-sub-more cpm_sub_more">
                    <div class="item">假如黑名单</div>
                    <div class="item">举报</div>
                </div>
            </div>
        </div>
        <div class="text">{{data.text}}</div>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return  {
            subMoreMoreShow: false,
            subShareMoreShow: false
        }
    },
    props: ['data'],
    methods: {
        subMoreMoreSwitch () {
            this.subMoreMoreShow = !this.subMoreMoreShow;
            this.subShareMoreShow = false;
        },
        subShareMoreSwitch () {
            this.subShareMoreShow = !this.subShareMoreShow;
            this.subMoreMoreShow = false;
        }
    },
    mounted () {
        $('body').on('click', e => {
            var node = $(e.target);
            if (!node.hasClass('j-close-2') && node.parents('.j-close-2').length == 0) {
                this.subMoreMoreShow = false;
                this.subShareMoreShow = false;
            }
        })
    }
}
</script>

