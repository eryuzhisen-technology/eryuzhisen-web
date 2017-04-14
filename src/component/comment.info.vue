<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    @module: c-comment-info;

    .@{module} {
        padding: 0 60px;
        & &-wrap {
            padding: 30px 0;
            .default_border-b-6;
        }
    }
    .@{module}__top {
        height: 30px;
        overflow: hidden;
        margin-bottom: 10px;
        & .top__img {
            float: left;
            width: 30px;
            height: 30px;
            margin-right: 10px;
            .default_border-r-50;
            .default_backgroud_3;
        }
        & .top__name {
            float: left;
            height: 30px;
            line-height: 30px;
            margin-right: 5px;
            .default_font_size_3;
            .default_color_2;
        }
    }
    .@{module}__content {
        padding-left: 40px;
        line-height: 1.5rem;
        margin-bottom: 20px;
        .default_font_size_3;
        .default_color_3;
        & strong {
            .default_color_5;
            .default_font_family_bolder;
        }
    }
    .@{module}__bottom {
        .default_color_3;
        .default_font_size_2;
        & .bottom__time {
            .default_right;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-comment-info">
<div class="c-comment-info-wrap">
    <div class="c-comment-info__top">
        <div class="top__img"></div>
        <div class="top__name">{{data.name}}</div>
    </div>
    <div v-if="data.type == 'push'" class="c-comment-info__content">
        将你的作品 <strong>《{{data.article}}》</strong>推荐到了首页
    </div>
    <div v-else-if="data.type == 'mark'" class="c-comment-info__content">
        关注了你
    </div>
    <div v-else-if="data.type == 'collect'" class="c-comment-info__content">
        收藏了你的 <strong>《{{data.article}}》</strong>！
    </div>
    <div v-else-if="data.type == 'fabulous'" class="c-comment-info__content">
        赞了你的 <strong>《{{data.article}}》</strong>！
    </div>
    <div class="c-comment-info__bottom">
        <div class="bottom__time">{{data.time}}</div>
    </div>
</div>
</div>
</template>

<script>
export default {
    props: ['data']
}
</script>

