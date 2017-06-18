<!-- style样式代码 -->
<style lang="less">
@import (less) url('../../../common/css/mb.common.less');
    .m-author {
        width: 100%;
        height: 100%;
        padding: .3rem;
        & .author-hd {
            position: relative;
            width: 100%;
            height: 3.8rem;
            margin-bottom: .3rem;
            overflow: hidden;
            .default_border-r-10;
            & .content {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                & .content-item {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    &:last-child {
                        left: 100%;
                    }
                }
                & .content-info {
                    padding: 0 .3rem;
                    .default_flex_middle;
                    & .info-left {
                        width: 3.5rem;
                    }
                    & .info-name {
                        margin-bottom: .3rem;
                        .default_color_1;
                        .default_font_size_11;
                        .default_font_bolder;
                    }
                    & .info-time {
                        margin-bottom: .2rem;
                        .default_color_1;
                        .default_font_size_3;
                        .default_font_bolder;
                    }
                    & .info-number {
                        .default_color_1;
                        .default_font_size_3;
                        .default_font_bolder;
                    }
                    & .info-avatar {
                        width: 2.5rem;
                        height: 2.5rem;
                        overflow: hidden;
                        .default_border-r-50;
                    }
                }
                & .content-intro {
                    padding: .6rem .5rem;
                    overflow: hidden;
                    .default_flex__v_middle;
                    & .text {
                        line-height: 1.5em;
                        .default_color_1;
                        .default_font_size_3;
                    }
                }
            }
            & .index {
                position: absolute;
                left: 0;
                bottom: .4rem;
                width: 100%;
                .default_flex_center;
                & .index-item {
                    width: .1rem;
                    height: .1rem;
                    opacity: .3;
                    overflow: hidden;
                    margin-right: .2rem;
                    .default_border-r-50;
                    .default_backgroud_fff;
                    &.z-active {
                        opacity: 1;
                    }
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
        & .author-bd {
            & .author-bd-tit {
                width: 100%;
                height: 1rem;
                line-height: 1rem;
                padding-left: .3rem;
                border-radius: .1rem .1rem 0 0;
                .default_color_3;
                .default_font_size_4;
                .default_backgroud_2;
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="app-body">
    <HeaderDom />
    <div class="m-author">
        <div class="author-hd">
            <div class="img">
                <img src="../../../common/images/mb/author-bg.png" />
            </div>
            <div class="content">
                <div class="content-item content-info">
                    <div class="info-left">
                        <div class="info-name">{{user.nick_name}}</div>
                        <div class="info-time">社区年龄：{{user.c_age}}</div>
                        <div class="info-number">
                            <span>关注：{{user.follow_count}}</span>
                            <span>粉丝：{{user.fans_count}}</span>
                        </div>
                    </div>
                    <div class="info-right info-avatar">
                        <img :src="user ? user.avatar_url : avatar" />
                    </div>
                </div>
                <div class="content-item content-intro">
                    <div v-html="textFormat(user.signature || '')" class="text"></div>
                </div>
            </div>
            <div class="index">
                <div class="index-item z-active"></div>
                <div class="index-item"></div>
            </div>
        </div>
        <div class="author-bd">
            <div class="author-bd-tit">
                Ta的作品
            </div>
            <ArticleList 
                showType="1"
                resType='author'
                loadType="more"
                userType="user_id"
            />
        </div>
    </div>
    <Bubble />
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data (){
        return {
            avatar: this.$defaultData.mbavatar,
            user_id: '',
            user: {},
        }
    },
    props: ['resType', 'isHideEmpty'],
    computed: mapState({
        dataInit: state => state.auth.dataInit,
        count: state => state.auth.count,
        lists: state => state.auth.lists,
        self: function(){
            return this.resType == 'blacklist' || this.user_id == this.user.uid
        }
    }),
    methods: {
        getAuthorInfo (){
            if (!this.user_id) {
                return false;
            }
            this.$store.dispatch('user_getUserInfo', {
                userId: this.user_id
            }).then( info => {
                this.user = info;

                this.$store.dispatch('bubble_success', info);
            }).catch(err => {
                this.$store.dispatch('bubble_fail', err);
            }); 
        },
        textFormat: function (value) {  
            return value.replace(/[\r\n]/g, '<br />');
        }
    },
    created (){
        
    }, 
    updated(){
        
    }, 
    mounted (){
        // 获取url的参数
        this.user_id = this.$url.getUrlParam('user_id');

        // 获取用户信息
        this.getAuthorInfo();
    }
}
</script>

