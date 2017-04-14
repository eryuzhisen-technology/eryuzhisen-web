<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-artice-list;

.@{module} {
    display: table;
    width: 100%;
    height: 220px;
    padding: 0 60px;
    .default_backgroud_4;
    .default_border-b-6;
    & .list-left,
    & .list-right {
        display: table-cell;
        vertical-align: middle;
    }
    & .list-left {  
        width: 660px;
        margin-right: 60px;
        & .top {
            position: relative;
            height: 24px;
            margin-bottom: 20px;
            .default_font_size_2;
            & .top-tag {
                float: left;
                width: 40px;
                height: 24px;
                line-height: 24px;
                margin-left: 10px;
            }
            & .top-tag:first-child { margin-left: 0; }
            & .top-fabulous,
            & .top-comment {
                float: left;
                padding-top: 5px;
                margin-left: 20px;
                .default_color_3;
            }
            & .top-more {
                position: absolute;
                top: 5px;
                right: 0;
                width: 20px;
                height: 20px;
                .skin_icon_more;
                .default_pointer;
                .default_font_size_3;
                .default_color_2;
                &:hover {
                    .default_color_1;
                }
            }
        }
        & .content {
            width: 660px;
            overflow: hidden;
            margin-bottom: 20px;
            & .content-title {
                margin-bottom: 14px;
                .default_color_5;
                .default_font_size_4;
                & .new {
                    .default_font_size_2;
                    .default_color_7;
                }
            }
            & .content-text {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                .default_color_2;
                .default_font_size_3;
            }
        }
        & .bottom {
            height: 40px;
            overflow: hidden;
        }
        & .bottom-btn {
            float: left;
        }
        & .bottom-btn-1 {
            width: 310px;
            margin-right: 10px;
        }
        & .bottom-btn-2 {
            width: 100px;
        }
    }
    & .list-right {
        width: 120px;
    }
    &.z-small .list-left {
        width: 420px;
        & .top-img {
            .default_backgroud_4;
        }
        & .top,
        & .content {
            width: 420px;
        }
    }
}
</style>

<!-- html代码 -->
<template>
<div class="c-artice-list">
    <div class="list-left">
        <div class="top">
            <div class="top-tag cpm_button cpm_button_stress" v-for="item in data.tags">{{item}}</div>
            <div class="top-fabulous">总点赞 · <span>{{data.fabulous}}</span></div>
            <div class="top-comment">总评论 · <span>{{data.comment}}</span></div>
            <div class="top-more" @click="subMoreSwitch">
                <div v-show="subMoreShow" class="m-sub-more cpm_sub_more">
                    <div class="item">删除</div>
                    <div class="item">删除</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-title">
                <span class="text">{{data.title}}</span>
                <span v-if="data.isNew" class="new"> · new</span>
            </div>
            <div class="content-text">{{data.text}}</div>
        </div>
        <div class="bottom">
            <div class="bottom-btn bottom-btn-1 cpm_button_do">添加章节</div>
            <div class="bottom-btn bottom-btn-2 cpm_button_do">修改信息</div>
        </div>
    </div>
    <div class="list-right">
        <img :src="data.img" />
    </div>
</div>
</template>

<script>
export default {
    props: ['data'],
    data () {
        return {
            subMoreShow: false
        }
    },
    methods: {
        subMoreSwitch () {
            this.subMoreShow = !this.subMoreShow;
        }
    }
}
</script>

