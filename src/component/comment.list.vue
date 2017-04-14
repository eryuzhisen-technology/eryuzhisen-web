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
        .default_color_3;
    }
    & .top__detail {
        float: right;
        height: 30px;
        line-height: 30px;
        & a {
            .default_font_size_2;
            .default_color_3;
        }
    }
}
.@{module}__comment {
    padding-left: 40px;
    margin-bottom: 20px;
    .default_color_2;
    .default_font_size_3;
    & .comment__top {
        margin-bottom: 20px;
        .default_color_3;
        & strong {
            .default_color_6;
            .default_font_family_bolder;
        }
        & span {
            .default_color_5;
        }
    }
    & .comment__body {
        line-height: 1.5rem;
        margin-bottom: 20px;
    }
    & .comment__bottom {
        line-height: 1.5rem;
        padding: 20px 30px;
        .default_border-r-4;
        .default_border-5;
        .default_color_3;
        .default_font_size_3;
        .default_backgroud_3;
    }
}
.@{module}__form {
    padding-left: 40px;
    overflow: hidden;
    & .form__top {
        height: 14px;
        margin-bottom: 30px;
        .default_font_size_2;
        .default_color_3;
    }
    & .form__top__jubao {
        float: left;
        .default_pointer;
    }
    & .form__top__record {
        float: right;
        .default_pointer;
        .default_color_7;
    }
    & .form__body {
        width: 100%;
        overflow: hidden;
    }
    & .form__body__write {
        width: 560px;
        height: 80px;
        padding: 20px 30px;
        margin-bottom: 20px;
        .default_color_4;
        .default_font_size_3;        
    }
    & .form_body__commit {
        float: right;
        width: 80px;
        height: 40px;
        line-height: 40px;
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
        <div class="top__detail"><a href="#none">查看详情</a></div>
    </div>
    <div class="c-comment-info__comment">
        <div class="comment__top" v-html="data.title"></div>
        <div class="comment__body">{{data.comment}}</div>
        <div v-if="data.record" class="comment__bottom">{{data.record}}</div>
    </div>
    <div class="c-comment-info__form">
        <div class="form__top">
            <div class="form__top__jubao">举报</div>
            <div @click="recordSwitch" class="form__top__record" :class="{'z-warn' : !write}">{{write ? '收起回复' : '回复'}}</div>
        </div>
        <div v-if="write" class="form__body">
            <div class="form__body__write cpm_form_textarea">
                <textarea placeholder="回复TA..."></textarea>
            </div>
            <div class="form_body__commit cpm_button_default">提交</div>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
    props: ['data'],
    data (){
        return {
            write: false
        }
    },
    methods: {
        recordSwitch (){
            this.write = !this.write;
        }
    }
}
</script>

