<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    @module: c-artice-menu;

    .@{module} {
        position: relative;
        height: 140px;
        padding: 40px 60px 0;
        .default_backgroud_4;
        & &-wrap {
            width: 100%;
            height: 100%;
            .default_border-b-6;
        }
    }
    .@{module}__top {
        position: relative;
        overflow: hidden;
        margin-bottom: 20px;
        & .top-number {
            float: left;
            margin-right: 20px;
            .default_color_2;
            .default_font_size_2;
        }
        & .top-title {
            float: left;
            margin-right: 5px;
            .default_color_7;
            .default_font_size_4;
        }
        & .top-new {
            float: left;
            margin-top: 5px;
            .default_color_5;
            .default_font_size_3;
        }
        
    }
    .@{module}__bottom {
        .default_color_3;
        .default_font_size_2;
        & .bottom-time {
            float: left;
        }
        & .bottom-follow {
            float: right;
            & em {
                width: 20px;
                height: 20px;
                margin-right: 6px;
                .skin_icon_liu;
                .default_disline;
                .default_middle;
            }
            & span {
                .default_disline;
                .default_middle;
            }
        }
        & .bottom-comment {
            float: right;
            margin-right: 20px;
            & em {
                width: 20px;
                height: 20px;
                margin-right: 6px;
                .skin_icon_zhan;
                .default_disline;
                .default_middle;
            }
            & span {
                .default_disline;
                .default_middle;
            }
        }
    }
    .@{module}__history {
        position: absolute;
        top: 50px;
        right: 0;
        width: 30px;
        height: 30px;
        .default_backgroud_4;
        .skin_icon_history;
        & a {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-artice-menu">
<div class="c-artice-menu-wrap">
    <div class="c-artice-menu__top">
        <div class="top-number">第 {{index+1}} 话</div>
        <div class="top-title">{{data.title}}</div>
        <div v-if="data.isNew" class="top-new">·new</div>
    </div>
    <div class="c-artice-menu__bottom">
        <div class="bottom-time">{{data.time}}</div>
        <div class="bottom-follow"><em></em><span>{{data.fabulous}}</span></div>
        <div class="bottom-comment"><em></em><span>{{data.comment}}</span></div>
    </div>
    <div v-if="data.hasHistory" class="c-artice-menu__history"><a href="#none"></a></div>
</div>
</div>
</template>

<script>
export default {
    props: ['data', 'index']
}
</script>

