<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    @module: c-author-header;

    .@{module} {
        position: relative;
        z-index: 2;
        width: 100%;
        min-width: 1200px;
        padding-top: 60px;
        padding-bottom: 80px;
        .default_backgroud_6;
        & &-wrap {
            width: 600px;
            .default_mar_auto;
        }
    }
    .@{module}_img {
        position: relative;
        width: 180px;
        height: 180px;
        overflow: hidden;
        .default_mar_auto;
        margin-bottom: 20px;
        .default_backgroud_5;
        .default_border-r-50;
        & .img {
            width: 100%;
            height: 100%;
            overflow: hidden;
            .default_border-r-50;
        }
        & .icon {
            display: none;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            line-height: 180px;
            background-color: rgba(0,0,0,0.8);
            .default_color_1;
            .default_font_size_7;
            .default_font_bolder;
            .default_center;
            .default_pointer;
        }
        &:hover .icon {
            display: block;
        }
    }
    .@{module}_text {
        margin-bottom: 30px;
        .default_center;
        & .name {
            margin-bottom: 20px;
            & .name-text {
                display: inline-block;
                margin-right: 10px;
                .default_color_1;
                .default_font_size_6;
                .default_font_bolder;
            }
            & .name-time {
                display: inline-block;
                .default_font_size_2;
                .default_color_2;
            }
        }
        & .text {
            width: 100%;
            line-height: 1.5rem;
            // overflow: hidden;
            // text-overflow: ellipsis;
            // white-space: nowrap;
            word-break: break-all;
            .default_color_2;
            .default_font_size_2;
        }
        & .text.z-left {
            text-align: left;
        }
    }
    .@{module}_btn {
        .default_center;
        & .btn-item {
            position: relative;
            display: inline-block;
            height: 50px;
            line-height: 50px;
            margin-right: 10px;
            .default_backgroud_4;
            .default_border-r-4;
            .default_center;
            .default_pointer;
            .default_middle;
            & span,
            & a {
                text-decoration: none;
                .default_color_3;
                .default_font_size_2;
            }
            & .cpm_sub_more {
                width: 150px;
            }
            &:hover {
                & span,
                & a {
                    .default_color_2;    
                }
            }
            &.z-active {
                & .cpm_sub_more {
                    display: block;
                }
            }
            &.z-strong {
                .default_backgroud_13;
            }
        }
        & .btn-item:last-child {
            margin-right: 0;
        }
        & .btn-mark {
            width: 150px;
        }
        & .btn-share {
            width: 50px;
            .default_backgroud_13;
            .skin_icon_author-5;
            &:hover {
                .skin_icon_author-5_on;
            }
        }
        & .btn-more {
            width: 50px;
            .default_backgroud_13;
            .skin_icon_author-4;
            &:hover {
                .skin_icon_author-4_on;
            }
        }
    }
    .@{module}_menu {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        & .menu-item {
            float: left;
            width: 40px;
            margin-right: 60px;
            .default_center;
            .default_pointer;
            & a,
            & span {
                display: block;
                width: 100%;
                height: 100%;
                padding-bottom: 16px;
                text-decoration: none;
                .default_color_1;
                .default_font_size_2; 
            }
            &:hover a,
            &:hover span {
                .default_color_fff;
            }
            &:nth-child(3) {
                margin-right: 0;
            }
        }
        & .menu-arrow {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 2px;
            background-color: #fff;
            transition: left @default_speed_1;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-author-header">
<div class="c-author-header-wrap">
    <div class="c-author-header_img">
        <div class="img">
            <img :src="user.avatar_url || avatar" />
        </div>
        <div v-show="userInfo.uid == user_id" class="icon" id="author_upload_image_select">修改头像</div>
        <UploadImg 
            type="1" 
            select="author_upload_image_select"
            container="author_container"
            @uploadImg_uploaded="uploaded" 
        />
    </div>
    <div class="c-author-header_text">
        <div class="name">
            <div class="name-text">{{user.nick_name}}</div>
            <div class="name-time"><span>{{user.c_age}}</span></div>
        </div>
        <div class="text" v-html="textFormat(user.signature || '')"></div>
    </div>
    <div class="c-author-header_btn">
        <div class="btn-item btn-mark" 
            @click="follow"
            :class="{'z-strong': user.relation != 1 && user.relation != 3}"
        >
            <span v-if="userInfo.uid != user_id">{{ user.relation == 1 || user.relation == 3 ? '已关注' : '添加关注' }}</span>
            <a v-else href="setting.userinfo.html">个人设置</a>
        </div>
        <div class="btn-item btn-share j-close-1" @click="selctEnter">
            <div class="cpm_sub_more z-left">
                <div class="item" @click.stop="shareFn('wb', $event)">
                    <div class="item-icon z-wb"></div>
                    <div class="item-text">微博</div>
                </div>
                <div class="item" @click.stop="shareFn('tb', $event)">
                    <div class="item-icon z-tb"></div>
                    <div class="item-text">贴吧</div>
                </div>
                <div class="item" @click.stop="shareFn('qq', $event)">
                    <div class="item-icon z-qq"></div>
                    <div class="item-text">QQ 好友</div>
                </div>
                <div class="item" @click.stop="shareFn('kong', $event)">
                    <div class="item-icon z-kong"></div>
                    <div class="item-text">QQ 空间</div>
                </div>
            </div>
        </div>
        <div v-if="userInfo.uid != user_id" class="btn-item btn-more j-close-1" @click="selctEnter">
            <div class="cpm_sub_more z-left">
                <div class="item" @click.stop="addBlackDialog">
                    <div class="item-icon z-black"></div>
                    <div class="item-text">加入黑名单</div>
                </div>
                <div class="item" @click.stop="addReport">
                    <div class="item-icon z-report"></div>
                    <div class="item-text">举报</div>
                </div>
            </div>
        </div>
    </div>
    <div class="c-author-header_menu">
        <div 
            class="menu-item" 
            v-for="(item, index) in menu"
            @mouseover="enter(index)"
            @mouseout="out(index)"
        >
            <a v-if="!item.isActive" :href="item.url">{{item.title}}</a>
            <span v-else>{{item.title}}</span>
        </div>
        <div class="menu-arrow" :style="{'left': (index == -1 ? menuIndex : index)*100 + 'px'}"></div>
    </div>
</div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
            index: -1,
            avatar: this.$defaultData.avatar,
            user_id: '',
            user: {}
        }
    },
    props: ['menu', 'menuIndex'],
    computed: mapState({
        userInfo: state => state.user.info,
    }),
    methods: {
        selctEnter (e){
            $('.j-close-1').removeClass('z-active');
            $(e.currentTarget).addClass('z-active');
        },
        enter (index){
            this.index = index;
        },
        out (){
            this.index = -1;
        },
        shareFn (app, e){
            $(e.currentTarget).parents('.j-close-1').removeClass('z-active');
            // 分享
            var option = {
                app: app,
                url: window.location.href,
                title: this.user.nick_name,
                pic: this.user.avatar_url,

                desc: this.user.signature,
                summary: this.user.signature,
                showcount: 0,
                source: '',
                sourceUrl: '',
                site: '',
            }
            this.$share.shareToAPP(option);
        },
        uploaded (fileUrl){
            // 设置上传的图片
            this.$store.dispatch('user_setUserInfo', {
                avatar_url: fileUrl
            }).then( filename => {
                this.$store.dispatch('user_updateUserInfo', {
                    // todo
                }).then(() => {
                    this.$store.dispatch('bubble_success', {
                        ret: 0,
                        type: 'top',
                        msg: '保存成功！'
                    });

                    // 更新用户信息
                    var cache_userInfo = this.$version.userInfo;
                    this.$cache.setStore(cache_userInfo.key, this.userInfo, cache_userInfo.version, cache_userInfo.time);
                }).catch(err => {
                    this.$store.dispatch('bubble_fail', err);
                }); 
            })
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
        follow (e){
            // 判断登陆
            if (!this.userInfo.isLogin) {
                return this.$store.dispatch('bubble_fail', {
                    ret: -11,
                    msg: '未登录，请登陆后操作'
                });
                return false;
            } else if (this.user.relation == 1 || this.user.relation == 3) { // 取消关注
                this.$store.dispatch('auth_delFollow', {
                    userId: this.user.uid
                }).then( res => {
                    this.getAuthorInfo();

                    this.$store.dispatch('bubble_success', res);
                }).catch(err => {
                    this.$store.dispatch('bubble_fail', err);
                });
            } else { // 关注
                this.$store.dispatch('auth_addFollow', {
                    userId: this.user.uid
                }).then( res => {
                    this.getAuthorInfo();

                    this.$store.dispatch('bubble_success', res);
                }).catch(res => {
                    this.$store.dispatch('bubble_fail', err);
                });
            }
        },
        addBlackDialog (e){
            var that = this;

            $(e.currentTarget).parents('.j-close-1').removeClass('z-active');

            // 判断登陆
            if (!this.userInfo.isLogin) {
                return this.$store.dispatch('bubble_fail', {
                    ret: -11,
                    msg: '未登录，请登陆后操作'
                });
            }

            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'warn',
                warn: {
                    title: '确定要加入加入黑名单?',
                    content: '添加到黑名单中的用户，无法再您的作品下评论，无法回复您，TA的作品页不会向您推送',
                    comfireFn: function(){
                        that.addBlack();
                    }
                },
            })
        },
        addBlack (){
            // 判断是否已经是黑名单
            if (this.user.black == 1) {
                this.$store.dispatch('bubble_fail', {
                    ret: -31,
                    msg: '已经添加黑名单' 
                });
                return false;
            }

            this.$store.dispatch('auth_addBlack', {
                userId: this.user.uid
            }).then( res => {
                this.$store.dispatch('bubble_success', {
                    ret: 0,
                    type: 'top',
                    msg: '添加成功'
                });
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            });
        },
        // 举报
        addReport (e){
            $(e.currentTarget).parents('.j-close-1').removeClass('z-active');

            // 判断登陆
            if (!this.userInfo.isLogin) {
                return this.$store.dispatch('bubble_fail', {
                    ret: -11,
                    msg: '未登录，请登陆后操作'
                });
            }

            this.$store.dispatch('bubble_showBubble', {
                show: true,
                type: 'report',
                report: {
                    content_id: this.user.uid,
                    content_type: 3
                }
            })
        },
        textFormat: function (value) {  
            return value.replace(/[\r\n]/g, '<br />');
        }
    },
    updated(){
        $(".c-author-header_text").find('.text').each(function(){
            if ($(this).height() > 30) {
                $(this).addClass('z-left');
            }
        })
        $(".c-author-header_text").find('.name-text').each(function(){
            $(this).css({
                'padding-left': $(this).next().width() + 10
            });
        })
    },
    mounted () {
        $('body').on('click', e => {
            var node = $(e.target);
            if (!node.hasClass('j-close-2') && node.parents('.j-close-2').length == 0) {
                this.subMoreMoreShow = false;
                this.subShareMoreShow = false;
            }
        })

        // 获取url的参数
        this.user_id = this.$url.getUrlParam('user_id');

        // 获取用户信息
        this.getAuthorInfo();

        $('body').on('click', e => {
            var node = $(e.target);
            if (!node.hasClass('j-close-1') && node.parents('.j-close-1').length == 0) {
                $('.j-close-1').removeClass('z-active');
            }
        })
    }
}
</script>

