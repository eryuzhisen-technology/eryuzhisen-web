<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    .c-author-list {
        width: 100%;
        height: 100%;
        & &-wrap {
            .default_mar_auto;
            margin-bottom: 30px;
        }
        & a {
            text-decoration: none;
        }
        & .list-author__item {
            position: relative;
            float: left;
            width: 240px;
            height: 360px;
            padding: 40px 30px 50px;
            .default_backgroud_3;
            .default_border-t-5;
            .default_border-rr-5;
            .default_border-r-4;
            & a {
                text-decoration: none;
            }
            &:first-child,
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4),
            &:nth-child(5) {
                .default_border-t-n;
            }
            &:last-child,
            &:nth-child(5n) {
                .default_border-rr-n;
            }
        }
        & .list-author__avatar {
            width: 100px;
            height: 100px;
            overflow: hidden;
            .default_border-r-50;
            .default_backgroud_7;
            .default_mar_auto;
            margin-bottom: 20px;
            & img {
                max-width: 100%;
            }
        }
        & .list-author__name {
            margin-bottom: 15px;
            .default_font_bolder;
            .default_color_1;
            .default_font_size_7;
            .default_center;
        }
        & .list-author__desc {
            height: 2rem;
            line-height: 1rem;
            overflow: hidden;
            .default_font_size_1;
            .default_color_2;
            &.z-left {
                text-align: left;
            }
        }
        & .list-author__btn {
            position: absolute;
            bottom: 50px;
            left: 50%;
            width: 100px;
            height: 50px;
            line-height: 50px;
            transform: translate(-50%, 0);
            .default_center;
            .default_font_size_2;
            .default_color_2;
            .default_border-r-4;
            .default_pointer;
            .default_backgroud_4;
            &.z-active {
                .default_backgroud_13;
            }
            &:hover {
                .default_color_1;
            }
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-author-list" :class="'z-' + resType">
<div class="c-author-list-wrap" :style="{'height': Math.ceil(1)*360 + 'px', 'width': (lists.length == 0 ? 720 : lists.length <= 5 ? lists.length*240 : 1200) + 'px'}">
    <a class="list-author__item" v-for="(data, index) in lists" :href="'author.work.html?user_id=' + data.uid">
        <div class="list-author__avatar">
            <img :src="data.avatar_url || avatar"  />
        </div>
        <div class="list-author__name">{{data.nick_name}}</div>
        <div class="list-author__desc">{{data.signature}}</div>
        <!-- <div class="list-author__work">作品：{{data.opus_count}}</div> -->
        <!-- <div class="list-author__fans">粉丝：{{data.fans_count}}</div> -->
        <div v-if="data.relation == 0" class="list-author__btn list-author__btn-1 z-active" @click.stop.prevent="addFollow(data.uid)">关注</div>
        <div v-if="data.relation == 1 || data.relation == 3" class="list-author__btn list-author__btn-2" @click.stop.prevent="delFollow(data.uid, index)">已关注</div>
        <div v-if="data.relation == 2" class="list-author__btn list-author__btn-3" @click.stop.prevent="addFollow(data.uid)">相互关注</div>
        <div v-if="data.black == 1" class="list-author__btn list-author__btn-3" @click.stop.prevent="delBlack(data.uid)">取消拉黑</div>
    </a>
    <Empty v-if="count <= 0 && !isHideEmpty && dataInit" />
</div>
<Page 
    :count="count" 
    :length="pageSize"
    :index="pageIndex"
    @page_switch="pageSwitch"
/>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data (){
        return {
            avatar: this.$defaultData.avatar,
            pageIndex: 1,
            pageSize: 5,
            query: ''
        }
    },
    props: ['resType', 'isHideEmpty'],
    computed: mapState({
        dataInit: state => state.auth.dataInit,
        count: state => state.auth.count,
        user: state => state.user.info,
        lists: state => state.auth.lists,
        self: function(){
            return this.resType == 'blacklist' || this.user_id == this.user.uid
        }
    }),
    methods: {
        pageSwitch (pageIndex) {
            if (this.pageIndex == pageIndex) {
                return false;
            }
            this.pageIndex = pageIndex;
            this.getList();
        },
        delBlack (uid){
            this.$store.dispatch('auth_delBlack', {
                userId: uid
            }).then( res => {
                this.getList();

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
        addFollow (uid){
            this.$store.dispatch('auth_addFollow', {
                userId: uid
            }).then( res => {
                this.getList();

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
                    this.getList();
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
        getUserList (){
            this.$store.dispatch('auth_getUserList', {
                "pagination": "1",
                "query": this.query || '', // 模糊查询
                "page": this.pageIndex, //页数,默认不传查询第一页
                "pageSize": this.pageSize //每页数量 默认10
            }).then( res => {
                this.$emit('author_count', this.count);

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
        getFollowList (){
            this.$store.dispatch('auth_getFollowList', {
                "userId": this.user_id ? this.user_id : '', // 用户uid
                "pagination": "1",
                "page": this.pageIndex, //页数,默认不传查询第一页
                "pageSize": this.pageSize //每页数量 默认10
            }).then( res => {
                this.$emit('author_count', this.count);

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
        getFansList (){
            this.$store.dispatch('auth_getFansList', {
                "userId": this.user_id ? this.user_id : '', // 用户uid
                "pagination": "1",
                "page": this.pageIndex, //页数,默认不传查询第一页
                "pageSize": this.pageSize //每页数量 默认10
            }).then( res => {
                this.$emit('author_count', this.count);

                this.$store.dispatch('bubble_success', res);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
        getBlackList (){
            this.$store.dispatch('auth_getBlackList', {
                pageSize: this.pageSize,
                pageIndex: this.pageIndex
            }).then( res => {
                this.$emit('author_count', this.count);

                this.$store.dispatch('bubble_success', res);
            }).catch( res => {
                this.$store.dispatch('bubble_fail', err);
            }); 
        },
        getList (){
            if (this.resType == 'search') {
                // 按照搜索获取作者
                this.getUserList();
            } else if (this.resType == 'blacklist') {
                // 获取黑名单列表
                this.getBlackList();
            } else if (this.resType == 'followList') {
                // 获取关注人数
                this.getFollowList();
            } else if (this.resType == 'fansList') {
                this.getFansList();
            }
        }
    },
    created (){
        this.$eventHub.$on('header_serach', option => {
            if (this.query == option.query) {
                return false;
            }
            this.query = option.query;
            this.getList();
        });
    }, 
    updated(){
        $(".c-author-header_text").find('.text').each(function(){
            if ($(this).height() > 30) {
                $(this).addClass('z-left');
            }
        })
    }, 
    mounted (){
        // 获取url的参数
        this.query = decodeURIComponent(this.$url.getUrlParam('query'));
        this.user_id = this.$url.getUrlParam('user_id');

        // 获取用户列表
        this.getList();
    }
}
</script>

