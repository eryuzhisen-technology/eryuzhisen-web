<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-article-header;

.@{module} {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 372px;
    padding-top: 60px; 
    padding-left: 110px;
    margin-bottom: 20px;
    .user_background_1;
}
.@{module}_left {
    float: left;
    width: 180px;
    height: 280px;
    margin-right: 30px;
    .default_backgroud_4;
    .default_border-r-4;
    & .left-img {
        width: 100%;
        height: 240px;
    }
    & .left-tag {
        width: 100%;
    }
}
.@{module}_right {
    float: left;
    width: 530px;
    & .right__name {
        overflow: hidden;
    }
    & .right__name-text {
        float: left;
        .default_color_7;
        .default_font_size_6;
        margin-bottom: 20px;
        margin-right: 10px;
    }
    & .right__name-follow,
    & .right__name-comment {
        float: left;
        height: 30px;
        line-height: 30px;
        .default_font_size_3;
        .default_color_1;
    }
    & .right__name-follow {
        margin-right: 30px;
    }
    & .right__btn {
        height: 40px;
        margin-bottom: 12px;
        & .c-sub-more {
            width: 200px;
        }
    }
    & .right__btn-item {
        float: left;
        margin-right: 10px;
    }
    & .right__btn-item:last-child {
        margin-right: 0;
    }
    & .right__btn-mark {
        width: 390px;
        &.z-width {
            width: 440px;
        }
    }
    & .right__btn-share {
        width: 80px;
        position: relative;
    }
    & .right__btn-more {
        position: relative;
    }
    & .right__text-intro {
        margin-bottom: 20px;
        line-height: 1.5rem;
        .default_color_1;
        .default_font_size_3;
    }
    & .right__text-author {
        height: 30px;
        overflow: hidden;
    }
    & .right__text-author__img {
        float: left;
        width: 30px;
        height: 30px;
        margin-right: 10px;
        .default_backgroud_4;
        .default_border-r-50;
    }
    & .right__text-author__name {
        float: left;
        height: 30px;
        line-height: 30px;
        .default_color_2;
        .default_font_size_3;
    }
}
</style>

<!-- html代码 -->
<template>
<div class="c-article-header">
    <div class="c-article-header_left">
        <div class="left-img"></div>
        <div class="left-tag cpm_button_weak">漫画</div>
    </div>
    <div class="c-article-header_right">
        <div class="right__name">
            <div class="right__name-text">{{data.name}}</div>
            <div class="right__name-follow">
                <span>总点赞 · {{data.fabulous}}</span>
            </div>
            <div class="right__name-comment">
                <span>总评论 · {{data.comment}}</span>
            </div>
        </div>
        <div class="right__btn">
            <div class="right__btn-item right__btn-mark" 
                :class="[{cpm_button_weak: data.isMark}, {cpm_button_default: !data.isMark}, {'z-width': !data.hasMore}]" >
                <span v-if="data.type == 'author' || data.type == 'article'">{{ data.isMark ? '取消关注' : '添加关注' }}</span>
                <span v-else>个人设置</span>
            </div>
            <div class="right__btn-item right__btn-share cpm_button_default j-close-2" @click="subShareMoreSwitch">
                分享
                <div v-show="subShareMoreShow" class="c-sub-more cpm_sub_more">
                    <div class="item">微信</div>
                    <div class="item">微博</div>
                    <div class="item">QQ 好友</div>
                    <div class="item">QQ 空间</div>
                </div>
            </div>
            <div v-if="data.hasMore" class="right__btn-item right__btn-more cpm_button_more j-close-2" @click="subMoreMoreSwitch">
                <div v-show="subMoreMoreShow" class="c-sub-more cpm_sub_more">
                    <div class="item">假如黑名单</div>
                    <div class="item">举报</div>
                </div>
            </div>
        </div>
        <div class="right__text">
            <div class="right__text-intro">{{data.text}}</div>
            <div class="right__text-author">
                <div class="right__text-author__img"></div>
                <div class="right__text-author__name">{{data.name}}</div>
            </div>
        </div>
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

