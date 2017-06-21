<!-- style样式代码 -->
<style lang="less">
@import (less) url('../../../common/css/mb.common.less');
    .m-author {
        width: 100%;
        height: 100%;
        padding: .3rem;
        padding-bottom: 1.3rem;
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
                width: 200%;
                height: 100%;
                overflow: hidden;
                transition: all .25s;
                .default_flex_middle;
                & .content-item {
                    flex: 1;
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
                        position: relative;
                        width: 3.5rem;
                        padding: .4rem 0;
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
                &.z-0 {
                    transform: translate(0, 0);
                }
                &.z-1 {
                    transform: translate(-50%, 0);   
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
        & .author-ft {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1rem;
            .default_backgroud_3;
            .default_flex_center;
            .default_border_shadow_6;
            .default_color_1;
            .default_font_size_6;
            .default_flex_center;
            &.z-active {
                .default_color_2;
            }
        }
        & .author-home {
            position: fixed;
            bottom: .8rem;
            right: .3rem;
            width: 1.1rem;
            height: 1.1rem;
            .default_backgroud_3;
            .default_border-r-50;
            .skin_home;
            .default_border_shadow_6;
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
            <v-touch class="content"
                v-on:swipeleft="silder('left')"
                v-on:swiperight="silder('right')"
                :class="'z-'+index"
            >
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
            </v-touch>
            <div class="index">
                <div class="index-item" :class="{'z-active': index == 0}"></div>
                <div class="index-item" :class="{'z-active': index == 1}"></div>
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
        <div class="author-ft"
            :class="{'z-active': user.relation == 1 || user.relation == 3 || user.black == 1}"
        >
            <span v-if="user.relation == 0 || user.relation == 2" @click.stop.prevent="addFollow(user.uid)">添加关注</span>
            <span v-if="user.relation == 1" @click.stop.prevent="delFollow(user.uid, index)">已关注</span>
            <span v-if="user.relation == 3" @click.stop.prevent="addFollow(user.uid)">互相关注</span>
            <span v-if="user.black == 1" @click.stop.prevent="delBlack(user.uid)">取消拉黑</span>
        </div>
        <a href="./index.html" class="author-home"></a>
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

            isCan: true,
            index: 0
        }
    },
    props: ['resType', 'isHideEmpty'],
    computed: mapState({
        dataInit: state => state.auth.dataInit,
        count: state => state.auth.count,
        lists: state => state.auth.lists,
    }),
    methods: {
        silder (type){
            if (!this.isCan) {
                return false;
            }
            this.isCan = false;

            if (type == 'left') {
                if (this.index == 1) {
                    return false;
                }
                this.index++;
            } else {
                if (this.index == 0) {
                    return false;
                }
                this.index--;
            }

            setTimeout(res => {
                this.isCan = true;
            }, 250)
        },
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
        },
        delBlack (uid){
            this.$store.dispatch('auth_delBlack', {
                userId: uid
            }).then( res => {
                this.getAuthorInfo();

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
        addFollow (uid){
            this.$store.dispatch('auth_addFollow', {
                userId: uid
            }).then( res => {
                this.getAuthorInfo();

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                tthis.$store.dispatch('bubble_fail', err);
            });
        },
        delFollow (uid, index){
            this.$store.dispatch('auth_delFollow', {
                userId: uid
            }).then( res => {
                if (this.resType != 'fansList' && this.resType != 'followList') {
                    this.getAuthorInfo();
                } else {
                    this.$store.dispatch('auth_setListFollow', {
                        index: index
                    })
                }

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
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

