<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
    @module: c-author-header;

    .@{module} {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 260px;
        padding-top: 40px;
        .user_background_1;
        & &-wrap {
            .default_width_960;
            .default_mar_auto;
        }
    }
    .@{module}_left {
        position: relative;
        float: left;
        width: 180px;
        height: 180px;
        margin-right: 20px;
        .default_backgroud_4;
        .default_border-r-50;
        & .img {
            width: 100%;
            height: 100%;
            overflow: hidden;
            .default_border-r-50;
        }
        & .icon {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 40px;
            height: 40px;
            .default_border-r-50;
            .default_backgroud_6;
            .skin_icon_author-6;
            .default_pointer;
            &:hover {
                .skin_icon_author-6_on;
            }
        }
    }
    .@{module}_right {
        float: left;
        width: 760px;
        & .name {
            height: 30px;
            overflow: hidden;
            margin-bottom: 15px;
            & .name-text {
                float: left;
                margin-right: 15px;
                .default_color_1;
                .default_font_size_6;
                .default_font_bolder;
            }
            & .name-time {
                float: left;
                height: 30px;
                line-height: 30px;
                .default_font_size_2;
                .default_color_1;
            }
        }
        & .btn {
            height: 40px;
            margin-bottom: 15px;
            & .btn-item {
                float: left;
                height: 40px;
                line-height: 40px;
                margin-right: 10px;
                .default_backgroud_5;
                .default_border-r-4;
                .default_center;
                .default_color_1;
                .default_font_size_2;
                .default_pointer;
                & a {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    text-decoration: none;
                    .default_color_1;
                    .default_font_size_2;
                }
                & .cpm_sub_more {
                    width: 150px;
                }
                &:hover {
                    & .cpm_sub_more {
                        display: block;
                    }
                }
            }
            & .btn-item:last-child {
                margin-right: 0;
            }
            & .btn-mark {
                width: 600px;
            }
            & .btn-share {
                width: 100px;
                position: relative;
                .default_pointer;
                .skin_icon_author-5;
                &:hover {
                    .skin_icon_author-5_on;
                }
            }
            & .btn-more {
                width: 40px;
                position: relative;
                .default_pointer;
                .skin_icon_author-4;
                &:hover {
                    .skin_icon_author-4_on;
                }
            }
        }
        & .text {
            line-height: 1.5rem;
            .default_color_1;
            .default_font_size_2;
        }
    }
</style>

<!-- html代码 -->
<template>
<div class="c-author-header">
<div class="c-author-header-wrap">
    <div class="c-author-header_left">
        <div class="img"><img :src="user.avatar_url || avatar" /></div>
        <div v-show="userInfo.uid == user_id" class="icon" id="author_upload_image_select"></div>
        <UploadImg 
            type="1" 
            select="author_upload_image_select"
            container="author_container"
            @uploadImg_uploaded="uploaded" 
        />
    </div>
    <div class="c-author-header_right">
        <div class="name">
            <div class="name-text">{{user.nick_name}}</div>
            <div class="name-time">社区年龄：<span>{{user.c_age}}</span></div>
        </div>
        <div class="btn">
            <div class="btn-item btn-mark" 
                :class="[{'z-width': user.relation == -1}]" 
                @click="follow"
            >
                <span v-if="userInfo.uid != user_id">{{ user.relation == 1 || user.relation == 3 ? '已关注' : '添加关注' }}</span>
                <a v-else href="setting.userinfo.html">个人设置</a>
            </div>
            <div class="btn-item btn-share">
                <div class="cpm_sub_more z-left">
                    <div class="item">
                        <div class="item-icon z-wx"></div>
                        <div class="item-text">微信</div>
                    </div>
                    <div class="item">
                        <div class="item-icon z-peng"></div>
                        <div class="item-text">朋友圈</div>
                    </div>
                    <div class="item">
                        <div class="item-icon z-wb"></div>
                        <div class="item-text">微博</div>
                    </div>
                    <div class="item">
                        <div class="item-icon z-qq"></div>
                        <div class="item-text">QQ 好友</div>
                    </div>
                    <div class="item">
                        <div class="item-icon z-kong"></div>
                        <div class="item-text">QQ 空间</div>
                    </div>
                    <div class="item">
                        <div class="item-icon z-more"></div>
                        <div class="item-text">更多</div>
                    </div>
                </div>
            </div>
            <div v-if="userInfo.uid != user_id" class="btn-item btn-more">
                <div class="cpm_sub_more z-left">
                    <div class="item" @click="addBlackDialog">
                        <div class="item-icon z-black"></div>
                        <div class="item-text">加入黑名单</div>
                    </div>
                    <div class="item" @click="addReport">
                        <div class="item-icon z-report"></div>
                        <div class="item-text">举报</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text">{{user.signature}}</div>
    </div>
</div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import avatar from '../common/images/img/avatar.png';
export default {
    data () {
        return  {
            avatar: avatar,
            user_id: '',
            user: {}
        }
    },
    computed: mapState({
        userInfo: state => state.user.info,
    }),
    methods: {
        uploaded (fileUrl, isAgain){
            if (isAgain) {
                return false;
            }
                
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
        addBlackDialog (){
            var that = this;

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
        addReport (){
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

        // 获取url的参数
        this.user_id = this.$url.getUrlParam('user_id');

        // 获取用户信息
        this.getAuthorInfo();
    }
}
</script>

