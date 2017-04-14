<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-artice-comment;

.@{module} {
    padding: 40px 0;
    .default_border-b-4;
    & .comment__content {
        & .content__top {
            height: 30px;
            margin-bottom: 10px;
            & .top-img {
                float: left;
                width: 30px;
                height: 30px;
                margin-right: 10px;
                .default_border-r-50;
                .default_backgroud_5;
            }
            & .top-name {
                float: left;
                height: 30px;
                line-height: 30px;
                margin-right: 5px;
                .default_color_3;
                .default_font_size_3;
            }
            & .top-time {
                float: left;
                height: 30px;
                line-height: 30px;
                .default_color_3;
                .default_font_size_1;
            }
        }
        & .content__body {
            padding-left: 40px;
            line-height: 1.5rem;
            margin-bottom: 40px;
            .default_color_2;
            .default_font_size_3;
        }
        & .content__bottom {
            padding-left: 40px;
            height: 20px;
            overflow: hidden;
            .default_color_3;
            .default_font_size_3;
            & .bottom-jubao {
                float: left;
                height: 20px;
                line-height: 20px;
                .default_pointer;
            }
            & .bottom-time {
                float: right;
                height: 20px;
                line-height: 20px;
                margin-right: 20px;
            }
            & .bottom-fabulous {
                float: right;
                height: 20px;
                margin-right: 20px;
                & span {
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                    .default_disline;
                    .default_middle;
                    .skin_icon_fabulous;
                    &.z-on {
                        .skin_icon_fabulous_on;
                    }
                }
                & strong {
                    .default_disline;
                    .default_middle;
                }
                .default_pointer;
            }
            & .bottom-record {
                float: right;
                height: 20px;
                line-height: 20px;
                .default_color_7;
                .default_center;
                .default_pointer;
            }
        }
    }
    & .comment__record {
        & .record__item {
            padding: 40px 0 0 40px;
            & .item-text {
                line-height: 1.5rem;
                margin-bottom: 40px;
                .default_color_2;
                .default_font_size_3;
                & span {
                    .default_color_6;
                }
                & strong {
                    .default_color_8;
                }
            }
            & .item-bottom {
                overflow: hidden;
                .default_color_3;
                .default_font_size_3;
            }
            & .item-bottom-jubao {
                float: left;
                .default_pointer;
            }
            & .item-bottom-time {
                float: right;
                margin-right: 20px;
            }
            & .item-bottom-record {
                float: right;
                .default_pointer;
                .default_color_7;
            }
        }
        & .record__page {
            height: 60px;
            padding: 10px 0 10px 40px;
        }
        & .record__bottom {
            padding: 20px 0 0 40px;
            overflow: hidden;
        }
        & .record__bottom-form {
            float: left;
            width: 460px;
            height: 40px;
            padding: 11px 30px;
            margin-right: 20px;
        }
        & .record__bottom-btn {
            float: left;
        }
    }
}
</style>

<!-- html代码 -->
<template>
<div class="c-artice-comment">
    <div class="comment__content">
        <div class="content__top">
            <div class="top-img"></div>
            <div class="top-name">{{data.name}}</div>
            <!-- <div class="top-time"> · {{data.time}}</div> -->
        </div>
        <div class="content__body">{{data.text}}</div>
        <div class="content__bottom">
            <div class="bottom-jubao">举报</div>
            <div class="bottom-record">回复</div>
            <div class="bottom-time">{{data.time}}</div>
            <div class="bottom-fabulous"><span :class="data.hasFabulous ? 'z-on': ''"></span><strong>{{data.fabulous}}</strong></div>
        </div>
    </div>
    <div class="comment__record">
        <div class="record__item" v-for="item in data.record">
            <div class="item-text" v-html="item.text"></div>
            <div class="item-bottom">
                <div class="item-bottom-jubao">举报</div>
                <div class="item-bottom-record">回复</div>
                <div class="item-bottom-time">50分钟前</div>
            </div>
        </div>
        <Page 
            class="record__page z-small" 
            :count="data.recordNumber" 
            :length="pageSize"
            :index="pageIndex"
            @page_switch="pageSwitch"
        />
        <div class="record__bottom">
            <div class="record__bottom-form cpm_form_input">
                <input type="text" placeholder="回复评论...">
            </div>
            <div class="record__bottom-btn cpm_button_default">提交</div>
        </div>
    </div>
</div>
</template>

<script>
import Page from './page.fenye.vue';
export default {
    data () {
        return {
            pageSize: 5,
            pageIndex: 2,
        }
    },
    props: ['data'],
    components: {
        Page: Page
    },
    mounted () {
        this.$on('recordSwitch', function(index){
            
        })
    },
    methods: {
        pageSwitch (){}
    }
}
</script>

