<!-- style样式代码 -->
<style lang="less">
@import (reference) '../../common/css/common';
@module: c-feedback;
    .@{module} {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20;
    	width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        & &-wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 360px;
            transform: translate(-50%, -50%);
            overflow: hidden;
            .default_border-r-4;
        }
        & .content-form {
            width: 360px;
            padding: 20px;
            .default_backgroud_3;
            & .content-textarea {
                position: relative;
                width: 320px;
                height: 200px;
                margin-bottom: 10px;
                & .c-dialog__tip {
                    transform: translate(-114%, 0);
                }
            }
            & .content-input {
                position: relative;
                width: 320px;
                height: 50px;
                line-height: 50px;
                & .c-dialog__tip {
                    transform: translate(-110%, 0);
                }
            }
        }
        & .content-btn {
            width: 100%;
            height: 50px;
            padding: 10px 0;
            overflow: hidden;
            .default_backgroud_2;
            & .content-btn-item {
                float: left;
                width: 50%;
                height: 30px;
                line-height: 30px;
                text-align: center;
                .default_color_2;
                .default_font_size_2;
                .default_pointer;
                &:hover {
                    .default_color_1;
                }
            }
            & .content-btn-cancel {
                .default_border-rr-5;
            }
        }
    }
</style>

<!-- html代码 -->
<template>
    <div v-if="data.show" class="c-feedback">
	<div class="c-feedback-wrap">
        <div class="content-form">
            <div class="content-textarea cpm_form_textarea" :class="{'z-error': !content_reg}">
                <div v-if="!content_reg" class="c-dialog__tip">
                    <div class="tip-arrow"></div>
                    <div class="tip-text">{{content_reg_con}}</div>
                </div>
                <textarea placeholder="写下你的宝贵建议..." v-model="content"></textarea>
            </div>
            <div class="content-input cpm_form_input" :class="{'z-error': !contact_reg}">
                <div v-if="!contact_reg" class="c-dialog__tip">
                    <div class="tip-arrow"></div>
                    <div class="tip-text">{{contact_reg_con}}</div>
                </div>
                <input type="text" placeholder="留下你的联系方式..." v-model="contact" spellcheck="false" />
            </div>
        </div>
        <div class="content-btn">
            <div class="content-btn-item content-btn-cancel" @click="close">取消</div>
            <div class="content-btn-item content-btn-submit" @click="send">发送</div>
        </div>
    </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data (){
        return {
            content: '',
            contact: '',
            content_reg: true,
            content_reg_con: '',
            contact_reg: true,
            contact_reg_con: ''
        }
    },
    computed: mapState({
        data: state => state.common
    }),
    methods: {
        close (){
            this.$store.dispatch('common_switch', false);
        },
        send (){
            if (!$.trim(this.content)) {
                this.content_reg = false;
                this.content_reg_con = '输入您的建议';
                return false
            } else {
                this.content_reg = true;
                this.content_reg_con = '';
            }

            /*if (!$.trim(this.contact)) {
                this.contact_reg = false;
                this.contact_reg_con = '输入您的联系方式';
                return false
            } else {
                this.contact_reg = true;
                this.contact_reg_con = '';
            }*/

            this.$store.dispatch('common_addFeedback', {
                "content": this.content, //文本内容
                "contact_info": this.contact // 联系方式
            }).then( res => {
                this.$store.dispatch('common_switch', false);
                this.$store.dispatch('bubble_success', {
                    ret: 0,
                    type: 'top',
                    msg: '反馈成功'
                });

                this.content = '';

                // 记录联系方式
                var userInfoExtra = this.$version.userInfoExtra;
                var _userInfoExtra = this.$cache.getStore(userInfoExtra.key , userInfoExtra.version) || {};
                    _userInfoExtra.contact = this.contact;
                this.$cache.setStore(userInfoExtra.key, _userInfoExtra, userInfoExtra.version, userInfoExtra.time);
            }).catch( err => {
                this.$store.dispatch('bubble_fail', err);
            })
        }
    },
    mounted (){
        var userInfoExtra = this.$version.userInfoExtra;
        var userInfoExtra = this.$cache.getStore(userInfoExtra.key , userInfoExtra.version) || {};
        this.contact = userInfoExtra.contact;
    }
}
</script>

