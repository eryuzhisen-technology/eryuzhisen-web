<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    .c-author-list {
        width: 100%;
        height: 100%;
        & &-wrap {
            margin-bottom: 30px;
            .default_backgroud_2;    
        }
        & a {
            text-decoration: none;
        }
        & .list-author__item {
            position: relative;
            display: table;
            width: 100%;
            height: 70px;
            padding: 0 20px;
            .default_border-b-14;
            &:hover {
                .default_border_shadow_4;
            }
            & a {
                text-decoration: none;
            }
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
            width: 610px;
            padding-left: 10px;
        }
        & .list-author__name {
            display: block;
            margin-bottom: 6px;
            .default_color_2;
            .default_font_size_1;
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
            position: absolute;
            top: 20px;
            right: 20px;
            height: 30px;
            line-height: 30px;
            .default_border-r-4;
            .default_backgroud_3;
            .default_font_size_2;
            .default_color_3;
            .default_pointer;
            .default_center;
            &.z-active,
            &:hover {
                .default_color_2;
                .default_backgroud_5;
            }
        }
        & .list-author__btn-1 {
            width: 50px;
        }
        & .list-author__btn-2 {
            width: 60px;
        }
        & .list-author__btn-3 {
            width: 80px;
        }
        &.z-active .list-author__btn {
            float: right;
        }
    }
    .c-author-item:last-child .c-author-item-wrap {
        .default_border-n;
    }
</style>

<!-- html代码 -->
<template>
<div class="c-author-list" :class="'z-' + resType">
<div class="c-author-list-wrap">
    <a class="list-author__item" v-for="data in lists" :href="'author.work.html?user_id=' + data.uid">
        <div class="list-author__img">
            <div class="list-author__avatar">
                <img :src="data.avatar_url || avatar"  />
            </div>
        </div>
        <div class="list-author__content">
            <div class="list-author__name">{{data.nick_name}}</div>
            <div class="list-author__text">
                <div class="list-author__work">作品：{{data.opus_count}}</div>
                <div class="list-author__fans">粉丝：{{data.fans_count}}</div>
                <div v-if="data.relation == 0" class="list-author__btn list-author__btn-1" @click.stop.prevent="addFollow(data.uid)">关注</div>
                <div v-if="data.relation == 1 || data.relation == 3" class="list-author__btn list-author__btn-2" @click.stop.prevent="delFollow(data.uid)">已关注</div>
                <div v-if="data.relation == 2" class="list-author__btn list-author__btn-3" @click.stop.prevent="addFollow(data.uid)">相互关注</div>
                <div v-if="data.black == 1" class="list-author__btn list-author__btn-3" @click.stop.prevent="delBlack(data.uid)">取消拉黑</div>
            </div>
        </div>
    </a>
    <Empty v-if="count <= 0" />
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
import avatar from '../common/images/img/avatar.png';
export default {
    data (){
        return {
            avatar: avatar,
            pageIndex: 1,
            pageSize: 5,
            query: ''
        }
    },
    props: ['resType'],
    computed: mapState({
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
        delFollow (uid){
            this.$store.dispatch('auth_delFollow', {
                userId: uid
            }).then( res => {
                this.getList();

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
    mounted (){
        // 获取url的参数
        this.query = this.$url.getUrlParam('query');
        this.user_id = this.$url.getUrlParam('user_id');

        // 获取用户列表
        this.getList();
    }
}
</script>

