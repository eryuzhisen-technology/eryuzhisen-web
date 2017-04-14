<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-artice-better;

.@{module} {
    padding: 0 60px;
    & &-wrap {
        width: 100%;
        height: 100%;
        padding: 30px 0 40px;
        .default_border-b-6;    
    }
    & .@{module}_content {
        margin-bottom: 40px;
        & .content__title {
            margin-bottom: 10px;
            & strong {
                .default_middle;
                .default_font_size_4;
                .default_color_7;
                .default_font_family_bolder;
            }
            & span {
                .default_middle;
                .default_font_size_2;
                .default_color_2;
            }
        }
        & .content__time {
            margin-bottom: 20px;
            .default_font_size_2;
            .default_color_3;
        }
        & .content__img {
            width: 600px;
            height: 300px;
            overflow: hidden;
            margin-bottom: 20px;
            & img {
                width: 100%;
            }
        }
        & .content__text {
            width: 100%;
            line-height: 1.5rem;
            .default_font_size_3;
            .default_color_2;
        }
    }
    & .@{module}_bottom {
        & .bottom__link {
            .default_font_size_3;
            .default_color_5;
            .default_font_family_bolder;
        }
    }
}
</style>

<!-- html代码 -->
<template>
<div class="c-artice-better">
<div class="c-artice-better-wrap">
    <div class="c-artice-better_content">
        <div class="content__title"><strong>{{data.title}}</strong><span>·{{data.title}}</span></div>
        <div class="content__time">{{data.time}}</div>
        <div class="content__img"><img :src="data.img" /></div>
        <div class="content__text">{{data.text}}</div>
    </div>
    <div class="c-artice-better_bottom">
        <a class="bottom__link" href="#none">阅读全文</a>
    </div>
</div>
</div>
</template>

<script>
export default {
    props: ['data']
}
</script>

