<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    .c-author-hot {
        width: 100%;
        & .list-author__title {
            width: 100%;
            height: 60px;
            padding-top: 40px;
            margin-bottom: 20px;
            // background-image: url('../common/images/img/bg-4.png');
            // background-position: top center;
            // background-repeat: no-repeat;
            // background-size: cover;
            & .text {
                float: left;
                .default_font_size_4;
                .default_color_2;
                .default_font_bolder;
            }
            & .list-author__page {
                float: right;
                height: 20px;
                overflow: hidden;
            }
            & .item {
                float: left;
                height: 20px;
                line-height: 20px;
                .default_color_2;
                .default_font_size_2;
                .default_middle;
            }
            & .item-number {
                margin-right: 8px;
            }
            & .item-btn {
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
            & .item-left {
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
            & .item-right {
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
        &.z-active .list-author__title {
            background-image: url('../common/images/img/bg-6.png');
        }
        & .list-author__body {
            width: 100%;
            height: 350px;
            .default_backgroud_2;
            .default_border-r-4;
            // overflow: hidden;
            & .list-author__item {
                display: table;
                width: 260px;
                height: 70px;
                padding: 0 20px;
                transition: box-shadow @default_speed_1;
                .default_border-b-14;
                &:hover {
                    transform: translate(0, -1px);
                    .default_border_shadow_4;
                    .default_border-b-2;
                }
                & a {
                    text-decoration: none;
                }
                &:first-child {
                    .default_border-r-t-4;
                }
                &:last-child {
                    .default_border-r-b-4;
                    .default_border-n;
                }
                & .list-author__img {
                    display: table-cell;
                    vertical-align: middle;
                    width: 30px;
                }
                & .list-author__avatar {
                    width: 30px;
                    height: 30px;
                    overflow: hidden;
                    .default_border-r-50;
                    .default_backgroud_5;
                }
                & .list-author__content {
                    display: table-cell;
                    vertical-align: middle;
                    width: 180px;
                    padding-left: 10px;
                }
                & .list-author__name {
                    margin-bottom: 6px;
                    .default_color_1;
                    .default_font_size_1;
                    &:hover {
                        .default_color_10;
                    }
                }
                & .list-author__text {
                    overflow: hidden;
                    .default_font_size_1;
                    .default_color_3;
                }
                & .list-author__work {
                    float: left;
                    margin-right: 10px;
                }
                & .list-author__fans {
                    float: left;
                }
                & .list-author__btn {
                    display: none;
                    float: right;
                    .default_color_2;
                    &.z-active {
                        .default_color_3;
                    }
                    .default_pointer;
                }
                &:hover {
                    & .list-author__btn {
                        display: block;
                    }
                }
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-author-hot">
    <div class="list-author__title">
        <div class="text">推荐作者</div>
        <div class="list-author__page">
            <div class="item item-number">{{index}}/{{count}}</div>
                <div class="item item-btn item-left" @click="authorSwitch('left')">
                    <span></span>
                    <span></span>
                </div>
                <div class="item item-btn item-right" @click="authorSwitch('right')">
                    <span></span>
                    <span></span>
                </div>
        </div>
    </div>
    <div class="list-author__body">
        <div class="list-author__item" v-for="item in lists.slice((index-1)*5, (index-1)*5+5)">
            <div class="list-author__img">
                <div class="list-author__avatar">
                    <img :src="item.avatar_url || avatar" />
                </div>
            </div>
            <div class="list-author__content">
            <a :href="'author.work.html?user_id=' + item.uid">
                <div class="list-author__name">{{item.nick_name}}</div>
                <div class="list-author__text">
                    <div class="list-author__work">作品：{{item.opus_count}}</div>
                    <div class="list-author__fans">粉丝：{{item.fans_count}}</div>
                    <div v-if="item.relation == 0" class="list-author__btn" @click.stop="addFollow(item.uid)">关注</div>
                    <div v-if="item.relation == 1 || item.relation == 3" class="list-author__btn z-active">已关注</div>
                </div>
            </a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data (){
        return {
            avatar: this.$defaultData.avatar,
            index: 0
        }
    },
    props: ['resType'],
    computed: mapState({
        lists: state => state.auth.lists,
        count: state => Math.ceil(state.auth.count/5)
    }),
    methods: {
        getActiveUserList (){
            this.$store.dispatch('auth_getActiveUserList', {
                "label": decodeURIComponent(this.labelTag), //必填 标签
                "pageSize": "30",//获取的推荐用户条数（目前分页以假分页处理，前端一次性获取）
            }).then( res => {
                if (res.list.length > 0) {
                    this.index = 1;
                }

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        getRecommendUserList (){
            this.$store.dispatch('auth_getRecommendUserList', {
               "pageSize": "30",//获取的推荐用户条数（目前分页以假分页处理，前端一次性获取）
            }).then( res => {
                if (res.list.length > 0) {
                    this.index = 1;
                }

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        authorSwitch (type){
            if (type == 'left' && this.index == 1) {
                return false;
            }
            if (type == 'right' && this.index == this.count) {
                return false;
            }

            if (type == 'left') {
                this.index--;
            } else {
                this.index++;
            }
        },
        addFollow (uid){
            this.$store.dispatch('auth_addFollow', {
                userId: uid
            }).then( res => {
                this.getRecommendUserList();

                this.$store.dispatch('bubble_success', res);
            }).catch(res => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
    },  
    mounted (){
        this.labelTag = this.$url.getUrlParam('labelTag');

        if (this.resType == 'active' && !this.labelTag) {
            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'top',
                top: {
                    status: 'z-warn',
                    msg: '系统繁忙'
                }
            })
            return false;
        }

        if (this.resType == 'active') {
            this.getActiveUserList();
        } else {
            this.getRecommendUserList();
        }
    }
}
</script>

