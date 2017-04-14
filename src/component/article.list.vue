<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    @module: c-artice-list;

    .@{module} {
        width: 100%;
        padding: 0 60px;
        .default_backgroud_3;
        & &-wrap {
            display: table;
            width: 100%;
            height: 220px;
            .default_border-b-6;
        }
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
                margin-bottom: 16px;
                height: 30px;
                & .top-img {
                    float: left;
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    .default_border-r-50;
                    .default_backgroud_5;
                    overflow: hidden;
                }
                & .top-name{ 
                    float: left;
                    padding-top: 7px;
                    .default_color_3;
                    .default_font_size_3;
                }
                & .top-more {
                    position: absolute;
                    top: 5px;
                    right: 0;
                    width: 20px;
                    height: 20px;
                    display: none;
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
                    height: 24px;
                    margin-bottom: 14px;
                    .default_color_5;
                    .default_font_size_4;
                    & .tag {
                        float: left;
                        margin-right: 10px;
                        .default_middle;
                    }
                    & .tit {
                        .default_font_size_4;
                        .default_color_7;
                        .default_font_family_bolder;
                        .default_middle;
                    }
                    & .new {
                        .default_font_size_2;
                        .default_color_7;
                        .default_middle;
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
                height: 20px;
                overflow: hidden;
                .default_font_size_2;
                & .bottom-fabulous {
                    float: left;
                    .default_color_3;
                    & em {
                        width: 20px;
                        height: 20px;
                        margin-right: 6px;
                        .default_disline;
                        .default_middle;
                        .skin_icon_zhan;
                    }
                    & span {
                        .default_color_3;
                        .default_font_size_2;
                        .default_middle;
                    }
                }
                & .bottom-comment {
                    float: left;
                    margin-left: 20px;
                    margin-right: 30px;
                    .default_color_3;
                    & em {
                        width: 20px;
                        height: 20px;
                        margin-right: 6px;
                        .default_disline;
                        .default_middle;
                        .skin_icon_liu;
                    }
                    & span {
                        .default_color_3;
                        .default_font_size_2;
                        .default_middle;
                    }
                }
                & .bottom-manger-add {
                    float: left;
                    height: 20px;
                    line-height: 20px;
                    margin-right: 20px;
                    .default_color_3;
                    .default_font_size_2;
                    .default_pointer;
                }
                & .bottom-manger-edit {
                    float: left;
                    height: 20px;
                    line-height: 20px;
                    margin-right: 20px;
                    .default_color_3;
                    .default_font_size_2;
                    .default_pointer;
                }
                & .bottom-manger-remove {
                    float: left;
                    height: 20px;
                    line-height: 20px;
                    margin-right: 20px;
                    .default_color_3;
                    .default_font_size_2;
                    .default_pointer;
                }
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
        & a {
            text-decoration: none;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-artice-list">
<div class="c-artice-list-wrap">
    <div class="list-left">
        <div class="top">
            <div class="top-img" :style="{backgroundImage: 'url(' + data.avatar_url + ')'}"></div>
            <div class="top-name">{{data.user.nick_name}}</div>
            <div class="top-more" @click="subMoreSwitch">
                <div v-show="subMoreShow" class="m-sub-more cpm_sub_more">
                    <div class="item">删除</div>
                    <div class="item">删除</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-title">
                <div class="tag cpm_tag_man">{{data.category_title}}</div>
                <span class="tit">{{data.catalog_title}}</span>
                <span v-if="data.isNew" class="new"> · new</span>
            </div>
            <div class="content-text">{{data.catalog_desc}}</div>
        </div>
        <div class="bottom">
            <div class="bottom-fabulous"><em></em><span>{{data.praise_count}}</span></div>
            <div class="bottom-comment"><em></em><span>{{data.comment_count}}</span></div>
            <div v-if="data.isManger" class="bottom-manger-add">添加章节</div>
            <div v-if="data.isManger" class="bottom-manger-edit">修改信息</div>
            <div v-if="data.isManger" class="bottom-manger-remove" @click="remove">删除作品</div>
        </div>
    </div>
    <div class="list-right">
        <img :src="data.catalog_cover_url" />
    </div>
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
        },
        remove (event){
            event.stopPropagation();
            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'warn',
                warn: {
                    title: '确定要删除?',
                    content: '删除后将无法恢复，请谨慎处理'
                },
            })
        }
    }
}
</script>

