<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    @module: c-artice;
    .@{module}-hot {
        width: 100%;
        height: 500px;
        padding-top: 40px;
        .default_backgroud_4;
        .@{module}-hot-wrap {
            height: 460px;
            width: 960px;
            overflow: hidden;
            .default_mar_auto;
            & .hot-top {
                width: 100%;
                height: 50px;
                padding-top: 30px;
                margin-bottom: 20px;
                overflow: hidden;
                background-image: url('../common/images/img/bg-1.png');
                background-position: top center;
                background-repeat: no-repeat;
                background-size: cover;
                & .hot-top-right {
                    float: right;
                    height: 20px;
                    overflow: hidden;
                }
                & .hot-top-right .item {
                    float: left;
                    height: 20px;
                    line-height: 20px;
                    .default_color_2;
                    .default_font_size_2;
                    .default_middle;
                }
                & .hot-top-right .item-number {
                    margin-right: 8px;
                }
                & .hot-top-right .item-btn {
                    position: relative;
                    width: 20px;
                    height: 20px;
                    .default_backgroud_2;
                    .default_border-r-4;
                    .default_pointer;
                    & span {
                        position: absolute;
                        display: block;
                        width: 20px;
                        height: 20px;
                        transition: opacity @default_speed_1;
                    }
                }
                & .hot-top-right .item-left {
                    margin-right: 5px;
                    & span:nth-child(1) {
                        opacity: 1;
                        .skin_icon_left-1;    
                    }
                    & span:nth-child(2) {
                        opacity: 0;
                        .skin_icon_left-1_on;    
                    }
                    &:hover span:nth-child(1) {
                        opacity: 0;
                    }
                    &:hover span:nth-child(2) {
                        opacity: 1;
                    }
                }
                & .hot-top-right .item-right {
                    & span:nth-child(1) {
                        opacity: 1;
                        .skin_icon_right-1;    
                    }
                    & span:nth-child(2) {
                        opacity: 0;
                        .skin_icon_right-1_on;    
                    }
                    &:hover span:nth-child(1) {
                        opacity: 0;
                    }
                    &:hover span:nth-child(2) {
                        opacity: 1;
                    }
                }
            }
            & .hot-list {
                width: 100%;
                height: 350px;
                padding-left: 10px;
                transition: transform @default_speed_1;
                & .hot-list-item {
                    position: relative;
                    float: left;
                    width: 140px;
                    height: 350px;
                    padding: 10px;
                    margin-right: 10px;
                    transition: all @default_speed_1;
                    .default_backgroud_2;
                    .default_border-r-4;
                    & a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        text-decoration: none;
                    }
                    &:hover {
                        transform: translate(0, -2px);
                        .default_border_shadow_4;
                    }
                }
                & .hot-list__hd {
                    position: relative;
                    width: 120px;
                    height: 160px;
                    margin-bottom: 12px;
                    & .hot-list__hd-img {
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        .default_backgroud_5;
                        & img {
                            max-width: 100%;
                        }
                    }
                    & .hot-list__hd-text {
                        position: absolute;
                        right: 8px;
                        bottom: 8px;
                        width: 40px;
                        height: 20px;
                        line-height: 18px;
                        text-align: center;
                        border: 1px solid @default_backgroud_13;
                        border-radius: 10px;
                        .default_color_1;
                        .default_font_size_1;
                        .default_backgroud_3;
                    }
                }
                & .hot-list__title {
                    line-height: 1.5rem;
                    margin-bottom: 10px;
                    .default_font_size_7;
                    .default_color_1;
                    .default_font_family_bolder;
                    &:hover {
                        .default_color_10;
                    }
                }
                & .hot-list__tag a {
                    float: left;
                    margin-right: 8px;
                    margin-bottom: 8px;
                    .default_font_size_1;
                    .default_color_3;
                    &:hover {
                        .default_color_1;
                    }          
                }
                & .hot-list__ft {
                    position: absolute;
                    left: 10px;
                    bottom: 10px;
                    height: 20px;
                    overflow: hidden;
                }
                & .hot-list__ft-img {
                    float: left;
                    width: 20px;
                    height: 20px;
                    margin-right: 8px;
                    overflow: hidden;
                    .default_backgroud_5;
                    .default_border-r-50;
                }
                & .hot-list__ft-name {
                    width: 90px;
                    height: 20px;
                    line-height: 20px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    .default_font_size_1;
                    .default_color_3; 
                    &:hover {
                        .default_color_1;
                    }
                }
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-artice-hot">
    <div class="c-artice-hot-wrap">
        <div class="hot-top">
            <div class="hot-top-right">
                <div class="item item-number">{{pageIndex}}/{{hot_number}}</div>
                <div class="item item-btn item-left" @click="hotSwitch('left')">
                    <span></span>
                    <span></span>
                </div>
                <div class="item item-btn item-right" @click="hotSwitch('right')">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="hot-list" :style="{width: hot.lists.length*150+10 + 'px', transform: 'translate(-'+ move +'px, 0)'}">
            <div class="hot-list-item" v-for="item in hot.lists"><a :href="'article.html?catalog_id=' + item.catalog_id">
                <div class="hot-list__hd">
                    <div class='hot-list__hd-img'>
                        <img :src="item.catalog_cover_url" /> 
                    </div>
                    <div class='hot-list__hd-text'>{{item.category_title}}</div>
                </div>
                <div class="hot-list__bd">
                    <div class="hot-list__title">{{item.catalog_title}}</div>
                    <div class="hot-list__tag">
                        <a 
                            v-for="label in item.labels"
                            :href="'./page.html?labelTag='+ label" 
                        >
                            {{label}}
                        </a>
                    </div>
                </div>
                <div class="hot-list__ft">
                    <div class="hot-list__ft-img">
                        <img :src="item.user.avatar_url || avatar" />
                    </div>
                    <div class="hot-list__ft-name">{{item.user.nick_name}}</div>
                </div>
            </a></div>
        </div>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import avatar from '../common/images/img/avatar.png';
export default {
    data () {
        return {
            avatar: avatar,
            // hot
            hot_isCan: true,
            pageIndex: 0,
            pageSize: 20,
            move: 0
        }
    },
    props: [],
    computed: mapState({
        hot: state => state.opus.hot,
        hot_number (){
            return Math.ceil(this.$store.state.opus.hot.count/6)
        },
        user: state => state.user.info,
        tag: state => state.opus.category,
    }),
    methods: {
        hotSwitch (type){
            if (!this.hot_number) {
                return false;
            }
            if (type == 'left' && this.pageIndex == 1) {
                return false;
            }
            if (type == 'right' && this.pageIndex == this.hot_number) {
                return false;
            }
            if (!this.hot_isCan) {
                return false;
            }
            this.hot_number = false;

            if (type == 'left') {
                this.pageIndex--;
            } else {
                this.pageIndex++;
            }

            if (type == 'left') {
                this.move = (this.pageIndex-1)*900;
            } else {
                if (this.pageIndex*6 + 1 <= this.hot_number ) {
                    this.move = (this.pageIndex-1)*900;
                } else {
                    this.move = this.hot.lists.length*150+10 - 960;
                }
            }

            setTimeout( res => {
                this.hot_isCan = true;
            }, 500)
        },
        getHotList (){
            // 未登录处理
            /*if (!this.user.isLogin && this.resType != 'index') {
                console.log('----error----on login, getHotList');
                return false;
            }*/

            this.$store.dispatch('opus_getHotList', {
                "params": {
                    "pagination": "1",
                    "page": this.pageIndex, //页数,默认不传查询第一页
                    "pageSize": this.pageSize //每页数量 默认10
                },
                "body": {
                    "catalog_type": "1" // 0 普通（默认） 1 热门 2 优秀 如果没有此参数则查询所有
                }
            }).then( res => {
                // todo
                if (res && !!res.list && !!res.list.length) {
                    this.pageIndex = 1;
                }

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        }
    },
    mounted (){
        // watch tags change
        this.$watch('tag.index', function(newVal, oldVal){
            this.pageIndex = 1;
            this.getHotList();
        })

        this.getHotList();
    }
}
</script>

